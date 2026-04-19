**Abb. 4.3.** Kopplung und Frequenzgang beim Gleichspannungsverstärker (oben), Wechselspannungsverstärker (Mitte) und Schmalbandverstärker (unten)

verwendeten Transistoren ab. Auch die Ruheströme im Arbeitspunkt spielen dabei eine entscheidende Rolle, weil die Transitfrequenz im Bereich kleiner Ströme näherungsweise proportional zum Ruhestrom ist. So kann z.B. ein Differenzverstärker, der bei einem Ruhestrom von 1 mA eine Grenzfrequenz von 10 MHz erreicht, bei einem Ruhestrom von 10 $\mu$A nur noch eine Grenzfrequenz von 100 ... 300 kHz erreichen.

Eine Sonderstellung nehmen Operationsverstärker ein, die als universell einsetzbare Gleichspannungsverstärker vor allem bei niedrigen Frequenzen eine große Bedeutung haben. Für Standard-Aufgaben setzt man fast ausschließlich Operationsverstärker ein. Ein Aufbau mit Einzeltransistoren in der diskreten Schaltungstechnik oder ein Entwurf eigener Verstärker in der integrierten Schaltungstechnik wird nur durchgeführt, wenn die Anforderungen nicht mit handelsüblichen Operationsverstärkern bzw. den in den Modul-Bibliotheken $^1$ der verwendeten IC-Entwicklungsumgebung vorhandenen Verstärker-Modulen erfüllt werden können. Operationsverstärker werden im Kapitel 5 behandelt.

# 4.1 Schaltungen

## 4.1.1 Grundlagen

Verstärker bestehen aus einer oder mehreren Verstärkerstufen, wobei jede Stufe durch eine oder mehrere gekoppelte Grundschaltungen mit Bipolartransistoren oder Feldeffekttransistoren realisiert wird. Darüber hinaus werden weitere Transistoren zur Arbeitspunkteinstellung benötigt. Die Rückführung auf die Grundschaltungen erlaubt in vielen Fällen eine Verwendung der in den Abschnitten 2.4 und 3.4 ermittelten Gleichungen.

### 4.1.1.1 Kennlinien der Transistoren

Die folgenden Schaltungen werden mit Bipolartransistoren und selbstsperrenden Mosfets beschrieben, soweit dies möglich und sinnvoll ist; selbstleitende Mosfets und Jfets werden nur in Ausnahmefällen eingesetzt. Für die Berechnung der Kennlinien und Arbeitspunkte werden die Grundgleichungen (2.2) und (2.3) bzw. (3.3) und (3.4) verwendet:

$^1$ Beim Entwurf integrierter Schaltungen werden nach Möglichkeit vordefinierte Module verwendet, die in Modul-Bibliotheken zusammengefasst sind.
<!-- page-import:0318:end -->

<!-- page-import:0319:start -->
282 4. Verstärker

npn-Transistor: $I_C = I_S\, e^{\frac{U_{BE}}{U_T}} \left(1 + \frac{U_{CE}}{U_A}\right)$, $I_B = \frac{I_C}{B}$

n-Kanal-Mosfet: $I_D = \frac{K}{2}(U_{GS} - U_{th})^2 \left(1 + \frac{U_{DS}}{U_A}\right)$, $I_G = 0$

Beim Mosfet muss zusätzlich der Substrat-Effekt berücksichtigt werden; beim n-Kanal-Mosfet gilt nach (3.18):

$$
U_{th} = U_{th,0} + \gamma \left(\sqrt{U_{inv} - U_{BS}} - \sqrt{U_{inv}}\right)
$$

## 4.1.1.2 Skalierung

Die Darstellung orientiert sich an der integrierten Schaltungstechnik, die insbesondere von der nahezu beliebigen Skalierbarkeit der Transistoren Gebrauch macht. Bei Bipolartransistoren wird der Sättigungssperrstrom $I_S$ durch Variation der Emitterfläche und bei Mosfets der Steilheitskoeffizient $K$ durch Variation des Kanalweiten-/-längen-Verhältnisses $W/L$ skaliert. Dabei wird bei Mosfets in erster Linie die Kanalweite $W$ skaliert, während die Kanallänge $L$ gleich bleibt $^2$.

Die Skalierung erfolgt im allgemeinen entsprechend der Ruheströme im Arbeitspunkt:
$I_S \sim I_{C,A}$ bzw. $W \sim K \sim I_{D,A}$ $(L = \mathrm{const.})$; dadurch ist die Stromdichte in allen Transistoren gleich. Daraus folgt, dass im Arbeitspunkt – abgesehen von einer geringen Abweichung, die durch den Early-Effekt verursacht wird – alle npn-Transistoren mit derselben Basis-Emitter-Spannung $U_{BE,A}$ arbeiten:

$$
U_{BE,A} \approx U_T \ln \frac{I_{C,A}}{I_S}\;\;\overset{I_{C,A}\sim I_S}{=}\;\;\mathrm{const.}\ \approx\ 0{,}7\,\mathrm{V}
$$

Bei Mosfets sind die Verhältnisse aufgrund des Substrat-Effekts komplizierter: zwei Mosfets mit gleicher Stromdichte arbeiten – bei Vernachlässigung des Early-Effekts – nur dann mit derselben Gate-Source-Spannung $U_{GS,A}$, wenn die Bulk-Source-Spannungen gleich sind:

$$
U_{GS,A} \approx U_{th}(U_{BS,A}) + \sqrt{\frac{2I_{D,A}}{K}}\;\;\overset{\substack{I_{D,A}\sim K\sim W\\U_{BS,A}=\mathrm{const.}}}{=}\;\;\mathrm{const.}
$$

## 4.1.1.3 Normierung

Die Größen der einzelnen Transistoren werden auf die Größe eines Referenz-Transistors normiert; letzterer hat die relative Größe 1. Demnach hat ein Bipolartransistor der Größe 5 den 5-fachen Sättigungssperrstrom $I_S$ und ein Mosfet der Größe 5 den 5-fachen Steilheitskoeffizienten $K$ wie der entsprechende Transistor der Größe 1.

Als Referenz-Transistor wird oft der in der jeweiligen Technologie kleinste Transistor verwendet; in diesem Fall treten nur relative Größen auf, die größer oder gleich eins sind. Bei Bipolartransistoren hat der Referenz-Transistor die kleinste Emitterfläche und ist damit sowohl elektrisch, d.h. bezüglich $I_S$, als auch geometrisch am kleinsten. Bei Mosfets hat man durch die freie Wahl der Kanalweite $W$ und der Kanallänge $L$ einen weiteren Freiheitsgrad. Da der Kurzkanal- und der Schmalkanal-Effekt in analogen

---
$^2$ Während bei digitalen Schaltungen Kanallängen von $0{,}2 \ldots 0{,}5\,\mu\mathrm{m}$ vorherrschen, werden in analogen Schaltungen meist Kanallängen über $1\,\mu\mathrm{m}$ verwendet, weil die Early-Spannung $U_A$ und damit die Maximalverstärkung mit zunehmender Kanallänge steigt.
<!-- page-import:0319:end -->

<!-- page-import:0320:start -->
4.1 Schaltungen 283

*Abb. 4.4. Skalierung und Normierung bei Bipolartransistoren und Mosfets*

Schaltungen unerwünscht sind, sollten $W$ und $L$ bestimmte, technologieabhängige Werte nicht unterschreiten, d.h. $W \geq W_{min}$ bzw. $L \geq L_{min}$. Mit $W = W_{min}$ und $L = L_{min}$ erhält man dann den geometrisch kleinsten Mosfet, der als Referenz-Transistor mit der relativen Größe 1 dient. Größere Mosfets werden durch Vergrößern von $W$ unter Beibehaltung von $L = L_{min}$ erzeugt. Man kann aber auch $W = W_{min}$ beibehalten und $L$ vergrößern; dadurch erhält man Mosfets, die elektrisch, d.h. bezüglich $K \sim W/L$, kleiner, aber geometrisch größer sind als der Referenz-Transistor. Man muss deshalb zwischen der elektrischen Größe und der geometrischen Größe unterscheiden. Im folgenden ist mit Größe immer die elektrische Größe gemeint. Eine proportionale Vergrößerung von $W$ und $L$ führt auf einen Mosfet gleicher Größe; davon wird wegen des größeren Platzbedarfs jedoch nur in Ausnahmefällen Gebrauch gemacht$^3$. Abbildung 4.4 verdeutlicht die Skalierung und Normierung anhand von Bipolartransistoren mit den Größen 1 und 2 und n-Kanal-Mosfets mit den Größen 1, 2 und 1/2.

#### 4.1.1.4 Komplementäre Transistoren

In den meisten Bipolar-Technologien stehen nur laterale pnp-Transistoren zur Verfügung, deren elektrische Eigenschaften wesentlich schlechter sind als die der vertikalen npn-Transistoren; das gilt vor allem für die Stromverstärkung und die Transitfrequenz. Bei diesen Technologien werden im Signalpfad eines Verstärkers nach Möglichkeit nur npn-Transistoren eingesetzt; pnp-Transistoren werden nur für Stromquellen oder in Kollektor-

$^3$ Bei gleicher elektrischer Größe weisen geometrisch größere Mosfets im allgemeinen ein geringeres Rauschen und eine größere Early-Spannung auf; dagegen nehmen die Kapazitäten zu.
<!-- page-import:0320:end -->

<!-- page-import:0321:start -->
284  4. Verstärker

| Name | Parameter | PSpice | npn | pnp | Einheit |
|---|---|---|---:|---:|---|
| Sättigungssperrstrom | $I_S$ | IS | 1 | 0,5 | fA |
| Stromverstärkung | $B$ | BF | 100 | 50 |  |
| Early-Spannung | $U_A$ | VAF | 100 | 50 | V |
| Basisbahnwiderstand $^4$ | $R_B$ | RB | 500 | 200 | $\Omega$ |
| Emitterkapazität | $C_{S0,E}$ | CJE | 0,1 | 0,1 | pF |
| Kollektorkapazität | $C_{S0,C}$ | CJC | 0,2 | 0,5 | pF |
| Substratkapazität | $C_{S0,S}$ | CJS | 1 | 2 | pF |
| Transitzeit | $\tau_{0,N}$ | TF | 100 | 150 | ps |
| max. Transitfrequenz | $f_T$ |  | 1,3 | 0,85 | GHz |
| typ. Ruhestrom | $I_{C,A}$ |  | 100 | $-\,100$ | $\mu$A |

**Abb. 4.5.** Parameter der Bipolartransistoren mit der (relativen) Größe 1

und Basisschaltung eingesetzt, da sich dabei die schlechteren Eigenschaften nur wenig bemerkbar machen. In speziellen komplementären Technologien stehen zwar vertikale pnp-Transistoren mit vergleichbaren Eigenschaften zu Verfügung, jedoch haben auch hier die npn-Transistoren etwas bessere Eigenschaften. Die Unterschiede zwischen vertikalen und lateralen Bipolartransistoren wurden im Abschnitt 2.2 näher beschrieben.

Bei MOS-Technologien handelt es sich überwiegend um komplementäre, d.h. CMOS-Technologien. Hier stehen n-Kanal- und p-Kanal-Mosfets mit vergleichbaren Eigenschaften zur Verfügung. Allerdings ist der relative Steilheitskoeffizient $K_p'$ der p-Kanal-Mosfets etwa um den Faktor $2\dots 3$ geringer als der relative Steilheitskoeffizient $K_n'$ der n-Kanal-Mosfets. Daraus folgt, dass ein p-Kanal-Mosfet bei gleicher Kanallänge $L$ im Vergleich zu einem n-Kanal-Mosfet eine 2- bis 3-fach größere Kanalweite $W$ aufweisen muss, damit er denselben Steilheitskoeffizienten $K = K_{n/p}' W/L$ erreicht. Damit sind jedoch nur die statischen Eigenschaften nahezu gleich. Die dynamischen Eigenschaften des p-Kanal-Mosfets sind schlechter, weil die Kapazitäten aufgrund der größeren Abmessungen größer sind. Deshalb wird der n-Kanal-Mosfet bevorzugt eingesetzt. Sollen neben den statischen auch die dynamischen Eigenschaften nahezu gleich sein, muss man $W$ und $L$ des n-Kanal-Mosfets um den Faktor $\sqrt{2}\dots \sqrt{3}$ vergrößern, damit die Fläche und damit die Kapazitäten näherungsweise denen des p-Kanal-Mosfets entsprechen; die elektrische Größe des n-Kanal-Mosfets wird dadurch nicht verändert. Da dadurch die Transitfrequenz des n-Kanal-Mosfets auf den Wert des p-Kanal-Mosfets reduziert wird, macht man von dieser Möglichkeit nur Gebrauch, wenn besondere Symmetrieeigenschaften benötigt werden.

Die im folgenden beschriebenen Schaltungen werden auf der Basis einer komplementären Bipolar- und einer CMOS-Technologie beschrieben; die wichtigsten Parameter der Transistoren sind in Abb. 4.5 und Abb. 4.6 zusammengefasst.

##### 4.1.1.5 Auswirkung fertigungsbedingter Toleranzen

In einer Bipolar-Technologie werden die npn- und die pnp-Transistoren in getrennten Schritten hergestellt. Da sich eine Fertigungstoleranz bei einem Schritt für die npn-Transistoren auf alle npn-Transistoren in erster Näherung gleich auswirkt, ändern sich auch die Parameter aller npn-Transistoren in gleicher Weise. Daraus folgt insbesondere, dass eine fertigungsbedingte Toleranz der Sättigungssperrströme keinen Einfluss auf die durch die Skalierung eingestellten Größenverhältnisse hat: ein npn-Transistor der Größe 5 hat immer den 5-fachen Sättigungssperrstrom wie ein npn-Transistor der Größe 1. Dasselbe gilt für

$^4$ Für kleine und mittlere Ströme gilt $R_B \approx \mathrm{RB}$.
<!-- page-import:0321:end -->

<!-- page-import:0322:start -->
4.1 Schaltungen 285

| Name | Parameter | PSpice | n-Kanal | p-Kanal | Einheit |
|---|---|---|---:|---:|---|
| Schwellenspannung | $U_{th}$ | VTO | 1 | $-1$ | V |
| rel. Steilheitskoeffizient | $K_n', K_p'$ | KP | 30 | 12 | $\mu$A/V$^2$ |
| Beweglichkeit $^5$ | $\mu_n, \mu_p$ | UO | 500 | 200 | cm$^2$/Vs |
| Oxiddicke | $d_{ox}$ | TOX | 57,5 | 57,5 | nm |
| Gate-Kapazitätsbelag | $C_{ox}'$ |  | 0,6 | 0,6 | fF/$\mu$m$^2$ |
| Bulk-Kapazitätsbelag | $C_S'$ | CJ | 0,2 | 0,2 | fF/$\mu$m$^2$ |
| Gate-Drain-Kapazität | $C_{GD,\ddot{U}}'$ | CGDO | 0,5 | 0,5 | fF/$\mu$m |
| Early-Spannung | $U_A$ |  | 50 | 33 | V |
| Kanallängenmodulation | $\lambda$ | LAMBDA | 0,02 | 0,033 | V$^{-1}$ |
| Substrat-Steuerfaktor | $\gamma$ | GAMMA | 0,5 | 0,5 | $\sqrt{\mathrm{V}}$ |
| Inversionsspannung | $U_{inv}$ | PHI | 0,6 | 0,6 | V |
| Kanalweite | $W$ | W | 3 | 7,5 | $\mu$m |
| Kanallänge | $L$ | L | 3 | 3 | $\mu$m |
| Steilheitskoeffizient | $K$ |  | 30 | 30 | $\mu$A/V$^2$ |
| typ. Transitfrequenz $^6$ | $f_T$ |  | 1,3 | 0,5 | GHz |
| typischer Ruhestrom | $I_{D,A}$ |  | 10 | $-10$ | $\mu$A |

**Abb. 4.6.** Parameter der Mosfets mit der (relativen) Größe 1

die pnp-Transistoren. Demgegenüber sind die Größenverhältnisse zwischen npn- und pnp-Transistoren nicht konstant. So kann z.B. das Verhältnis der Sättigungssperrströme eines npn- und eines pnp-Transistors der Größe 1 erheblich schwanken. Dieselben Überlegungen gelten auch für die n-Kanal- und p-Kanal-Mosfets in einer CMOS-Technologie, in diesem Fall insbesondere für die Steilheitskoeffizienten.

### 4.1.1.6 Dioden

In integrierten Schaltungen werden Dioden mit Hilfe von Transistoren realisiert. Im Falle einer bipolaren Diode wird dazu ein npn- oder pnp-Transistor mit kurzgeschlossener Basis-Kollektor-Strecke verwendet, siehe Abb. 4.7. Diese spezielle Diode wird *Transdiode* genannt und vor allem für die nachfolgend beschriebene Stromskalierung benötigt; eine Kollektor- oder Emitter-Diode ist dafür ungeeignet. Man muss ferner zwischen npn- und pnp-Dioden unterscheiden, weil sie unterschiedliche Parameter haben. Die Skalierung erfolgt wie bei den Transistoren, d.h. eine npn-Diode der Größe 5 entspricht einem npn-Transistor der Größe 5 mit kurzgeschlossener Basis-Kollektor-Strecke.

Ein wichtiger Einsatzfall von Dioden ist die Strom-Spannungs-Wandlung nach Abb. 4.9a, bei der die Diode einen Messwert für den Strom liefert:

$$
I = I_{S,D}\left(e^{\frac{U}{U_T}} - 1\right)\Rightarrow U = U_T \ln\left(\frac{I}{I_{S,D}} + 1\right)\overset{I\gg I_{S,D}}{\approx} U_T \ln \frac{I}{I_{S,D}}
$$

Dabei ist $I_{S,D}$ der Sättigungssperrstrom der Diode. Führt man diese Spannung der Basis-Emitter-Strecke eines Transistors mit dem Sättigungssperrstrom $I_{S,T}$ zu, erhält man unter der Voraussetzung, dass der Transistor im Normalbetrieb arbeitet und der Basisstrom vernachlässigbar klein ist:

$^5$ Die Beweglichkeit wird hier wie in *Spice* in cm$^2$/Vs angegeben (UO=500 bzw. UO=200).

$^6$ Die Transitfrequenz ist proportional zu $U_{GS}-U_{th}$ bzw. $\sqrt{I_{D,A}}$; sie ist hier für den für Analogschaltungen typischen Wert von $U_{GS}-U_{th}=1$ V angegeben.
<!-- page-import:0322:end -->

<!-- page-import:0323:start -->
286  4. Verstärker

*normale* Diode

npn-Diode

pnp-Diode

**Abb. 4.7.** Bipolare Dioden in integrierten Schaltungen

$$
I_C \approx I_{S,T}\, e^{\frac{U_{BE}}{U_T}}\Big|_{U_{BE}=U}
= I_{S,T}\, e^{\ln \frac{I}{I_{S,D}}}
= I\, \frac{I_{S,T}}{I_{S,D}}
$$

Der Strom wird also entsprechend dem Verhältnis der Sättigungssperrströme skaliert. Eine definierte Skalierung erhält man jedoch nur, wenn man eine npn-Diode mit einem npn-Transistor oder eine pnp-Diode mit einem pnp-Transistor kombiniert; in diesem Fall ist das Verhältnis der Sättigungssperrströme durch das Größenverhältnis festgelegt.

In MOS-Schaltungen kann man die in Abb. 4.8 gezeigten Fet-Dioden einsetzen. Hier gilt für die Strom-Spannungs-Wandlung nach Abb. 4.9b:

$$
I = \frac{K_D}{2}\,(U_{GS} - U_{th})^2
\;\Rightarrow\;
U = U_{th} + \sqrt{\frac{2I}{K_D}}
$$

Dabei ist $K_D$ der Steilheitskoefizient der Fet-Diode. Führt man diese Spannung der Gate-Source-Strecke eines Mosfets mit dem Steilheitskoeffizienten $K_M$ zu, folgt unter der Voraussetzung, dass der Mosfet im Abschnürbereich arbeitet:

$$
I_D \approx \frac{K_M}{2}\,(U_{GS} - U_{th})^2\Big|_{U_{GS}=U}
= I\, \frac{K_M}{K_D}
$$

Auch hier muss man eine n-Kanal-Fet-Diode mit einem n-Kanal-Mosfet und eine p-Kanal-Fet-Diode mit einem p-Kanal-Mosfet kombinieren, damit die Skalierung des Stroms durch die Größenverhältnisse definiert ist.

*normale* Diode

n-Kanal-Diode

p-Kanal-Diode

**Abb. 4.8.** Fet-Dioden in integrierten Schaltungen
<!-- page-import:0323:end -->

<!-- page-import:0324:start -->
4.1 Schaltungen 287

a mit npn-Diode

b mit n-Kanal-Diode

**Abb. 4.9.** Strom-Spannungs-Wandlung und Strom-Skalierung

## 4.1.2 Stromquellen und Stromspiegel

Eine *Stromquelle (current source)* liefert einen konstanten Ausgangsstrom und wird überwiegend zur Arbeitspunkteinstellung eingesetzt. Ein *Stromspiegel (current mirror)* liefert am Ausgang eine verstärkte oder abgeschwächte Kopie des Eingangsstroms, arbeitet also als stromgesteuerte Stromquelle. Man kann jeden Stromspiegel auch als Stromquelle betreiben, indem man den Eingangsstrom konstant hält; in diesem Zusammenhang ist die Stromquelle ein spezieller Anwendungsfall des Stromspiegels.

### 4.1.2.1 Prinzip einer Stromquelle

Die Ausgangskennlinien eines Bipolartransistors und eines Mosfets verlaufen in einem weiten Bereich nahezu horizontal, siehe Abb. 2.3 auf Seite 36 und Abb. 3.5 auf Seite 181; der Kollektor- oder Drainstrom hängt in diesem Bereich praktisch nicht von der Kollektor-Emitter- oder Drain-Source-Spannung ab. Deshalb kann man einen einzelnen Transistor als Stromquelle einsetzen, indem man eine konstante Eingangsspannung anlegt und den Kollektor- oder Drain-Anschluss als Ausgang verwendet:

$$
I_a =
\left\{
\begin{array}{lll}
I_C(U_{BE}, U_{CE}) & \approx & I_C(U_{BE}) \\
I_D(U_{GS}, U_{DS}) & \approx & I_D(U_{GS})
\end{array}
\right.
\qquad
\begin{array}{l}
U_{BE} = \text{const.} \\
U_{GS} = \text{const.}
\end{array}
\qquad
=
\qquad
\text{const.}
$$

Für einen stabilen Betrieb ist zusätzlich eine Stromgegenkopplung erforderlich, damit der Ausgangsstrom trotz fertigungs- und temperaturbedingter Schwankungen der Transistor-Parameter konstant bleibt. Damit erhält man die in Abb. 4.10 gezeigten Schaltungen. Am Ausgang der Stromquelle muss eine Last angeschlossen sein, durch die der Strom $I_a$ fließen kann; in Abb. 4.10 ist deshalb ein Widerstand $R_L$ als Last angeschlossen.

#### 4.1.2.1.1 Ausgangsstrom

Für die Stromquelle mit Bipolartransistor in Abb. 4.10a erhält man eingangsseitig die Maschengleichung:

$$
U_0 = U_{BE} + U_R = U_{BE} + (I_C + I_B)\,R_E \qquad \overset{I_C \gg I_B}{\approx} \qquad U_{BE} + I_C R_E
$$

Daraus folgt mit $I_C = I_a$:
<!-- page-import:0324:end -->

<!-- page-import:0325:start -->
288  4. Verstärker

a mit Bipolartransistor

b mit Mosfet

**Abb. 4.10.** Prinzip einer Stromquelle

$$
I_a \approx \frac{U_0-U_{BE}}{R_E} \qquad \overset{U_{BE}\approx0{,}7\,\mathrm{V}}{\approx} \qquad \frac{U_0-0{,}7\,\mathrm{V}}{R_E}
$$

Man kann die Abhängigkeit von $U_{BE}$ verringern, indem man $U_0$ ausreichend groß wählt; für den Grenzfall $U_0 \gg U_{BE}$ erhält man $I_a \approx U_0/R_1$. Andererseits darf man $U_0$ nicht zu groß wählen, weil sonst die Aussteuerbarkeit am Ausgang verringert wird. Die Stromquelle arbeitet nämlich nur dann korrekt, wenn der Transistor $T_1$ im Normalbetrieb arbeitet; dazu muss $U_{CE} > U_{CE,sat}$ und damit

$$
U_a = U_R + U_{CE} > U_R + U_{CE,sat} = U_0 - U_{BE} + U_{CE,sat}
$$

gelten.

#### 4.1.2.1.2 Ausgangskennlinie

Trägt man den Ausgangsstrom $I_a$ in Abhängigkeit von $U_a$ für $U_0=\mathrm{const.}$ und verschiedene Werte von $R_E$ auf, erhält man das in Abb. 4.11 gezeigte Ausgangskennlinienfeld mit der minimalen Ausgangsspannung:

$$
U_{a,\min}=U_0-U_{BE}+U_{CE,sat} \qquad \overset{\substack{U_{CE,sat}\approx0{,}2\,\mathrm{V}\\U_{BE}\approx0{,}7\,\mathrm{V}}}{\approx} \qquad U_0-0{,}5\,\mathrm{V}
$$

Für $U_a > U_{a,\min}$ und $U_0=\mathrm{const.}$ arbeitet die Schaltung als Stromquelle. $U_{a,\min}$ wird im folgenden Aussteuerungsgrenze genannt.

#### 4.1.2.1.3 Ausgangswiderstand

Neben dem Ausgangsstrom $I_a$ und der Aussteuerungsgrenze $U_{a,\min}$ ist der Ausgangswiderstand

$$
r_a=\left.\frac{\partial U_a}{\partial I_a}\right|_{U_0=\mathrm{const.}}
$$

im Arbeitsbereich von Interesse; er ist bei einer idealen Stromquelle $r_a=\infty$ und sollte deshalb bei einer realen Stromquelle möglichst hoch sein. Der endliche Ausgangswiderstand wird durch den Early-Effekt verursacht und kann mit Hilfe des Kleinsignalersatzschaltbilds berechnet werden. Da die Schaltung in Abb. 4.10a weitgehend der Emitterschaltung
<!-- page-import:0325:end -->

<!-- page-import:0326:start -->
4.1 Schaltungen 289

Abb. 4.11. Ausgangskennlinienfeld einer Stromquelle mit Bipolartransistor

mit Stromgegenkopplung in Abb. 2.64a auf Seite 108 entspricht, kann man das Ergebnis übertragen, indem man $R_g = 0$ und $R_C \to \infty$ einsetzt 7; man erhält:

$$
r_a = \left.\frac{u_a}{i_a}\right|_{U_0=\mathrm{const.}} \underset{r_{CE}\gg r_{BE}}{\approx} r_{CE}\left(1+\frac{\beta R_E}{R_E+r_{BE}}\right)
\qquad (4.1)
$$

Durch Spezialisierung folgt unter Verwendung von $\beta \gg 1$ und $r_{BE}=\beta/S$:

$$
r_a \approx
\begin{cases}
r_{CE}(1+sR_E) & \text{für } R_E \ll r_{BE} \\
\beta\,r_{CE} & \text{für } R_E \gg r_{BE}
\end{cases}
$$

Abb. 4.12 zeigt den Verlauf von $r_a$ in Abhängigkeit von $R_E$ bei konstantem Ausgangsstrom. Setzt man $r_{CE}=U_A/I_a$, $S=I_a/U_T$, $r_{BE}=\beta\,U_T/I_a$ und $U_R \approx I_aR_E$ ein, erhält man die Abhängigkeit des Ausgangswiderstands vom Ausgangsstrom:

$$
r_a \approx
\begin{cases}
\frac{U_A}{I_a}+\frac{U_A}{U_T}R_E & \text{für } U_R \ll \beta\,U_T \\
\frac{\beta\,U_A}{I_a} & \text{für } U_R \gg \beta\,U_T
\end{cases}
$$

Der maximale Ausgangswiderstand wird erreicht, wenn man den Spannungsabfall $U_R$ am Gegenkopplungswiderstand größer als $\beta\,U_T \approx 2{,}6\ \mathrm{V}$ wählt. In diesem Fall erhält man ein konstantes $I_a$-$r_a$-Produkt:

$$
I_a r_a \approx \beta\,U_A \qquad
\begin{matrix}
U_A \approx 30\ldots 200\,\mathrm{V}\\
\beta \approx 50\ldots 500
\end{matrix}
\approx 1{,}5\ldots 100\,\mathrm{kV}
$$

Demnach ist das Produkt aus der Early-Spannung $U_A$ und der Stromverstärkung $\beta$ ein entscheidender Parameter zur Beurteilung von Bipolartransistoren beim Einsatz in Stromquellen.

---

7 Bei der Emitterschaltung mit Stromgegenkopplung wird $R_C$ als Bestandteil der Schaltung aufgefasst und deshalb auch bei der Berechnung des Ausgangswiderstands berücksichtigt; bei der Stromquelle interessiert dagegen der Ausgangswiderstand am Kollektor ohne weitere Beschaltung. Durch Einsetzen von $R_C \to \infty$ wird der Widerstand $R_C$ entfernt.
<!-- page-import:0326:end -->

<!-- page-import:0327:start -->
290  4. Verstärker

![Abb. 4.12. Ausgangswiderstand einer Stromquelle mit Bipolartransistor bei konstantem Ausgangsstrom](image)

**Abb. 4.12.** Ausgangswiderstand einer Stromquelle mit Bipolartransistor bei konstantem Ausgangsstrom

#### 4.1.2.1.4 Stromquelle mit Mosfet

Für die Stromquelle mit Mosfet in Abb. 4.10b erhält man mit $I_a = I_D$:

$$
U_0 = U_R + U_{GS} = I_a R_S + U_{GS} = I_a R_S + U_{th} + \sqrt{\frac{2I_a}{K}}
$$

Die Berechnung des Ausgangsstroms $I_a = I_D$ ist aufwendig, weil man für $U_{GS}$ keine einfache Näherung entsprechend $U_{BE} \approx 0{,}7\,\mathrm{V}$ beim Bipolartransistor angeben kann. Bei Einzel-Mosfets kann man jedoch $I_a$ und $U_0$ vorgeben und damit $R_S$ berechnen:

$$
R_S = \frac{U_0 - U_{th}}{I_a} - \sqrt{\frac{2}{K I_a}}
$$

Bei integrierten Mosfets ist das nicht exakt möglich, weil in diesem Fall die Schwellenspannung wegen des Substrat-Effekts nicht konstant ist.

Da der Mosfet im Abschnürbereich betrieben werden muss – nur dort verlaufen die Ausgangskennlinien nahezu horizontal –, erhält man für die Aussteuerungsgrenze $U_{a,min} = U_R + U_{DS,ab}$; sie ist wegen $U_{DS,ab} > U_{CE,sat}$ größer als beim Bipolartransistor. Für den Ausgangswiderstand erhält man durch Vergleich mit der Sourceschaltung mit Stromgegenkopplung:

$$
r_a = \left.\frac{u_a}{i_a}\right|_{U_0=\mathrm{const}.}
\qquad \overset{r_{DS}\gg 1/S}{\approx} \qquad
r_{DS}\bigl(1 + (S + S_B)\,R_S\bigr)
\qquad \overset{S\gg S_B}{\approx} \qquad
r_{DS}(1 + S R_S)
\qquad (4.2)
$$

Er ist wegen der geringeren Early-Spannung und der geringeren Steilheit kleiner als beim Bipolartransistor. Deshalb werden in diskreten Schaltungen fast ausschließlich Stromquellen mit Bipolartransistoren eingesetzt.

#### 4.1.2.2 Einfache Stromquellen für diskrete Schaltungen

Abbildung 4.13 zeigt die drei in der Praxis am häufigsten verwendeten diskreten Stromquellen. Mit $I_q \gg I_B \approx 0$ erhält man für die Schaltung in Abb. 4.13a:
<!-- page-import:0327:end -->

<!-- page-import:0328:start -->
4.1 Schaltungen 291

a ohne $U_{BE}$-Kompensation  
b mit $U_{BE}$-Kompensation  
c mit Z-Diode

**Abb. 4.13.** Einfache Stromquellen für diskrete Schaltungen

$$
I_q \approx \frac{U_b}{R_1 + R_2}
\qquad
I_q R_2 \approx I_a R_3 + U_{BE}
\qquad\Rightarrow\qquad
I_a \approx \frac{1}{R_3}\left(\frac{U_b R_2}{R_1 + R_2} - U_{BE}\right)
\qquad \text{mit } U_{BE} \approx 0{,}7\,\mathrm{V}
$$

Der Ausgangsstrom hängt von der Temperatur ab, weil $U_{BE}$ von der Temperatur abhängt:

$$
\frac{dI_a}{dT} = -\frac{1}{R_3}\frac{dU_{BE}}{dT} \approx \frac{2\,\mathrm{mV/K}}{R_3}
$$

Die Temperaturabhängigkeit wird geringer, wenn man die Gegenkopplung durch Vergrößern von $R_3$ verstärkt; man muss in diesem Fall auch $R_1$ und $R_2$ anpassen, damit der Ausgangsstrom konstant bleibt.

Bei der Schaltung in Abb. 4.13b wird die Temperaturabhängigkeit verringert, indem $U_{BE}$ durch die Spannung an der Diode kompensiert wird; mit $U_D \approx U_{BE}$ und $I_q \gg I_B \approx 0$ gilt:

$$
I_q \approx \frac{U_b - U_D}{R_1 + R_2}
\qquad
I_q R_2 \approx I_a R_3
\qquad\Rightarrow\qquad
I_a \approx \frac{(U_b - U_D)\,R_2}{(R_1 + R_2)\,R_3}
\qquad \text{mit } U_D \approx 0{,}7\,\mathrm{V}
$$

Für die Temperaturabhängigkeit erhält man:

$$
\frac{dI_a}{dT}
=
-\frac{R_2}{(R_1 + R_2)\,R_3}\frac{dU_D}{dT}
\approx
\frac{2\,\mathrm{mV/K}}{R_3}\cdot\frac{R_2}{R_1 + R_2}
\approx
2\,\mathrm{mV/K}\cdot\frac{I_a}{U_b - U_D}
$$

Sie ist um den Faktor $1 + R_1/R_2$ geringer als bei der Schaltung in Abb. 4.13a und wird Null, wenn man anstelle von $R_1$ eine (temperaturunabhängige) Stromquelle mit dem Strom $I_q$ einsetzt $^8$.

Für die Schaltung in Abb. 4.13c gilt:

$$
I_a \approx \frac{U_Z - U_{BE}}{R_3} \approx \frac{U_Z - 0{,}7\,\mathrm{V}}{R_3}
$$

Dabei ist $U_Z$ die Durchbruchspannung der Z-Diode. Die Temperaturabhängigkeit hängt auch vom Temperaturkoeffizienten der Z-Diode ab. Ist er sehr klein, kann man wie in Abb. 4.13b eine normale Diode in Reihe schalten und damit $U_{BE}$ kompensieren; dann gilt

---

$^8$ Der Übergang zur Stromquelle erfolgt durch den Grenzübergang $R_1 \to \infty$; dabei muss gleichzeitig $U_b \to \infty$ eingesetzt werden, damit der Ausgangsstrom konstant bleibt.
<!-- page-import:0328:end -->

<!-- page-import:0329:start -->
292  4. Verstärker

a mit npn-Transistoren                    b mit n-Kanal-Mosfets

**Abb. 4.14.** Einfacher Stromspiegel

$$
I_a \approx \frac{U_Z}{R_3}
$$

und es geht nur noch der Temperaturkoeffizient der Z-Diode ein. Die geringste Temperaturabhängigkeit erhält man mit $U_Z \approx 5\dots 6\,\mathrm{V}$.

### 4.1.2.3 Einfacher Stromspiegel

Der einfachste Stromspiegel besteht aus zwei Transistoren $T_1$ und $T_2$ und zwei optionalen Widerständen $R_1$ und $R_2$ zur Stromgegenkopplung, siehe Abb. 4.14; da keine spezielle Bezeichnung existiert, wird er hier *einfacher Stromspiegel* genannt. Mit einem zusätzlichen Widerstand $R_V$ kann man einen konstanten Referenzstrom einstellen; dadurch wird der Stromspiegel zur Stromquelle.

#### 4.1.2.3.1 npn-Stromspiegel

Abbildung 4.15 zeigt die Ströme und Spannungen beim einfachen Stromspiegel mit npn-Transistoren, den man kurz *npn-Stromspiegel* nennt. Die Maschengleichung über die Basis-Emitter-Strecken und die Gegenkopplungswiderstände liefert:

$$
(I_{C1}+I_{B1})\,R_1 + U_{BE1} = (I_{C2}+I_{B2})\,R_2 + U_{BE2}
$$

(4.3)

Im normalen Arbeitsbereich arbeiten beide Transistoren im Normalbetrieb und man kann die Grundgleichungen (2.2) und (2.3) verwenden:

$$
I_{C1} = I_{S1}\,e^{\frac{U_{BE1}}{U_T}}
\qquad,\qquad
I_{B1} = \frac{I_{C1}}{B}
$$

$$
I_{C2} = I_{S2}\,e^{\frac{U_{BE2}}{U_T}}\left(1+\frac{U_{CE2}}{U_A}\right)
\qquad,\qquad
I_{B2} = \frac{I_{C2}}{B}
$$

(4.4)

Dabei wird bei $T_1$ der Early-Effekt wegen $U_{CE1}=U_{BE1}\ll U_A$ vernachlässigt. Aus Abb. 4.15 folgt ferner:

$$
I_e = I_{C1} + I_{B1} + I_{B2}
\qquad,\qquad
I_a = I_{C2}
$$

(4.5)
<!-- page-import:0329:end -->

<!-- page-import:0330:start -->
4.1 Schaltungen 293

**Abb. 4.15.**  
Ströme und Spannungen beim npn-Stromspiegel

**npn-Stromspiegel ohne Gegenkopplung**

Mit $R_1 = R_2 = 0$ erhält man aus (4.3) $U_{BE1} = U_{BE2}$ und daraus durch Einsetzen von (4.4) und (4.5) unter Berücksichtigung von $U_{CE2} = U_a$ das Übersetzungsverhältnis:

$$
k_I = \frac{I_a}{I_e} = \frac{1}{\frac{I_{S1}}{I_{S2}}\left(1 + \frac{1}{B}\right)\frac{U_A}{U_A + U_a} + \frac{1}{B}}
$$

(4.6)

Daraus folgt mit $U_a \ll U_A$:

$$
k_I = \frac{I_a}{I_e} \approx \frac{1}{\frac{I_{S1}}{I_{S2}}\left(1 + \frac{1}{B}\right) + \frac{1}{B}}
\qquad \overset{B \gg 1, I_{S2}/I_{S1}}{\approx} \qquad \frac{I_{S2}}{I_{S1}}
$$

(4.7)

Wenn die Early-Spannung $U_A$ und die Stromverstärkung $B$ ausreichend groß sind und das Größenverhältnis $I_{S2}/I_{S1}$ der Transistoren wesentlich kleiner ist als die Stromverstärkung $B$, entspricht das Übersetzungsverhältnis $k_I$ näherungsweise dem Größenverhältnis der Transistoren. Wenn beide Transistoren dieselbe Größe haben, gilt $I_{S1} = I_{S2}$ und damit:

$$
k_I = \frac{1}{\left(1 + \frac{1}{B}\right)\frac{U_A}{U_A + U_a} + \frac{1}{B}}
\qquad \overset{U_a \ll U_A}{\approx} \qquad \frac{1}{1 + \frac{2}{B}}
\qquad \overset{B \gg 1}{\approx} \qquad 1
$$

(4.8)

Abb. 4.16 zeigt die Übertragungskennlinie und das Übersetzungsverhältnis eines Stromspiegels mit $I_{S1} = I_{S2}$, d.h. $k_I \approx 1$. Man erkennt, dass der Stromspiegel über mehrere Dekaden linear arbeitet. Bei sehr kleinen und sehr großen Strömen nimmt die Stromverstärkung jedoch stark ab und die Übertragungskennlinie ist nicht mehr linear; dieser Bereich ist in Abb. 4.16 nicht mehr dargestellt.

**Ausgangskennlinie**

Bei Stromspiegeln ist neben dem Übersetzungsverhältnis vor allem der Arbeitsbereich und der Kleinsignal-Ausgangswiderstand im Arbeitsbereich von Interesse. Dazu betrachtet man das Ausgangskennlinienfeld, in dem $I_a$ als Funktion von $U_a$ mit $I_e$ als Parameter dargestellt ist; üblicherweise wird nur die Kennlinie mit dem vorgesehenen Ruhestrom $I_e = I_{e,A}$ dargestellt. Abbildung 4.17 zeigt die Ausgangskennlinie eines npn-Stromspiegels mit $k_I = 1$ für $I_e = 100\,\mu\text{A}$; auf die Kennlinie des n-Kanal-Stromspiegels in Abb. 4.17 wird [unclear]
<!-- page-import:0330:end -->

<!-- page-import:0331:start -->
294  4. Verstärker

a Übertragungskennlinie  
b Übersetzungsverhältnis

**Abb. 4.16.** Übertragungsverhalten eines Stromspiegels mit $I_{S1} = I_{S2}$

später eingegangen. Die Kennlinie entspricht der Ausgangskennlinie des Transistors $T_2$. Für $U_a > U_{CE,sat}$ arbeitet $T_2$ im Normalbetrieb; nur in diesem Arbeitsbereich arbeitet der Stromspiegel mit dem berechneten Übersetzungsverhältnis. Für $U_a \leq U_{CE,sat}$ gerät $T_2$ in die Sättigung und der Strom nimmt ab. Die minimale Ausgangsspannung $U_{a,min}$ ist eine wichtige Kenngröße und wird im folgenden Aussteuerungsgrenze genannt; beim npn-Stromspiegel gilt $^9$:

$$
U_{a,min} = U_{CE,sat} \approx 0{,}2\,V
$$

Der Ausgangswiderstand entspricht dem Kehrwert der Steigung der Ausgangskennlinie im Arbeitsbereich. Wenn man in (4.6) nur die Näherungen für die Stromverstärkung durchführt und die Early-Spannung beibehält, erhält man im Arbeitsbereich

**Abb. 4.17.** Ausgangskennlinien eines npn- und eines n-Kanal-Stromspiegels für $R_1 = R_2 = 0$
<!-- page-import:0331:end -->

<!-- page-import:0332:start -->
4.1 Schaltungen 295

$$
k_I=\frac{I_a}{I_e}\approx\frac{I_{S2}}{I_{S1}}\left(1+\frac{U_a}{U_A}\right)
$$

und daraus den *Ausgangswiderstand*:

$$
r_a=\left.\frac{\partial U_a}{\partial I_a}\right|_{I_e=\mathrm{const}.}
=\frac{U_a+U_A}{I_a}
\overset{U_a\ll U_A}{\approx}
\frac{U_A}{I_a}
=\frac{U_A}{I_{C2}}
=r_{CE2}
$$

Der Ausgangswiderstand wird üblicherweise mit Hilfe des Kleinsignalersatzschaltbilds berechnet; darauf wird später noch eingegangen.

**npn-Stromspiegel mit Gegenkopplung**

Durch den Einsatz von Gegenkopplungswiderständen kann man das Übersetzungsverhältnis stabilisieren und den Ausgangswiderstand erhöhen. Ohne Gegenkopplungswiderstände hängt das Übersetzungsverhältnis nur vom Größenverhältnis der Transistoren ab, mit Gegenkopplungswiderständen geht zusätzlich das Verhältnis $R_2/R_1$ der Widerstände ein. Durch Einsetzen von (4.4) in (4.3) und Vernachlässigen des Early-Effekts erhält man:

$$
\left(1+\frac{1}{B}\right)R_1I_{C1}+U_T\ln\frac{I_{C1}}{I_{S1}}
=
\left(1+\frac{1}{B}\right)R_2I_{C2}+U_T\ln\frac{I_{C2}}{I_{S2}}
\qquad (4.9)
$$

Diese Gleichung ist nicht geschlossen lösbar, da die Kollektorströme linear *und* logarithmisch eingehen. Für ausreichend große Widerstände dominieren die linearen Terme und man erhält:

$$
R_1I_{C1}\approx R_2I_{C2}
\qquad (4.10)
$$

Daraus folgt mit (4.5):

$$
k_I=\frac{I_a}{I_e}\approx\frac{R_1}{R_2+\frac{R_1+R_2}{B}}
\overset{B\gg 1+R_1/R_2}{\approx}
\frac{R_1}{R_2}
\qquad (4.11)
$$

Das Übersetzungsverhältnis hängt in diesem Fall nur noch vom Verhältnis der Widerstände und nicht mehr von den Größen der Transistoren ab.

Bei integrierten Stromspiegeln wählt man das Verhältnis der Widerstände normalerweise entsprechend dem Größenverhältnis der Transistoren:

$$
\frac{I_{S2}}{I_{S1}}\approx\frac{R_1}{R_2}
$$

In diesem Fall wirken sich die Widerstände praktisch nicht auf das Übersetzungsverhältnis aus, sondern führen lediglich zu einer Erhöhung des Ausgangswiderstandes; darauf wird später noch näher eingegangen. Bei Stromspiegeln, die über einen großen Strombereich ausgesteuert werden, ist diese Bedingung sogar zwingend, weil das Verhältnis der linearen und logarithmischen Terme in (4.9) vom Strom abhängt: bei kleinen Strömen wird das Übersetzungsverhältnis durch $I_{S2}/I_{S1}$ bestimmt, bei großen Strömen durch $R_1/R_2$. Abbildung 4.18 zeigt diese Abhängigkeit am Beispiel eines Stromspiegels mit Transistoren gleicher Größe ($I_{S2}/I_{S1}=1$) für verschiedene Werte von $R_1/R_2$. Ein konstantes Übersetzungsverhältnis erhält man nur mit $I_{S2}/I_{S1}=R_1/R_2$.

---

$^9$ Hier wird für die Kollektor-Emitter-Sättigungsspannung ein relativ hoher Wert von $U_{CE,sat}\approx 0{,}2\ \mathrm{V}$ angenommen, weil die Ausgangskennlinie des Transistors bei dieser Spannung bereits möglichst horizontal verlaufen soll.
<!-- page-import:0332:end -->

<!-- page-import:0333:start -->
296  4. Verstärker

**Abb. 4.18.** Stromabhängigkeit des Übersetzungsverhältnisses bei Transistoren gleicher Größe $(I_{S2}/I_{S1} = 1)$ für verschiedene Werte von $R_1/R_2$

Bei diskret aufgebauten Stromspiegeln muss man immer Gegenkopplungswiderstände einsetzen, weil die Toleranzen bei Einzeltransistoren so groß sind, dass das Verhältnis $I_{S2}/I_{S1}$ selbst bei Transistoren desselben Typs praktisch undefiniert ist; das Übersetzungsverhältnis muss also zwangsläufig durch die Widerstände eingestellt werden. Die erforderliche Mindestgröße für die Widerstände kann man ermitteln, indem man in (4.9) beide Seiten nach dem jeweiligen Strom differenziert und fordert, dass der Einfluss der Terme mit den Widerständen dominiert:

$$
\left(1 + \frac{1}{B}\right) R_1 \gg \frac{U_T}{I_{C1}}
,\qquad
\left(1 + \frac{1}{B}\right) R_2 \gg \frac{U_T}{I_{C2}}
$$

Daraus folgt:

$$
U_{R1} = \left(1 + \frac{1}{B}\right) R_1 I_{C1} \gg U_T
,\qquad
U_{R2} = \left(1 + \frac{1}{B}\right) R_2 I_{C2} \gg U_T
$$

Dabei sind $U_{R1}$ und $U_{R2}$ die Spannungen an den Widerständen $R_1$ und $R_2$, siehe Abb. 4.15. Da die beiden Bedingungen wegen (4.10) äquivalent sind und zur Einhaltung der Bedingung etwa ein Faktor 10 erforderlich ist, muss man

$$
U_{R1} \approx U_{R2} \geq 10\,U_T \approx 250\,\mathrm{mV}
\qquad (4.12)
$$

wählen, damit das Übersetzungsverhältnis nur noch von den Widerständen abhängt. Bei Stromspiegeln, die über einen großen Strombereich ausgesteuert werden, kann man die Bedingung (4.12) in der Regel nicht im ganzen Bereich erfüllen; in diesem Fall wird das Übersetzungsverhältnis mit abnehmendem Strom immer mehr durch das unbekannte Verhältnis $I_{S2}/I_{S1}$ bestimmt.

Durch die Gegenkopplung wird der Arbeitsbereich kleiner, weil sich die Aussteuerungsgrenze $U_{a,min}$ um die Spannung an den Widerständen erhöht:

$$
U_{a,min} = U_{CE,sat} + U_{R2} \geq 0{,}2\,\mathrm{V} + 0{,}25\,\mathrm{V} = 0{,}45\,\mathrm{V}
$$

Deshalb kann man die Widerstände nicht beliebig groß machen.

**Betrieb als Stromquelle**

Man kann den einfachen npn-Stromspiegel als Stromquelle betreiben, indem man den in Abb. 4.15 gezeigten Widerstand $R_V$ ergänzt; damit wird ein konstanter Eingangsstrom eingestellt. Aus $U_e = U_{BE1} + U_{R1}$ und $U_b = U_e + I_e R_V$ folgt:
<!-- page-import:0333:end -->

<!-- page-import:0334:start -->
4.1 Schaltungen 297

a Schaltung

b Übersetzungsverhältnis $k_I$ bei gleichen Transistoren $(I_{S1} = I_{S2})$

**Abb. 4.19.** Widlar-Stromspiegel

$$
U_b = I_e R_V + (I_{C1} + I_{B1})\, R_1 + U_{BE1}
$$

Wenn man die Basisströme der Transistoren vernachlässigt und $U_{BE} \approx 0{,}7\,\mathrm{V}$ annimmt, erhält man:

$$
I_e \approx \frac{U_b - U_{BE1}}{R_V + R_1} \approx \frac{U_b - 0{,}7\,\mathrm{V}}{R_V + R_1}
$$

Für den Ausgangsstrom gilt $I_a = k_I I_e$.

#### 4.1.2.3.2 Widlar-Stromspiegel

Wenn man sehr kleine Übersetzungsverhältnisse benötigt, ist eine Einstellung über das Größenverhältnis der Transistoren ungünstig, weil die Größe von $T_2$ nur bis zur Grundgröße verringert werden kann und deshalb $T_1$ sehr groß wird. In diesem Fall kann man den in Abb. 4.19a gezeigten *Widlar-Stromspiegel* einsetzen, bei dem nur der Gegenkopplungswiderstand $R_2$ eingesetzt wird; aus (4.9) folgt mit $R_1 = 0$ und $B \gg 1$:

$$
U_T \ln \frac{I_{C1}}{I_{S1}} = R_2 I_{C2} + U_T \ln \frac{I_{C2}}{I_{S2}}
$$

Für das Übersetzungsverhältnis erhält man mit $I_e \approx I_{C1}$ und $I_a \approx I_{C2}$:

$$
k_I = \frac{I_a}{I_e} \approx \frac{I_{C2}}{I_{C1}} = \frac{I_{S2}}{I_{S1}}\, e^{-\frac{U_{R2}}{U_T}}
\qquad \text{mit } U_{R2} = R_2 I_{C2}
\qquad (4.13)
$$

Es hängt exponentiell vom Verhältnis $U_{R2}/U_T$ ab und nimmt bei einer Zunahme von $U_{R2}$ um $U_T \ln 10 \approx 60\,\mathrm{mV}$ um den Faktor 10 ab; Abb. 4.19b zeigt dies für den Fall gleicher Transistoren, d.h. für $I_{S1} = I_{S2}$. Aus (4.13) folgt ferner, dass der Widlar-Stromspiegel aufgrund der starken Stromabhängigkeit des Übersetzungsverhältnisses nur für Konstantströme geeignet ist.

Man könnte nun vermuten, dass man dasselbe Verfahren auch zur Realisierung sehr großer Übersetzungsverhältnisse anwenden kann, indem man in Abb. 4.14a nur den Widerstand $R_1$ einsetzt. Das ist zwar prinzipiell möglich, in der Praxis aber nicht anwendbar, weil der größere Strom am Ausgang natürlich auch einen größeren Transistor erforderlich macht. Man kann diesen *umgekehrten Widlar-Stromspiegel* nur dann einsetzen, wenn [unclear]
<!-- page-import:0334:end -->

<!-- page-import:0335:start -->
298  4. Verstärker

**a** Schaltung  
**b** Einsatz in Stromquellenbank

**Abb. 4.20.** 3-Transistor-Stromspiegel

das Übersetzungsverhältnis so groß ist, dass der Einsatz eines Widlar-Stromspiegels sinnvoll ist, und trotzdem der Ausgangsstrom so klein ist, dass man auch am Ausgang einen Transistor der Größe 1 einsetzen kann; dieser Fall ist jedoch äußerst selten.

*Beispiel:* Von einem Eingangsstrom $I_e = 1\,\mathrm{mA}$ soll ein Ausgangsstrom $I_a = 10\,\mu\mathrm{A}$ abgeleitet werden. Da in unserer Beispiel-Technologie ein Transistor der Größe 1 nach Abb. 4.5 für einen Strom von $100\,\mu\mathrm{A}$ ausgelegt ist, wählen wir für $T_1$ die Größe 10 und für $T_2$ die minimale Größe 1; damit gilt $I_{S2}/I_{S1} = 0{,}1$. Für das gewünschte Übersetzungsverhältnis $k_I = I_a/I_e = 0{,}01$ muss demnach der exponentielle Faktor in (4.13) ebenfalls den Wert 0,1 annehmen; daraus folgt $U_{R2} = U_T \ln 10 \approx 60\,\mathrm{mV}$ und $R_2 = U_{R2}/I_a \approx 6\,\mathrm{k}\Omega$.

#### 4.1.2.3.3 3-Transistor-Stromspiegel

Eine niedrige Stromverstärkung der Transistoren wirkt sich störend auf das Übersetzungsverhältnis des einfachen Stromspiegels aus. Vor allem bei großen Übersetzungsverhältnissen kann der Basisstrom des Ausgangstransistors so groß werden, dass das Übersetzungsverhältnis deutlich vom Größenverhältnis der Transistoren abweicht. Dadurch hängt das Übersetzungsverhältnis nicht mehr nur von den geometrischen Größen, sondern in zunehmendem Maße von der toleranzbehafteten Stromverstärkung ab. Abhilfe schafft der in Abb. 4.20a gezeigte *3-Transistor-Stromspiegel*, bei dem der Basisstrom für die Transistoren $T_1$ und $T_2$ über einen zusätzlichen Transistor $T_3$ zugeführt wird. Dieser wiederum trägt nur mit seinem sehr kleinen Basisstrom zum Eingangsstrom $I_e$ bei; dadurch wird die Abhängigkeit von der Stromverstärkung stark reduziert.

Ohne Gegenkopplungswiderstände, d.h. mit $R_1 = R_2 = 0$, erhält man die Maschengleichung $U_{BE1} = U_{BE2}$ und daraus bei Vernachlässigung des Early-Effekts:

$$
\frac{I_{C2}}{I_{C1}} = \frac{I_{S2}}{I_{S1}}
$$

Durch Einsetzen der Knotengleichungen

$$
I_e = I_{C1} + I_{B3} \quad,\quad I_{B1} + I_{B2} = I_{C3} + I_{B3} \quad,\quad I_a = I_{C2}
$$

folgt mit $I_{B1} = I_{C1}/B$, $I_{B2} = I_{C2}/B$ und $I_{B3} = I_{C3}/B$ das Übersetzungsverhältnis:
<!-- page-import:0335:end -->

<!-- page-import:0336:start -->
4.1 Schaltungen 299

$$
k_I \;=\; \frac{B^2 + B}{\frac{I_{S1}}{I_{S2}}\left(B^2 + B + 1\right) + 1}
\;\stackrel{B \gg 1}{\approx}\;
\frac{I_{S2}}{I_{S1}}
$$

(4.14)

Für $I_{S1} = I_{S2}$ erhält man

$$
k_I \;=\; \frac{1}{1 + \frac{2}{B^2 + B}}
\;\stackrel{B \gg 1}{\approx}\; 1
$$

Ein Vergleich mit (4.8) auf Seite 293 zeigt, dass hier anstelle des Fehlerterms $2/B$ nur ein Fehlerterm $2/(B^2 + B) \approx 2/B^2$ auftritt. Die Verringerung des Fehlers um den Faktor $B$ entspricht genau der Stromverstärkung von $T_3$. Mit Gegenkopplungswiderständen erhält man dasselbe Ergebnis, wenn man die Widerstände entsprechend den Transistor-Größen wählt: $I_{S2}/I_{S1} = R_1/R_2$.

**Betrieb als Stromquelle**

Der 3-Transistor-Stromspiegel wird vor allem in *Stromquellenbänken* nach Abb. 4.20b eingesetzt; dabei werden mehrere Ausgangstransistoren an einen gemeinsamen Referenzzweig angeschlossen. Damit erhält man mehrere Ausgangsströme, die über die Größen- und Widerstandsverhältnisse beliebig skalierbar sind und in einem festen Verhältnis zueinander stehen. Da in diesem Fall die Summe der Basisströme der Ausgangstransistoren sehr groß werden kann, muss man $T_3$ zur zusätzlichen Stromverstärkung einsetzen. Aus Abb. 4.20b folgt mit $U_{BE} \approx 0{,}7\,\mathrm{V}$:

$$
I_e \;\approx\; \frac{U_b - U_{BE3} - U_{BE1}}{R_V + R_1}
\;\approx\; \frac{U_b - 1{,}4\,\mathrm{V}}{R_V + R_1}
$$

Stromquellenbänke dieser Art werden vor allem als Ruhestromquellen in integrierten Schaltungen eingesetzt.

#### 4.1.2.3.4 n-Kanal-Stromspiegel

Abbildung 4.21 zeigt die Ströme und Spannungen beim einfachen Stromspiegel mit n-Kanal-Mosfets, den man kurz *n-Kanal-Stromspiegel* nennt. Im normalen Arbeitsbereich arbeiten beide Mosfets im Abschnürbereich und man kann die Grundgleichung (3.3) verwenden:

$$
I_{D1} \;=\; \frac{K_1}{2}\,(U_{GS1} - U_{th})^2
$$

$$
I_{D2} \;=\; \frac{K_2}{2}\,(U_{GS2} - U_{th})^2 \left(1 + \frac{U_{DS2}}{U_A}\right)
$$

(4.15)

Dabei wird bei $T_1$ der Early-Effekt wegen $U_{DS1} = U_{GS1} \ll U_A$ vernachlässigt. Da bei Mosfets kein Gatestrom fließt, entsprechen die Ströme am Ein- und Ausgang den Drainströmen:

$$
I_e = I_{D1}
,\quad
I_a = I_{D2}
$$

(4.16)

Aus Abb. 4.21 folgt ferner die Maschengleichung:

$$
I_{D1}R_1 + U_{GS1} \;=\; I_{D2}R_2 + U_{GS2}
$$

(4.17)
<!-- page-import:0336:end -->

<!-- page-import:0337:start -->
300  4. Verstärker

**Abb. 4.21.** Ströme und Spannungen beim n-Kanal-Stromspiegel

n-Kanal-Stromspiegel ohne Gegenkopplung

Mit $R_1 = R_2 = 0$ folgt aus (4.15)–(4.17) unter Berücksichtigung von $U_{DS2} = U_a$ das Übersetzungsverhältnis:

$$
k_I = \frac{I_a}{I_e} = \frac{K_2}{K_1}\left(1 + \frac{U_a}{U_A}\right) \qquad \overset{U_a \ll U_A}{\approx} \qquad \frac{K_2}{K_1}
$$

(4.18)

Es hängt bei ausreichend großer Early-Spannung $U_A$ nur vom Größenverhältnis der Mosfets ab.

Die Ausgangskennlinie des n-Kanal-Stromspiegels ist in Abb. 4.17 auf Seite 294 zusammen mit der Ausgangskennlinie eines npn-Stromspiegels gleicher Auslegung gezeigt. Dabei fällt vor allem auf, dass der Arbeitsbereich des n-Kanal-Stromspiegels wegen $U_{a,min} = U_{DS,ab} > U_{CE,sat}$ kleiner ist. Die Aussteuerungsgrenze ist jedoch nicht konstant, sondern hängt wegen

$$
U_{a,min} = U_{DS,ab} = U_{GS} - U_{th} \qquad \overset{U_{DS,ab} \ll U_A}{\approx} \qquad \sqrt{\frac{2I_D}{K}}
$$

von der Größe der Mosfets ab. Man kann demnach die Aussteuerungsgrenze verringern, indem man die Mosfets größer macht. In integrierten Analogschaltungen werden normalerweise Arbeitspunkte mit $U_{GS} - U_{th} \approx 1\,\mathrm{V}$ verwendet; daraus folgt $U_{a,min} \approx 1\,\mathrm{V}$. Um eine Aussteuerungsgrenze von $U_{a,min} \approx 0{,}1 \ldots 0{,}2\,\mathrm{V}$ wie bei einem npn-Stromspiegel zu erreichen, müsste man demnach die Mosfets um einen Faktor $25 \ldots 100$ größer machen. Das ist in der Praxis nur in Ausnahmefällen möglich, weil dadurch die Gatekapazität um den gleichen Faktor größer und die Transitfrequenz entsprechend kleiner wird; beim Einsatz als Stromquelle ist in diesem Fall die größere Ausgangskapazität störend.

n-Kanal-Stromspiegel mit Gegenkopplung

Die Berechnung des Übersetzungsverhältnisses ist in diesem Fall nicht geschlossen möglich, weil die Spannungen an den Widerständen $R_1$ und $R_2$ nicht nur in die Maschengleichung (4.17) eingehen, sondern aufgrund des Substrateffekts auch zu einer Verschiebung der Schwellenspannungen führen; es gilt nämlich $U_{BS1} = -U_{R1}$ und $U_{BS2} = -U_{R2}$. Wenn beide Spannungen gleich sind, wirkt sich der Substrateffekt auf beide Mosfets gleich aus und die Schwellenspannungen nehmen um denselben Wert zu; dazu muss man die Widerstände entsprechend den Größen der Mosfets wählen:
<!-- page-import:0337:end -->

<!-- page-import:0338:start -->
4.1 Schaltungen 301

$$\frac{K_2}{K_1}=\frac{R_1}{R_2}$$

In diesem Fall erhält man dasselbe Übersetzungsverhältnis wie beim n-Kanal-Stromspiegel ohne Gegenkopplung.

Durch die Gegenkopplung wird der Ausgangswiderstand des Stromspiegels erhöht; darauf wird später noch näher eingegangen. Im Gegenzug erhöht sich die Aussteuerungsgrenze um den Spannungsabfall an den Widerständen:

$$U_{a,min}=U_{DS2,ab}+U_{R2}=U_{DS2,ab}+I_{D2}R_2\;\;\overset{I_{D2}=I_a}{=}\;\;\sqrt{\frac{2I_a}{K_2}}+I_aR_2$$

**Betrieb als Stromquelle**

Man kann den einfachen n-Kanal-Stromspiegel als Stromquelle betreiben, indem man den in Abb. 4.21 gezeigten.Widerstand $R_V$ ergänzt; damit wird ein konstanter Eingangsstrom eingestellt. Aus $U_e=U_{GS1}+U_{R1}$ und $U_b=U_e+I_eR_V$ folgt:

$$I_e=\frac{U_b-U_{GS1}}{R_V+R_1}$$

Für den Ausgangsstrom gilt $I_a=\kappa_I\,I_e$.

#### 4.1.2.3.5 Ausgangswiderstand

Der Ausgangsstrom eines Stromspiegels sollte nur vom Eingangsstrom und nicht von der Ausgangsspannung abhängen; daraus folgt, dass der Ausgangswiderstand

$$r_a=\left.\frac{\partial U_a}{\partial I_a}\right|_{I_e=\mathrm{const.}}=\left.\frac{u_a}{i_a}\right|_{i_e=0}$$

möglichst groß sein sollte. Man kann ihn aus der Steigung der Ausgangskennlinie im Arbeitsbereich oder mit Hilfe des Kleinsignalersatzschaltbilds ermitteln. Dabei wird, wie aus der Definition unmittelbar folgt, der Eingang mit einer idealen Stromquelle angesteuert: $I_e=\mathrm{const.}$ bzw. $i_e=0$. Es handelt sich also genau genommen um den Leerlaufausgangswiderstand. Im Kleinsignalersatzschaltbild drückt sich der Leerlauf am Eingang dadurch aus, dass der Eingang offen, d.h. unbeschaltet ist. In der Praxis hat man zwar nie exakten Leerlauf am Eingang, die Abweichung zwischen realem Ausgangswiderstand und Leerlaufausgangswiderstand ist jedoch in der Regel vernachlässigbar gering.

Für den npn-Stromspiegel erhält man das in Abb. 4.22 gezeigte Kleinsignalersatzschaltbild; dabei wird für die Transistoren das Kleinsignalersatzschaltbild nach Abb. 2.12 auf Seite 46 verwendet. Der linke Teil mit dem Transistor $T_1$ und dem Widerstand $R_1$ kann zu einem Widerstand $R_g$ zusammengefasst werden $^{10}$:

$$R_g=R_1+\frac{1}{S_1+\frac{1}{r_{BE1}}+\frac{1}{r_{CE1}}}\approx R_1+\frac{1}{S_1}$$

Damit erhält man nahezu dasselbe Kleinsignalersatzschaltbild wie bei einer Emitterschaltung mit Stromgegenkopplung, wie ein Vergleich mit Abb. 2.67 auf Seite 111 zeigt; nur

---

$^{10}$ Die gesteuerte Quelle $S_1u_{BE1}$ wirkt wie ein Widerstand $1/S_1$, weil die Steuerspannung $u_{BE1}$ gleich der Spannung an der Quelle ist.
<!-- page-import:0338:end -->

<!-- page-import:0339:start -->
302 4. Verstärker

**Abb. 4.22.** Kleinsignalersatzschaltbild eines npn-Stromspiegels

der Widerstand $R_C$ und die Quelle $u_g$ entfallen. Deshalb kann man den Ausgangswiderstand des Stromspiegels aus dem Kurzschlussausgangswiderstand der Emitterschaltung mit Stromgegenkopplung ableiten:

$$
r_a = r_{CE2} \left( 1 + \frac{\beta + \dfrac{r_{BE2} + R_g}{r_{CE2}}}{1 + \dfrac{r_{BE2} + R_g}{R_2}} \right)
\qquad
\overset{r_{CE2} > r_{BE2} + R_g}{\underset{\beta \gg 1}{\approx}}
\qquad
r_{CE2} \left( 1 + \frac{\beta R_2}{R_2 + r_{BE2} + R_g} \right)
$$

Durch Einsetzen von $R_g$ erhält man mit $r_{BE2} \gg 1/S_1$ den Ausgangswiderstand:

$$
r_a = \left. \frac{u_a}{i_a} \right|_{i_e=0}
\approx
r_{CE2} \left( 1 + \frac{\beta R_2}{R_1 + R_2 + r_{BE2}} \right)
\tag{4.19}
$$

Dabei gilt $r_{CE2} = U_A / I_a$ und $r_{BE2} = \beta U_T / I_a$.

Man kann drei Spezialfälle ableiten:

$$
r_a \approx
\begin{cases}
r_{CE2} & \text{für } R_2 = 0 \qquad \rightarrow \text{ ohne Gegenkopplung} \\
r_{CE2}(1 + S_2 R_2) & \text{für } R_1, R_2 \ll r_{BE2} \rightarrow \text{ schwache Gegenkopplung} \\
\beta \, r_{CE2} & \text{für } R_2 \gg R_1, r_{BE2} \rightarrow \text{ starke Gegenkopplung}
\end{cases}
$$

Dabei wird bei der schwachen Gegenkopplung der Zusammenhang $S_2 = \beta / r_{BE2}$ und bei der starken Gegenkopplung $\beta \gg 1$ verwendet. Der Ausgangswiderstand bei starker Gegenkopplung ist der höchste mit einem Bipolartransistor bei Gegenkopplung erzielbare Ausgangswiderstand $^{11}$. Er wird in der Praxis meist dadurch erreicht, dass man anstelle von $R_2$ eine Stromquelle einsetzt; ein Beispiel dafür ist der Kaskode-Stromspiegel, der im folgenden noch näher beschrieben wird.

Zur Berechnung des Ausgangswiderstands eines n-Kanal-Stromspiegel wird das in Abb. 4.23 gezeigte Kleinsignalersatzschaltbild verwendet; dabei ist nur der Ausgang mit $T_2$ und $R_2$ dargestellt, weil aufgrund des isolierten Gate-Anschlusses keine Verbindung zum eingangsseitigen Teil des Stromspiegels besteht. Für die Mosfets wird das Kleinsignalersatzschaltbild nach Abb. 3.17 auf Seite 192 verwendet. Ein Vergleich mit Abb. 3.62 auf Seite 245 zeigt, dass das Kleinsignalersatzschaltbild des n-Kanal-Stromspiegels dem

---

$^{11}$ Man kann durch den Einsatz von Verstärkern oder durch Mitkopplung noch höhere Ausgangswiderstände erzielen, letzteres jedoch nur bei sorgfältigem Abgleich.
<!-- page-import:0339:end -->

<!-- page-import:0340:start -->
4.1 Schaltungen 303

**Abb. 4.23.** Kleinsignalersatzschaltbild zur Berechnung des Ausgangswiderstands eines n-Kanal-Stromspiegels

der Sourceschaltung mit Stromgegenkopplung entspricht, wenn man den Widerstand $R_D$ entfernt und den Bulk-Anschluss auf Masse legt. Deshalb kann man den Ausgangswiderstand ableiten; mit $S_2 \gg 1/r_{DS2}$ erhält man den Ausgangswiderstand:

$$
r_a \;=\; \left.\frac{u_a}{i_a}\right|_{i_e=0} \;\approx\; r_{DS2}\left(1 + (S_2 + S_{B2})\,R_2\right)
$$

(4.20)

Dabei gilt $r_{DS2} = U_A/I_a$.

Man kann zwei Spezialfälle ableiten:

$$
r_a \approx
\begin{cases}
r_{DS2} & \text{für } R_2 = 0 \qquad\qquad\rightarrow\ \text{ohne Gegenkopplung} \\
r_{DS2}S_2R_2 & \text{für } R_2, 1/S_{B2} \gg 1/S_2 \rightarrow\ \text{starke Gegenkopplung}
\end{cases}
$$

Im Gegensatz zum npn-Stromspiegel ist der Ausgangswiderstand beim n-Kanal-Stromspiegel nicht nach oben begrenzt: für $R_2 \rightarrow \infty$ erhält man $r_a \rightarrow \infty$.

Abbildung 4.24 zeigt einen Vergleich der Ausgangswiderstände eines npn- und eines n-Kanal-Stromspiegels mit $k_I = 1$ bei einem Strom von $I_a = 100\,\mu\text{A}$. Ohne Gegenkopplung ist der Ausgangswiderstand des npn-Stromspiegels im allgemeinen größer als der des n-Kanal-Stromspiegels; Ursache hierfür ist die größere Early-Spannung der npn-Transistoren. Im Bereich schwacher Gegenkopplung gilt für den npn-Stromspiegel $r_a \approx r_{CE2}S_2R_2$ und für den n-Kanal-Stromspiegel $r_a \approx r_{DS2}\dots r_{DS2}S_2R_2$; hier ist der Vorteil des npn-Stromspiegels noch stärker ausgeprägt, weil hier neben der größeren Early-Spannung auch die wesentlich größere Steilheit der npn-Transistoren zum Tragen kommt. Bei starker Gegenkopplung geht der Ausgangswiderstand beim npn-Stromspiegel gegen den Maximalwert $r_a = \beta\,r_{CE2}$, während er beim n-Kanal-Stromspiegel mit $r_a \approx r_{DS2}S_2R_2$ weiter steigt. Bei einem Ausgangsstrom von $I_a = 100\,\mu\text{A}$ kann man bis zu $R_2 \approx 10\,\text{k}\Omega$ ohmsche Gegenkopplungswiderstände einsetzen; die Spannung an den Widerständen bleibt dann kleiner als $U_{R2} \approx I_aR_2 = 100\,\mu\text{A}\cdot 10\,\text{k}\Omega = 1\,\text{V}$ $^{12}$. Wenn man dagegen $R_2 = 10\,\text{M}\Omega$ mit einem ohmschen Widerstand realisieren wollte, müsste an $R_2$ eine Spannung von $U_{R2} \approx I_aR_2 = 1000\,\text{V}$ anliegen; deshalb muss man größere Gegenkopplungswiderstände mit Stromquellen realisieren.

Aus Abb. 4.24 kann man zwei wichtige Aussagen ableiten:

$^{12}$ Beim n-Kanal-Stromspiegel gilt $U_{R2} = I_aR_2$, weil bei Mosfets kein Gatestrom fließt.
<!-- page-import:0340:end -->

<!-- page-import:0341:start -->
304 4. Verstärker

Abb. 4.24. Ausgangswiderstand eines npn- und eines n-Kanal-Stromspiegels mit Übersetzungsverhältnis $k_I = 1$, $I_e = I_a = 100\,\mu\text{A}$ und $R_1 = R_2$

– Beim npn-Stromspiegel wird mit $R_2 = r_{BE2} = \beta/S_2$ die Grenze zum Bereich starker Gegenkopplung erreicht; eine weitere Vergrößerung von $R_2$ bringt keine nennenswerte Verbesserung mehr. Der Spannungsabfall an $R_2$ beträgt in diesem Fall:

$$
U_{R2} = I_a R_2 = I_a \frac{\beta}{S} = I_a \frac{\beta\,U_T}{I_a} = \beta\,U_T \underset{\beta \approx 100}{\approx} 2{,}6\,\text{V}
$$

Daraus folgt, dass man den maximalen Ausgangswiderstand mit einem ohmschen Gegenkopplungswiderstand erreichen kann, wenn man eine Aussteuerungsgrenze von $U_{a,min} \approx U_{R2} + U_{CE,sat} \approx 2{,}8\,\text{V}$ in Kauf nimmt. Bei geringerer Stromverstärkung ist die Aussteuerungsgrenze entsprechend niedriger.

– Beim n-Kanal-Stromspiegel muss man wegen der wesentlich geringeren Steilheit der Mosfets entsprechend größere Gegenkopplungswiderstände einsetzen, um ähnlich hohe Ausgangswiderstände wie beim npn-Stromspiegel zu erreichen; in diesem Fall muss man für $R_2$ eine Stromquelle einsetzen, d.h. den einfachen Stromspiegel zum Kaskode-Stromspiegel ausbauen.

## 4.1.2.4 Stromspiegel mit Kaskode

Wenn ein besonders hoher Ausgangswiderstand benötigt wird, muss man beim einfachen Stromspiegel entweder sehr hochohmige Widerstände oder eine Stromquelle zur Gegenkopplung einsetzen. Der Einsatz hochohmiger Widerstände ist jedoch wegen der starken Zunahme der Aussteuergrenze $U_{a,min}$ im allgemeinen nicht möglich, so dass man zwangsläufig eine Stromquelle einsetzen muss. Da Stromquellen üblicherweise mit Hilfe von Stromspiegeln realisiert werden, erhält man im einfachsten Fall den in Abb. 4.25 gezeigten Stromspiegel mit Kaskode, bei dem, ausgehend von der Prinzipsschaltung in Abb. 4.10 auf Seite 288, der Gegenkopplungswiderstand $R_E$ bzw. $R_S$ durch einen einfachen Stromspiegel, bestehend aus $T_1$ und $T_2$, ersetzt wird. Dadurch erhält man ausgangsseitig die
<!-- page-import:0341:end -->

<!-- page-import:0342:start -->
4.1 Schaltungen 305

a mit npn-Transistoren

b mit n-Kanal-Mosfets

**Abb. 4.25.** Stromspiegel mit Kaskode

Reihenschaltung einer Emitter- bzw. Source- ($T_2$) und einer Basis- bzw. Gateschaltung ($T_3$), die Kaskodeschaltung genannt wird, siehe Abschnitt 4.1.3.

Man beachte in diesem Zusammenhang den Unterschied zwischen dem hier beschriebenen *Stromspiegel mit Kaskode* und dem im nächsten Abschnitt beschriebenen *Kaskode-Stromspiegel*. Beide verwenden eine Kaskodeschaltung am Ausgang, jedoch unterschiedliche Verfahren zur Arbeitspunkteinstellung: beim Stromspiegel mit Kaskode wird eine externe Spannungsquelle $U_0$ zur Arbeitspunkteinstellung verwendet, während beim Kaskode-Stromspiegel die erforderliche Spannung intern erzeugt wird.

#### 4.1.2.4.1 npn-Stromspiegel mit Kaskode

Das Übersetzungsverhältnis $k_I$ des in Abb. 4.25a gezeigten npn-Stromspiegels mit Kaskode kann man mit Hilfe des Übersetzungsverhältnisses des einfachen Stromspiegels berechnen; für den aus $T_1$ und $T_2$ bestehenden Stromspiegel gilt nach (4.6):

$$
\frac{I_a'}{I_e} = \frac{1}{\frac{I_{S1}}{I_{S2}}\left(1+\frac{1}{B}\right)+\frac{1}{B}}
$$

Der Early-Effekt macht sich hier nicht bemerkbar, weil $T_2$ mit der näherungsweise konstanten Kollektor-Emitter-Spannung $U_{CE2}=U_0-U_{BE3}\approx U_0-0{,}7\,\mathrm{V}$ betrieben wird. Mit

$$
I_a' = I_a + \frac{I_a}{B}
$$

erhält man:

$$
k_I = \frac{I_a}{I_e} = \frac{1}{\frac{I_{S1}}{I_{S2}}\left(1+\frac{1}{B}\right)^2+\frac{1}{B}+\frac{1}{B^2}} \overset{B\gg1}{\approx} \frac{I_{S2}}{I_{S1}}
\qquad (4.21)
$$

Für $I_{S1}=I_{S2}$ folgt:
<!-- page-import:0342:end -->

<!-- page-import:0343:start -->
306 4. Verstärker

$$
k_I \;=\; \frac{1}{1+\frac{3}{B}+\frac{2}{B^2}}
\;\;\overset{B\gg 1}{\approx}\;\;
\frac{1}{1+\frac{3}{B}}
\;\approx\; 1
$$

Das Übersetzungsverhältnis hängt nur vom Größenverhältnis der Transistoren $T_1$ und $T_2$ ab; $T_3$ geht nicht ein. Da $k_I$ nicht von der Ausgangsspannung $U_a$ abhängt, ist der Ausgangswiderstand in erster Näherung unendlich.

#### 4.1.2.4.2 n-Kanal-Stromspiegel mit Kaskode

Beim n–Kanal–Stromspiegel mit Kaskode in Abb. 4.25b gilt $I_a = I'_a$; daraus folgt zusammen mit (4.18):

$$
k_I \;=\; \frac{I_a}{I_e} \;=\; \frac{K_2}{K_1}
\qquad\qquad (4.22)
$$

Auch hier hängt das Übersetzungsverhältnis nur vom Größenverhältnis der Mosfets $T_1$ und $T_2$ ab.

#### 4.1.2.4.3 Ausgangskennlinien

Abbildung 4.26 zeigt die Ausgangskennlinien eines npn- und eines n-Kanal-Stromspiegels mit Kaskode. Beim npn-Stromspiegel mit Kaskode verläuft die Kennlinie für $U_a > U_{a,min,npn}$ praktisch waagrecht, d.h. der Ausgangswiderstand ist sehr hoch. Mit $U_{CE,sat} \approx 0{,}2\,\mathrm{V}$ und $U_{BE} \approx 0{,}7\,\mathrm{V}$ erhält man für die Aussteuerungsgrenze:

$$
U_{a,min,npn} \;=\; U_0 - U_{BE3} + U_{CE3,sat} \;\approx\; U_0 - 0{,}5\,\mathrm{V}
$$

Damit $T_2$ im Normalbetrieb arbeitet, muss $U_{CE2} > U_{CE2,sat}$ gelten; daraus folgt:

$$
U_0 \;=\; U_{CE2} + U_{BE3} \;>\; U_{CE2,sat} + U_{BE3} \;\approx\; 0{,}9\,\mathrm{V}
$$

Für den Grenzfall $U_0 = 0{,}9\,\mathrm{V}$ erhält man $U_{a,min,npn} = 2U_{CE,sat} \approx 0{,}4\,\mathrm{V}$. Unterhalb der Aussteuerungsgrenze knickt die Kennlinie ab.

Beim n-Kanal-Kaskode-Stromspiegel verläuft die Kennlinie für $U_a > U_{a,min,nK}$ ebenfalls waagrecht; hier gilt:

$$
U_{a,min,nK} \;=\; U_0 - U_{GS3} + U_{DS3,ab} \;=\; U_0 - U_{th3}
$$

Dabei wird $U_{DS3,ab} = U_{GS3} - U_{th3}$ verwendet. Damit $T_2$ im Abschnürbereich arbeitet, muss $U_{DS2} > U_{DS2,ab}$ gelten; daraus folgt:

$$
U_0 \;=\; U_{DS2} + U_{GS3} \;>\; U_{DS2,ab} + U_{GS3} \;=\; U_{GS2} - U_{th2} + U_{GS3}
$$

Dabei wird $U_{DS2,ab} = U_{GS2} - U_{th2}$ verwendet. Typische Werte sind $U_{th} \approx 1\,\mathrm{V}$ und $U_{GS} \approx 1{,}5 \dots 2\,\mathrm{V}$; damit erhält man $U_0 \approx 2 \dots 3\,\mathrm{V}$ und $U_{a,min,nK} \approx 1 \dots 2\,\mathrm{V}$. Mit $I_{D2} = I_{D3} = I_a$ und

$$
U_{GS} \;\approx\; U_{th} + \sqrt{\frac{2I_D}{K}}
$$

erhält man die Abhängigkeit der Aussteuerungsgrenze vom Ausgangsstrom und den Größen der Mosfets:
<!-- page-import:0343:end -->

<!-- page-import:0344:start -->
4.1 Schaltungen 307

Abb. 4.26. Ausgangskennlinie eines npn- und eines n-Kanal-Stromspiegels mit Kaskode

$$
U_{a,\min,nK} = U_{GS2} - U_{th2} + U_{GS3} - U_{th3} = \sqrt{2I_a}\left(\frac{1}{\sqrt{K_2}} + \frac{1}{\sqrt{K_3}}\right)
$$

Man kann demnach die Aussteuerungsgrenze kleiner machen, indem man die Mosfets größer macht; allerdings geht die Größe nur unter der Wurzel ein.

Unterhalb der Aussteuerungsgrenze gerät zunächst $T_3$ in den ohmschen Bereich. Der Strom wird jedoch von $T_2$ eingeprägt und bleibt deshalb näherungsweise konstant; der Ausgangswiderstand ist jedoch stark reduziert. Bei weiterer Reduktion der Ausgangsspannung gerät auch $T_2$ in den ohmschen Bereich und die Kennlinie geht in die Ausgangskennlinie von $T_2$ über.

#### 4.1.2.4.4 Ausgangswiderstand

Den Ausgangswiderstand des npn-Stromspiegels mit Kaskode erhält man, indem man in (4.1) die Kleinsignalparameter von $T_3$ und $r_{CE2}$ anstelle von $R_E$ einsetzt:

$$
r_a = r_{CE3}\left(1 + \frac{\beta\, r_{CE2}}{r_{CE2} + r_{BE3}}\right)
$$

Mit $r_{CE2} \approx r_{CE3} = U_A/I_a$, $r_{CE2} \gg r_{BE3}$ und $\beta \gg 1$ folgt:

$$
r_a = \left.\frac{u_a}{i_a}\right|_{i_e=0} \approx \beta\, r_{CE3}
\qquad (4.23)
$$

Beim n-Kanal-Stromspiegel mit Kaskode erhält man ausgehend von (4.2):

$$
r_a = r_{DS3}\left(1 + (S_3 + S_{B3})\, r_{DS2}\right)
$$

Mit $r_{DS2} = r_{DS3} = U_A/I_a$ und $S_3 r_{DS2} \gg 1$ folgt:
<!-- page-import:0344:end -->

<!-- page-import:0345:start -->
308 4. Verstärker

a mit npn-Transistoren

b mit n-Kanal-Mosfets

**Abb. 4.27.** Kaskode-Stromspiegel

$$
r_a=\left.\frac{u_a}{i_a}\right|_{i'_e=0}\approx (S_3+S_{B3})\,r_{DS3}^2
$$

(4.24)

## 4.1.2.5 Kaskode-Stromspiegel

Eine weitere Möglichkeit zur Erhöhung des Ausgangswiderstands ist die in Abb. 4.27 gezeigte Reihenschaltung von zwei einfachen Stromspiegeln, die in Anlehnung an die im Abschnitt 4.1.3 beschriebene Kaskodeschaltung Kaskode-Stromspiegel genannt wird. Es besteht eine enge Verwandtschaft zum Stromspiegel mit Kaskode in Abb. 4.25. Der Kaskode-Stromspiegel benötigt jedoch keine externe Spannungsquelle und wird deshalb auch als *Kaskode-Stromspiegel mit automatischer Arbeitspunkteinstellung* (*self-biased cascode current mirror*) bezeichnet. Auch bezüglich Aussteuerungsgrenze und Ausgangswiderstand bestehen Unterschiede zum Stromspiegel mit Kaskode.

### 4.1.2.5.1 npn-Kaskode-Stromspiegel

Das Übersetzungsverhältnis des in Abb. 4.27a gezeigten npn-Kaskode-Stromspiegels kann man mit Hilfe des Übersetzungsverhältnisses des einfachen Stromspiegels berechnen; für den aus $T_1$ und $T_2$ bestehenden Stromspiegel gilt nach (4.6):

$$
\frac{I'_a}{I'_e}=\frac{1}{\frac{I_{S1}}{I_{S2}}\left(1+\frac{1}{B}\right)+\frac{1}{B}}
$$

Der Early-Effekt macht sich hier nicht bemerkbar, weil $T_2$ mit der näherungsweise konstanten Kollektor-Emitter-Spannung $U_{CE2}=U_{BE1}+U_{BE3}-U_{BE4}\approx 0{,}7\ \mathrm{V}$ betrieben wird. Mit

$$
I_e=I'_e+\frac{I_a}{B}\ ;\ \ I'_a=I_a+\frac{I_a}{B}
$$

erhält man:
<!-- page-import:0345:end -->

<!-- page-import:0346:start -->
4.1 Schaltungen 309

$$
k_I = \frac{I_a}{I_e} = \frac{1}{\frac{I_{S1}}{I_{S2}}\left(1 + \frac{1}{B}\right)^2 + \frac{2}{B} + \frac{1}{B^2}} \qquad \overset{B \gg 1}{\approx} \frac{I_{S2}}{I_{S1}}
$$

(4.25)

Für $I_{S1} = I_{S2}$ folgt:

$$
k_I = \frac{1}{1 + \frac{4}{B} + \frac{2}{B^2}} \qquad \overset{B \gg 1}{\approx} \frac{1}{1 + \frac{4}{B}} \approx 1
$$

Das Übersetzungsverhältnis hängt nur vom Größenverhältnis der Transistoren $T_1$ und $T_2$ ab; $T_3$ und $T_4$ gehen nicht ein. Da $k_I$ nicht von der Ausgangsspannung $U_a$ abhängt, ist der Ausgangswiderstand in erster Näherung unendlich.

#### 4.1.2.5.2 n-Kanal-Kaskode-Stromspiegel

Beim n-Kanal-Kaskode-Stromspiegel in Abb. 4.27b gilt $I_e = I'_e$ und $I_a = I'_a$; daraus folgt zusammen mit (4.18):

$$
k_I = \frac{I_a}{I_e} = \frac{K_2}{K_1}
$$

(4.26)

Auch hier hängt das Übersetzungsverhältnis nur vom Größenverhältnis der Mosfets $T_1$ und $T_2$ ab.

#### 4.1.2.5.3 Ausgangskennlinien

Abbildung 4.28 zeigt die Ausgangskennlinien eines npn- und eines n-Kanal-Kaskode-Stromspiegels. Beim npn-Kaskode-Stromspiegel verläuft die Kennlinie für $U_a > U_{a,min,npn}$ praktisch waagrecht, d.h. der Ausgangswiderstand ist sehr hoch. Für die Aussteuerungsgrenze gilt mit $U_{CE,sat} \approx 0{,}2\,\mathrm{V}$ und $U_{BE} \approx 0{,}7\,\mathrm{V}$:

$$
U_{a,min,npn} = U_{BE1} + U_{BE3} - U_{BE4} + U_{CE4,sat} \approx 0{,}9\,\mathrm{V}
$$

Sie ist größer als beim Stromspiegel mit Kaskode, der bei minimaler Spannung $U_0$ eine Aussteuerungsgrenze von $U_{a,min,npn} \approx 0{,}4\,\mathrm{V}$ erreicht.

Beim n-Kanal-Kaskode-Stromspiegel verläuft die Kennlinie für $U_a > U_{a,min,nK}$ ebenfalls waagrecht; hier gilt:

$$
U_{a,min,nK} = U_{GS1} + U_{GS3} - U_{GS4} + U_{DS4,ab} = U_{GS1} + U_{GS3} - U_{th4}
$$

Dabei wird $U_{DS4,ab} = U_{GS4} - U_{th4}$ verwendet. Typische Werte sind $U_{th} \approx 1\,\mathrm{V}$ und $U_{GS} \approx 1{,}5 \ldots 2\,\mathrm{V}$; damit erhält man $U_{a,min,nK} \approx 2 \ldots 3\,\mathrm{V}$. Wenn man annimmt, dass alle Mosfets dieselbe Schwellenspannung $U_{th}$ haben, d.h. den Substrat-Effekt vernachlässigt, erhält man mit $I_{D1} = I_{D3} = I_e$ und

$$
U_{GS} \approx U_{th} + \sqrt{\frac{2I_D}{K}}
$$

die Abhängigkeit der Aussteuerungsgrenze vom Eingangsstrom und den Größen der Mosfets:
<!-- page-import:0346:end -->

<!-- page-import:0347:start -->
310 4. Verstärker

Abb. 4.28. Ausgangskennlinie eines npn- und eines n-Kanal-Kaskode-Stromspiegels

$$
U_{a,\min,nK} \approx U_{th} + \sqrt{2I_e}\left(\frac{1}{\sqrt{K_1}} + \frac{1}{\sqrt{K_3}}\right)
$$

Man kann demnach die Aussteuerungsgrenze kleiner machen, indem man die Mosfets größer macht; allerdings geht die Größe nur unter der Wurzel ein. Die Untergrenze ist durch $U_{a,\min,nK} = U_{th}$ gegeben und wird nur mit sehr großen Mosfets näherungsweise erreicht. Unterhalb der Aussteuerungsgrenze gerät zunächst $T_4$ in den ohmschen Bereich. Der Strom wird jedoch von $T_2$ eingeprägt und bleibt deshalb näherungsweise konstant; der Ausgangswiderstand ist jedoch stark reduziert. Bei weiterer Reduktion der Ausgangsspannung gerät auch $T_2$ in den ohmschen Bereich und die Kennlinie geht in die Ausgangskennlinie von $T_2$ über.

#### 4.1.2.5.4 Ausgangswiderstand

Zur Berechnung des Ausgangswiderstands des npn-Kaskode-Stromspiegels wird das in Abb. 4.29 gezeigte Kleinsignalersatzschaltbild verwendet. Es gelten folgende Zusammenhänge:

$$
r_{CE2} \approx r_{CE4} = \frac{U_A}{I_a}, \quad S_2 \approx S_4 = \frac{I_a}{U_T}
$$

$$
r_{BE2} \approx r_{BE4} = \frac{\beta U_T}{I_a}, \quad S_1 \approx S_3 \approx \frac{I_e}{U_T} = \frac{I_a}{k_IU_T}
$$

Dabei ist $U_A$ die Early-Spannung, $U_T$ die Temperaturspannung, $\beta$ die Kleinsignalstromverstärkung der Transistoren und $k_I$ das Übersetzungsverhältnis des Stromspiegels. Eine Berechnung des Ausgangswiderstands liefert mit $k_I \ll \beta$:
<!-- page-import:0347:end -->

<!-- page-import:0348:start -->
4.1 Schaltungen 311

Abb. 4.29. Kleinsignalersatzschaltbild eines npn-Kaskode-Stromspiegels

$$
r_a \;=\; \left.\frac{u_a}{i_a}\right|_{i_e=0} \;\approx\; r_{CE4}\left(1+\frac{\beta}{1+k_I}\right)\;\approx\;\frac{\beta\,r_{CE4}}{1+k_I}
$$

(4.27)

Der Ausgangswiderstand des Kaskode-Stromspiegels ist um den Faktor $\beta/(1+k_I)$ größer als der des einfachen Stromspiegels. Der maximal mögliche Ausgangswiderstand $\beta\,r_{CE}$ wird nicht erreicht, weil über die Basis-Emitter-Strecke von $T_4$ eine Rückwirkung auf den Referenzzweig und damit auf die Spannung $U_{BE2}$ erfolgt, siehe Abb. 4.29; deshalb hängt der Strom $S_2u_{BE2}$ von der Ausgangsspannung ab und der Ausgangswiderstand von $T_2$ ist kleiner als $r_{CE2}$.

Beim n-Kanal-Kaskode-Stromspiegel gibt es keine Rückwirkung auf den Referenzzweig. Deshalb kann man den Ausgangswiderstand mit Hilfe von (4.20) berechnen, indem man $r_{DS2}$ anstelle von $R_2$ einsetzt:

$$
r_a \;=\; r_{DS4}\left(1+(S_4+S_{B4})\,r_{DS2}\right)
$$

Mit $r_{DS2}=r_{DS4}=U_A/I_a$ und $S_4r_{DS2}\gg 1$ folgt:

$$
r_a \;=\; \left.\frac{u_a}{i_a}\right|_{i_e=0} \;\approx\; (S_4+S_{B4})\,r_{DS4}^2
$$

(4.28)

*Beispiel:* Es sollen eine npn- und eine n-Kanal-Stromquelle mit einem Ausgangsstrom $I_a = 100\,\mu\text{A}$, möglichst hohem Ausgangswiderstand und möglichst kleiner Ausgangskapazität dimensioniert werden. Die Forderung nach einem hohen Ausgangswiderstand $r_a$ erfordert den Einsatz eines Kaskode-Stromspiegels, die nach kleiner Ausgangskapazität den Einsatz möglichst kleiner Ausgangstransistoren. Bezüglich der Wahl des Übersetzungsverhältnisses bestehen konträre Forderungen: es sollte einerseits möglichst groß sein, damit nur ein geringer Eingangsstrom $I_e = I_a/k_I$ benötigt wird, andererseits sollte es möglichst klein sein, damit der Ausgangswiderstand des npn-Kaskode-Stromspiegels möglichst groß wird. Es wird für beide Stromspiegel $k_I \approx 1$ gewählt.

Für den npn-Kaskode-Stromspiegel erhält man das in Abb. 4.30a gezeigte Schaltbild. Es werden Transistoren der Größe 1 eingesetzt, die nach Abb. 4.5 für einen Kollektorstrom
<!-- page-import:0348:end -->

<!-- page-import:0349:start -->
312  4. Verstärker

a mit npn-Transistoren

b mit n-Kanal-Mosfets

**Abb. 4.30.** Beispiel einer Kaskode-Stromquelle

von $100\,\mu\text{A}$ ausgelegt sind; die weiteren Parameter sind $I_S = 1\,\text{fA}$, $B = \beta = 100$ und $U_A = 100\,\text{V}$. Aus (4.25) folgt mit $I_{S1} = I_{S2} = I_{S3} = I_{S4} = I_S$ das Übersetzungsverhältnis

$$
k_I \approx \frac{1}{1 + \frac{4}{B}} = \frac{1}{1{,}04} \approx 0{,}96
$$

und der Eingangsstrom $I_e = I_a/k_I \approx 104\,\mu\text{A}$. Da die Kollektorströme der Transistoren nahezu gleich sind, kann man mit einer einheitlichen Basis-Emitter-Spannung $U_{BE}$ rechnen:

$$
U_{BE} \approx U_T \ln \frac{I_a}{I_S} = 26\,\text{mV} \cdot \ln \frac{100\,\mu\text{A}}{1\,\text{fA}} \approx 660\,\text{mV}
$$

Für den Vorwiderstand $R_V$ erhält man:

$$
R_V = \frac{U_b - U_{BE1} - U_{BE3}}{I_e} \approx \frac{U_b - 2U_{BE}}{I_e} = \frac{3{,}68\,\text{V}}{104\,\mu\text{A}} \approx 35\,\text{k}\Omega
$$

Mit $r_{CE4} = U_A/I_a = 100\,\text{V}/100\,\mu\text{A} = 1\,\text{M}\Omega$ folgt der Ausgangswiderstand:

$$
r_a \approx \frac{\beta\, r_{CE4}}{1 + k_I} \approx \frac{\beta\, r_{CE4}}{2} \approx 50\,\text{M}\Omega
$$

Die Aussteuerungsgrenze beträgt $U_{a,min} = U_{BE} + U_{CE,sat} \approx 0{,}9\,\text{V}$.

Für den n-Kanal-Kaskode-Stromspiegel erhält man das in Abb. 4.30b gezeigte Schaltbild. Für $T_3$ und $T_4$ werden Mosfets der Größe 10 nach Abb. 4.6 eingesetzt, da die Größe 1 für einen Drainstrom von $10\,\mu\text{A}$ ausgelegt ist und hier $100\,\mu\text{A}$ benötigt werden. Für $T_1$ und $T_2$ könnte man ebenfalls die Größe 10 verwenden; um eine Reduktion der Aussteuerungsgrenze $U_{a,min}$ zu erreichen, werden hier jedoch Mosfets der Größe 50 verwendet. Da die Ausgangskapazität im wesentlichen von $T_4$ abhängt, wirkt sich die Größe von $T_1$ und $T_2$ diesbezüglich praktisch nicht aus. Aus Abb. 4.6 entnimmt man $K = 30\,\mu\text{A}/\text{V}^2$ für die Größe 1, $U_{th,0} = 1\,\text{V}$, $\gamma = 0{,}5\,\sqrt{\text{V}}$, $U_{inv} = 0{,}6\,\text{V}$ und $U_A = 50\,\text{V}$. Das Übersetzungsverhältnis ist $k_I = 1$; daraus folgt $I_e = I_a = 100\,\mu\text{A}$. Für die Mosfets gilt:

$$
K_1 = K_2 = 50\,K = 1{,}5\,\frac{\text{mA}}{\text{V}^2}, \qquad K_3 = K_4 = 10\,K = 300\,\frac{\mu\text{A}}{\text{V}^2}
$$
<!-- page-import:0349:end -->

<!-- page-import:0350:start -->
4.1 Schaltungen 313

Bei $T_1$ und $T_2$ macht sich der Substrat-Effekt wegen $U_{BS1}=U_{BS2}=0$ nicht bemerkbar; es gilt $U_{th1}=U_{th2}=U_{th,0}$ und:

$$
U_{GS1}=U_{GS2}=U_{th,0}+\sqrt{\frac{2I_e}{K_1}}
=1\,\mathrm{V}+\sqrt{\frac{200\,\mu\mathrm{A}}{1{,}5\,\mathrm{mA}/\mathrm{V}^2}}
\approx 1{,}37\,\mathrm{V}
$$

Bei $T_3$ und $T_4$ gilt dagegen

$$
U_{th3}=U_{th4}
=
U_{th,0}+\gamma\left(\sqrt{U_{inv}-U_{BS3}}-\sqrt{U_{inv}}\right)
$$

$$
U_{BS3}=U_{GS1}
$$

$$
=1\,\mathrm{V}+0{,}5\,\sqrt{\mathrm{V}}\cdot\left(\sqrt{1{,}97\,\mathrm{V}}-\sqrt{0{,}6\,\mathrm{V}}\right)\approx 1{,}31\,\mathrm{V}
$$

und:

$$
U_{GS3}=U_{GS4}=U_{th3}+\sqrt{\frac{2I_e}{K_3}}
\approx 1{,}31\,\mathrm{V}+\sqrt{\frac{200\,\mu\mathrm{A}}{300\,\mu\mathrm{A}/\mathrm{V}^2}}
\approx 2{,}13\,\mathrm{V}
$$

Damit erhält man für den Vorwiderstand:

$$
R_V=\frac{U_b-U_{GS1}-U_{GS3}}{I_e}
\approx
\frac{5\,\mathrm{V}-1{,}37\,\mathrm{V}-2{,}13\,\mathrm{V}}{100\,\mu\mathrm{A}}
\approx 15\,\mathrm{k}\Omega
$$

Mit $r_{DS2}=r_{DS4}=U_A/I_a=500\,\mathrm{k}\Omega$ und

$$
S_4=\sqrt{2K_4I_a}
=
\sqrt{2\cdot 300\,\mu\mathrm{A}/\mathrm{V}^2\cdot 100\,\mu\mathrm{A}}
\approx 245\,\frac{\mu\mathrm{A}}{\mathrm{V}}
$$

$$
S_{B4}=\frac{\gamma S_4}{2\sqrt{U_{inv}-U_{BS4}}}
\qquad
U_{BS4}=-U_{GS2}
\qquad
=
\frac{0{,}5\,\sqrt{\mathrm{V}}\cdot S_4}{2\sqrt{1{,}97\,\mathrm{V}}}
\approx 44\,\frac{\mu\mathrm{A}}{\mathrm{V}^2}
$$

folgt für den Ausgangswiderstand:

$$
r_a\approx (S_4+S_{B4})\,r_{DS4}^2
\approx 289\,\frac{\mu\mathrm{A}}{\mathrm{V}}\cdot (500\,\mathrm{k}\Omega)^2
\approx 72\,\mathrm{M}\Omega
$$

Die Aussteuerungsgrenze beträgt:

$$
U_{a,min}=U_{GS1}+U_{GS3}-U_{th4}
\approx 1{,}37\,\mathrm{V}+2{,}13\,\mathrm{V}-1{,}31\,\mathrm{V}
\approx 2{,}2\,\mathrm{V}
$$

Bei einer Betriebsspannung von $5\,\mathrm{V}$ geht demnach fast die Hälfte der Betriebsspannung verloren.

Die n-Kanal-Kaskode-Stromquelle hat einen höheren Ausgangswiderstand, der jedoch mit einer unverhältnismäßig hohen Aussteuerungsgrenze verbunden ist, obwohl durch Vergrößern von $T_1$ und $T_2$ bereits eine Reduktion vorgenommen wurde. Möchte man eine Aussteuerungsgrenze wie bei einer npn-Kaskode-Stromquelle erreichen, kann man nur eine einfache n-Kanal-Stromquelle einsetzen, die mit $r_a=r_{DS2}=500\,\mathrm{k}\Omega$ einen erheblich geringeren Ausgangswiderstand aufweist; die npn-Kaskode-Stromquelle ist in diesem Fall um den Faktor 100 besser.

Darüber hinaus ist ein Vergleich des Kaskode-Stromspiegels mit dem einfachen Stromspiegel mit Gegenkopplung unter der Voraussetzung gleicher Aussteuerbarkeit interessant. Beim npn-Kaskode-Stromspiegel ist die Aussteuerungsgrenze mit $U_{a,min}=U_{BE}+U_{CE,sat}$ um $U_{BE}\approx 0{,}7\,\mathrm{V}$ größer als beim einfachen npn-Stromspiegel ohne Gegenkopplung; deshalb kann man eine Gegenkopplung mit $R_2=U_{BE}/I_a\approx 7\,\mathrm{k}\Omega$ ergänzen, um auf
<!-- page-import:0350:end -->

<!-- page-import:0351:start -->
314 4. Verstärker

dieselbe Aussteuerungsgrenze zu kommen. Der Ausgangswiderstand des einfachen npn-Stromspiegels beträgt in diesem Fall:

$$
r_a \approx r_{CE2}(1 + S R_2) = \frac{U_A}{I_a} \left(1 + \frac{I_a}{U_T}\frac{U_{BE}}{I_a}\right) \approx \frac{U_A U_{BE}}{U_T I_a} \approx 27\,\mathrm{M}\Omega < 50\,\mathrm{M}\Omega
$$

Damit ist der Ausgangswiderstand des einfachen npn-Stromspiegels zwar kleiner als der des npn-Kaskode-Stromspiegels, jedoch nur um den Faktor 2; in der Praxis erreicht man demnach mit beiden Varianten Ausgangswiderstände in derselben Größenordnung. Beim einfachen n-Kanal-Stromspiegel steht die Spannung $U_{GS2} \approx 1{,}37\,\mathrm{V}$ des n-Kanal-Kaskode-Stromspiegels für den Gegenkopplungswiderstand zur Verfügung, wenn man auch hier gleiche Aussteuerungsgrenzen erreichen will; daraus folgt $R_2 \approx 13{,}7\,\mathrm{k}\Omega$ und:

$$
r_a = r_{DS2}\left(1 + (S + S_B)\,R_2\right) \approx (S + S_B)\,R_2 r_{DS2}
$$

$$
\approx 289\,\frac{\mu\mathrm{A}}{\mathrm{V}} \cdot 13{,}7\,\mathrm{k}\Omega \cdot 500\,\mathrm{k}\Omega \approx 2\,\mathrm{M}\Omega \ll 72\,\mathrm{M}\Omega
$$

Damit ist der Ausgangswiderstand des einfachen n-Kanal-Stromspiegels mit Gegenkopplung erheblich kleiner als der des n-Kanal-Kaskode-Stromspiegels.

### 4.1.2.6 Wilson-Stromspiegel

Wenn hohe Ausgangswiderstände benötigt werden, kann man neben dem Kaskode-Stromspiegel auch den in Abb. 4.31a gezeigten Wilson-Stromspiegel einsetzen, für den nur drei Transistoren benötigt werden. Die Besonderheit des Wilson-Stromspiegels ist eine im Vergleich zu anderen Stromspiegeln sehr geringe Abhängigkeit des Übersetzungsverhältnisses von der Stromverstärkung bei Einsatz von Bipolartransistoren; der Wilson-Stromspiegel ist deshalb ein Präzisions-Stromspiegel. Man kann ihn zwar auch mit Mosfets aufbauen, erhält damit jedoch keine höhere Genauigkeit, weil bei Mosfets kein Gatestrom fließt; es bleibt als Vorteil nur der hohe Ausgangswiderstand.

#### 4.1.2.6.1 npn-Wilson-Stromspiegel

Bei der Berechnung macht man sich zu Nutze, dass der Wilson-Stromspiegel einen einfachen npn-Stromspiegel mit den Strömen $I'_e$ und $I'_a$ enthält; es gilt:

$$
\frac{I'_a}{I'_e} = \frac{1}{\frac{I_{S2}}{I_{S1}}\left(1 + \frac{1}{B}\right) + \frac{1}{B}}
$$

Mit

$$
I_e = I'_a + \frac{I_a}{B}, \qquad I'_e = I_a + \frac{I_a}{B}
$$

erhält man das Übersetzungsverhältnis:

$$
k_I = \frac{I_a}{I_e} =
\frac{B\left(\frac{I_{S2}}{I_{S1}} + \frac{1}{B+1}\right)}{\frac{I_{S2}}{I_{S1}} + B + \frac{1}{B+1}}
\qquad
B \gg 1
\qquad
\approx
\frac{B\,\frac{I_{S2}}{I_{S1}} + 1}{\frac{I_{S2}}{I_{S1}} + B}
\qquad (4.29)
$$
<!-- page-import:0351:end -->

<!-- page-import:0352:start -->
4.1 Schaltungen 315

Abb. 4.31. Wilson-Stromspiegel mit npn-Transistoren

a Schaltung

b Übersetzungsverhältnis

Die Größe des Transistors $T_3$ hat keinen Einfluss auf $k_I$. Abbildung 4.31b zeigt den Verlauf von $k_I$ in Abhängigkeit vom Größenverhältnis $I_{S2}/I_{S1}$.

Für $I_{S1}=I_{S2}$ erhält man:

$$
k_I = \frac{1}{1+\frac{2}{B^2+2B}} \;\;\overset{B\gg 1}{\approx}\;\; \frac{1}{1+\frac{2}{B^2}}
$$

Der Fehler beträgt hier nur $2/B^2$ im Gegensatz zu $2/B$ beim einfachen Stromspiegel und $4/B$ beim Kaskode-Stromspiegel. Beim 3-Transistor-Stromspiegel beträgt der Fehler ebenfalls nur $2/B^2$, allerdings nur unter der Annahme, dass alle drei Transistoren dieselbe Stromverstärkung haben; da jedoch $T_3$ in Abb. 4.20a mit einem sehr viel kleineren Strom betrieben wird, ist seine Stromverstärkung in der Praxis kleiner als die der anderen Transistoren. Dagegen fließt beim Wilson-Stromspiegel mit $I_{S1}=I_{S2}$ durch alle Transistoren etwa derselbe Strom und die Stromverstärkung ist bei richtiger Wahl der Größe bei allen Transistoren maximal. Dass der Wilson-Stromspiegel für $I_{S2}/I_{S1}=1$ den geringsten Fehler aufweist, folgt auch aus der Symmetrie der Kurve in Abb. 4.31b.

### 4.1.2.6.2 Ausgangskennlinie

Die Ausgangskennlinie des Wilson-Stromspiegels entspricht der des Kaskode-Stromspiegels, siehe Abb. 4.28 auf Seite 310; auch die Aussteuerungsgrenze ist dieselbe:

$$
U_{a,\min} = U_{BE} + U_{CE,sat} \approx 0{,}9\,\mathrm{V}
$$

### 4.1.2.6.3 Ausgangswiderstand

Zur Berechnung des Ausgangswiderstands des Wilson-Stromspiegels wird das in Abb. 4.32 gezeigte Kleinsignalersatzschaltbild verwendet. Es gelten folgende Zusammenhänge:

$$
r_{CE3}=\frac{U_A}{I_a}, \qquad r_{CE1}\approx \frac{U_A}{I_e}=\frac{k_I U_A}{I_a}=k_I r_{CE3}
$$

$$
S_2 \approx S_3=\frac{I_a}{U_T}, \qquad S_1 \approx \frac{I_e}{U_T}=\frac{I_a}{k_I U_T}=\frac{S_3}{k_I}
$$
<!-- page-import:0352:end -->

<!-- page-import:0353:start -->
316  4. Verstärker

**Abb. 4.32.** Kleinsignalersatzschaltbild eines Wilson-Stromspiegels

$$
r_{BE3} \;=\; \frac{\beta U_T}{I_a} \;=\; \frac{\beta}{S_3}
,\qquad
r_{BE1} \;\approx\; \frac{\beta U_T}{I_e} \;\approx\; \frac{k_I \beta U_T}{I_a} \;=\; \frac{k_I \beta}{S_3}
$$

Dabei ist $U_A$ die Early-Spannung, $U_T$ die Temperaturspannung, $\beta$ die Kleinsignalstromverstärkung der Transistoren und $k_I$ das Übersetzungsverhältnis des Stromspiegels. Eine Berechnung des Ausgangswiderstands liefert mit $\beta \gg 1$:

$$
r_a \;=\; \left.\frac{u_a}{i_a}\right|_{i_e=0}
\;\approx\;
r_{CE3}\left(1+\frac{\beta}{1+k_I}\right)
\;\approx\;
\frac{\beta\,r_{CE3}}{1+k_I}
\;\overset{k_I=1}{=}\;
\frac{\beta\,r_{CE3}}{2}
\qquad (4.30)
$$

Ein Vergleich mit (4.27) zeigt, dass der Wilson-Stromspiegel denselben Ausgangswiderstand hat wie der npn-Kaskode-Stromspiegel.

## 4.1.2.7 Dynamisches Verhalten

Wenn man einen Stromspiegel zur Signalübertragung einsetzt, ist neben dem Ausgangswiderstand der Frequenzgang des Übersetzungsverhältnisses und die Sprungantwort bei Großsignalaussteuerung interessant. Eine allgemeine Berechnung der Frequenzgänge ist jedoch sehr aufwendig und die Ergebnisse sind aufgrund der großen Anzahl an Parametern nur schwer zu interpretieren. Deshalb wird das grundsätzliche dynamische Verhalten der Stromspiegel an Hand von Simulationsergebnissen beschrieben. Verglichen werden vier npn-Stromspiegel: der einfache, der 3-Transistor, der Kaskode- und der Wilson-Stromspiegel, jeweils mit $k_I = 1$ und $I_a = 100\,\mu\text{A}$. Abbildung 4.33 zeigt die Frequenzgänge bei Kleinsignal-Kurzschluss am Ausgang ($U_{a,A} = 5\,\text{V}$ bzw. $u_a = 0$) und Abb. 4.34 die Sprungantworten von $I_a = 10\,\mu\text{A}$ auf $I_a = 100\,\mu\text{A}$.

Man erkennt, dass der einfache Stromspiegel die besten dynamischen Eigenschaften aufweist, da er sich wie ein Tiefpass ersten Grades verhält. Der Wilson-Stromspiegel erreicht aufgrund konjugiert komplexer Pole zwar eine etwas höhere Grenzfrequenz, jedoch nur zu Lasten der Sprungantwort, die ein Überschwingen von etwa 15% aufweist. Beim Kaskode-Stromspiegel ist die Grenzfrequenz etwa um den Faktor 2,5 geringer als beim einfachen Stromspiegel; folglich ist die Einschwingzeit entsprechend länger. Am schlechtesten ist der 3-Transistor-Stromspiegel; er hat die niedrigste Grenzfrequenz und
<!-- page-import:0353:end -->

<!-- page-import:0354:start -->
4.1 Schaltungen 317

**Abb. 4.33.** Frequenzgänge von npn-Stromspiegeln mit $k_I = 1$ bei Kleinsignal-Kurzschluss am Ausgang

ein Überschwingen von mehr als 20%. Ursache hierfür ist der geringe Ruhestrom des Transistors $T_3$ in Abb. 4.20a, der eine entsprechend geringe Transitfrequenz zur Folge hat.

Die Zahlenwerte für die Grenzfrequenz, die Einschwingzeit und das Überschwingen hängen natürlich von den Parametern der verwendeten Transistoren ab. Mit anderen Parametern erhält man zwar andere Werte, jedoch nahezu identische Relationen beim Vergleich der Stromspiegel.

## 4.1.2.8 Weitere Stromspiegel und Stromquellen

Nachdem mit dem Kaskode- und dem Wilson-Stromspiegel bereits sehr hohe Ausgangswiderstände erreicht werden, zielen weitere Varianten vor allem in Richtung einer Verringerung der Aussteuerungsgrenze $U_{a,min}$. Zwar kann man beim Kaskode- und beim

**Abb. 4.34.** Sprungantworten von npn-Stromspiegeln
<!-- page-import:0354:end -->

<!-- page-import:0355:start -->
318 4. Verstärker

**a** Prinzip  **b** mit Widerstand

**Abb. 4.35.** Kaskode-Stromspiegel mit Vorspannung

Wilson-Stromspiegel die Aussteuerungsgrenze durch eine exzessive Vergrößerung der Transistoren geringfügig verringern, allerdings ist diese Methode aufgrund des unverhältnismäßig hohen Platzbedarfs in einer integrierten Schaltung ineffektiv und teuer. Deshalb wurden Stromspiegel entwickelt, die mit $U_{a,min} \approx 2\,U_{CE,sat}$ bzw. $U_{a,min} \approx 2\,U_{DS,ab}$ arbeiten.

#### 4.1.2.8.1 Kaskode-Stromspiegel mit Vorspannung

Ersetzt man beim Kaskode-Stromspiegel nach Abb. 4.27a auf Seite 308 den Transistor $T_3$ durch eine Spannungsquelle mit der Spannung $U_{CE,sat}$, erhält man den in Abb. 4.35a gezeigten Stromspiegel mit Vorspannung. Aus der Maschengleichung $U_{CE,sat} + U_{BE1} = U_{CE2,sat} + U_{BE4}$ und $U_{BE1} \approx U_{BE4}$ folgt $U_{CE2,sat} \approx U_{CE,sat}$ und daraus:

$$
U_{a,min} = U_{CE2,sat} + U_{CE4,sat} = 2\,U_{CE,sat} \approx 0{,}4\,\mathrm{V}
$$

Bei konstantem Eingangsstrom, d.h. Einsatz des Stromspiegels als Stromquelle, kann man die Vorspannung mit einem Widerstand erzeugen, siehe Abb. 4.35b; dabei gilt bei Vernachlässigung des Basisstroms von $T_4$:

$$
R_1 \approx \frac{U_{CE2,sat}}{I_e}
$$

Das Übersetzungsverhältnis und der Ausgangswiderstand bleiben nahezu unverändert, siehe (4.25) und (4.27). Da die Kollektor-Emitter-Spannungen von $T_1$ und $T_2$ nicht mehr näherungsweise gleich sind wie beim Kaskode-Stromspiegel, hängt das Übersetzungsverhältnis geringfügig von der Early-Spannung der Transistoren ab.

Beim n-Kanal-Kaskode-Stromspiegel nach Abb. 4.27b kann man in gleicher Weise vorgehen; in diesem Fall gilt

$$
U_{a,min} = U_{DS2,ab} + U_{DS4,ab} = \sqrt{2I_a}\left(\frac{1}{\sqrt{K_2}} + \frac{1}{\sqrt{K_4}}\right)
$$

und:

$$
R_1 = \frac{U_{DS2,ab}}{I_e}
$$
<!-- page-import:0355:end -->

<!-- page-import:0356:start -->
4.1 Schaltungen 319

a mit npn-Transistoren  
b mit n-Kanal-Mosfets

**Abb. 4.36.** Kaskode-Stromspiegel mit Vorspannungszweig

Man kann die Vorspannung auch mit einem separaten *Vorspannungszweig* erzeugen, siehe Abb. 4.36; dabei muss in Abb. 4.36a

$$
U_V \approx U_{BE5} + I_0 R_1 \;>\; U_{CE2,sat} + U_{BE4}
$$

und in Abb. 4.36b

$$
U_V \;=\; U_{GS5} + I_0 R_1 \;>\; U_{DS2,ab} + U_{GS4}
$$

gelten. Da die Vorspannung separat erzeugt wird, können die Schaltungen im Gegensatz zu der in Abb. 4.35b auch mit variablen Eingangströmen, d.h. als Stromspiegel, betrieben werden, wenn sie so ausgelegt sind, dass die obigen Bedingungen auch bei maximalem Strom, d.h. bei maximalem $U_{BE4}$ bzw. $U_{GS4}$, erfüllt sind. Die Schaltungen arbeiten auch ohne den Transistor $T_3$; allerdings sind dann die Kollektor-Emitter- bzw. Drain-Source-Spannungen von $T_1$ und $T_2$ nicht mehr gleich und das Übersetzungsverhältnis hängt geringfügig von der Early-Spannung der Transistoren ab. Bei Verwendung von Mosfets kann $R_1$ entfallen, wenn man $I_0$ so groß und die Größe von $T_5$ so klein wählt, dass $U_{GS5} > U_{DS2,ab} + U_{GS4}$ gilt.

## 4.1.2.8.2 Doppel-Kaskode-Stromspiegel

npn-Doppel-Kaskode-Stromspiegel

Abb. 4.37a zeigt den *npn-Doppel-Kaskode-Stromspiegel*; dabei wird im Vergleich zum Kaskode-Stromspiegel der Kollektor von $T_4$ an die Betriebsspannung $U_b$ angeschlossen und eine zweite Kaskode mit $T_5$ und $T_6$ ergänzt. Wenn $T_5$ und $T_6$ mit $U_{CE} > U_{CE,sat}$ betrieben werden, erhält man das Übersetzungsverhältnis

$$
k_I \;=\; \frac{I_a}{I_e} \;\approx\; \frac{I_{S5}}{I_{S1}}
$$

und den Ausgangswiderstand:

$$
r_a \;=\; \left.\frac{u_a}{i_a}\right|_{i_e=0} \;\approx\; \beta\, r_{CE6} \;=\; \frac{\beta\, U_A}{I_a}
$$
<!-- page-import:0356:end -->

<!-- page-import:0357:start -->
320  4. Verstärker

a normale Ausführung

b mit Widlar-Stufe

**Abb. 4.37.** npn-Doppel-Kaskode-Stromspiegel

Hier tritt kein Faktor $(1 + k_I)$ wie beim Kaskode-Stromspiegel auf, weil eine Rückwirkung von $T_6$ auf den Referenzzweig durch $T_4$ verhindert wird.

Man kann nun die Größen der Transistoren so wählen, dass $T_5$ mit $U_{CE5} \approx U_{CE,sat}$ arbeitet und eine Aussteuerungsgrenze von

$$
U_{a,\min} = U_{CE5,sat} + U_{CE6,sat} = 2\,U_{CE,sat} \approx 0{,}4\,\mathrm{V}
$$

erreicht wird. Ausgehend von der Maschengleichung

$$
U_{BE1} + U_{BE3} = U_{BE4} + U_{CE5} + U_{BE6}
$$

erhält man mit

$$
I_{C1} \approx I_{C3} \approx I_e
$$

$$
I_{C4} \approx I_{C2} \approx I_e \frac{I_{S2}}{I_{S1}}
$$

$$
I_{C5} \approx I_{C6} = I_a = k_I I_e
$$

und $U_{BE} \approx U_T \ln (I_C/I_S)$:

$$
U_{CE5} \approx U_T \ln \frac{I_{S4} I_{S6}}{k_I I_{S2} I_{S3}}
$$

Für die Größenverhältnisse in Abb. 4.37a erhält man:

$$
U_{CE5} \approx U_T \ln \frac{10 \cdot 10}{1 \cdot 1 \cdot 1} = U_T \ln 100 \approx 26\,\mathrm{mV} \cdot 4{,}6 \approx 120\,\mathrm{mV}
$$

Diese Spannung liegt zwar unterhalb der bisher angenommenen Sättigungsspannung $U_{CE,sat} \approx 0{,}2\,\mathrm{V}$, ist aber in der Praxis meist ausreichend. Man erkennt dies, wenn man den Ausgangswiderstand und das Übersetzungsverhältnis in Abhängigkeit von $U_{CE5}$ betrachtet, siehe Abb. 4.38: für $U_{CE} \approx 120\,\mathrm{mV}$ ist das Übersetzungsverhältnis nahezu Eins und der Ausgangswiderstand beträgt mit $r_a \approx 30\,\mathrm{M}\Omega$ ein Drittel des maximal möglichen Wertes. Mit $U_{CE} = 200\,\mathrm{mV}$ werden zwar bessere Werte erreicht, allerdings muss man dazu die Größe 50 für $T_4$ und $T_6$ wählen:
<!-- page-import:0357:end -->

<!-- page-import:0358:start -->
4.1 Schaltungen 321

**Abb. 4.38.** Abhängigkeit des Übersetzungsverhältnisses $k_I$ und des Ausgangswiderstands $r_a$ von $U_{CE5}$ beim npn-Doppel-Kaskode-Stromspiegel

$$
U_{CE5} \approx U_T \ln \frac{50 \cdot 50}{1 \cdot 1 \cdot 1} = U_T \ln 2500 \approx 200\,\mathrm{mV}
$$

In integrierten Schaltungen werden Transistoren dieser Größe wegen des hohen Platzbedarfs nur dann eingesetzt, wenn es für die Funktion der Schaltung unbedingt erforderlich ist. Man wählt für $T_4$ und $T_5$ im allgemeinen dieselbe Größe, weil dadurch der Platzbedarf für einen geforderten Wert $U_{CE5}$ minimal wird.

Ein Nachteil der Schaltung in Abb. 4.37a ist die hohe Ausgangskapazität, die durch die Größe von $T_6$ verursacht wird. Will man $T_6$ um den Faktor 10 auf die Größe 1 verkleinern, muss man entweder $T_4$ um den Faktor 10 auf die Größe 100 vergrößern oder den Strom $I_{C4} \approx I_{C2}$ um den Faktor 10 reduzieren. Letzteres erreicht man, indem man $T_2$ um den Faktor 10 verkleinert oder, wenn dies nicht möglich ist, weil $T_2$ bereits die minimale Größe hat, alle anderen Transistoren entsprechend vergrößert. Soll der Stromspiegel als Stromquelle betrieben werden, kann man $I_{C2}$ auch dadurch reduzieren, dass man $T_2$ mit einem Gegenkopplungswiderstand versieht; dadurch erhält man den in Abb. 4.37b gezeigten Doppel-Kaskode-Stromspiegel mit Widlar-Stufe.

In Abb. 4.37a kann man den Kollektor von $T_4$ auch als zusätzlichen Ausgang verwenden; dann ist $I_{C4}$ der Ausgangsstrom eines Kaskode-Stromspiegels mit $k_I \approx I_{S2}/I_{S1}$ und $I_{C6}$ der Ausgangsstrom des Doppel-Kaskode-Stromspiegels mit $k_I \approx I_{S5}/I_{S1}$.

## n-Kanal-Doppel-Kaskode-Stromspiegel

Abbildung 4.39 zeigt den n-Kanal-Doppel-Kaskode-Stromspiegel. Wenn $T_5$ und $T_6$ mit $U_{DS} > U_{DS,\mathrm{ab}}$ betrieben werden, erhält man das Übersetzungsverhältnis

$$
k_I = \frac{I_a}{I_e} \approx \frac{K_5}{K_1}
$$

und den Ausgangswiderstand:

$$
r_a = \left.\frac{u_a}{i_a}\right|_{i_e=0} \approx (S_6 + S_{B6})\,r_{DS6}^{\,2}
$$
<!-- page-import:0358:end -->

<!-- page-import:0359:start -->
322  4. Verstärker

**Abb. 4.39.**  
n-Kanal-Doppel-Kaskode-Stromspiegel

Vernachlässigt man die Substrat-Steilheit $S_{B6}$, folgt mit $S_6=\sqrt{2K_6I_a}$ und $r_{DS6}=U_A/I_a$:

$$
S_{B6}\ll S_6
$$

$$
r_a \approx U_A^2 \sqrt{\frac{2K_6}{I_a^3}}
$$

Für die Schaltung in Abb. 4.39 erhält man mit $K_6=50\cdot K=1{,}5\,\mathrm{mA}/\mathrm{V}^2,\ U_A=50\,\mathrm{V}$ und $I_a=100\,\mu\mathrm{A}$ einen Ausgangswiderstand von $r_a\approx 140\,\mathrm{M}\Omega$.

Die Aussteuerungsgrenze wird minimal, wenn man $T_5$ mit $U_{DS5}=U_{DS5,ab}$ betreibt:

$$
U_{a,\min}=U_{DS5,ab}+U_{DS6,ab}
$$

Aus der Maschengleichung

$$
U_{GS1}+U_{GS3}=U_{GS4}+U_{DS5}+U_{GS6}
$$

erhält man mit

$$
U_{GS}=U_{th}+\sqrt{\frac{2I_D}{K}}
$$

und $I_{D1}=I_{D3}=I_e,\ I_{D2}=I_{D4}=I_e\,K_2/K_1$ und $I_{D5}=I_{D6}=I_a=I_e\,K_5/K_1$:

$$
U_{DS5}=U_{th1}+U_{th3}-U_{th4}-U_{th6}
$$

$$
\qquad +\sqrt{\frac{2I_a}{K_6}}\left(\sqrt{\frac{K_1K_6}{K_3K_5}}+\sqrt{\frac{K_6}{K_5}}-\sqrt{\frac{K_2K_6}{K_4K_5}}-1\right)
$$

Für die Schaltung in Abb. 4.39 erhält man mit $\Delta U_{th}=U_{th1}+U_{th3}-U_{th4}-U_{th6}$:

$$
U_{DS5}\approx \Delta U_{th}+\sqrt{\frac{2I_a}{K_6}}\left(\sqrt{5}+\sqrt{5}-\sqrt{0{,}1}-1\right)\approx \Delta U_{th}+1{,}15\,\mathrm{V}
$$

$$
\frac{K_6=1{,}5\,\mathrm{mA}/\mathrm{V}^2}{I_a=100\,\mu\mathrm{A}}
$$

Die Spannung $\Delta U_{th}$ fasst die durch den Substrat-Effekt verursachten Unterschiede in den Schwellenspannungen zusammen; sie ist immer negativ und kann nicht geschlossen berechnet werden. Eine Simulation mit *PSpice* liefert $\Delta U_{th}\approx -0{,}3\,\mathrm{V}$ und $U_{DS5}=0{,}85\,\mathrm{V}$; damit gilt:

$$
U_{DS5}>U_{DS5,ab}=\sqrt{\frac{2I_{D5}}{K_5}}=\sqrt{\frac{2I_a}{K_5}}\approx 0{,}82\,\mathrm{V}
$$
<!-- page-import:0359:end -->

<!-- page-import:0360:start -->
4.1 Schaltungen 323

**Abb. 4.40.** Geregelter n-Kanal-Kaskode-Stromspiegel

a Prinzip

b mit Sourceschaltung

Mit $U_{DS6,ab} = U_{GS6} - U_{th6} = \sqrt{2I_a/K_6} \approx 0{,}37\ \mathrm{V}$ erhält man eine Aussteuerungsgrenze von $U_{a,min} = U_{DS5,ab} + U_{DS6,ab} \approx 1{,}2\ \mathrm{V}$. Eine weitere Reduktion von $U_{a,min}$ wird erreicht, wenn man die Mosfets $T_1$, $T_2$ und $T_5$ proportional größer macht; dadurch verringert sich $U_{DS5,ab}$ entsprechend der Zunahme von $K_5$.

#### 4.1.2.8.3 Geregelter Kaskode-Stromspiegel

Wenn man beim Kaskode-Stromspiegel in Abb. 4.27b den Mosfet $T_3$ entfernt und die Gate-Spannung von $T_4$ mit Hilfe eines Regelverstärkers einstellt, erhält man den in Abb. 4.40a gezeigten geregelten Kaskode-Stromspiegel; dabei wird die Gate-Spannung von $T_4$ bei ausreichend hoher Verstärkung $A$ des Regelverstärkers so eingestellt, dass $U_{DS2} \approx U_{soll}$ gilt. Gibt man $U_{soll} \approx U_{DS2,ab}$ vor, erhält man auf einfache Weise einen Stromspiegel mit minimaler Aussteuerungsgrenze $U_{a,min}$.

Wenn man als Regelverstärker eine einfache Sourceschaltung einsetzt, erhält man die Schaltung in Abb. 4.40b; als Spannung $U_{soll}$ tritt dabei die Gate-Source-Spannung von $T_3$ im Arbeitspunkt auf:

$$
U_{soll} = U_{GS3} = U_{th3} + \sqrt{\frac{2I_0}{K_3}}
$$

Im allgemeinen werden alle Mosfets mit $U_{GS} < 2U_{th}$ und $U_{DS,ab} = U_{GS} - U_{th} < U_{th}$ betrieben; in diesem Fall gilt $U_{soll} = U_{GS3} > U_{DS2,ab}$, d.h. $T_2$ arbeitet im Abschnürbereich. Will man $U_{soll}$ klein halten, um eine möglichst geringe Aussteuerungsgrenze zu erreichen, muss man den Strom $I_0$ klein und den Mosfet $T_3$ groß wählen; dadurch wird jedoch die Bandbreite des Regelverstärkers sehr klein. In der Praxis muss man je nach Anwendung einen sinnvollen Kompromiss zwischen Aussteuerbarkeit und Bandbreite finden.

Der Ausgangswiderstand wird mit Hilfe des Kleinsignalersatzschaltbilds in Abb. 4.41 berechnet; man erhält:

$$
r_a = \left.\frac{u_a}{i_a}\right|_{i_e=0} \approx r_{DS4}\left(1 + (S_4(1 + A) + S_{B4})\,r_{DS2}\right)
$$

$$
\approx AS_4r_{DS4}^2
$$

$r_{DS2} = r_{DS4}$

$A \gg 1$
<!-- page-import:0360:end -->

<!-- page-import:0361:start -->
324  4. Verstärker

**Abb. 4.41.** Kleinsignalersatzschaltbild des geregelten n-Kanal-Kaskode-Stromspiegels

Der Ausgangswiderstand ist demnach um die Verstärkung $A$ größer als beim Kaskode-Stromspiegel. Wenn man als Regelverstärker eine einfache Sourceschaltung nach Abb. 4.40b einsetzt, gilt $A = S_3 r_{DS3} = \sqrt{2K_3/I_0}\, U_A$; mit $I_0 = 10\,\mu\mathrm{A}$, $K_3 = 30\,\mu\mathrm{A}/\mathrm{V}^2$ ($T_3$ mit Größe 1) und $U_A = 50\,\mathrm{V}$ erhält man $A \approx 120$. Damit erreicht man Ausgangswiderstände im G$\Omega$-Bereich.

Der geregelte Kaskode-Stromspiegel kann prinzipiell auch mit npn-Transistoren aufgebaut werden, allerdings kann man in diesem Fall keine einfache Emitterschaltung als Regelverstärker einsetzen. Für eine korrekte Funktion muss nämlich der Eingangswiderstand $r_{e,RV}$ des Regelverstärkers größer sein als der Ausgangswiderstand von $T_2$ ($r_{DS2}$ beim Mosfet bzw. $r_{CE2}$ beim Bipolartransistor). Diese Bedingung ist bei Mosfets automatisch erfüllt, während man bei Bipolartransistoren erheblichen Aufwand treiben muss, um einen ausreichend hohen Eingangswiderstand $r_{e,RV}$ zu erreichen. Ähnliches gilt am Ausgang: bei Mosfets wird der Regelverstärker durch $T_4$ nicht belastet und kann demnach einen hochohmigen Ausgang haben, während bei Bipolartransistoren der Eingangswiderstand von $T_4$ einen entsprechend niederohmigen Verstärker-Ausgang erfordert. Ein bipolarer Regelverstärker muss deshalb mehrstufig aufgebaut werden. Mit einem idealen Verstärker ($r_{e,RV} = \infty$ und $r_{a,RV} = 0$) erreicht man denselben Ausgangswiderstand wie beim geregelten n-Kanal-Kaskode-Stromspiegel: $r_a \approx A S_4 r_{CE4}^2$.

## 4.1.2.9 Stromspiegel für diskrete Schaltungen

In diskreten Schaltungen kann man nicht mit den Größenverhältnissen der Transistoren arbeiten, weil die Sättigungssperrströme bzw. Steilheitskoeffizienten auch bei Transistoren desselben Typs stark schwanken $^{13}$. Man muss deshalb grundsätzlich Gegenkopplungswiderstände einsetzen und das Übersetzungsverhältnis mit den Widerständen einstellen. Wegen der höheren Early-Spannung und der geringeren Aussteuerungsgrenze werden fast ausschließlich Bipolartransistoren eingesetzt.

13 Beim rechnergestützten Entwurf diskreter Schaltungen muss man beachten, dass in der Simulation alle Transistoren eines Typs die gleichen Daten besitzen, weil dasselbe Modell verwendet wird. Deshalb muss die Unempfindlichkeit gegenüber Parameterschwankungen durch gezielte Parametervariation bei *einzelnen* Transistoren nachgewiesen werden; dazu eignet sich z.B. die *Monte-Carlo-Analyse*, bei der bestimmte Parameter stochastisch variiert werden.
<!-- page-import:0361:end -->

<!-- page-import:0362:start -->
4.1 Schaltungen 325

a mit Miller-Kapazität

b mit äquivalenten Kapazitäten

**Abb. 4.42.** Miller-Effekt bei einer Emitterschaltung

### 4.1.3 Kaskodeschaltung

Bei der Berechnung der Grenzfrequenzen der Emitter- und der Sourceschaltung in den Abschnitten 2.4.1 bzw. 3.4.1 erweist sich der Miller-Effekt als besonders störend. Er kommt dadurch zustande, dass über eine zwischen Basis und Kollektor bzw. Gate und Drain angeschlossenen Miller-Kapazität $C_M$ die Spannung

$$
u_e-u_a = \underbrace{u_e-Au_e}_{A<0} = u_e(1+|A|) = -u_a\left(1+\frac{1}{|A|}\right) \overset{|A|\gg 1}{\approx} -u_a
$$

abfällt; dabei ist $A<0$ die Verstärkung der Emitter- bzw. Sourceschaltung. Die Miller-Kapazität wirkt sich deshalb eingangsseitig mit dem Faktor $(1+|A|)$ und ausgangsseitig mit dem Faktor $(1+1/|A|)\approx 1$ aus; Abb. 4.42 zeigt dies am Beispiel einer Emitterschaltung $^{14}$. Die äquivalente Eingangskapazität $C_M(1+|A|)$ bildet zusammen mit dem Innenwiderstand $R_g$ der Signalquelle einen Tiefpass mit relativ niedriger Grenzfrequenz; dadurch wird die Grenzfrequenz der Schaltung bei mittleren und vor allem bei hohen Innenwiderständen erheblich reduziert. Beim Bipolartransistor wirkt die Kollektorkapazität $C_C$ und beim Fet die Gate-Drain-Kapazität $C_{GD}$ als Miller-Kapazität.

Abhilfe schafft die Kaskodeschaltung, bei der eine Emitter- und eine Basis- bzw. eine Source- und eine Gateschaltung in Reihe geschaltet werden; Abb. 4.43 zeigt die resultierenden Schaltungen. Im Arbeitspunkt fließt durch beide Transistoren derselbe Strom, wenn man bei der npn-Kaskodeschaltung den Basisstrom von $T_2$ vernachlässigt: $I_{C1,A} \approx I_{C2,A} \approx I_0$ bzw. $I_{D1,A} = I_{D2,A} = I_0$. Damit erhält man für die npn-Kaskodeschaltung mit

$$
A = \frac{u_a}{u_e} = A_{Emitter}\,\frac{r_{e,Basis}}{r_{a,Emitter}+r_{e,Basis}}\,A_{Basis}
$$

$$
= -S_1r_{CE1}\,\frac{1/S_2}{r_{CE1}+1/S_2}\,S_2R_C \overset{r_{CE1}\gg 1/S_2}{\approx} -S_1R_C
$$

dieselbe Verstärkung wie bei einer einfachen Emitterschaltung. Die Betriebsverstärkung der Emitterschaltung in der Kaskode beträgt dagegen nur:

$$
A_{B,Emitter} \approx -S_1r_{e,Basis} = -S_1/S_2 \approx -1
$$

14 Man beachte, dass die Spannungen in Abb. 4.42 Großsignalspannungen sind, aber nur der Kleinsignalanteil in die Rechnung eingeht.
<!-- page-import:0362:end -->

<!-- page-import:0363:start -->
326 4. Verstärker

a mit npn-Transistoren

b mit n-Kanal-Mosfets

**Abb. 4.43.** Kaskodeschaltung

Damit folgt für die äquivalente Eingangskapazität $C_M(1 + |A|) \approx 2C_M$, d.h. der Miller-Effekt wird vermieden. Bei der Basisschaltung in der Kaskode tritt kein Miller-Effekt auf, weil die Basis von $T_2$ auf konstantem Potential liegt; die Kollektorkapazität von $T_2$ wirkt sich deshalb nur am Ausgang aus. Diese Eigenschaften gelten für die n-Kanal-Kaskodeschaltung in gleicher Weise. Allerdings sind die Steilheiten $S_1$ und $S_2$ in diesem Fall nur gleich, wenn die Größen der Mosfets gleich sind: $K_1 = K_2$.

Zur Arbeitspunkteinstellung wird eine Spannungsquelle $U_0$ benötigt, siehe Abb. 4.43. Die Spannung $U_0$ muss so gewählt werden, dass

$$
U_{CE1} = U_0 - U_{BE2} > U_{CE1,sat}
\quad \text{bzw.} \quad
U_{DS1} = U_0 - U_{GS2} > U_{DS1,ab}
$$

gilt, damit $T_1$ im Normalbetrieb bzw. Abschnürbereich arbeitet; daraus folgt $^{15}$:

$$
U_0 >
\begin{cases}
U_{CE1,sat} + U_{BE2} \approx 0{,}8 \ldots 1\,\mathrm{V} \\
U_{DS1,ab} + U_{GS2} = U_{GS1} - U_{th1} + U_{GS2} \approx 2 \ldots 3\,\mathrm{V}
\end{cases}
$$

Man wählt $U_0$ möglichst nahe an der unteren Grenze, damit die Aussteuerbarkeit am Ausgang maximal wird. Bei der npn-Kaskodeschaltung wird oft der Spannungsabfall über zwei Dioden verwendet, d.h. $U_0 \approx 1{,}4\,\mathrm{V}$, wenn die damit verbundene geringere Aussteuerbarkeit nicht stört.

## 4.1.3.1 Kleinsignalverhalten der Kaskodeschaltung

### 4.1.3.1.1 Kaskodeschaltung mit einfacher Stromquelle

In integrierten Schaltungen werden anstelle der Widerstände $R_C$ und $R_D$ Stromquellen eingesetzt; Abb. 4.44 zeigt die resultierenden Schaltungen bei Einsatz einer einfachen Stromquelle. Die Verstärkung hängt in diesem Fall von den Ausgangswiderständen $r_{aK}$ und $r_{aS}$ der Kaskode und der Stromquelle ab:

$$
A = -S_1 \,(r_{aK} \parallel r_{aS})
$$
<!-- page-import:0363:end -->

<!-- page-import:0364:start -->
327

# 4.1 Schaltungen

a mit npn-Transistoren

b mit n-Kanal-Mosfets

**Abb. 4.44.** Kaskodeschaltung mit einfacher Stromquelle

Der Ausgangswiderstand der Kaskode entspricht dem Ausgangswiderstand eines Stromspiegels mit Kaskode, siehe (4.23) und (4.24)$^{15}$:

$$
r_{aK} \approx
\left\{
\begin{array}{l}
\beta_2 r_{CE2}\\
(S_2 + S_{B2})\, r_{DS2}^2 \qquad \overset{S_2 \gg S_{B2}}{\approx} \qquad S_2 r_{DS2}^2
\end{array}
\right.
$$

Für die einfache Stromquelle gilt $r_{aS}=r_{CE3}$ bzw. $r_{aS}=r_{DS3}$. Damit erhält man für die Kaskodeschaltung mit einfacher Stromquelle:

*Kaskodeschaltung mit einfacher Stromquelle*

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
= -S_1\,(r_{aK}\parallel r_{aS})
\qquad \overset{r_{aS}\ll r_{aK}}{\approx} \qquad
\left\{
\begin{array}{l}
-S_1 r_{CE3}\\
-S_1 r_{DS3}
\end{array}
\right.
\qquad (4.31)
$$

$$
r_e=\frac{u_e}{i_e}=
\left\{
\begin{array}{l}
r_{BE1}\\
\infty
\end{array}
\right.
\qquad (4.32)
$$

$$
r_a=\left.\frac{u_a}{i_a}\right|_{u_e=0}
= r_{aS}\parallel r_{aK}
\qquad \overset{r_{aS}\ll r_{aK}}{\approx} \qquad
\left\{
\begin{array}{l}
r_{CE3}\\
r_{DS3}
\end{array}
\right.
\qquad (4.33)
$$

Bei der npn-Kaskode folgt mit $S_1 \approx I_0/U_T$ und $r_{CE3} \approx U_{A,pnp}/I_0$:

$$
A \approx -\frac{U_{A,pnp}}{U_T}
\qquad (4.34)
$$

$^{15}$ Die Werte für die npn- und die n-Kanal-Kaskode werden in einer Gleichung mit geschweifter Klammer übereinander angegeben.
<!-- page-import:0364:end -->

<!-- page-import:0365:start -->
328  4. Verstärker

Dabei ist $U_{A,pnp}$ die Early-Spannung des pnp-Transistors $T_3$ und $U_T$ die Temperaturspannung. Für die n-Kanal-Kaskode erhält man mit $S_1=\sqrt{2K_1I_0}$ und $r_{DS3}=U_{A,pK}/I_0$:

$$
A \approx -U_{A,pK}\sqrt{\frac{2K_1}{I_0}}=-\frac{2U_{A,pK}}{U_{GS1}-U_{th,nK}}
$$

(4.35)

Dabei ist $U_{A,pK}$ die Early-Spannung der p-Kanal-Mosfets und $U_{th,nK}$ die Schwellenspannung der n-Kanal-Mosfets. Wenn npn- und pnp-Transistoren bzw. n-Kanal- und p-Kanal-Mosfets dieselbe Early-Spannung haben, entspricht der Betrag der Verstärkung der maximalen Verstärkung $\mu$ der Emitter- bzw. Sourceschaltung:

$$
|A|\approx \mu =
\left\{
\begin{array}{l}
S\,r_{CE}=\dfrac{U_A}{U_T}\approx 1000\ldots 6000\\[6pt]
S\,r_{DS}=\dfrac{2U_A}{U_{GS}-U_{th}}\approx 40\ldots 200
\end{array}
\right.
$$

Hier macht sich einmal mehr die geringe Steilheit der Mosfets im Vergleich zum Bipolartransistor negativ bemerkbar.

#### 4.1.3.1.2 Kaskodeschaltung mit Kaskode-Stromquelle

Die Verstärkung nimmt weiter zu, wenn man den Ausgangswiderstand $r_{aS}$ durch Einsatz einer Stromquelle mit Kaskode auf

$$
r_{aS}\approx
\left\{
\begin{array}{l}
\beta_3 r_{CE3}\\[4pt]
(S_3+S_{B3})\,r_{DS3}^2 \qquad s_3 \gg s_{B3} \qquad \approx \qquad S_3 r_{DS3}^2
\end{array}
\right.
$$

erhöht; damit folgt für die in Abb. 4.45 gezeigte Kaskodeschaltung mit Kaskode-Stromquelle:

*Kaskodeschaltung mit Kaskode-Stromquelle*

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}=-S_1r_a \approx
\left\{
\begin{array}{l}
-S_1\,(\beta_2 r_{CE2}\parallel \beta_3 r_{CE3})\\[4pt]
-S_1\,(S_2 r_{DS2}^2 \parallel S_3 r_{DS3}^2)
\end{array}
\right.
$$

(4.36)

$$
r_a=\left.\frac{u_a}{i_a}\right|_{u_e=0}=r_{aS}\parallel r_{aK}\approx
\left\{
\begin{array}{l}
\beta_2 r_{CE2}\parallel \beta_3 r_{CE3}\\[4pt]
S_2 r_{DS2}^2 \parallel S_3 r_{DS3}^2
\end{array}
\right.
$$

(4.37)

Der Eingangswiderstand $r_e$ ist durch (4.32) gegeben.

Die Bezeichnung *Kaskodeschaltung mit Kaskode-Stromquelle* ist streng genommen nicht korrekt, weil in Abb. 4.45 ein Stromspiegel mit Kaskode und kein Kaskode-Stromspiegel als Stromquelle verwendet wird; die korrekte Bezeichnung *Kaskodeschaltung mit Stromquelle mit Kaskode* ist jedoch umständlich. Setzt man einen *echten* Kaskode-Stromspiegel als Stromquelle ein, ist die Verstärkung der npn-Kaskode etwa um den Faktor $2/3$ geringer, weil der Kaskode-Stromspiegel nach (4.27) bei einem Übersetzungsverhältnis $k_I=1$ nur einen Ausgangswiderstand von $r_{aS}=\beta_3 r_{CE3}/2$ anstelle von $r_{aS}=\beta_3 r_{CE3}$ beim Stromspiegel mit Kaskode erreicht. Bei der n-Kanal-Kaskode sind beide Varianten äquivalent.

Durch Einsetzen der Kleinsignalparameter erhält man für die Kaskodeschaltung mit Bipolartransistoren
<!-- page-import:0365:end -->

<!-- page-import:0366:start -->
4.1 Schaltungen 329

a mit npn-Transistoren

b mit n-Kanal-Mosfets

**Abb. 4.45.** Kaskodeschaltung mit Kaskode-Stromquelle

$$
A \approx -\frac{1}{U_T\left(\frac{1}{\beta_{npn}U_{A,npn}}+\frac{1}{\beta_{pnp}U_{A,pnp}}\right)}
\qquad (4.38)
$$

und für die Kaskodeschaltung mit Mosfets gleicher Größe $(K_1 = K_2 = K_3 = K)$:

$$
A \approx -\frac{2K}{I_D\left(\frac{1}{U_{A,nK}^2}+\frac{1}{U_{A,pK}^2}\right)}
= -\frac{4}{(U_{GS}-U_{th})^2\left(\frac{1}{U_{A,nK}^2}+\frac{1}{U_{A,pK}^2}\right)}
\qquad (4.39)
$$

Wenn die Early-Spannungen und Stromverstärkungen der npn- und pnp-Transistoren und die Early-Spannungen der n-Kanal- und p-Kanal-Mosfets gleich sind, folgt:

$$
|A| \approx
\begin{cases}
\frac{\beta S r_{CE}}{2}
= \frac{\beta U_A}{2U_T}
\overset{\beta \approx 100}{\approx}
50.000 \ldots 300.000 \\
\frac{S^2 r_{DS}^2}{2}
= 2\left(\frac{U_A}{U_{GS}-U_{th}}\right)^2
\approx 800 \ldots 20.000
\end{cases}
$$

Demnach kann man mit *einer* npn-Kaskodeschaltung eine Verstärkung im Bereich von $10^5 = 100\,\mathrm{dB}$ erreichen; mit einer n-Kanal-Kaskodeschaltung erreicht man dagegen maximal etwa $10^4 = 80\,\mathrm{dB}$.

#### 4.1.3.1.3 Betriebsverstärkung

Die hohe Verstärkung der Kaskodeschaltung ist eine Folge des hohen Ausgangswiderstands der Kaskode und der Stromquelle:

$$
r_a = r_{aK} \parallel r_{aS}
$$
<!-- page-import:0366:end -->

<!-- page-import:0367:start -->
330 4. Verstärker

Mit $\beta = 100$, $U_A = 100\,\mathrm{V}$ und $I_C = 100\,\mu\mathrm{A}$ erhält man für die npn-Kaskodeschaltung mit Kaskode-Stromquelle $r_a = \beta\, r_{CE}/2 = 50\,\mathrm{M}\Omega$ und mit $K = 300\,\mu\mathrm{A}/\mathrm{V}^2$, $U_A = 50\,\mathrm{V}$ und $I_D = 100\,\mu\mathrm{A}$ für die n-Kanal-Kaskodeschaltung mit Kaskode-Stromquelle $r_a = S\, r_{DS}'/2 = 31\,\mathrm{M}\Omega$; dabei werden gleiche Werte für die npn- und pnp- bzw. n- und p-Kanal-Transistoren angenommen.

Bei Betrieb mit einer Last $R_L$ wird nur dann eine Betriebsverstärkung

$$
A_B = A\, \frac{R_L}{r_a + R_L} = -S\,(r_a \parallel R_L)
$$

in der Größenordnung von $A$ erreicht, wenn $R_L$ ähnlich hoch ist wie $r_a$. In den meisten Fällen ist am Ausgang der Kaskodeschaltung eine weitere Verstärkerstufe mit dem Eingangswiderstand $r_{e,n}$ angeschlossen. Wird in einer CMOS-Schaltung eine Source- oder Drainschaltung als nächste Stufe eingesetzt, erreicht die Kaskodeschaltung wegen $R_L = r_{e,n} = \infty$ ohne besondere Maßnahmen die maximale Betriebsverstärkung $A_B = A$. In einer bipolaren Schaltung muss man eine oder mehrere Kollektorschaltungen zur Impedanzwandlung einsetzen; dabei gilt für jede Kollektorschaltung $r_a \approx R_g/\beta$, d.h. der Ausgangswiderstand nimmt mit jeder Kollektorschaltung um die Stromverstärkung $\beta$ ab. Mit $\beta = 100$ und $r_a = 50\,\mathrm{M}\Omega$ erhält man mit einer Kollektorschaltung $r_a \approx 500\,\mathrm{k}\Omega$ und mit zwei Kollektorschaltungen $r_a \approx 5\,\mathrm{k}\Omega$. In vielen Operationsverstärkern wird eine Kaskodeschaltung mit Kaskode-Stromquelle gefolgt von drei komplementären Kollektorschaltungen eingesetzt; damit erreicht man $A \approx 2 \cdot 10^5$ und $r_a \approx 50\,\Omega$.

## 4.1.3.2 Frequenzgang und Grenzfrequenz der Kaskodeschaltung

### 4.1.3.2.1 npn-Kaskodeschaltung

Abbildung 4.46 zeigt das vollständige Kleinsignalersatzschaltbild einer npn-Kaskodeschaltung mit den Transistoren $T_1$ und $T_2$ und der Stromquelle. Für die Transistoren wird das Kleinsignalmodell nach Abb. 2.41 auf Seite 81 verwendet, wobei hier auch die Substratkapazität $C_S$ berücksichtigt wird. Die Stromquelle wird durch den Ausgangswiderstand $r_{aS}$ und die Ausgangskapazität $C_{aS}$ beschrieben. Zur Berechnung des Frequenzgangs wird das Kleinsignalersatzschaltbild wie folgt vereinfacht:

- der Basis-Bahnwiderstand $R_{B2}$ des Transistors $T_2$ wird vernachlässigt;
- die Widerstände $r_{CE1}$, $r_{CE2}$ und $r_{aS}$ werden durch den bereits berechneten Ausgangswiderstand $r_a$ am Ausgang ersetzt, siehe (4.33) bei Einsatz einer einfachen Stromquelle bzw. (4.37) bei Einsatz einer Stromquelle mit Kaskode;
- die Kapazitäten $C_{aS}$ und $C_{S2}$ werden zu $C_a'$ zusammengefasst;
- die Widerstände $R_g$ und $R_{B1}$ werden zu $R_g'$ zusammengefasst;
- die gesteuerte Quelle $S_2 u_{BE2}$ wird durch zwei äquivalente Quellen ersetzt.

Damit erhält man das in Abb. 4.47 oben gezeigte vereinfachte Kleinsignalersatzschaltbild. Durch Umzeichnen folgt das in Abb. 4.47 unten gezeigte Ersatzschaltbild mit:

$$
C_a = C_{C2} + C_a' = C_{C2} + C_{S2} + C_{aS} = C_{C2} + C_{S2} + C_{C3} + C_{S3}
$$

$$
C_{ES} = C_{E2} + C_{S1}
$$

$$
r_{E2} = 1/S_2 \parallel r_{BE2}
$$

Die Vereinfachung ist nahezu äquivalent, lediglich die Vernachlässigung von $R_{B2}$ verursacht einen geringen Fehler.
<!-- page-import:0367:end -->

<!-- page-import:0368:start -->
4.1 Schaltungen 331

**Abb. 4.46.** Vollständiges Kleinsignalersatzschaltbild einer npn-Kaskodeschaltung

Aus der Zweiteilung des Kleinsignalersatzschaltbilds in Abb. 4.47 in einen eingangsseitigen und einen ausgangsseitigen Teil folgt, dass die Kaskodeschaltung praktisch rückwirkungsfrei ist; dadurch wird der Miller-Effekt vermieden. Der Frequenzgang setzt sich aus den Frequenzgängen $A_1(s)=u_{BE2}(s)/u_g(s)$ und $A_2(s)=u_a(s)/u_{BE2}(s)$ zusammen:

$$
A_B(s)=\frac{u_a(s)}{u_g(s)}=\frac{u_a(s)}{u_{BE2}(s)}\frac{u_{BE2}(s)}{u_g(s)}=A_2(s)A_1(s)
\qquad (4.40)
$$

Ohne Last erhält man für den ausgangsseitigen Frequenzgang:

$$
A_2(s)=\frac{u_a(s)}{u_{BE2}(s)}=-\frac{S_2 r_a}{1+s C_a r_a}
$$

Eingangsseitig entspricht das Kleinsignalersatzschaltbild der Kaskodeschaltung dem einer Emitterschaltung mit ohmsch-kapazitiver Last ($R_L=r_{E2}, C_L=C_{ES}$), wie ein Vergleich mit Abb. 2.84 auf Seite 130 zeigt. Durch Einsetzen von $r_{E2}/(1+s\,C_{ES}r_{E2})$ anstelle von $R'_C$ folgt aus (2.99) auf Seite 130 unter Berücksichtigung der Zählrichtung von $u_{BE2}$:

$$
A_1(s)=\frac{S_1 r_{E2}}{1+\dfrac{R'_g}{r_{BE1}}}\cdot\frac{1-s\,\dfrac{C_{C1}}{S_1}}{1+s\,c_1+s^2 c_2}
$$

$$
c_1=\left(C_{E1}+C_{C1}(1+S_1 r_{E2})\right)\left(R'_g \parallel r_{BE1}\right)+\frac{C_{C1} r_{E2} r_{BE1}}{R'_g+r_{BE1}}+C_{ES} r_{E2}
$$

$$
c_2=\left(C_{E1} C_{C1}+C_{E1} C_{ES}+C_{C1} C_{ES}\right)\left(R'_g \parallel r_{BE1}\right) r_{E2}
$$

Es gilt $S_1 \approx S_2 \approx 1/r_{e2}$, da beide Transistoren mit nahezu gleichem Strom betrieben werden; daraus folgt $S_1 r_{E2} \approx 1$. Durch Vernachlässigen der Nullstelle, des $s^2$-Terms im
<!-- page-import:0368:end -->

<!-- page-import:0369:start -->
332  4. Verstärker

**Abb. 4.47.** Vereinfachtes Kleinsignalersatzschaltbild der npn-Kaskodeschaltung

Nenner und des mittleren Terms in $c_1$ erhält man eine Näherung durch einen Tiefpass ersten Grades:

$$
A_1(s) \approx \frac{r_{BE1}}{R_g' + r_{BE1}} \; \frac{1}{1 + s \left( (C_{E1} + 2C_{C1}) \left(R_g' \parallel r_{BE1}\right) + \frac{C_{ES}}{S_1} \right)}
$$

Mit $R_g' = R_g + R_{B1} \approx R_g$, einer ohmsch-kapazitiven Last und unter Annahme gleicher Kleinsignalparameter für alle Transistoren erhält man das in Abb. 4.48 gezeigte Kleinsignalersatzschaltbild. Durch Zusammenfassen von $A_1(s)$ und $A_2(s)$ gemäß (4.40), nochmaligem Vernachlässigen des $s^2$-Terms und Einsetzen von $r_a \parallel R_L$ anstelle von $r_a$ bzw. $C_a + C_L$ anstelle von $C_a$ erhält man eine Näherung für den Frequenzgang der Kaskodeschaltung:

$$
A_B(s) \approx \frac{A_0}{1 + s \left( (C_E + 2C_C)\,R_1 + \frac{C_E + C_S}{S} + (2C_C + 2C_S + C_L)\,R_2 \right)}
$$

$$
\approx \frac{A_0}{1 + s \left( (C_E + 2C_C)\,R_1 + (2C_C + 2C_S + C_L)\,R_2 \right)}
\qquad\qquad (4.41)
$$
<!-- page-import:0369:end -->

<!-- page-import:0370:start -->
4.1 Schaltungen 333

**Abb. 4.48.** Vereinfachtes Kleinsignalersatzschaltbild der npn-Kaskodeschaltung mit gleichen Kleinsignalparametern für alle Transistoren und ohmsch-kapazitiver Last

$$
A_0 \;=\; \underline{A_B(0)} \;=\; -\,\frac{\beta\,R_2}{R_g + r_{BE}}
\qquad\qquad (4.42)
$$

$$
R_1 \;=\; R_g \parallel r_{BE}
$$

$$
R_2 \;=\; r_a \parallel R_L
$$

Dabei wird in (4.41) die Näherung $R_1, R_2 \gg 1/S$ verwendet. Für die -3dB-Grenzfrequenz erhält man:

$$
\omega_{-3dB} = 2\pi\,f_{-3dB} \;\approx\; \frac{1}{(C_E + 2C_C)\,(R_g \parallel r_{BE}) + (2C_C + 2C_S + C_L)\,(r_a \parallel R_L)}
\qquad (4.43)
$$

Die Grenzfrequenz hängt von der Niederfrequenzverstärkung $A_0$ ab. Geht man davon aus, dass eine Änderung von $A_0$ durch eine Änderung von $R_2 = r_a \parallel R_L$ erfolgt und alle anderen Größen konstant bleiben, erhält man durch Auflösen von (4.42) nach $R_2$ und Einsetzen in (4.43) eine Darstellung mit zwei von $A_0$ unabhängigen Zeitkonstanten:

$$
\omega_{-3dB}(A_0) \;=\; \frac{1}{T_1 + T_2 |A_0|}
\qquad (4.44)
$$

$$
T_1 \;=\; (C_E + 2C_C)\,(R_g \parallel r_{BE})
\qquad (4.45)
$$

$$
T_2 \;=\; (2C_C + 2C_S + C_L)\left(\frac{R_g}{\beta} + \frac{1}{S}\right)
\qquad (4.46)
$$

Aufgrund der hohen Verstärkung gilt im allgemeinen $|A_0| \gg T_1/T_2$; daraus folgt:

$$
\omega_{-3dB} \;\approx\; \frac{1}{T_2 |A_0|}
$$

Die Grenzfrequenz ist demnach umgekehrt proportional zur Verstärkung und man erhält ein konstantes Verstärkungs-Bandbreite-Produkt (*gain-bandwidth-product, GBW*):

$$
GBW \;=\; f_{-3dB}\,|A_0| \;\approx\; \frac{1}{2\pi\,T_2}
\qquad (4.47)
$$

Zwei Spezialfälle sind von Interesse:
<!-- page-import:0370:end -->

<!-- page-import:0371:start -->
334  4. Verstärker

– Wird anstelle einer Stromquelle ein ohmscher Kollektorwiderstand $R_C$ eingesetzt, entfällt die Ausgangskapazität $C_{aS} = C_C + C_S$ der Stromquelle; in diesem Fall gilt:

$$
T_2 = (C_C + C_S + C_L)\left(\frac{R_g}{\beta} + \frac{1}{S}\right)
$$

– Wird die Kaskodeschaltung mit diskreten Transistoren aufgebaut, entfallen die Substratkapazitäten $C_S$; man erhält:

$$
T_2 = \left(\frac{R_g}{\beta} + \frac{1}{S}\right)\cdot
\begin{cases}
(C_C + C_L) & \text{mit Kollektorwiderstand } R_C \\
(2C_C + C_L) & \text{mit Stromquelle}
\end{cases}
$$

#### 4.1.3.2.2 Vergleich von npn-Kaskode- und Emitterschaltung

Ein sinnvoller Vergleich des Frequenzgangs der Kaskode- und der Emitterschaltung ist nur auf der Basis des Verstärkungs-Bandbreite-Produkts möglich, weil sich die Verstärkungen mit Kollektorwiderstand $R_C$, einfacher Stromquelle und Kaskode-Stromquelle um Größenordnungen unterscheiden und die Grenzfrequenz bei größerer Verstärkung prinzipiell kleiner ist. Im Gegensatz dazu ist das Verstärkungs-Bandbreite-Produkt $GBW$ von der Verstärkung unabhängig. Im folgenden wird wegen der einfacheren Darstellung nicht das $GBW$, sondern die Zeitkonstante $T_2$ verglichen, siehe (4.47): eine kleinere Zeitkonstante $T_2$ hat ein größeres $GBW$ und damit eine höhere Grenzfrequenz bei vorgegebener Verstärkung zur Folge.

Bei diskreten Schaltungen mit Kollektorwiderstand erhält man für die Emitterschaltung nach (2.109) auf Seite 132$^{16}$

$$
T_{2,\mathit{Emitter}} = \left(C_C + \frac{C_L}{\beta}\right)R_g + \frac{C_C + C_L}{S} \qquad \overset{C_L=0}{=} \qquad C_C\left(R_g + \frac{1}{S}\right)
$$

und für die Kaskodeschaltung aus (4.46) mit $C_S = 0$, d.h. ohne die bei Einzeltransistoren fehlende Substratkapazität:

$$
T_{2,\mathit{Kaskode}} = (C_C + C_L)\left(\frac{R_g}{\beta} + \frac{1}{S}\right) \qquad \overset{C_L=0}{=} \qquad C_C\left(\frac{R_g}{\beta} + \frac{1}{S}\right)
$$

Man erkennt, dass die Kaskodeschaltung vor allem bei hohem Generatorwiderstand $R_g$ und geringer Lastkapazität $C_L$ eine wesentlich geringere Zeitkonstante und damit ein größeres $GBW$ besitzt als die Emitterschaltung. Bei sehr kleinem Generatorwiderstand ($R_g < 1/S$) oder sehr großer Lastkapazität ($C_L > \beta\, C_C$) bringt die Kaskode keinen Vorteil.

Bei integrierten Schaltungen mit Stromquellen muss man die Zeitkonstante der Emitterschaltung modifizieren, indem man die Substratkapazität $C_S$ des Transistors und die Kapazität $C_{aS} = C_C + C_S$ der Stromquelle berücksichtigt. Sie wirken wie eine zusätzliche Lastkapazität und können deshalb durch Einsetzen von $C_C + 2C_S + C_L$ anstelle von $C_L$ berücksichtigt werden:

$$
T_{2,\mathit{Emitter}} = \left(C_C + \frac{C_C + 2C_S + C_L}{\beta}\right)R_g + \frac{2C_C + 2C_S + C_L}{S}
$$

Für die Kaskodeschaltung gilt (4.46):

$$
T_{2,\mathit{Kaskode}} = (2C_C + 2C_S + C_L)\left(\frac{R_g}{\beta} + \frac{1}{S}\right)
$$

$^{16}$ Es wird $R_g' = R_g + R_B \approx R_g$ verwendet.
<!-- page-import:0371:end -->

<!-- page-import:0372:start -->
4.1 Schaltungen 335

Daraus folgt mit $\beta \gg 1$:

$$T_{2,Emitter} \approx T_{2,Kaskode} + C_C R_g$$

(4.48)

Auch hier erreicht die Kaskodeschaltung eine geringere Zeitkonstante und damit ein größeres $GBW$. Da in integrierten Schaltungen jedoch fast immer $C_S \gg C_C$ gilt, ist der Gewinn an $GBW$ durch den Einsatz einer Kaskode- anstelle einer Emitterschaltung selbst bei hohem Generatorwiderstand $R_g$ und ohne Lastkapazität $C_L$ deutlich geringer als bei diskreten Schaltungen; typisch ist ein Faktor $2 \dots 3$. In der Praxis ist deshalb in vielen Fällen die höhere Verstärkung der Kaskodeschaltung – vor allem in Kombination mit einer Stromquelle mit Kaskode – und nicht die höhere Grenzfrequenz ausschlaggebend für ihren Einsatz.

Abschließend werden die in Abb. 4.49 gezeigten Schaltungen verglichen. Die zugehörigen Frequenzgänge sind für sehr hohe Frequenzen nicht mehr dargestellt, weil sie dort aufgrund der vernachlässigten Nullstellen und Pole von der Asymptote abweichen und eine Berechnung der Grenzfrequenz über das $GBW$ nicht mehr möglich ist. Zur Berechnung der Niederfrequenzverstärkung wurden die Parameter $\beta = 100$ und $U_A = 100\,\mathrm{V}$ für npn- und pnp-Transistoren sowie $R_g = 0$ und $R_L \rightarrow \infty$ angenommen. Die Kaskodeschaltung mit einfacher Stromquelle hat in diesem Fall die Verstärkung $|A| = U_A/U_T = 4000 = 72\,\mathrm{dB}$ und die Kaskodeschaltung mit Kaskode-Stromquelle erreicht $|A| = \beta\, U_A/(2U_T) = 200000 = 106\,\mathrm{dB}$. Im Vergleich dazu erreicht die Emitterschaltung mit einfacher Stromquelle $|A| = U_A/(2U_T) = 2000 = 66\,\mathrm{dB}$ 17; für die Emitterschaltung mit Kollektorwiderstand wird $|A| = 100 = 40\,\mathrm{dB}$ als typischer Wert angenommen. Ein Vergleich der Schaltungen zeigt, dass die von Schaltung zu Schaltung besseren Eigenschaften mit Hilfe zusätzlicher Transistoren erreicht werden.

*Beispiel:* Die Schaltungen 2, 3 und 4 aus Abb. 4.49 werden mit einem Ruhestrom $I_0 = 100\,\mu\mathrm{A}$ und einer Betriebsspannung $U_b = 5\,\mathrm{V}$ betrieben; Abb. 4.50 zeigt die Schaltungen mit den zur Arbeitspunkteinstellung benötigten Zusätzen:

- Emitterschaltung mit einfacher Stromquelle ($T_1$ und $T_2$);
- Kaskodeschaltung mit einfacher Stromquelle ($T_3 \dots T_5$);
- Kaskodeschaltung mit Kaskode-Stromquelle ($T_6 \dots T_9$).

Die Einstellung der Ruheströme erfolgt über einen Drei-Transistor-Stromspiegel ($T_{10} \dots T_{12}$), der zusammen mit den Transistoren $T_2$, $T_5$ und $T_9$ eine Stromquellenbank bildet, die den Referenzstrom $I_0$ auf insgesamt vier Ausgänge spiegelt. Der Strom des Transistors $T_{11}$ wird über die als Dioden betriebenen Transistoren $T_{13}$ und $T_{14}$ geführt und erzeugt die Vorspannung $U_1 = 2U_{BE} \approx 1{,}4\,\mathrm{V}$ für die Transistoren $T_4$ und $T_7$. Die Vorspannung für den Transistor $T_8$ kann man dem Drei-Transistor-Stromspiegel entnehmen: $U_2 = U_b - 2U_{BE} \approx U_b - 1{,}4\,\mathrm{V} = 3{,}6\,\mathrm{V}$. Die Stromquelle mit dem Referenzstrom $I_0$ kann im einfachsten Fall mit einem Widerstand $R = U_2/I_0 \approx 3{,}6\,\mathrm{V}/100\,\mu\mathrm{A} = 36\,\mathrm{k}\Omega$ realisiert werden.

Wenn man die Basisströme vernachlässigt, gilt für die Transistoren $T_1 \dots T_9$ $I_{C,A} \approx I_0 = 100\,\mu\mathrm{A}$; daraus folgt $S = I_{C,A}/U_T \approx 3{,}85\,\mathrm{mS}$. Mit den Parametern aus Abb. 4.5

17 Mit einer idealen Stromquelle erreicht die Emitterschaltung ihre Maximalverstärkung $|A| = \mu = U_A/U_T$. Bei Einsatz einer einfachen Stromquelle mit einem Transistor mit denselben Parametern nimmt der Ausgangswiderstand von $r_{CE}$ auf $r_{CE} \parallel r_{CE} = r_{CE}/2$ ab; dadurch wird die Verstärkung halbiert. Bei einer Emitterschaltung mit Kaskode-Stromquelle, die in Abb. 4.49 nicht aufgeführt ist, ist der Ausgangswiderstand der Stromquelle vernachlässigbar; sie erreicht deshalb mit $|A| = U_A/U_T$ dieselbe Verstärkung wie die Kaskodeschaltung mit einfacher Stromquelle.
<!-- page-import:0372:end -->

<!-- page-import:0373:start -->
336 4. Verstärker

*Abb. 4.49. Schaltungen und Frequenzgänge im Vergleich*

auf Seite 284 folgt für die npn-Transistoren $r_{BE,npn}=\beta_{npn}/S \approx 26\,\mathrm{k}\Omega$ und $r_{CE,npn}=U_{A,npn}/I_{C,A}\approx 1\,\mathrm{M}\Omega$; für die pnp-Transistoren gilt $r_{CE,pnp}=U_{A,pnp}/I_{C,A}\approx 500\,\mathrm{k}\Omega$. Bei den Sperrschichtkapazitäten wird anstelle Gl. (2.37) auf Seite 72 die Näherung $^{18}$

$$
C_S(U)\approx
\begin{cases}
C_{S0} & \text{im Sperrbereich} \\
2C_{S0} & \text{im Durchlassbereich}
\end{cases}
$$

$^{18}$ $C_S(U)$ bezeichnet die Sperrschichtkapazität eines pn-Übergangs, während $C_S$, $C_{S,npn}$ und $C_{S,pnp}$ für die Substratkapazität im Arbeitspunkt stehen. Die Größen werden hier nur durch das Argument $U$ unterschieden.
<!-- page-import:0373:end -->

<!-- page-import:0374:start -->
4.1 Schaltungen 337

Abb. 4.50. Beispiel zur Emitter- und Kaskodeschaltung (alle Transistoren mit Größe 1)

verwendet; dadurch kann die zur Auswertung von Gl. (2.37) erforderliche Bestimmung der Spannungen an den Sperrschichtkapazitäten entfallen. Die Kollektor- und Substratdioden werden im Sperrbereich betrieben; damit folgt:

$$
C_C \approx C_{S0,C} \quad,\quad C_S \approx C_{S0,S}
$$

(4.49)

Mit den Parametern aus Abb. 4.5 erhält man $C_{C,npn} \approx 0{,}2\,\mathrm{pF}$, $C_{C,pnp} \approx 0{,}5\,\mathrm{pF}$, $C_{S,npn} \approx 1\,\mathrm{pF}$ und $C_{S,pnp} \approx 2\,\mathrm{pF}$. Die Emitterkapazität setzt sich aus der Emitter-Sperrschichtkapazität im Durchlassbereich und der Diffusionskapazität zusammen:

$$
C_E = C_{S,E} + C_{D,N} \approx 2C_{S0,E} + \frac{\tau_{0,N}\,I_{C,A}}{U_T}
$$

(4.50)

Für die npn-Transistoren erhält man $C_E \approx 0{,}6\,\mathrm{pF}$.

Die Schaltungen sollen mit einer Signalquelle mit $R_g = 10\,\mathrm{k}\Omega$ und ohne Last ($R_L \to \infty$, $C_L = 0$) betrieben werden. Dann erhält man für die Kaskodeschaltung mit Kaskode-Stromquelle

$$
A_0 = - \frac{\beta_{npn}\,(\beta_{npn}r_{CE,npn} \parallel \beta_{pnp}r_{CE,pnp})}{R_g + r_{BE,npn}} \approx -56.000
$$

und für die Kaskodeschaltung mit einfacher Stromquelle:

$$
A_0 = - \frac{\beta_{npn}\,(\beta_{npn}r_{CE,npn} \parallel r_{CE,pnp})}{R_g + r_{BE,npn}} \approx -1400
$$

Für beide Kaskodeschaltungen gilt (4.46):

$$
T_{2,\mathrm{Kaskode}} = (C_{C,npn} + C_{C,pnp} + C_{S,npn} + C_{S,pnp}) \left(\frac{R_g}{\beta_{npn}} + \frac{1}{S}\right) \approx 1{,}3\,\mathrm{ns}
$$

Für die Emitterschaltung mit einfacher Stromquelle folgt aus (2.100) und (4.48):
<!-- page-import:0374:end -->

<!-- page-import:0375:start -->
338 4. Verstärker

$$
A_0=-\frac{r_{BE,npn}}{R_g+r_{BE,npn}}\,S\,(r_{CE,npn}\parallel r_{CE,pnp})
$$

$$
=-\frac{\beta_{npn}\,(r_{CE,npn}\parallel r_{CE,pnp})}{R_g+r_{BE,npn}}\approx -900
$$

$$
T_{2,Emitter}\approx T_{2,Kaskode}+R_g\,C_{C,npn}\approx 3{,}3\,\mathrm{ns}
$$

Daraus folgt mit (4.47) für die Kaskodeschaltungen $GBW \approx 122\,\mathrm{MHz}$ und für die Emitterschaltung $GBW \approx 48\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L = 10\,\mathrm{pF}$ erhält man $T_{2,Kaskode} \approx 4{,}9\,\mathrm{ns}$ und $T_{2,Emitter} \approx 6{,}9\,\mathrm{ns}$; daraus folgt für die Kaskodeschaltungen $GBW \approx 32\,\mathrm{MHz}$ und für die Emitterschaltung $GBW \approx 23\,\mathrm{MHz}$. Man erkennt, dass der Vorteil der Kaskodeschaltung mit zunehmender Lastkapazität kleiner und für

$$
C_L\left(\frac{R_g}{\beta}+\frac{1}{S}\right)\gg C_C\,R_g
$$

unbedeutend wird. Es bleibt dann nur noch die höhere Verstärkung als Vorteil.

Bei diskreten Schaltungen fällt der Vorteil der Kaskodeschaltung aufgrund der fehlenden Substratkapazitäten deutlicher aus. Mit $R_g = 10\,\mathrm{k\Omega}$ und ohne Last $(R_L \to \infty,\ C_L = 0)$ erhält man mit $C_{S,npn}=C_{S,pnp}=0$ unter Beibehaltung der anderen Parameter $T_{2,Kaskode} \approx 0{,}25\,\mathrm{ns}$ und $T_{2,Emitter} \approx 2{,}25\,\mathrm{ns}$. Damit erreicht die diskrete Kaskodeschaltung mit $GBW \approx 637\,\mathrm{MHz}$ einen Wert in der Größenordnung der Transitfrequenz der Transistoren, die diskrete Emitterschaltung jedoch nur $GBW \approx 71\,\mathrm{MHz}$. Mit einer Lastkapazität nimmt der Vorteil der diskreten Kaskodeschaltung allerdings schnell ab.

#### 4.1.3.2.3 n-Kanal-Kaskodeschaltung

Abbildung 4.51 zeigt das vollständige Kleinsignalersatzschaltbild einer n-Kanal-Kaskodeschaltung mit den Mosfets $T_1$ und $T_2$ und der Stromquelle. Für die Mosfets wird das Kleinsignalmodell nach Abb. 3.48 auf Seite 226 verwendet; dabei sind die gesteuerten Quellen mit den Substrat-Steilheiten $S_{B1}$ und $S_{B2}$ nicht eingezeichnet, weil:
- bei $T_1$ die Quelle $S_{B1}u_{BS1}$ wegen $u_{BS1}=0$ unwirksam ist;
- man bei $T_2$ die gesteuerten Quellen $S_2u_{GS2}$ und $S_{B2}u_{BS2}$ zu einer Quelle mit $S_2' = S_2 + S_{B2}$ zusammenfassen kann 19.

Die Stromquelle wird durch den Ausgangswiderstand $r_{aS}$ und die Ausgangskapazität $C_{aS}$ beschrieben. Durch Vergleich mit dem Kleinsignalersatzschaltbild der npn-Kaskodeschaltung in Abb. 4.46 erhält man neben den üblichen Entsprechungen $(R_B = R_G,\ r_{BE} \to \infty,\ C_E = C_{GS}$, usw.) folgende Korrespondenzen:

$$
C_{S1}=C_{BD1}+C_{BS2}\ ,\quad C_{S2}=C_{BD2}
$$

Damit kann man die Ergebnisse für die npn-Kaskodeschaltung auf die n-Kanal-Kaskodeschaltung übertragen; man erhält mit $R_g,R_L \gg 1/S$ aus (4.43) die -3dB-Grenzfrequenz

$$
\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{(C_{GS}+2C_{GD})\,R_g+(2C_{GD}+2C_{BD}+C_L)\,(r_a\parallel R_L)}
\qquad (4.51)
$$

und aus (4.44)–(4.46)

19 Statisch gilt $u_{GS2}=u_{BS2}$, weil an $R_{G2}$ keine Gleichspannung abfällt. Da $R_{G2}$ im weiteren Verlauf der Rechnung vernachlässigt wird, gilt dieser Zusammenhang auch dynamisch.
<!-- page-import:0375:end -->

<!-- page-import:0376:start -->
4.1 Schaltungen 339

**Abb. 4.51.** Vollständiges Kleinsignalersatzschaltbild einer n-Kanal-Kaskodeschaltung

$$\omega_{-3dB}(A_0) \;=\; \frac{1}{T_1 + T_2|A_0|}$$ (4.52)

$$T_1 \;=\; (C_{GS} + 2C_{GD})\,R_g$$ (4.53)

$$T_2 \;=\; \frac{2C_{GD} + 2C_{BD} + C_L}{S_1}$$ (4.54)

mit der Niederfrequenzverstärkung:

$$A_0 \;=\; A_B(0) \;=\; -\,S_1\,(r_a \parallel R_L)$$ (4.55)

Die Niederfrequenzverstärkung und die Zeitkonstante $T_2$ hängen bei der n-Kanal-Kaskodeschaltung wegen des unendlich hohen Eingangswiderstands ($r_e = \infty$) nicht vom Innenwiderstand $R_g$ der Signalquelle ab.

## 4.1.4 Differenzverstärker

### 4.1.4.1 Grundschaltung

Der Differenzverstärker (*differential amplifier*) ist ein symmetrischer Verstärker mit zwei Eingängen und zwei Ausgängen. Er besteht aus zwei Emitter- oder zwei Sourceschaltungen, deren Emitter- bzw. Source-Anschlüsse mit einer gemeinsamen Stromquelle verbunden sind; Abb. 4.52 zeigt die Grundschaltung. Der Differenzverstärker wird im allgemeinen mit einer positiven und einer negativen Versorgungsspannung betrieben, die oft – wie in Abb. 4.52 –, aber nicht notwendigerweise, symmetrisch sind. Wenn nur eine positive oder nur eine negative Versorgungsspannung zur Verfügung steht, kann man die Masse als zweite Versorgungsspannung verwenden; darauf wird später noch näher eingegangen. Bei integrierten Differenzverstärkern mit Mosfets sind die Bulk-Anschlüsse der n-Kanal-Mosfets mit der negativen, die der p-Kanal-Mosfets mit der positiven Versor-
<!-- page-import:0376:end -->

<!-- page-import:0377:start -->
340  4. Verstärker

a  mit npn-Transistoren  
b  mit n-Kanal-Mosfets

**Abb. 4.52.** Grundschaltung des Differenzverstärkers

gungsspannung verbunden; dagegen sind bei diskreten Mosfets alle Bulk-Anschlüsse mit der Source des jeweiligen Mosfets verbunden.

Durch die Stromquelle bleibt die Summe der Ströme konstant $^{20}$:

$$
2I_0=
\begin{cases}
I_{C1}+I_{B1}+I_{C2}+I_{B2}\approx I_{C1}+I_{C2} & \text{mit } B=I_C/I_B\gg 1 \\
I_{D1}+I_{D2}
\end{cases}
$$

Für die weitere Untersuchung wird $R_{C1}=R_{C2}=R_C$ und $R_{D1}=R_{D2}=R_D$ angenommen. Ferner werden die Eingangsspannungen $U_{e1}$ und $U_{e2}$ durch die symmetrische Gleichtaktspannung $U_{Gl}$ und die schiefsymmetrische Differenzspannung $U_D$ ersetzt:

$$
U_{Gl}=\frac{U_{e1}+U_{e2}}{2},\ \ U_D=U_{e1}-U_{e2}
\qquad\qquad (4.56)
$$

Daraus folgt:

$$
U_{e1}=U_{Gl}+\frac{U_D}{2},\ \ U_{e2}=U_{Gl}-\frac{U_D}{2}
\qquad\qquad (4.57)
$$

Abb. 4.53 zeigt das Ersetzen von $U_{e1}$ und $U_{e2}$ durch die symmetrische Spannung $U_{Gl}$ und die schiefsymmetrische Spannung $U_D$; letztere führt entsprechend (4.57) auf zwei Quellen mit der Spannung $U_D/2$.

## 4.1.4.2 Gleichtakt- und Differenzverstärkung

Bei gleichen Eingangsspannungen ($U_{e1}=U_{e2}=U_{Gl}$, $U_D=0$) liegt symmetrischer Betrieb vor und der Strom der Stromquelle teilt sich zu gleichen Teilen auf die beiden Transistoren auf:

$$
I_{C1}=I_{C2}\overset{B\gg 1}{\approx} I_0 \ \ \text{bzw.}\ \ I_{D1}=I_{D2}=I_0
$$

$^{20}$ Hier gilt wieder die obere Zeile nach der geschweiften Klammer für den npn-, die untere für den n-Kanal-Differenzverstärker.
<!-- page-import:0377:end -->

<!-- page-import:0378:start -->
4.1 Schaltungen 341

**Abb. 4.53.** Ersetzen der Eingangsspannungen $U_{e1}$ und $U_{e2}$ durch die Gleichtaktspannung $U_{Gl}$ und die Differenzspannung $U_D$

Für die Ausgangsspannungen gilt in diesem Fall:

$$
U_{a1} = U_{a2} \approx U_b - I_0 R_C \quad \text{bzw.} \quad U_{a1} = U_{a2} = U_b - I_0 R_D
$$

Eine Änderung der Gleichtaktspannung $U_{Gl}$ wird *Gleichtaktaussteuerung* genannt und ändert nichts an der Stromverteilung, solange die Transistoren und die Stromquelle nicht übersteuert werden; daraus folgt, dass die Ausgangsspannungen bei Gleichtaktaussteuerung konstant bleiben. Die *Gleichtaktverstärkung* (*common mode gain*)

$$
A_{Gl} = \left.\frac{dU_{a1}}{dU_{Gl}}\right|_{U_D=0} = \left.\frac{dU_{a2}}{dU_{Gl}}\right|_{U_D=0}
$$

(4.58)

ist im Idealfall gleich Null. In der Praxis hat sie einen kleinen negativen Wert: $A_{Gl} \approx -10^{-4}\ldots -1$. Ursache dafür ist der endliche Innenwiderstand realer Stromquellen; darauf wird bei der Berechnung des Kleinsignalverhaltens näher eingegangen.

Bei schiefsymmetrischer Aussteuerung mit einer Differenzspannung $U_D$ ändert sich die Stromverteilung; dadurch ändern sich auch die Ausgangsspannungen. Diese Art der Aussteuerung wird *Differenzaussteuerung*, die entsprechende Verstärkung *Differenzverstärkung* (*differential gain*) genannt:

$$
A_D = \left.\frac{dU_{a1}}{dU_D}\right|_{U_{Gl}=\mathrm{const.}} = -\left.\frac{dU_{a2}}{dU_D}\right|_{U_{Gl}=\mathrm{const.}}
$$

(4.59)

Sie ist negativ und liegt zwischen $A_D \approx -10 \ldots -100$ beim Einsatz ohmscher Widerstände $R_C$ und $R_D$ wie in Abb. 4.52 und $A_D \approx -100 \ldots -1000$ beim Einsatz von Stromquellen anstelle der Widerstände.

Das Verhältnis von Differenz- und Gleichtaktverstärkung wird *Gleichtaktunterdrückung* (*common mode rejection ratio, CMRR*) genannt:
<!-- page-import:0378:end -->

<!-- page-import:0379:start -->
342 4. Verstärker

$$
G=\frac{A_D}{A_{Gl}}
$$

(4.60)

Im Idealfall gilt $A_{Gl}\rightarrow -0$ und damit $G\rightarrow \infty$. Reale Differenzverstärker erreichen $G\approx 10^3\ldots 10^5$, je nach Innenwiderstand der Stromquelle $^{21}$. Der Wertebereich von $G$ ist nicht so groß, wie man aufgrund der Extremwerte von $A_{Gl}$ und $A_D$ vermuten könnte; Ursache hierfür ist eine Kopplung zwischen $A_{Gl}$ und $A_D$, durch die $G$ nach oben und nach unten begrenzt wird.

#### 4.1.4.3 Eigenschaften des Differenzverstärkers

Aus dem Verhalten folgt als zentrale Eigenschaft des Differenzverstärkers:

*Der Differenzverstärker verstärkt die Differenzspannung zwischen den beiden Eingängen unabhängig von der Gleichtaktspannung, solange diese innerhalb eines zulässigen Bereichs liegt.*

Daraus folgt, dass die Ausgangsspannungen innerhalb des zulässigen Bereichs nicht von der Gleichtaktspannung $U_{Gl}$, sondern nur vom Strom der Stromquelle abhängen. Damit ist auch der Arbeitspunkt für den Kleinsignalbetrieb weitgehend unabhängig von $U_{Gl}$. Zwar ändern sich bei Variation von $U_{Gl}$ einige Spannungen, die für den Arbeitspunkt maßgebenden Größen – die Ausgangsspannungen und die Ströme – bleiben jedoch praktisch konstant. Diese Eigenschaft unterscheidet den Differenzverstärker von allen anderen bisher behandelten Verstärkern und erleichtert die Arbeitspunkteinstellung und Kopplung in mehrstufigen Verstärkern; Schaltungen zur Anpassung der Gleichspannungspegel oder Koppelkondensatoren werden nicht benötigt.

Ein weiterer Vorteil des Differenzverstärkers ist die Unterdrückung temperaturbedingter Änderungen in den beiden Zweigen, da diese wie eine Gleichtaktaussteuerung wirken; nur eine eventuell vorhandene Temperaturabhängigkeit der Stromquelle wirkt sich auf die Ausgangsspannungen aus. In integrierten Schaltungen werden darüber hinaus auch Bauteile-Toleranzen wirkungsvoll unterdrückt, weil die nahe beieinander liegenden Transistoren und Widerstände eines Differenzverstärkers in erster Näherung gleichsinnige Toleranzen aufweisen.

#### 4.1.4.4 Unsymmetrischer Betrieb

Man kann einen Differenzverstärker unsymmetrisch betreiben, indem man einen Eingang auf ein konstantes Potential legt, nur einen Ausgang verwendet oder beides kombiniert; Abb. 4.54 zeigt diese drei Möglichkeiten am Beispiel eines npn-Differenzverstärkers.

In Abb. 4.54a wird der Eingang 2 auf konstantes Potential – hier Masse – gelegt. Für diesen Fall erhält man:

$$
A_1=\left.\frac{dU_{a1}}{dU_{e1}}\right|_{v_{e2}=\mathrm{const.}}
=\left.\frac{dU_{a1}}{dU_D}\frac{dU_D}{dU_{e1}}\right|_{v_{e2}=\mathrm{const.}}
+\left.\frac{dU_{a1}}{dU_{Gl}}\frac{dU_{Gl}}{dU_{e1}}\right|_{v_{e2}=\mathrm{const.}}
$$

$$
=A_D+A_{Gl}=A_D\left(1+\frac{1}{G}\right)\overset{G\gg 1}{\approx}A_D
$$

$^{21}$ Bei den hier betrachteten Differenzverstärkern ist $G$ positiv, weil $A_{Gl}$ und $A_D$ negativ sind. Es gibt jedoch Fälle, in denen die Vorzeichen von $A_{Gl}$ und $A_D$ nicht gleich sind; dabei wird manchmal nur der Betrag von $G$ angegeben, obwohl $G$ eine vorzeichenbehaftete Größe ist.
<!-- page-import:0379:end -->

<!-- page-import:0380:start -->
4.1 Schaltungen 343

a Eingang unsymmetrisch

b Ausgang unsymmetrisch

c Ein- und Ausgang unsymmetrisch

**Abb. 4.54.** Unsymmetrischer Betrieb eines npn-Differenzverstärkers

$$
A_2=\left.\frac{dU_{a2}}{dU_{e1}}\right|_{U_{e2}=\mathrm{const.}}
=\left.\frac{dU_{a2}}{dU_D}\frac{dU_D}{dU_{e1}}\right|_{U_{e2}=\mathrm{const.}}
+\left.\frac{dU_{a2}}{dU_{Gl}}\frac{dU_{Gl}}{dU_{e1}}\right|_{U_{e2}=\mathrm{const.}}
$$

$$
=-A_D+A_{Gl}=-A_D\left(1-\frac{1}{G}\right)\overset{G\gg1}{\approx}-A_D
$$

Bei ausreichend hoher Gleichtaktunterdrückung erhält man gegenphasige Ausgangssignale mit gleicher Amplitude; deshalb wird diese Schaltung zur Umsetzung eines auf Masse bezogenen Signals in ein Differenzsignal verwendet.

In Abb. 4.54b wird nur der Ausgang 2 verwendet; alternativ kann man auch den Ausgang 1 verwenden. Die Gleichtakt- und die Differenzverstärkung folgen aus (4.58) und (4.59), indem man, je nach verwendetem Ausgang, $U_a=U_{a2}$ oder $U_a=U_{a1}$ setzt. Wegen $A_D<0$ ist die in Abb. 4.54b gezeigte Variante mit $U_a=U_{a2}$ nichtinvertierend, die mit $U_a=U_{a1}$ invertierend. Die Schaltung wird zur Umsetzung eines Differenzsignals in ein auf Masse bezogenes Signal verwendet.

In Abb. 4.54c wird nur der Eingang 1 und der Ausgang 2 verwendet; es gilt mit Bezug auf die bereits berechnete Verstärkung $A_2$:

$$
A=\frac{dU_a}{dU_e}=\left.\frac{dU_{a2}}{dU_{e1}}\right|_{U_{e2}=\mathrm{const.}}=A_2=-A_D+A_{Gl}\overset{G\gg1}{\approx}-A_D
$$

Diese Schaltung kann auch als Reihenschaltung einer Kollektor- und einer Basisschaltung aufgefasst werden. Sie besitzt eine hohe Grenzfrequenz, weil hier keine Emitterschaltung und damit kein Miller-Effekt auftritt.

## 4.1.4.5 Übertragungskennlinien des npn-Differenzverstärkers

Abbildung 4.55 zeigt die Schaltung mit den zur Berechnung der Kennlinien benötigten Spannungen und Strömen für den Fall $U_{Gl}=0$. Für die Transistoren gilt bei gleicher Größe, d.h. gleichem Sättigungssperrstrom $I_S$, und Vernachlässigung des Early-Effekts:

$$
I_{C1}=I_S\,e^{\frac{U_{BE1}}{U_T}},\qquad I_{C2}=I_S\,e^{\frac{U_{BE2}}{U_T}}
$$
<!-- page-import:0380:end -->

<!-- page-import:0381:start -->
344 4. Verstärker

Abb. 4.55. Spannungen und Ströme beim npn-Differenzverstärker

Aus der Schaltung folgt unter Vernachlässigung der Basisströme:

$$I_{C1}+I_{C2}=2I_0 \ , \quad U_D=U_{BE1}-U_{BE2}$$

Für das Verhältnis der Kollektorströme gilt:

$$\frac{I_{C1}}{I_{C2}}=e^{\frac{U_{BE1}}{U_T}}e^{-\frac{U_{BE2}}{U_T}}=e^{\frac{U_{BE1}-U_{BE2}}{U_T}}=e^{\frac{U_D}{U_T}}$$

Durch Einsetzen in $I_{C1}+I_{C2}=2I_0$ und Auflösen nach $I_{C1}$ und $I_{C2}$ folgt:

$$I_{C1}=\frac{2I_0}{1+e^{-\frac{U_D}{U_T}}} \ , \quad I_{C2}=\frac{2I_0}{1+e^{\frac{U_D}{U_T}}}$$

Mit

$$\frac{2}{1+e^{-x}}=\frac{1+e^{-x}+1-e^{-x}}{1+e^{-x}}=1+\frac{1-e^{-x}}{1+e^{-x}}=1+\tanh \frac{x}{2}$$

erhält man

$$I_{C1}=I_0\left(1+\tanh \frac{U_D}{2U_T}\right) \ , \quad I_{C2}=I_0\left(1-\tanh \frac{U_D}{2U_T}\right)$$

(4.61)

und daraus mit

$$U_{a1}=U_b-I_{C1}R_C \ , \quad U_{a2}=U_b-I_{C2}R_C$$

die Übertragungskennlinien des npn-Differenzverstärkers:

$$U_{a1}=U_b-I_0R_C\left(1+\tanh \frac{U_D}{2U_T}\right)$$

$$U_{a2}=U_b-I_0R_C\left(1-\tanh \frac{U_D}{2U_T}\right)$$

(4.62)

Abb. 4.56 zeigt den Verlauf der Kennlinien für $U_b=5\,\mathrm{V}$, $R_C=20\,\mathrm{k}\Omega$ und $I_0=100\,\mu\mathrm{A}$ als Funktion der Differenzspannung $U_D$ für den Fall $U_{Gl}=0$. Für die Steigung der Kennlinie bei $U_D=0$ erhält man:
<!-- page-import:0381:end -->

<!-- page-import:0382:start -->
4.1 Schaltungen 345

**Abb. 4.56.** Verlauf der Übertragungskennlinien des npn-Differenzverstärkers aus Abb. 4.55 mit  
$U_b = 5\,\mathrm{V}$, $R_C = 20\,\mathrm{k}\Omega$ und $I_0 = 100\,\mu\mathrm{A}$

$$\left.\frac{dU_{a1}}{dU_D}\right|_{U_D=0}
= -\left.\frac{dU_{a2}}{dU_D}\right|_{U_D=0}
= -\frac{I_0R_C}{2U_T}
\approx -\frac{2\,\mathrm{V}}{52\,\mathrm{mV}}
\approx -38$$

Sie entspricht der Differenzverstärkung im Arbeitspunkt ($U_D = 0, U_{Gl} = 0$).

Der aktive Teil der Kennlinie liegt im Bereich $|U_D| < 5U_T \approx 125\,\mathrm{mV}$. Für $|U_D| > 5U_T$ wird der Differenzverstärker übersteuert; in diesem Fall fließt der Strom der Stromquelle praktisch vollständig (über 99%) durch einen der beiden Transistoren, während der andere sperrt. Für $U_D < -5U_T$ sperrt $T_1$ und der Ausgang 1 erreicht die maximale Ausgangsspannung $U_{a,\max} = U_b$; der Ausgang 2 hat dann die minimale Ausgangsspannung $U_{a,\min} = U_b - 2I_0R_C$. Für $U_D > 5U_T$ sperrt $T_2$.

#### 4.1.4.5.1 Arbeitspunkt bei Kleinsignalbetrieb

Ein Betrieb als Verstärker ist nur im Bereich $|U_D| < U_T \approx 25\,\mathrm{mV}$ sinnvoll; außerhalb dieses Bereichs verlaufen die Kennlinien zunehmend flacher; die Verstärkung nimmt ab, die Verzerrungen zu. Als Arbeitspunkt wird der Punkt $U_D = 0$ gewählt; in diesem Fall gilt:

$$U_D = 0 \;\Rightarrow\; U_{a1} = U_{a2} = U_b - I_0R_C \;\Rightarrow\; U_{a1} - U_{a2} = 0$$

Daraus folgt, dass der Differenzverstärker mit Bezug auf die Ausgangs-Differenzspannung $U_{a1} - U_{a2}$ als echter Gleichspannungsverstärker, d.h. ohne Offset, arbeitet. Man beachte ferner, dass man bei der Wahl eines Arbeitspunkts keine Vorgabe für die Gleichtaktspannung $U_{Gl}$ erhält; sie kann vielmehr innerhalb eines zulässigen Bereichs beliebig gewählt werden.

#### 4.1.4.5.2 Gleichtaktaussteuerbereich

Bei der Berechnung wurde durch die Verwendung der Transistor-Gleichungen für den Normalbetrieb stillschweigend angenommen, dass keiner der Transistoren in die Sättigung
<!-- page-import:0382:end -->

<!-- page-import:0383:start -->
346  4. Verstärker

**Abb. 4.57.** Zur Berechnung des zulässigen Eingangsspannungsbereichs eines npn-Differenzverstärkers

gerät. Ferner wurde eine ideale Stromquelle ohne Sättigung angenommen. In diesem Fall hängen die Kennlinien praktisch nicht von der Gleichtaktspannung $U_{Gl}$ ab; eine durch den Innenwiderstand der Stromquelle verursachte geringe Gleichtaktverstärkung bewirkt nur Änderungen im Millivolt-Bereich. Der zulässige Eingangsspannungsbereich wird nun mit Hilfe von Abb. 4.57 ermittelt; dabei sind zwei Bedingungen zu erfüllen:

– Die Kollektor-Emitter-Spannungen $U_{CE1}$ und $U_{CE2}$ müssen größer sein als die Sättigungsspannung $U_{CE,sat}$. Aus Abb. 4.57 folgt:

$$
U_{CE1} = U_{a1} + U_{BE1} - U_{e1} \;,\quad U_{CE2} = U_{a2} + U_{BE2} - U_{e2}
$$

Mit $U_{CE} > U_{CE,sat} \approx 0{,}2\,\mathrm{V}$, $U_{BE} \approx 0{,}7\,\mathrm{V}$ und der minimalen Ausgangsspannung $U_{a,min} = U_b - 2I_0R_C$ erhält man:

$$
\max\{U_{e1},U_{e2}\} < U_b - 2I_0R_C - U_{CE,sat} + U_{BE} \approx U_b - 2I_0R_C + 0{,}5\,\mathrm{V}
$$

– Die Aussteuerungsgrenze $U_{0,min}$ der Stromquelle darf nicht unterschritten werden, d.h. es muss $U_0 > U_{0,min}$ gelten. Aus Abb. 4.57 folgt:

$$
U_0 = U_{e1} - U_{BE1} - (-U_b) = U_{e2} - U_{BE2} - (-U_b)
$$

Da bei normalem Betrieb mindestens einer der Transistoren leitet und dabei mit $U_{BE} \approx 0{,}7\,\mathrm{V}$ betrieben wird, erhält man:

$$
\min\{U_{e1},U_{e2}\} > U_{0,min} + (-U_b) + U_{BE} \approx U_{0,min} + (-U_b) + 0{,}7\,\mathrm{V}
$$

Wenn man einen einfachen npn-Stromspiegel als Stromquelle einsetzt, gilt $U_{0,min} = U_{CE,sat} \approx 0{,}2\,\mathrm{V}$ und $\min\{U_{e1},U_{e2}\} > (-U_b) + 0{,}9\,\mathrm{V}$.

Der zulässige Eingangsspannungsbereich wird üblicherweise bei reiner Gleichtaktaussteuerung, d.h. $U_{e1} = U_{e2} = U_{Gl}$ und $U_D = 0$ angegeben. Dann entfallen die Minimum- und Maximum-Operatoren$^{22}$ und man erhält den Gleichtaktaussteuerbereich:

22 Man begeht dadurch einen Fehler, weil zum Erreichen der minimalen Ausgangsspannung auch eine Differenzspannung von mindestens $5U_T$ erforderlich ist; deshalb müsste man eigentlich $\max\{U_{e1},U_{e2}\} = U_{Gl} + U_{D,max}/2$ und $\min\{U_{e1},U_{e2}\} = U_{Gl} - U_{D,max}/2$ einsetzen. Da die maximale Differenzspannung $U_{D,max}$ anwendungsspezifisch, bei Verstärkern jedoch sehr klein ($U_{D,max} < U_T$) ist, wird sie hier vernachlässigt.
<!-- page-import:0383:end -->

<!-- page-import:0384:start -->
4.1 Schaltungen 347

Abb. 4.58. Verlauf der Übertragungskennlinien des npn-Differenzverstärkers aus Abb. 4.55 mit $U_b = 5\,\mathrm{V}$, $R_C = 20\,\mathrm{k}\Omega$ und $I_0 = 100\,\mu\mathrm{A}$ für den Fall, dass die Transistoren in die Sättigung geraten ($U_{Gl} = 2{,}5\,\mathrm{V}$)

$$
U_{0,\min} + (-U_b) + U_{BE} < U_{Gl} < U_b - 2I_0R_C - U_{CE,sat} + U_{BE}
\qquad (4.63)
$$

Für die Schaltung in Abb. 4.55 erhält man mit $U_b = 5\,\mathrm{V}$, $(-U_b) = -U_b = -5\,\mathrm{V}$, $R_C = 20\,\mathrm{k}\Omega$, $I_0 = 100\,\mu\mathrm{A}$ und bei Einsatz eines einfachen npn-Stromspiegels mit $U_{0,\min} = U_{CE,sat}$ einen Gleichtaktaussteuerbereich von $-4{,}1\,\mathrm{V} < U_{Gl} < 1{,}5\,\mathrm{V}$. Wird dieser Bereich überschritten, erhält man andere Kennlinien; Abb. 4.58 zeigt dies für den Fall $U_{Gl} = 2{,}5\,\mathrm{V}$. Da sich durch die Sättigung eines Transistors die Stromverteilung ändert, wirkt sich die Sättigung auch auf die Kennlinie des anderen Zweigs aus.

Im Bereich $|U_D| < 25\,\mathrm{mV}$ ist die Kennlinie unverändert; damit ist ein Betrieb als Verstärker noch möglich, obwohl der Gleichtaktaussteuerbereich überschritten wurde. Dieser scheinbare Widerspruch kommt dadurch zustande, dass als Gleichtaktaussteuerbereich der Bereich definiert wurde, in dem eine volle Aussteuerung ohne Sättigung möglich ist. Beschränkt man sich auf einen Teil der Kennlinie, ist der Gleichtaktaussteuerbereich größer. Im Grenzfall infinitesimal kleiner Differenzspannung reicht es aus, wenn für $U_D = 0$ keine Sättigung auftritt. Die minimale Ausgangsspannung ist in diesem Fall $U_{a,\min} \approx U_b - I_0R_C$ anstelle von $U_{a,\min} = U_b - 2I_0R_C$; dadurch erhält man den Gleichtaktaussteuerbereich bei Kleinsignalbetrieb:

$$
U_{0,\min} + (-U_b) + U_{BE} < U_{Gl} < U_b - I_0R_C - U_{CE,sat} + U_{BE}
\qquad (4.64)
$$

Für die Schaltung in Abb. 4.55 erhält man mit den bereits genannten Werten $-4{,}1\,\mathrm{V} < U_{Gl} < 3{,}5\,\mathrm{V}$. Damit liegt der in Abb. 4.58 gezeigte Fall mit $U_{Gl} = 2{,}5\,\mathrm{V}$ noch innerhalb des Kleinsignal-Gleichtaktaussteuerbereichs.

#### 4.1.4.5.3 npn-Differenzverstärker mit Stromgegenkopplung

Zur Verbesserung der Linearität kann man den Differenzverstärker mit einer Stromgegenkopplung versehen; Abb. 4.59 zeigt zwei Möglichkeiten, die bezüglich der Übertragungskennlinien äquivalent sind. In Abb. 4.59a werden zwei Widerstände $R_E$ und eine Stromquelle verwendet. Ohne Differenzaussteuerung fällt an beiden Widerständen die Spannung $I_0R_E$ ab; dadurch wird die untere Grenze des Gleichtaktaussteuerbereichs um diesen Wert
<!-- page-import:0384:end -->

<!-- page-import:0385:start -->
348  4. Verstärker

a mit zwei Widerständen  
und einer Stromquelle

b mit einem Widerstand  
und zwei Stromquellen

**Abb. 4.59.** npn-Differenzverstärker mit Stromgegenkopplung

angehoben. In Abb. 4.59b wird nur ein Widerstand benötigt, der ohne Differenzaussteuerung stromlos ist. Der Gleichtaktaussteuerbereich wird nicht reduziert, allerdings werden zwei Stromquellen benötigt.

Abb. 4.60 zeigt die Kennlinien für $U_b = 5\,\mathrm{V}$, $R_C = 20\,\mathrm{k}\Omega$, $I_0 = 100\,\mu\mathrm{A}$ und verschiedene Werte von $R_E$; letztere sind auf die Steilheit der Transistoren im Arbeitspunkt $U_D = 0$ bezogen:

$$
S = \frac{I_0}{U_T} \approx \frac{1}{260\,\Omega},\ SR_E = 0/2/5 \Rightarrow R_E = 0/520/1300\,\Omega
$$

Mit zunehmender Gegenkopplung werden die Kennlinien flacher und verlaufen in einem größeren Bereich näherungsweise linear. Daraus folgt, dass die Differenzverstärkung kleiner wird, dafür aber in einem größeren Bereich näherungsweise konstant bleibt. Die Verzerrungen, ausgedrückt durch den Klirrfaktor, nehmen mit zunehmender Gegenkopplung ab.

Eine geschlossene Berechnung der Kennlinien ist nicht möglich. Für den Fall starker Gegenkopplung kann man eine Näherung angeben, indem man die Basis-Emitter-Spannungen als näherungsweise konstant annimmt; für beide Schaltungen in Abb. 4.59 gilt bei Vernachlässigung der Basisströme:

$$
U_D = U_{e1} - U_{e2} = U_{BE1} + I_{C1}R_E - U_{BE2} - I_{C2}R_E
$$

$$
U_{BE1} \approx U_{BE2}
$$

$$
\approx (I_{C1} - I_{C2})\,R_E
$$

Durch Einsetzen von $I_{C1} + I_{C2} = 2I_0$ und Auflösen nach $I_{C1}$ und $I_{C2}$ unter Beachtung von $0 \leq I_{C1}, I_{C2} \leq 2I_0$ folgt

$$
I_{C1} \approx I_0 + \frac{U_D}{2R_E},\quad I_{C2} \approx I_0 - \frac{U_D}{2R_E}\qquad \text{für } |U_D| < 2I_0R_E
$$

und daraus:
<!-- page-import:0385:end -->

<!-- page-import:0386:start -->
4.1 Schaltungen 349

**Abb. 4.60.** Kennlinien und Differenzverstärkung eines npn-Differenzverstärkers mit Stromgegenkopplung $(U_b = 5\ \mathrm{V},\ R_C = 20\ \mathrm{k}\Omega,\ I_0 = 100\ \mu\mathrm{A})$

$$
U_{a1} = U_b - I_{C1}R_C \;\approx\; U_b - I_0R_C - \frac{R_C}{2R_E}\,U_D
$$

$$
U_{a2} = U_b - I_{C2}R_C \;\approx\; U_b - I_0R_C + \frac{R_C}{2R_E}\,U_D
\qquad \text{für } |U_D| < 2I_0R_E \qquad (4.65)
$$

Die Kennlinien sind innerhalb des aktiven Bereichs praktisch linear.

## 4.1.4.6 Übertragungskennlinien des n-Kanal-Differenzverstärkers

Abbildung 4.61 zeigt die Schaltung mit den zur Berechnung der Kennlinien benötigten Spannungen und Strömen für den Fall $U_{G1} = 0$. Für die Mosfets gilt bei gleicher Größe, d.h. gleichem Steilheitskoeffizienten $K$, und Vernachlässigung des Early-Effekts:

$$
I_{D1} = \frac{K}{2}\,(U_{GS1} - U_{th})^2,\quad I_{D2} = \frac{K}{2}\,(U_{GS2} - U_{th})^2
$$
<!-- page-import:0386:end -->

<!-- page-import:0387:start -->
350 4. Verstärker

**Abb. 4.61.** Spannungen und Ströme beim n-Kanal-Differenzverstärker

Die Schwellenspannungen der beiden Mosfets sind gleich, weil sie aufgrund der miteinander verbundenen Source-Anschlüsse mit gleicher Bulk-Source-Spannung betrieben werden. Aus der Schaltung folgt:

$$
I_{D1} + I_{D2} = 2I_0 \;,\quad U_D = U_{GS1} - U_{GS2}
$$

Die weitere Rechnung ist aufwendiger als beim npn-Differenzverstärker. Man bildet zunächst

$$
U_D = U_{GS1} - U_{GS2} = \sqrt{\frac{2I_{D1}}{K}} - \sqrt{\frac{2I_{D2}}{K}}
$$

und isoliert den Term mit $I_{D2}$ auf einer Seite der Gleichung. Anschließend quadriert man auf beiden Seiten, setzt $I_{D2} = 2I_0 - I_{D1}$ ein und löst nach Substitution von $x = \sqrt{I_{D1}}$ mit Hilfe der Lösungsformel für quadratische Gleichungen nach $x$ auf; durch Quadrieren erhält man $I_{D1}$ und $I_{D2} = 2I_0 - I_{D1}$:

$$
\left.
\begin{aligned}
I_{D1} &= I_0 + \frac{U_D}{2}\sqrt{2KI_0 - \left(\frac{K\,U_D}{2}\right)^2} \\
I_{D2} &= I_0 - \frac{U_D}{2}\sqrt{2KI_0 - \left(\frac{K\,U_D}{2}\right)^2}
\end{aligned}
\right\}
\quad \text{für } |U_D| < 2\sqrt{\frac{I_0}{K}}
\qquad (4.66)
$$

Außerhalb des Gültigkeitsbereichs von (4.66) fließt der Strom der Stromquelle vollständig durch einen der beiden Mosfets, während der andere sperrt. Mit $U_{a1} = U_b - I_{D1}R_D$ und $U_{a2} = U_b - I_{D2}R_D$ erhält man die Übertragungskennlinien des n-Kanal-Differenzverstärkers:

$$
\left.
\begin{aligned}
U_{a1} &= U_b - I_0R_D - \frac{U_DR_D}{2}\sqrt{2K\,I_0 - \left(\frac{K\,U_D}{2}\right)^2} \\
U_{a2} &= U_b - I_0R_D + \frac{U_DR_D}{2}\sqrt{2K\,I_0 - \left(\frac{K\,U_D}{2}\right)^2}
\end{aligned}
\right\}
\quad \text{für } |U_D| < 2\sqrt{\frac{I_0}{K}}
\qquad (4.67)
$$
<!-- page-import:0387:end -->

<!-- page-import:0388:start -->
4.1 Schaltungen 351

Außerhalb des Gültigkeitsbereichs von (4.67) hat ein Ausgang die maximale Ausgangsspannung $U_{a,max} = U_b$ und der andere die minimale Ausgangsspannung $U_{a,min} = U_b - 2I_0R_D$.

#### 4.1.4.6.1 Abhängigkeit von der Größe der Mosfets

Wenn man (4.67) mit der entsprechenden Gleichung (4.62) für den npn-Differenzverstärker vergleicht, fällt auf, dass die Kennlinien beim n-Kanal-Differenzverstärker auch von der Größe der Mosfets, ausgedrückt durch den Steilheitskoeffizienten $K$, abhängen; dagegen geht die Größe der Bipolartransistoren, ausgedrückt durch den Sättigungssperrstrom $I_S$, nicht in die Kennlinie des npn-Differenzverstärkers ein. Demnach kann man die Kennlinie des n-Kanal-Differenzverstärkers bei gleichbleibender äußerer Beschaltung durch Skalieren der Mosfets gezielt einstellen; beim npn-Differenzverstärker ist dies nur mit einer Stromgegenkopplung möglich. Die charakteristische Größe zur Einstellung der Kennlinie ist nach (4.67) die Spannung:

$$
U_{DM} = 2\sqrt{\frac{I_0}{K}}
$$

(4.68)

Sie gibt über die Bedingung $|U_D| < U_{DM}$ den aktiven Bereich der Kennlinie an. Da im Arbeitspunkt $U_D = 0$ die Stromaufteilung $I_{D1} = I_{D2} = I_0$ vorliegt und gleichzeitig $U_{GS1} = U_{GS2} = U_{GS,A}$ gilt, erhält man durch Einsetzen in die Kennlinie der Mosfets die alternative Darstellung:

$$
U_{DM} = \sqrt{2}\,(U_{GS,A} - U_{th})
$$

Abb. 4.62 zeigt die Kennlinien für $U_b = 5\,\mathrm{V}$, $R_D = 20\,\mathrm{k}\Omega$, $I_0 = 100\,\mu\mathrm{A}$ und $K = 0{,}4 \;/\; 1{,}6 \;/\; 6{,}4\,\mathrm{mA}/\mathrm{V}^2$ bzw. $U_{DM} = 1 \;/\; 0{,}5 \;/\; 0{,}25\,\mathrm{V}$. Man erkennt durch Vergleich mit Abb. 4.60, dass man beim n-Kanal-Differenzverstärker durch Variation der Größe der Mosfets eine ähnliche Wirkung erzielt wie beim npn-Differenzverstärker mit einer Stromgegenkopplung; dabei werden die Kennlinien beim n-Kanal-Differenzverstärker mit abnehmender Größe der Mosfets und beim npn-Differenzverstärker mit zunehmender Gegenkopplung ($R_E$ größer) flacher. Daraus folgt, dass man beim n-Kanal-Differenzverstärker mit kleineren Mosfets eine bessere Linearität, mit größeren dagegen eine höhere Differenzverstärkung erzielt.

#### 4.1.4.6.2 Gleichtaktaussteuerbereich

Aus (4.63) und (4.64) erhält man durch Einsetzen von $U_{GS} = U_{th} + \sqrt{2I_D/K}$ anstelle von $U_{BE}$ und $U_{DS,ab} = U_{GS} - U_{th}$ anstelle von $U_{CE,sat}$ den Gleichtaktaussteuerbereich

$$
U_{0,min} + (-U_b) + U_{th} + \sqrt{\frac{4I_0}{K}} < U_{Gl} < U_b - 2I_0R_D + U_{th}
$$

(4.69)

und den Gleichtaktaussteuerbereich bei Kleinsignalbetrieb:

$$
U_{0,min} + (-U_b) + U_{th} + \sqrt{\frac{2I_0}{K}} < U_{Gl} < U_b - I_0R_D + U_{th}
$$

(4.70)

Dabei ist $U_{0,min}$ die Aussteuerungsgrenze der Stromquelle. Eine direkte Bestimmung der Grenzen ist nicht möglich, weil die Schwellenspannung $U_{th}$ aufgrund des Substrat-Effekts von der Bulk-Source-Spannung $U_{BS}$ und diese wiederum von $U_{Gl}$ abhängt. Zur Abschätzung kann man den Substrat-Effekt vernachlässigen und $U_{th} = U_{th,0}$ einsetzen.
<!-- page-import:0388:end -->

<!-- page-import:0389:start -->
352 4. Verstärker

**Abb. 4.62.** Verlauf der Übertragungskennlinien des n-Kanal-Differenzverstärkers aus Abb. 4.61 mit $U_b = 5\,\mathrm{V}$, $R_D = 20\,\mathrm{k}\Omega$ und $I_0 = 100\,\mu\mathrm{A}$

#### 4.1.4.6.3 n-Kanal-Differenzverstärker mit Stromgegenkopplung

Auch beim n-Kanal-Differenzverstärker kann man eine Stromgegenkopplung zur Verbesserung der Linearität einsetzen. Dabei stellt sich die Frage, ob man damit bei gleicher Verstärkung ein besseres Ergebnis erhält als mit der im letzten Abschnitt beschriebenen Verkleinerung der Mosfets. Dazu werden die in Abb. 4.63 gezeigten Schaltungen verglichen, die im Bereich des Arbeitspunkts $U_D = 0$ identische Kennlinien und damit dieselbe Differenzverstärkung besitzen; Abb. 4.64 zeigt die zugehörigen Kennlinien. Man erkennt,

a ohne Stromgegenkopplung  
mit kleinen Mosfets

b mit Stromgegenkopplung  
und großen Mosfets

**Abb. 4.63.** Vergleich von n-Kanal-Differenzverstärkern mit und ohne Stromgegenkopplung bei gleicher Differenzverstärkung
<!-- page-import:0389:end -->

<!-- page-import:0390:start -->
4.1 Schaltungen 353

a ohne Stromgegenkopplung und mit kleinen Mosfets  
b mit Stromgegenkopplung und großen Mosfets

**Abb. 4.64.** Kennlinien der Differenzverstärker aus Abb. 4.63

dass die Schaltung mit Stromgegenkopplung und größeren Mosfets eine bessere Linearität besitzt; allerdings ist der Platzbedarf wegen der zehnfach größeren Mosfets und der benötigten Gegenkopplungswiderstände erheblich größer und die Bandbreite wegen der größeren Kapazitäten der Mosfets erheblich geringer als bei der Schaltung ohne Gegenkopplung.

## 4.1.4.7 Differenzverstärker mit aktiver Last

In integrierten Schaltungen werden anstelle der ohmschen Kollektor- bzw. Drainwiderstände Stromquellen eingesetzt, weil man damit bei gleichem, oft sogar geringerem Platzbedarf eine wesentlich höhere Differenzverstärkung erreicht. Die verwendeten Schaltungen werden im folgenden am Beispiel eines npn-Differenzverstärkers gezeigt.

### 4.1.4.7.1 Differenzverstärker mit symmetrischem Ausgang

In Abb. 4.65a werden anstelle der Kollektorwiderstände zwei Stromquellen mit dem Strom $I_0$ eingesetzt; damit folgt für die Ausgangsströme mit Bezug auf (4.61)$^{23}$:

$$
I_{a1} = I_{C1} - I_0 = I_0 \tanh \frac{U_D}{2U_T}, \qquad
I_{a2} = I_{C2} - I_0 = -I_0 \tanh \frac{U_D}{2U_T}
$$

Im Arbeitspunkt $U_D = 0$ sind beide Ausgänge stromlos. Die Ausgänge müssen so beschaltet sein, dass die Ausgangsströme auch tatsächlich fließen können, ohne dass die Transistoren oder die Stromquellen in die Sättigung geraten. Die Ausgangsspannungen sind ohne Beschaltung undefiniert.

Zur Verdeutlichung der Stromverteilung ist die Schaltung in Abb. 4.65b mit dem Differenzstrom

23 Da der Differenzverstärker im ganzen ein Stromknoten ist, muss die Knotenregel erfüllt sein. Das ist in den folgenden Gleichungen und in Abb. 4.65 nur dann der Fall, wenn die Basisströme vernachlässigt werden.
<!-- page-import:0390:end -->

<!-- page-import:0391:start -->
354  4. Verstärker

a mit absoluten Größen  
b mit Differenz-Größen

**Abb. 4.65.** npn-Differenzverstärker mit aktiver Last

$$
I_D = I_0 \tanh \frac{U_D}{2U_T}
$$

(4.71)

gezeigt. Die Stromquelle $2I_0$ im Emitterzweig wird aus Symmetriegründen in zwei Stromquellen aufgeteilt; dadurch fließt in der Querverbindung genau der Differenzstrom $I_D$. Man erkennt, dass der Differenzstrom vom Ausgang 1 über $T_1$, die Emitter-Querverbindung und $T_2$ zum Ausgang 2 fließt; er fließt also durch den Differenzverstärker hindurch. Daraus folgt, dass die Stromaufnahme konstant bleibt, solange kein Transistor und keine Stromquelle in die Sättigung gerät und $|I_D| < I_0$ gilt, oder: der Strom, der am einen Ausgang geliefert wird, wird am anderen Ausgang entnommen.

#### 4.1.4.7.2 Differenzverstärker mit unsymmetrischem Ausgang

Wenn ein unsymmetrischer Ausgang benötigt wird, kann man ebenfalls die Schaltung aus Abb. 4.65a verwenden, indem man den nicht benötigten Ausgang mit der Betriebsspannung $U_b$ verbindet und die zugehörige Stromquelle entfernt. Eine bessere, in der Praxis vorherrschende Alternative ist in Abb. 4.66a gezeigt. Hier werden die Stromquellen durch einen Stromspiegel ersetzt und dadurch der Strom des wegfallenden Ausgangs zum verbleibenden Ausgang gespiegelt:

$$
I_a = I_{C2} - I_{C4} \qquad \overset{I_{C4}\approx I_{C1}}{\approx} \qquad I_{C2} - I_{C1} = -2I_0 \tanh \frac{U_D}{2U_T}
$$

Im Arbeitspunkt $U_D = 0$ ist der Ausgang stromlos. Auch hier muss der Ausgang so beschalten sein, dass der Ausgangsstrom fließen kann, ohne dass $T_2$ oder $T_4$ in die Sättigung geraten. Abbildung 4.66b zeigt die Schaltung mit dem Differenzstrom $I_D$. Der Strom der negativen Versorgungsspannungsquelle bleibt konstant, der der positiven ändert sich bei Aussteuerung um $2I_D$.

#### 4.1.4.7.3 Stromquellen und Stromspiegel

Zur Realisierung der Stromquellen in Abb. 4.65 und Abb. 4.66 können prinzipiell alle im Abschnitt 4.1.2 beschriebenen Schaltungen eingesetzt werden; in der Praxis werden überwiegend einfache Stromspiegel oder Kaskode-Stromspiegel als Stromquellen eingesetzt. Auch der Stromspiegel in Abb. 4.66 kann unterschiedlich ausgeführt werden; da
<!-- page-import:0391:end -->

<!-- page-import:0392:start -->
4.1 Schaltungen 355

a mit absoluten Größen

b mit Differenz-Größen

**Abb. 4.66.** npn-Differenzverstärker mit unsymmetrischem Ausgang

das Übersetzungsverhältnis möglichst wenig von Eins abweichen sollte, wird häufig ein Drei-Transistor- oder ein Wilson-Stromspiegel verwendet.

Die Wahl der Stromquelle und des Stromspiegels hat nur einen vernachlässigbar geringen Einfluss auf die Ausgangsströme, lediglich der Kleinsignalausgangswiderstand ändert sich; darauf wird bei der Beschreibung des Kleinsignalverhaltens näher eingegangen.

## 4.1.4.8 Offsetspannung eines Differenzverstärkers

Bisher wurde davon ausgegangen, dass die Spannungen und Ströme im Arbeitspunkt $U_D = 0$ exakt symmetrisch sind. In der Praxis ist dies jedoch wegen der unvermeidlichen Toleranzen nicht erfüllt. Darüber hinaus sind einige Schaltungen unsymmetrisch, so dass bereits die Berücksichtigung der bisher vernachlässigten Effekte zu einer unsymmetrischen Stromverteilung führt. Ein Beispiel dafür ist der Differenzverstärker mit unsymmetrischem Ausgang in Abb. 4.66, bei dem bei $U_D = 0$ aufgrund des geringfügig von Eins abweichenden Übersetzungsverhältnisses des Stromspiegels eine unsymmetrische Stromverteilung vorliegt.

Zur Charakterisierung der Unsymmetrie dient die Offsetspannung $U_{off}$ 24. Sie gibt an, welche Differenzspannung angelegt werden muss, damit die Ausgangsspannungen gleich sind oder – bei unsymmetrischen Ausgängen – ein bestimmter Sollwert erreicht wird:

$$
U_D = U_{off} \;\Rightarrow\; U_{a1} = U_{a2} \;\text{bzw.}\; U_a = U_{a,\mathrm{soll}}
$$

(4.72)

Die zugehörige Stromverteilung kann, muss aber nicht symmetrisch sein. Bei den Übertragungskennlinien wirkt sich die Offsetspannung als Verschiebung in $U_D$-Richtung aus; Abb. 4.67 zeigt dies für den Fall $U_{off} > 0$.

Die Offsetspannung setzt sich, wie bereits erwähnt, aus einem durch Unsymmetrien der Schaltung verursachten systematischen Anteil und einem durch Toleranzen verursachten

24 Die Offsetspannung wird oft mit $U_O$ (Index $O$) bezeichnet. Da man diese Bezeichnung leicht mit $U_0$ (Index Null) verwechselt, wird hier zur besseren Unterscheidung $U_{off}$ verwendet.
<!-- page-import:0392:end -->

<!-- page-import:0393:start -->
356  4. Verstärker

**Abb. 4.67.** Übertragungskennlinien bei Vorliegen einer Offsetspannung

zufälligen Anteil zusammen. In der Praxis wird deshalb oft ein Bereich angegeben, in dem die Offsetspannung mit einer bestimmten Wahrscheinlichkeit (z.B. 99%) liegt.

Man kann die Offsetspannung berechnen, wenn man sehr genaue Gleichungen für die Transistoren verwendet und für alle Parameter Ober- und Untergrenzen einsetzt; der Rechenaufwand ist jedoch beträchtlich. Einfacher ist es, die Offsetspannung zu messen oder mit Hilfe einer Schaltungssimulation zu ermitteln; dazu wird die in Abb. 4.68 gezeigte Schaltung verwendet. Durch die Rückkopplung der Ausgangs-Differenzspannung $U_{a1} - U_{a2}$ auf den Eingang 1 werden die Ausgangsspannungen näherungsweise gleich und man

a symmetrischer Ausgang

b unsymmetrischer Ausgang

**Abb. 4.68.** Schaltung zur Messung der Offsetspannung
<!-- page-import:0393:end -->

<!-- page-import:0394:start -->
4.1 Schaltungen 357

erhält am Eingang die Spannung $U_{e1} \approx U_{off}$. Die Schaltung bewirkt zwar keine echte Differenzaussteuerung, jedoch hat die auftretende Gleichtaktspannung $U_{Gl} \approx U_{off}/2$ wegen der hohen Gleichtaktunterdrückung praktisch keinen Einfluss auf das Ergebnis.

Bei der Messung der Offsetspannung darf man keinen normalen Operationsverstärker als Regelverstärker einsetzen, weil der Differenzverstärker eine zusätzliche Schleifenverstärkung bewirkt, die auch bei universal-korrigierten Operationsverstärkern zur Instabilität der Schaltung führt. Am besten geeignet ist ein Instrumentenverstärker mit einer Verstärkung $A = 1$ und einer Grenzfrequenz $f_{g,RV}$, die mindestens um die Differenzverstärkung $A_D$ unter der Grenzfrequenz $f_g$ des Differenzverstärkers liegt: $f_{g,RV} < f_g/A_D$; dadurch ist ein stabiler Betrieb gewährleistet. In der Schaltungssimulation kann als Regelverstärker eine spannungsgesteuerte Spannungsquelle mit $A = 1$ eingesetzt werden; bei eventuell auftretenden Stabilitätsproblemen muss man $A$ reduzieren.

## 4.1.4.9 Kleinsignalverhalten des Differenzverstärkers

Das Verhalten bei Aussteuerung um einen Arbeitspunkt $A$ wird Kleinsignalverhalten genannt. Der Arbeitspunkt wird durch die Eingangsspannungen $U_{e1,A}$ und $U_{e2,A}$ bzw. $U_{D,A}$ und $U_{Gl,A}$, die Ausgangsspannungen $U_{a1,A}$ und $U_{a2,A}$ und die Kollektor- bzw. Drainströme der Transistoren gekennzeichnet. Im folgenden wird davon ausgegangen, dass die Offsetspannung gleich Null ist; daraus folgt für den Arbeitspunkt:

$$
U_{D,A} = 0 \quad,\quad U_{a1,A} = U_{a2,A}
$$

Es wird vorausgesetzt, dass die Gleichtaktspannung $U_{Gl,A}$ innerhalb des Gleichtaktaussteuerbereichs liegt und keinen Einfluss auf die Stromverteilung hat.

### 4.1.4.9.1 Ersatzschaltbilder für Differenz- und Gleichtaktaussteuerung

Wenn man die Stromquelle im Emitter- bzw. Sourcezweig eines Differenzverstärkers in zwei äquivalente Stromquellen aufteilt, ist der Differenzverstärker vollständig symmetrisch; Abb. 4.69 zeigt dies am Beispiel eines npn-Differenzverstärkers. Betrachtet man die Änderungen der Ströme und Spannungen in der Symmetrieebene bei Aussteuerung im Arbeitspunkt, stellt man folgendes fest:

- Die schiefsymmetrische Differenzaussteuerung führt bei ausreichend kleiner Amplitude zu einer schiefsymmetrischen Änderung aller Ströme und Spannungen. Daraus folgt, dass alle Spannungen in der Symmetrieebene konstant bleiben; in Abb. 4.69a gilt dies für die Spannung $U_0$ an den Emitter-Anschlüssen der Transistoren. Da man eine konstante Spannung durch eine Spannungsquelle ersetzen kann, erhält man das in Abb. 4.69a unten gezeigte Ersatzschaltbild: der Differenzverstärker zerfällt in zwei Emitterschaltungen, die Stromquellen entfallen. Die Spannungsquellen $U_0$ sind ideal und werden beim Übergang zum Kleinsignalersatzschaltbild kurzgeschlossen. Dadurch sind die Emitteranschlüsse der Transistoren im Kleinsignalersatzschaltbild mit der Kleinsignalmasse verbunden.
- Die symmetrische Gleichtaktaussteuerung führt zu einer symmetrischen Änderung aller Ströme und Spannungen. Daraus folgt, dass alle durch die Symmetrieebene fließenden Ströme gleich Null sind; in Abb. 4.69b gilt dies für den Strom $I$ in der Emitter-Verbindungsleitung. Da man eine stromlose Leitung entfernen kann, erhält man das in Abb. 4.69b unten gezeigte Ersatzschaltbild: der Differenzverstärker zerfällt auch in diesem Fall in zwei Emitterschaltungen. Bei den Stromquellen $I_0$ handelt es sich jeweils
<!-- page-import:0394:end -->

<!-- page-import:0396:start -->
4.1 Schaltungen 359

**Abb. 4.70.** Übergang von einer idealen zu einer realen Stromquelle und Aufteilung in zwei äquivalente Stromquellen

sche Änderungen zur Folge hat. Dagegen werden die Kennlinien bei Gleichtaktaussteuerung symmetrisch ausgesteuert, was auch bei nichtlinearen Kennlinien zu symmetrischen Änderungen führt. Man kann demnach das Theorem auch bei nichtlinearen Schaltungen anwenden, wenn man die Differenzaussteuerung auf den Bereich beschränkt, in dem die Kennlinien praktisch linear sind; beim npn-Differenzverstärker ist dies der Bereich $|U_D| < U_T$. Diese Vorgehensweise wurde hier gewählt, weil das Zerfallen eines Differenzverstärkers in zwei Teilschaltungen in der ursprünglichen Schaltung anschaulicher dargestellt werden kann als im Kleinsignalersatzschaltbild.

#### 4.1.4.9.2 Differenzverstärker mit Widerständen

Abbildung 4.71 zeigt die Schaltung eines npn-Differenzverstärkers zusammen mit den Kleinsignalersatzschaltbildern der äquivalenten Emitterschaltungen für Differenz- und Gleichtaktaussteuerung; letztere erhält man durch Linearisierung der Teilschaltungen aus Abb. 4.69 und Einsetzen der Stromquelle gemäß Abb. 4.70. Für die Kleinsignalgrößen gilt mit $U_{D,A} = 0$:

$$
u_{e1} = U_{e1} - U_{e1,A} = U_{e1} - U_{Gl,A} \qquad,\qquad
u_{a1} = U_{a1} - U_{a1,A}
$$

$$
u_D = U_D - U_{D,A} = U_D \qquad,\qquad
u_{Gl} = U_{Gl} - U_{Gl,A}
$$

Man erkennt, dass das Kleinsignalersatzschaltbild für Differenzaussteuerung dem einer Emitterschaltung ohne Gegenkopplung und das für Gleichtaktaussteuerung dem einer Emitterschaltung mit Gegenkopplung entspricht. Bei Gleichtaktaussteuerung wirkt der Ausgangswiderstand $2r_0$ der geteilten Stromquelle als Gegenkopplungswiderstand. Abbildung 4.72 zeigt die entsprechenden Kleinsignalersatzschaltbilder eines n-Kanal-Differenzverstärkers.

Aus dem Kleinsignalersatzschaltbild für Differenzaussteuerung werden die Differenzverstärkung $A_D$, der Differenz-Ausgangswiderstand $r_{a,D}$ und der Differenz-Eingangswiderstand $r_{e,D}$ berechnet:

$$
A_D
=
\left.\frac{u_{a1}}{u_D}\right|_{\substack{i_{a1}=i_{a2}=0\\u_{Gl}=0}}
=
\left.\frac{u_a}{2u_e}\right|_{i_a=0}
=
\frac{1}{2}\,A_{Emitter/Source}
\qquad (4.73)
$$

$$
r_{a,D}
=
\left.\frac{u_{a1}}{i_{a1}}\right|_{\substack{u_{a1}=-u_{a2}\\u_D=u_{Gl}=0}}
=
\left.\frac{u_a}{i_a}\right|_{u_e=0}
=
r_{a,Emitter/Source}
\qquad (4.74)
$$

$$
r_{e,D}
=
\left.\frac{u_D}{i_{e1}}\right|_{u_{Gl}=0}
=
\frac{2u_e}{i_e}
=
2\,r_{e,Emitter/Source}
\qquad (4.75)
$$

Hier wirkt sich aus, dass die Eingangsspannung im Kleinsignalersatzschaltbild für Differenzaussteuerung nicht $u_D$, sondern $u_D/2$ ist; deshalb ist die Verstärkung des Differenz-
<!-- page-import:0396:end -->

<!-- page-import:0397:start -->
360 4. Verstärker

**Abb. 4.71.** npn-Differenzverstärker mit Kollektorwiderständen: Schaltung (oben) und Kleinsignalersatzschaltbilder der äquivalenten Emitterschaltungen für Differenzaussteuerung (Mitte) und Gleichtaktaussteuerung (unten)

verstärkers nur halb so groß, der Eingangswiderstand dagegen doppelt so groß wie bei der äquivalenten Emitter- oder Sourceschaltung.

Aus dem Kleinsignalersatzschaltbild für Gleichtaktaussteuerung erhält man die Gleichtaktverstärkung $A_{Gl}$, den Gleichtakt-Ausgangswiderstand $r_{a,Gl}$ und den Gleichtakt-Eingangswiderstand $r_{e,Gl}$:

$$
A_{Gl}=\left.\frac{u_{a1}}{u_{Gl}}\right|_{\substack{i_{a1}=i_{a2}=0\\u_D=0}}
=\left.\frac{u_a}{u_e}\right|_{i_a=0}
= A_{Emitter/Source}
\qquad (4.76)
$$
<!-- page-import:0397:end -->

<!-- page-import:0398:start -->
4.1 Schaltungen 361

**Abb. 4.72.** n-Kanal-Differenzverstärker mit Drainwiderständen: Schaltung (oben) und Kleinsignal-
ersatzschaltbilder der äquivalenten Sourceschaltungen für Differenzaussteuerung (Mitte)
und Gleichtaktaussteuerung (unten)

$$
r_{a,Gl}=\left.\frac{u_{a1}}{i_{a1}}\right|_{\substack{u_{a1}=u_{a2}\\ u_D=0,\;u_{Gl}=0}}
=\left.\frac{u_a}{i_a}\right|_{u_e=0}
= r_{a,Emitter/Source}
\qquad (4.77)
$$

$$
r_{e,Gl}=\frac{u_{Gl}}{i_{e1}}=\frac{u_e}{i_e}=r_{e,Emitter/Source}
\qquad (4.78)
$$

Hier erhält man für den Differenzverstärker dieselben Werte wie bei der äquivalenten
Emitter- oder Sourceschaltung. Man beachte, dass die Kleinsignalgrößen in (4.76)–(4.78)
zu einem anderen Kleinsignalersatzschaltbild gehören als die in (4.73)–(4.75); so folgt
z.B. aus (4.73) und (4.76) nicht $A_D=A_{Gl}/2$.

Bei einer Messung oder Simulation dieser Größen muss reine Differenz- oder Gleich-
taktaussteuerung vorliegen. Das gilt nicht nur am Eingang, an dem dies durch die Größen
$u_D$ und $u_{Gl}$ zum Ausdruck kommt, sondern auch am Ausgang. Da dort keine speziellen
<!-- page-import:0398:end -->

<!-- page-import:0400:start -->
4.1 Schaltungen 363

**Abb. 4.73.** Bulk-Source-Spannung $U_{BS}$ bei der Sourceschaltung und beim n-Kanal-Differenzverstärker

Verwendet wurden dazu die Gleichungen (2.73)–(2.75) auf Seite 106, (2.82)–(2.84) auf Seite 112, (3.59)–(3.61) auf Seite 241 und (3.65)–(3.67) auf Seite 246; dabei wird in (2.82) $R_E = 2r_0$ und in (3.65) $R_S = 2r_0$ und $2Sr_0 \gg 1$ eingesetzt.

Beim n-Kanal-Differenzverstärker mit integrierten Mosfets hängt die Gleichtaktverstärkung von der Gleichtaktspannung $U_{Gl,A}$ im Arbeitspunkt ab, weil die Bulk-Source-Spannung $U_{BS}$ und die Substrat-SteIlheit $S_B$ von $U_{Gl,A}$ abhängen. Da aber beim n-Kanal-Differenzverstärker nach Abb. 4.73 $U_{BS} < 0$ gilt, ist die Substrat-SteIlheit geringer als bei der Sourceschaltung und kann deshalb in der Praxis meist vernachlässigt werden. Im Gegensatz dazu gilt bei Differenzverstärkern mit diskreten Mosfets $U_{BS} = 0$; in diesem Fall kann man in den Gleichungen $S_B = 0$ setzen. Im folgenden wird die Substrat-SteIlheit generell vernachlässigt.

Zur Realisierung der Stromquelle können prinzipiell alle im Abschnitt 4.1.2 beschriebenen Schaltungen eingesetzt werden; dabei geht der Ausgangswiderstand $r_0$ maßgeblich in die Gleichtaktverstärkung und die Gleichtaktunterdrückung ein. In der Praxis wird meist ein einfacher Stromspiegel eingesetzt.

#### 4.1.4.9.3 Grundgleichungen eines symmetrischen Differenzverstärkers

Man kann die Differenzverstärkung mit Hilfe des Differenz-Ausgangswiderstands und die Gleichtaktverstärkung mit Hilfe des Gleichtakt-Ausgangswiderstands darstellen; dadurch erhält man aus (4.79)–(4.85) die *Grundgleichungen eines symmetrischen Differenzverstärkers*:

$$
A_D = \left.\frac{u_{a1}}{u_D}\right|_{i_{a1}=i_{a2}=0} = -\frac{1}{2}Sr_{a,D}
\qquad\qquad (4.86)
$$

$$
A_{Gl} = \left.\frac{u_{a1}}{u_{Gl}}\right|_{i_{a1}=i_{a2}=0} \approx -\frac{r_{a,Gl}}{2r_0}
\qquad\qquad (4.87)
$$

$$
G = \frac{A_D}{A_{Gl}} \approx Sr_0\frac{r_{a,D}}{r_{a,Gl}}
\qquad r_{a,D} \approx r_{a,Gl}
\qquad \approx Sr_0
\qquad\qquad (4.88)
$$
<!-- page-import:0400:end -->

<!-- page-import:0401:start -->
364 4. Verstärker

**Abb. 4.74.** Differenzverstärker mit einfachen Stromquellen

Wenn die Ausgangswiderstände $r_{a,D}$ und $r_{a,Gl}$ wie beim Differenzverstärker mit Widerständen nahezu gleich sind, hängt die Gleichtaktunterdrückung nur von der Steilheit der Transistoren und vom Ausgangswiderstand $r_0$ der Stromquelle ab.

Eine Stromgegenkopplung wie in Abb. 4.59 auf Seite 348 oder in Abb. 4.63b auf Seite 352 kann einfach berücksichtigt werden, indem man anstelle der Steilheit $S$ die reduzierte Steilheit

$$
S_{red}=S'=
\left\{
\begin{array}{l}
\dfrac{S}{1+SR_E}\\[1.2ex]
\dfrac{S}{1+(S+S_B)R_S}\qquad S\gg S_B \qquad \approx \dfrac{S}{1+SR_S}
\end{array}
\right.
\qquad\qquad (4.89)
$$

einsetzt; dadurch nimmt die Differenzverstärkung entsprechend ab. Die Gleichtaktverstärkung bleibt gleich, weil der Gegenkopplungswiderstand im Kleinsignalersatzschaltbild für Gleichtaktaussteuerung in Reihe zum Ausgangswiderstand $r_0$ der Stromquelle liegt und wegen $r_0 \gg R_E, R_S$ vernachlässigt werden kann. Die Gleichtaktunterdrückung $G=A_D/A_{Gl}$ nimmt demnach bei Stromgegenkopplung ab.

#### 4.1.4.9.4 Differenzverstärker mit einfachen Stromquellen

Abbildung 4.74 zeigt einen npn- und einen n-Kanal-Differenzverstärker mit einfachen Stromquellen anstelle der Widerstände. Im Kleinsignalersatzschaltbild und in den Gleichungen werden die Widerstände durch den Ausgangswiderstand der einfachen Stromquelle ersetzt: $R_C \to r_{CE3}$ beim npn-Differenzverstärker und $R_D \to r_{DS3}$ beim n-Kanal-Differenzverstärker. Damit erhält man für den Differenzverstärker mit einfachen Stromquellen:
<!-- page-import:0401:end -->

<!-- page-import:0402:start -->
4.1 Schaltungen 365

*Differenzverstärker mit einfachen Stromquellen*

$$
A_D=\left.\frac{u_{a1}}{u_D}\right|_{i_{a1}=i_{a2}=0}=-\frac{1}{2}S_1 r_{a,D}
$$

$$
r_{a,D}=\left.\frac{u_{a1}}{i_{a1}}\right|_{u_{a1}=-u_{a2}}
\approx
\begin{cases}
r_{CE1}\parallel r_{CE3} \approx \frac{r_{CE3}}{2} & r_{CE1}\approx r_{CE3}\\
r_{DS1}\parallel r_{DS3} \approx \frac{r_{DS3}}{2} & r_{DS1}\approx r_{DS3}
\end{cases}
\qquad (4.90)
$$

$$
A_{Gl}=\left.\frac{u_{a1}}{u_{Gl}}\right|_{i_{a1}=i_{a2}=0}\approx -\frac{r_{a,Gl}}{2r_0}
$$

$$
r_{a,Gl}=\left.\frac{u_{a1}}{i_{a1}}\right|_{u_{a1}=u_{a2}}
\approx
\begin{cases}
\beta_1 r_{CE1}\parallel r_{CE3} \approx r_{CE3}\\
2S_1 r_{DS1} r_0\parallel r_{DS3} \approx r_{DS3}
\end{cases}
\qquad (4.91)
$$

$$
G=\frac{A_D}{A_{Gl}}\approx S_1 r_0 \frac{r_{a,D}}{r_{a,Gl}}
\approx \frac{S r_0}{2}
\qquad (4.92)
$$

Die Eingangswiderstände $r_{e,D}$ und $r_{e,Gl}$ bleiben unverändert, d.h. (4.81) und (4.84) gelten auch für den Differenzverstärker mit Stromquellen.

Beim npn-Differenzverstärker mit einfachen Stromquellen erhält man durch Einsetzen von $S_1=I_0/U_T$, $r_{CE1}=U_{A,npn}/I_0$ und $r_{CE3}=U_{A,pnp}/I_0$:

$$
A_D=-\frac{1}{2U_T\left(\frac{1}{U_{A,npn}}+\frac{1}{U_{A,pnp}}\right)}
\qquad (4.93)
$$

Dabei sind $U_{A,npn}$ und $U_{A,pnp}$ die Early-Spannungen der Transistoren; für die Temperaturspannung gilt $U_T\approx 26\,\mathrm{mV}$ bei $T=300\,\mathrm{K}$. Die Transistor-Größen und der Ruhestrom $I_0$ haben keinen Einfluss auf die Differenzverstärkung. Für die Transistoren aus Abb. 4.5 gilt $U_{A,npn}=100\,\mathrm{V}$ und $U_{A,pnp}=50\,\mathrm{V}$; daraus folgt $A_D=-640$.

Beim n-Kanal-Differenzverstärker mit einfachen Stromquellen erhält man mit $S_1=\sqrt{2K_1 I_0}$, $r_{DS1}=U_{A,nK}/I_0$ und $r_{DS3}=U_{A,pK}/I_0$:

$$
A_D=-\sqrt{\frac{K_1}{2I_0}}\,
\frac{1}{\frac{1}{U_{A,nK}}+\frac{1}{U_{A,pK}}}
=
-\frac{1}{(U_{GS1}-U_{th1})\left(\frac{1}{U_{A,nK}}+\frac{1}{U_{A,pK}}\right)}
\qquad (4.94)
$$

Dabei sind $U_{A,nK}$ und $U_{A,pK}$ die Early-Spannungen der Mosfets. Hier hängt die Differenzverstärkung auch von der Größe der Mosfets $T_1$ und $T_2$, ausgedrückt durch den Steilheitskoeffizienten $K_1$, ab; sie nimmt mit zunehmender Größe der Mosfets zu. Für die Mosfets aus Abb. 4.6 gilt $U_{A,nK}=50\,\mathrm{V}$ und $U_{A,pK}=33\,\mathrm{V}$; mit dem typischen Wert $U_{GS1}-U_{th1}=1\,\mathrm{V}$ folgt $A_D=-20$.
<!-- page-import:0402:end -->

<!-- page-import:0403:start -->
366  4. Verstärker

## 4.1.4.9.5 Differenzverstärker mit Kaskode-Stromquellen

Man kann die Differenzverstärkung durch Einsatz von Stromquellen mit Kaskode oder Kaskode-Stromquellen $^{25}$ anstelle der einfachen Stromquellen erhöhen; Abb. 4.75 zeigt die resultierenden Schaltungen beim Einsatz von Stromquellen mit Kaskode. Die Bezeichnung *Differenzverstärker mit Kaskode-Stromquellen* ist in diesem Fall streng genommen nicht korrekt, wird aber der umständlichen Bezeichnung *Differenzverstärker mit Stromquellen mit Kaskode* vorgezogen.

Der Ausgangswiderstand der Stromquelle steigt durch den Einsatz von Stromquellen mit Kaskode von $r_{CE3}$ bzw. $r_{DS3}$ auf

$$
r_{aS} \approx
\begin{cases}
\beta_3 r_{CE3} \\
(S_3 + S_{B3})\, r_{DS3}^2 \qquad \overset{S_3 \gg S_{B3}}{\approx} \qquad S_3 r_{DS3}^2
\end{cases}
$$

an; dadurch erhält man für den Differenzverstärker mit Kaskode-Stromquellen:

*Differenzverstärker mit Kaskode-Stromquellen*

$$
A_D=\left.\frac{u_{a1}}{u_D}\right|_{i_{a1}=i_{a2}=0}
=-\frac{1}{2} S_1 r_{a,D}
$$

$$
r_{a,D}=\left.\frac{u_{a1}}{i_{a1}}\right|_{u_{a1}=-u_{a2}}
\approx
\begin{cases}
r_{CE1} \parallel \beta_3 r_{CE3} \approx r_{CE1} \\
r_{DS1} \parallel S_3 r_{DS3}^2 \approx r_{DS1}
\end{cases}
\qquad (4.95)
$$

$$
A_{Gl}=\left.\frac{u_{a1}}{u_{Gl}}\right|_{i_{a1}=i_{a2}=0}
\approx -\frac{r_{a,Gl}}{2r_0}
$$

$$
r_{a,Gl}=\left.\frac{u_{a1}}{i_{a1}}\right|_{u_{a1}=u_{a2}}
\approx
\begin{cases}
\beta_1 r_{CE1} \parallel \beta_3 r_{CE3} \\
2S_1 r_{DS1} r_0 \parallel S_3 r_{DS3}^2
\end{cases}
\qquad (4.96)
$$

$$
G=\frac{A_D}{A_{Gl}} \approx S_1 r_0 \frac{r_{a,D}}{r_{a,Gl}}
\qquad (4.97)
$$

Hier ist der Gleichtakt-Ausgangswiderstand $r_{a,Gl}$ typisch um den Faktor $20\dots200$ größer als der Differenz-Ausgangswiderstand $r_{a,D}$; dadurch wird die Gleichtaktunterdrückung im Vergleich zum Differenzverstärker mit Widerständen entsprechend reduziert:

$$
G \approx \frac{S_1 r_0}{20\dots200}
$$

Beim npn-Differenzverstärker mit Kaskode-Stromquellen erhält man durch Einsetzen von $S_1=I_0/U_T$ und $r_{CE1}=U_{A,npn}/I_0$:

$$
A_D=-\frac{U_{A,npn}}{2U_T}=-\frac{\mu}{2}
\qquad (4.98)
$$

Dabei ist $\mu=U_A/U_T$ die im Zusammenhang mit der Emitterschaltung eingeführte Maximalverstärkung eines Bipolartransistors. Mit $U_{A,npn}=100\ \mathrm{V}$ erhält man $A_D=-1920$ im Vergleich zu $A_D=-640$ beim npn-Differenzverstärker mit einfachen Stromquellen.

$^{25}$ Zur Unterscheidung siehe Abb. 4.25 auf Seite 305 und Abb. 4.27 auf Seite 308.
<!-- page-import:0403:end -->

<!-- page-import:0404:start -->
4.1 Schaltungen 367

**Abb. 4.75.** Differenzverstärker mit Kaskode-Stromquellen

Beim n-Kanal-Differenzverstärker mit Kaskode-Stromquellen folgt mit $S_1=\sqrt{2K_1I_0}$ und $r_{DS1}=U_{A,nK}/I_0$:

$$
A_D=-\sqrt{\frac{K_1}{2I_0}}\,U_{A,nK}
=-\frac{U_{A,nK}}{U_{GS1}-U_{th1}}
=-\frac{\mu}{2}
\qquad (4.99)
$$

Dabei ist $\mu$ die im Zusammenhang mit der Sourcechaltung eingeführte Maximalverstärkung eines Mosfets. Mit $U_{A,nK}=50\,\mathrm{V}$ und $U_{GS1}-U_{th1}=1\,\mathrm{V}$ erhält man $A_D=-50$ im Vergleich zu $A_D=-20$ beim n-Kanal-Differenzverstärker mit einfachen Stromquellen.

Der Differenzverstärker mit Kaskode-Stromquellen wird immer dann eingesetzt, wenn die pnp- bzw. p-Kanal-Transistoren eine deutlich geringere Early-Spannung aufweisen als die npn- bzw. n-Kanal-Transistoren. In diesem Fall erzielt man mit einfachen Stromquellen nur eine unzureichende Verstärkung.

## 4.1.4.9.6 Kaskode-Differenzverstärker

Eine weitere Zunahme der Differenzverstärkung bei gleichzeitiger Zunahme des Verstärkungs-Bandbreite-Produkts wird erreicht, wenn der Differenzverstärker zum Kaskode-Differenzverstärker ausgebaut wird. Dabei werden die in Abb. 4.45 auf Seite 329 gezeigten Kaskodeschaltungen symmetrisch ergänzt; Abb. 4.76 zeigt die resultierenden Schaltungen. Die Vorteile der Kaskodeschaltung werden im Abschnitt 4.1.3 beschrieben und gelten für den Kaskode-Differenzverstärker in gleicher Weise.

In Abb. 4.76 werden Stromquellen mit Kaskode eingesetzt, um eine möglichst hohe Differenzverstärkung zu erzielen. Wenn man dagegen nur an einer Zunahme des
<!-- page-import:0404:end -->

<!-- page-import:0405:start -->
368  4. Verstärker

Verstärkungs-Bandbreite-Produkts interessiert ist, kann man auch einfache Stromquellen einsetzen; in diesem Fall entfallen die Transistoren $T_5$ und $T_6$. Im allgemeinen ist jedoch die höhere Differenzverstärkung wichtiger als die Zunahme des Verstärkungs-Bandbreite-Produkts. Das gilt vor allem für den n-Kanal-Differenzverstärker, der ohne die Kaskode-Stufen im Differenzverstärker *und* in den Stromquellen nur eine vergleichsweise geringe Differenzverstärkung erreicht.

Aus (4.36) und (4.37) folgt für den Kaskode-Differenzverstärker:

*Kaskode-Differenzverstärker*

$$
A_D = \left.\frac{u_{a1}}{u_D}\right|_{i_{a1}=i_{a2}=0} = -\frac{1}{2} S_1 r_{a,D}
$$

$$
r_{a,D} = \left.\frac{u_{a1}}{i_{a1}}\right|_{u_{a1}=-u_{a2}=0}
\approx
\begin{cases}
\beta_3 r_{CE3} \parallel \beta_5 r_{CE5} \\
S_3 r_{DS3}^2 \parallel S_5 r_{DS5}^2
\end{cases}
\tag{4.100}
$$

$$
A_{Gl} = \left.\frac{u_{a1}}{u_{Gl}}\right|_{i_{a1}=i_{a2}=0} \approx -\frac{r_{a,Gl}}{2r_0}
$$

$$
r_{a,Gl} = \left.\frac{u_{a1}}{i_{a1}}\right|_{u_{a1}=u_{a2}=0}
\approx
\begin{cases}
\beta_3 r_{CE3} \parallel \beta_5 r_{CE5} \\
S_5 r_{DS5}^2
\end{cases}
\tag{4.101}
$$

$$
G = \frac{A_D}{A_{Gl}} \approx S_1 r_0 \frac{r_{a,D}}{r_{a,Gl}}
$$

Beim n-Kanal-Kaskode-Differenzverstärker nimmt der Ausgangswiderstand am Drain-Anschluss von $T_3$ bei Gleichtaktaussteuerung auf $2S_1S_3r_{DS3}^2r_0$ zu und kann vernachlässigt werden. Beim npn-Kaskode-Differenzverstärker wird der maximale Ausgangswiderstand $\beta_3r_{CE3}$ am Kollektor von $T_3$ schon bei Differenzaussteuerung erreicht; eine weitere Zunahme ist nicht möglich.

Durch Einsetzen der Kleinsignalparameter erhält man für den npn-Kaskode-Differenzverstärker

$$
A_D \approx -\frac{1}{2U_T\left(\frac{1}{\beta_{npn}U_{A,npn}}+\frac{1}{\beta_{pnp}U_{A,pnp}}\right)}
\tag{4.102}
$$

und für den n-Kanal-Kaskode-Differenzverstärker mit Mosfets gleicher Größe, d.h. gleichem Steilheitskoeffizienten $K$:

$$
A_D \approx -\frac{K}{I_D\left(\frac{1}{U_{A,nK}^2}+\frac{1}{U_{A,pK}^2}\right)}
= -\frac{2}{(U_{GS}-U_{th})^2\left(\frac{1}{U_{A,nK}^2}+\frac{1}{U_{A,pK}^2}\right)}
\tag{4.103}
$$

Mit den Bipolartransistoren aus Abb. 4.5 erhält man $A_D \approx -38500$ und mit den Mosfets aus Abb. 4.6 $A_D \approx -1500$.

Wenn die Early-Spannungen und Stromverstärkungen der npn- und pnp-Transistoren und die Early-Spannungen der n-Kanal- und p-Kanal-Mosfets gleich sind, folgt:
<!-- page-import:0405:end -->

<!-- page-import:0406:start -->
4.1 Schaltungen 369

**Abb. 4.76.** Kaskode-Differenzverstärker

$$
|A_D| \approx
\left\{
\begin{array}{l}
\displaystyle \frac{\beta S r_{CE}}{4}
=
\frac{\beta U_A}{4U_T}
\qquad \beta \approx 100
\qquad \approx 25.000 \ldots 150.000
\\[1.2ex]
\displaystyle \frac{S^2 r_{DS}^2}{4}
=
\left(\frac{U_A}{U_{GS}-U_{th}}\right)^2
\approx 400 \ldots 10.000
\end{array}
\right.
$$

Demnach kann man mit *einem* npn-Kaskode-Differenzverstärker eine Differenzverstärkung im Bereich von $10^5 = 100\,\mathrm{dB}$ erreichen; mit einem n-Kanal-Kaskode-Differenzverstärker erreicht man dagegen maximal etwa $10^4 = 80\,\mathrm{dB}$.

#### 4.1.4.9.7 Differenzverstärker mit Stromspiegel

Durch den Einsatz eines Stromspiegels erhält man einen Differenzverstärker mit unsymmetrischem Ausgang; Abb. 4.77a zeigt die einfachste Ausführung, die bereits in Abb. 4.66 auf Seite 355 vorgestellt und bezüglich ihres Großsignalverhaltens untersucht wurde. Beim Kaskode-Differenzverstärker erhält man durch den Einsatz eines Kaskode-Stromspiegels die in Abb. 4.77b gezeigte Schaltung. Das Übersetzungsverhältnis der Stromspiegel muss $k_I = 1$ betragen (praktisch: $k_I \approx 1$).
<!-- page-import:0406:end -->

<!-- page-import:0407:start -->
370  4. Verstärker

Man kann die Kleinsignalgrößen leicht ableiten, wenn man folgende Eigenschaften berücksichtigt:

- Durch den Stromspiegel verdoppelt sich der Ausgangsstrom bei Differenzaussteuerung, siehe Abb. 4.66; dadurch nimmt die Differenzverstärkung um den Faktor 2 zu.
- Bei Gleichtaktaussteuerung ändern sich die Ströme gleichsinnig und werden durch den Stromspiegel am Ausgang subtrahiert. Bei idealer Subtraktion mit einem idealen Stromspiegel bleibt die Ausgangsspannung konstant; daraus folgt $A_{Gl} = 0$. Bei realen Stromspiegeln verbleibt eine geringe Gleichtaktverstärkung.
- Der Ausgangswiderstand $r_a$ entspricht dem Differenz-Ausgangswiderstand $r_{a,D}$ der entsprechenden symmetrischen Schaltung.

Damit erhält man die Grundgleichungen eines unsymmetrischen Differenzverstärkers mit Stromspiegel:

$$
A_D=\left.\frac{u_{a1}}{u_D}\right|_{i_a=0}=-Sr_a
$$

(4.104)

$$
A_{Gl}=\left.\frac{u_{a1}}{u_{Gl}}\right|_{i_a=0}\approx 0
$$

(4.105)

$$
G=\frac{A_D}{A_{Gl}}\rightarrow \infty
$$

(4.106)

Für den Differenzverstärker mit einfachem Stromspiegel gilt

$$
r_a=\left.\frac{u_{a1}}{i_{a1}}\right|_{u_D=0}\approx
\begin{cases}
r_{CE2}\parallel r_{CE4}\\
r_{DS2}\parallel r_{DS4}
\end{cases}
$$

(4.107)

und für den Kaskode-Differenzverstärker mit Kaskode-Stromspiegel:

$$
r_a=\left.\frac{u_{a1}}{i_{a1}}\right|_{u_D=0}=
\begin{cases}
\beta_4 r_{CE4}\parallel \frac{\beta_6 r_{CE6}}{2}\\
S_4 r_{DS4}^2\parallel S_6 r_{DS6}^2
\end{cases}
$$

(4.108)

Beim npn-Kaskode-Differenzverstärker mit Kaskode-Stromspiegel ist zu beachten, dass der Ausgangswiderstand eines Kaskode-Stromspiegels mit $k_I = 1$ nur halb so groß ist wie der Ausgangswiderstand einer Stromquelle mit Kaskode, siehe (4.23) und (4.27).

## 4.1.4.9.8 Ersatzschaltbild

Mit Hilfe der Kleinsignalparameter eines Differenzverstärkers kann man das in Abb. 4.78 gezeigte Ersatzschaltbild angeben. Es besteht eingangsseitig aus einem $\pi$-Netzwerk mit drei Widerständen zur Nachbildung der Eingangswiderstände $r_{e,D}$ und $r_{e,Gl}$ beim npn-Differenzverstärker; beim n-Kanal-Differenzverstärker entfallen die Widerstände. Da die beiden Widerstände $r_{e,Gl}$ auch bei Differenzaussteuerung wirksam werden, muss der Querwiderstand den Wert
<!-- page-import:0407:end -->

<!-- page-import:0408:start -->
4.1 Schaltungen 371

a Differenzverstärker mit  
einfachem Stromspiegel

b Kaskode-Differenzverstärker  
mit Kaskode-Stromspiegel

**Abb. 4.77.** Differenzverstärker mit Stromspiegel

$$
r'_{e,D}=\frac{2r_{e,D}r_{e,Gl}}{2r_{e,Gl}-r_{e,D}}
$$

haben, damit der effektive Differenz-Eingangswiderstand $r_{e,D}$ beträgt. In der Praxis gilt $r_{e,Gl} \gg r_{e,D}$ und damit $r'_{e,D} \approx r_{e,D}$. Ausgangsseitig dient ein T-Netzwerk aus drei

$u_{a1}$

$\dfrac{Su_D}{2}$

$\dfrac{u_{Gl}}{2r_0}$

$r_{a,D}$

$r_{a,D}$

$r$

$\dfrac{u_{Gl}}{2r_0}$

$\dfrac{Su_D}{2}$

$u_{a2}$

$$
u_D=u_{e1}-u_{e2}
$$

$$
u_{Gl}=\frac{u_{e1}+u_{e2}}{2}
$$

$$
r=\frac{r_{a,Gl}-r_{a,D}}{2}
$$

$$
r'_{e,D}=\frac{r_{e,D}\,r_{e,Gl}}{r_{e,Gl}-r_{e,D}} \approx r_{e,D}
$$

$u_{e1}$

$r_{e,Gl}$

$r_{e,Gl}$

$u_{e2}$

**Abb. 4.78.** Ersatzschaltbild eines Differenzverstärkers
<!-- page-import:0408:end -->

<!-- page-import:0409:start -->
372  4. Verstärker

Widerständen zur Nachbildung der Ausgangswiderstände. Das T-Netzwerk hat den Vorteil, dass der für die Praxis wichtigere Differenz-Ausgangswiderstand direkt eingeht und der Widerstand $r$ für $r_{a,D} = r_{a,Gl}$ in einen Kurzschluss übergeht. An jedem Ausgang sind zwei Stromquellen angeschlossen, die von der Differenzspannung $u_D$ und der Gleichtaktspannung $u_{Gl}$ gesteuert werden; die entsprechenden Steilheiten sind $S/2$ bei Differenzaussteuerung und $1/(2r_0)$ bei Gleichtaktaussteuerung.

## 4.1.4.10 Nichtlinearität

Durch eine Reihenentwicklung der Kennlinien kann man den Klirrfaktor eines Differenzverstärkers näherungsweise berechnen. Beim npn-Differenzverstärker folgt aus (4.62) durch Übergang zu den Kleinsignalgrößen:

$$
u_{a1} = -I_0 R_C \tanh \frac{u_D}{2U_T} = -I_0 R_C \left[ \frac{u_D}{2U_T} - \frac{1}{3}\left(\frac{u_D}{2U_T}\right)^3 + \cdots \right]
$$

Durch Einsetzen von $u_D = \hat{u}_D \cos \omega_0 t$ erhält man:

$$
u_{a1} = -I_0 R_C \left[ \left( \frac{u_D}{2U_T} - \frac{u_D^3}{32U_T^3} + \cdots \right) \cos \omega_0 t - \left( \frac{u_D^3}{96U_T^3} - \cdots \right) \cos 3\omega_0 t + \cdots \right]
$$

Bei kleinen Amplituden ($u_D < 2U_T$) folgt aus dem Verhältnis der Amplituden bei $3\omega_0$ und $\omega_0$ näherungsweise der Klirrfaktor des npn-Differenzverstärkers ohne Stromgegenkopplung:

$$
k \approx \frac{1}{48}\left(\frac{\hat{u}_D}{U_T}\right)^2
$$

(4.109)

Mit $U_T = 26\,\mathrm{mV}$ erhält man bei Vorgabe eines maximalen Klirrfaktors:

$$
\hat{u}_D < U_T \sqrt{48k} = 180\,\mathrm{mV}\cdot \sqrt{k}
$$

Für $k < 1\%$ muss $\hat{u}_D < 18\,\mathrm{mV}$ gelten. Damit ist der npn-Differenzverstärker wesentlich linearer als die Emitterschaltung, bei der für $k < 1\%$ nur eine Amplitude von $\hat{u}_e < 1\,\mathrm{mV}$ zulässig ist. Außerdem muss man die Amplitude im Zuge einer Reduzierung des Klirrfaktors nur proportional zur Wurzel des Klirrfaktors und nicht, wie bei der Emitterschaltung, linear reduzieren.

Die Berechnung gilt nur für den Fall, dass am Ausgang noch keine Übersteuerung auftritt; dies wurde durch die Annahme einer idealen tanh-Kennlinie implizit vorausgesetzt. Bei den meisten Differenzverstärkern mit Stromquellen ist jedoch die Verstärkung so hoch, dass bereits eine Differenzaussteuerung von wenigen Millivolt zu einer Übersteuerung am Ausgang führt; das gilt vor allem für den Kaskode-Differenzverstärker. In diesem Fall arbeitet der Differenzverstärker bis zur ausgangsseitigen Übersteuerung praktisch linear und der Klirrfaktor ist entsprechend gering. Bei einsetzender Übersteuerung am Ausgang steigt der Klirrfaktor dann jedoch stark an.

Beim npn-Differenzverstärker mit Stromgegenkopplung gilt:

$$
U_D = U_{BE1} + I_{C1}R_E - U_{BE2} - I_{C2}R_E = U_{BE1} - U_{BE2} + (I_{C1} - I_{C2})R_E
$$

Mit $U'_D = U_{BE1} - U_{BE2}$ anstelle von $U_D$ erhält man aus (4.61):

$$
I_{C1} - I_{C2} = 2I_0 \tanh \frac{U'_D}{2U_T}
$$
<!-- page-import:0409:end -->

<!-- page-import:0410:start -->
4.1 Schaltungen 373

Einsetzen und Übergang zu den Kleinsignalgrößen liefert:

$$
u_D = u_D' + 2I_0R_E \tanh \frac{u_D'}{2U_T}
$$

Aus (4.62) folgt:

$$
u_{a1} = -I_0R_C \tanh \frac{u_D'}{2U_T}
$$

Durch Reihenentwicklung und Eliminieren von $u_D'$ erhält man

$$
u_{a1} = -\frac{I_0R_C}{I_0R_E + U_T}\left(u_D - \frac{U_Tu_D^3}{12\left(I_0R_E + U_T\right)^3} + \cdots\right)
$$

und daraus den Klirrfaktor eines npn-Differenzverstärkers mit Stromgegenkopplung:

$$
k \approx \frac{U_Tu_D^2}{48\left(I_0R_E + U_T\right)^3}
\qquad
{}^{S=I_0/U_T}\!\!= \frac{1}{48\left(1 + SR_E\right)^3}\left(\frac{\hat{u}_D}{U_T}\right)^2
\qquad (4.110)
$$

Da der Gegenkopplungsfaktor $1 + SR_E$ kubisch in den Klirrfaktor, aber nur linear in die Differenzverstärkung eingeht, nehmen die Verzerrungen bei konstanter Ausgangsamplitude quadratisch mit dem Gegenkopplungsfaktor ab. Deshalb ist die linearisierende Wirkung der Stromgegenkopplung beim Differenzverstärker viel stärker als bei der Emitterschaltung, bei der die Verzerrungen am Ausgang bei konstanter Ausgangsamplitude nur linear mit dem Gegenkopplungsfaktor abnehmen.

Wenn man beim n-Kanal-Differenzverstärker in gleicher Weise vorgeht, erhält man für den Klirrfaktor eines n-Kanal-Differenzverstärkers:

$$
k \approx \frac{K\hat{u}_D^2}{64I_0\left(1 + \sqrt{2KI_0}\,R_S\right)^3}
\qquad
{}^{S=\sqrt{2KI_0}}\!\!= \frac{K\hat{u}_D^2}{64I_0\left(1 + SR_S\right)^3}
\qquad
{}^{R_S=0}\!\!= \frac{K\hat{u}_D^2}{64I_0}
\qquad (4.111)
$$

Auch hier geht der Gegenkopplungsfaktor $1 + SR_S$ kubisch ein. Im Gegensatz zum npn-Differenzverstärker geht hier auch die Größe der Mosfets in Form des Steilheitskoeffizienten $K$ ein. Ohne Gegenkopplung ($R_S = 0$) nimmt der Klirrfaktor mit zunehmender Größe der Mosfets linear zu ($k \sim K$), bei starker Gegenkopplung dagegen ab ($k \sim 1/\sqrt{K}$ für $SR_S \gg 1$). Auch hier gelten die Gleichungen nur unter der Voraussetzung, dass am Ausgang keine Übersteuerung auftritt.

Bei Differenzverstärkern mit Widerständen erhält man eine für die praktische Auslegung hilfreiche Darstellung, wenn man den Klirrfaktor auf die Amplitude $\hat{u}_a$ am Ausgang bezieht und eine bestimmte Differenzverstärkung fordert. Betrachtet werden dazu die Differenzverstärker mit Stromgegenkopplung in Abb. 4.79, die mit $R_E = 0$ bzw. $R_S = 0$ in die entsprechenden Differenzverstärker ohne Stromgegenkopplung übergehen. Beim npn-Differenzverstärker erhält man:

$$
k_{npn} \approx \frac{1}{48\left(1 + SR_E\right)^3}\left(\frac{\hat{u}_D}{U_T}\right)^2
\qquad
\left.
\begin{aligned}
|A_D| &\approx \frac{\hat{u}_a}{\hat{u}_D} = \frac{SR_C}{1 + SR_E}
\end{aligned}
\right\}
\Longrightarrow
k_{npn} \approx \frac{|A_D|\,U_T\,\hat{u}_a^2}{6\left(I_0R_C\right)^3}
$$

Dabei ist $I_0R_C$ der Spannungsabfall am Kollektorwiderstand, siehe Abb. 4.79a. Für den n-Kanal-Differenzverstärker gilt:
<!-- page-import:0410:end -->

<!-- page-import:0411:start -->
374  4. Verstärker

**Abb. 4.79.** Schaltungen zum Vergleich der Klirrfaktoren von npn- und n-Kanal-Differenzverstärker

$$
k_{nK} \approx \frac{K\,\hat{u}_D^2}{64 I_0 (1 + S R_S)^3}
\qquad
|A_D| \approx \frac{\hat{u}_a}{\hat{u}_D} = \frac{S R_D}{1 + S R_S}
\qquad\Bigg\}
\Rightarrow
k_{nK} \approx \frac{|A_D|(U_{GS}-U_{th})\,\hat{u}_a^2}{32\,(I_0R_D)^3}
$$

Hier ist $I_0R_D$ der Spannungsabfall am Drainwiderstand, siehe Abb. 4.79b. Man erkennt, dass der Klirrfaktor bei beiden Differenzverstärkern umgekehrt proportional zur dritten Potenz des Spannungsabfalls an den Widerständen $R_C$ und $R_D$ ist. Da dieser Spannungsabfall in Abhängigkeit von der Versorgungsspannung $U_b$ gewählt werden muss, nimmt der Klirrfaktor bei einer Reduzierung von $U_b$ etwa kubisch zu: halbe Versorgungsspannung $\rightarrow$ 8-facher Klirrfaktor. Die Gegenkopplungswiderstände $R_E$ und $R_S$ treten nicht explizit auf, da ihr Wert wegen der als konstant vorausgesetzten Differenzverstärkung fest an $R_C$ bzw. $R_D$ gekoppelt ist. Aus dem Verhältnis

$$
\frac{k_{nK}}{k_{npn}} \approx \frac{3}{16}\,\frac{U_{GS}-U_{th}}{U_T}
\qquad U_T = 26\,\mathrm{mV}
\qquad = \qquad
\frac{U_{GS}-U_{th}}{140\,\mathrm{mV}}
$$

folgt, dass der Klirrfaktor eines npn-Differenzverstärkers üblicherweise geringer ist als der eines n-Kanal-Differenzverstärkers mit gleicher Differenzverstärkung.

*Beispiel:* Bei der Beschreibung des n-Kanal-Differenzverstärkers mit Stromgegenkopplung wurden die Kennlinien der in Abb. 4.63 auf Seite 352 gezeigten Schaltungen miteinander verglichen, siehe Abb. 4.64. Dabei wurde festgestellt, dass die Kennlinien des Differenzverstärkers ohne Stromgegenkopplung nichtlinearer sind als die des Differenzverstärkers mit Stromgegenkopplung. Dieses Ergebnis kann man nun mit Hilfe der Näherungen für den Klirrfaktor überprüfen. Beide Schaltungen arbeiten mit demselben Ruhestrom und haben dieselbe Differenzverstärkung, d.h. gleiche Ausgangsamplitude bei gleicher Eingangsamplitude $\hat{u}_D$. Für den Differenzverstärker ohne Gegenkopplung erhält man mit $I_0 = 100\,\mu\mathrm{A},\ K = 15 \cdot 30\,\mu\mathrm{A}/\mathrm{V}^2 = 0{,}45\,\mathrm{mA}/\mathrm{V}^2$ (Größe 15) und $\hat{u}_D = 0{,}5\,\mathrm{V}$ einen Klirrfaktor von $k \approx 1{,}76\%$; für den Differenzverstärker mit Gegenkopplung folgt mit $K = 150 \cdot 30\,\mu\mathrm{A}/\mathrm{V}^2 = 4{,}5\,\mathrm{mA}/\mathrm{V}^2$ (Größe 150), $R_S = 2\,\mathrm{k}\Omega$ und sonst gleichen Werten $k \approx 0{,}72\%$. Damit wird das Ergebnis bestätigt.
<!-- page-import:0411:end -->

<!-- page-import:0412:start -->
4.1 Schaltungen 375

**Abb. 4.80.** Versorgungsspannungen beim Differenzverstärker: allgemein, symmetrisch und unipolar

#### 4.1.4.11 Arbeitspunkteinstellung

Der Arbeitspunkt wird beim Differenzverstärker im wesentlichen mit der Stromquelle $2 I_0$ eingestellt. Sie gibt die Ruheströme der Transistoren vor und bestimmt damit das Kleinsignalverhalten; nur beim Differenzverstärker mit Widerständen gehen die Widerstände als zusätzliche frei wählbare Größe ein. Die Arbeitspunktspannungen spielen beim Differenzverstärker eine untergeordnete Rolle, solange im Arbeitspunkt alle Bipolartransistoren im Normalbetrieb bzw. alle Mosfets im Abschnürbereich arbeiten. Diese Forderung ist im allgemeinen genau dann erfüllt, wenn die Gleichtaktspannung $U_{Gl}$ innerhalb des Gleichtaktaussteuerbereichs liegt; darauf wurde bereits im Zusammenhang mit den Kennlinien eingegangen. Der Gleichtaktaussteuerbereich hängt vom Aufbau des Differenzverstärkers, von den Versorgungsspannungen und von der erforderlichen Ausgangsamplitude ab.

##### 4.1.4.11.1 Versorgungsspannungen

Ein Differenzverstärker hat im allgemeinen zwei Versorgungsspannungen, die mit $U_b^+$ und $U_b^-$ bezeichnet werden; dabei gilt $U_b^+ > U_b^-$. Die Spannungsdifferenz $U_b^+ - U_b^-$ muss mindestens so groß sein, dass alle Transistoren im Normal- bzw. Abschnürbereich arbeiten können, und sie muss so klein sein, dass die maximal zulässigen Spannungen bei keinem Transistor überschritten werden. Theoretisch sind alle Kombinationen möglich, die diese Bedingungen erfüllen, in der Praxis treten jedoch zwei Fälle besonders häufig auf:

- Symmetrische Spannungsversorgung mit $U_b^+ > 0$ und $U_b^- = -U_b^+$. Die Versorgungsspannungsanschlüsse werden in diesem Fall meist mit $U_b$ und $-U_b$ bezeichnet. Beispiele: $\pm 5\,\mathrm{V}$; $\pm 12\,\mathrm{V}$.
- Unipolare Spannungsversorgung mit $U_b^+ > 0$ und $U_b^- = 0$. Hier liegt der Anschluss $U_b^-$ auf Masse. Der Anschluss $U_b^+$ wird meist mit $U_b$ bezeichnet. Beispiele: $12\,\mathrm{V}$; $5\,\mathrm{V}$; $3{,}3\,\mathrm{V}$.

Abbildung 4.80 zeigt den allgemeinen und die beiden praktischen Fälle im Vergleich. Bei unipolarer Spannungsversorgung wird nur eine Versorgungsspannungsquelle benötigt.

##### 4.1.4.11.2 Gleichtaktaussteuerbereich

Bei einem Differenzverstärker mit unipolarer Spannungsversorgung liegt der Gleichtaktaussteuerbereich vollständig im Bereich positiver Spannungen, d.h. im Arbeitspunkt
<!-- page-import:0412:end -->

<!-- page-import:0413:start -->
376  4. Verstärker

a mit Stromspiegel

b mit Widerstand

**Abb. 4.81.** Übliche Arbeitspunkteinstellung bei npn-Differenzverstärkern mit Widerständen

muss $U_{Gl} > 0$ gelten. Bei symmetrischer Spannungsversorgung ist dagegen bei ausreichend großer Spannung $U_b$ auch $U_{Gl} = 0$ oder $U_{Gl} < 0$ möglich, weil sich der Gleichtaktaussteuerbereich in diesem Fall über positive und negative Spannungen erstreckt. Daraus folgt, dass man die Eingänge eines Differenzverstärkers mit symmetrischer Spannungsversorgung direkt mit einer Signalquelle ohne Gleichspannungsanteil verbinden kann; insbesondere kann man einen Eingang mit Masse verbinden, wie dies z.B. bei den Differenzverstärkern mit unsymmetrischem Eingang in Abb. 4.54 auf Seite 343 stillschweigend geschehen ist.

### 4.1.4.11.3 Differenzverstärker mit Widerständen

Abbildung 4.81a zeigt die übliche Arbeitspunkteinstellung bei einem Differenzverstärker mit Widerständen am Beispiel eines npn-Differenzverstärkers. Der Strom $2I_0$ wird mit einem npn-Stromspiegel aus dem Referenzstrom $I_1$ abgeleitet; das Übersetzungsverhältnis beträgt $k_I = 2I_0/I_1$. Der Strom $I_1$ kann im einfachsten Fall mit einem Widerstand $R_1$ eingestellt werden. Die Spannung $U_0$ am Ausgang des Stromspiegels darf eine Untergrenze $U_{0,min}$ – beim einfachen Stromspiegel $U_{CE,sat}$ bzw. $U_{DS,ab}$ – nicht unterschreiten; dadurch wird der Gleichtaktaussteuerbereich nach unten begrenzt.

Wenn sich die Gleichtaktspannung nur wenig ändert, kann man die Stromquelle durch einen Widerstand

$$
R_0 = \frac{U_0}{2I_0} = \frac{U_{Gl} - U_{BE} - U_b^-}{2I_0}
$$

ersetzen, siehe Abb. 4.81b. Die Gleichtaktunterdrückung ist in diesem Fall vergleichsweise gering, weil der Widerstand $R_0$ im allgemeinen deutlich kleiner ist als der Ausgangswiderstand $r_0$ einer realen Stromquelle.

### 4.1.4.11.4 Differenzverstärker mit Stromquellen

Abbildung 4.82 zeigt die in der Praxis übliche Arbeitspunkteinstellung bei Differenzverstärkern mit einfachen oder Kaskode-Stromquellen am Beispiel von npn-Differenzver- stärkern.
<!-- page-import:0413:end -->

<!-- page-import:0414:start -->
4.1 Schaltungen 377

**Abb. 4.82.** Übliche Arbeitspunkteinstellung bei npn-Differenzverstärkern mit Stromquellen

stärken. Die Stromquelle $2I_0$ wird wie beim Differenzverstärker mit Widerständen durch einen npn-Stromspiegel mit dem Übersetzungsverhältnis $k_I = 2I_0/I_1$ realisiert. Für die ausgangsseitigen Stromquellen wird ein pnp-Stromspiegel mit zwei Ausgängen eingesetzt; dabei wird derselbe Referenzstrom $I_1$ verwendet, was auf ein Übersetzungsverhältnis von $k_I = I_0/I_1$ führt. Auch hier kann der Strom $I_1$ im einfachsten Fall mit einem Widerstand $R_1$ eingestellt werden. Die Spannung $U_1$ für die Kaskode-Stufe wird durch die beiden pnp-Transistor-Dioden auf $U_b^+ - 2U_{EB} \approx U_b^+ - 1{,}4\,\mathrm{V}$ eingestellt.

#### 4.1.4.11.5 Kaskode-Differenzverstärker

Beim Kaskode-Differenzverstärker mit Kaskode-Stromquellen werden zwei Hilfsspannungen benötigt; Abb. 4.83 zeigt eine übliche Schaltung am Beispiel eines npn-Kaskode-Differenzverstärkers. Die Einstellung der Ströme erfolgt wie beim Differenzverstärker mit Stromquellen. Die Spannung $U_2$ für die pnp-Kaskode-Stufe wird auch hier mit zwei pnp-Transistor-Dioden auf $U_b^+ - 2U_{EB} \approx U_b^+ - 1{,}4\,\mathrm{V}$ eingestellt. Die Spannung $U_1$ für die npn-Kaskode-Stufe wird über den Spannungsteiler aus den Widerständen $R_1$ und $R_2$ und einer Kollektorschaltung zur Impedanzwandlung bereitgestellt; dabei wird der Strom der Kollektorschaltung über eine zusätzliche Stromquelle eingestellt. Die Wahl der Spannung $U_1$ wirkt sich auf die Aussteuerbarkeit am Eingang und am Ausgang aus: eine relative hohe Spannung $U_1$ hat einen größeren Gleichtaktaussteuerbereich am Eingang und einen kleineren Aussteuerbereich am Ausgang zur Folge; eine geringere Spannung wirkt sich entgegengesetzt aus.
<!-- page-import:0414:end -->

<!-- page-import:0415:start -->
378  4. Verstärker

Abb. 4.83. Übliche Arbeitspunkteinstellung bei einem npn-Kaskode-Differenzverstärker mit Kaskode-Stromquellen

### 4.1.4.11.6 Differenzverstärker mit gefalteter Kaskode

Idealerweise sollte der ein- und ausgangsseitige Aussteuerbereich den ganzen Bereich zwischen den Versorgungsspannungen umfassen. Der in Abb. 4.84 gezeigte Differenzverstärker mit gefalteter Kaskode kommt diesem Idealfall sehr nahe. Er entsteht aus dem normalen Kaskode-Differenzverstärker, indem man die Kaskode-Stufe zusammen mit den ausgangsseitigen Stromquellen nach unten faltet und zwei weitere Stromquellen ergänzt. Man kann nun ein- und ausgangsseitig fast über den ganzen Bereich der Versorgungsspannungen aussteuern; daraus folgt insbesondere, dass die Ausgangsspannungen auch kleiner als die Eingangsspannungen sein können. Das Kleinsignalverhalten bleibt dagegen gleich. In der Praxis wird meist ein unsymmetrischer Ausgang verwendet, indem die ausgangsseitigen Stromquellen durch einen Kaskode-Stromspiegel ersetzt werden; man erhält dann die in Abb. 4.85 gezeigte Schaltung, die wegen ihrer Aussteuerbarkeit und ihrer hohen Differenzverstärkung und Gleichtaktunterdrückung vor allem als Eingangsstufe in Operationsverstärkern eingesetzt wird. Dort ersetzt man den Widerstand $R_1$ durch eine der
<!-- page-import:0415:end -->

<!-- page-import:0416:start -->
4.1 Schaltungen 379

**Abb. 4.84.** Differenzverstärker mit gefalteter Kaskode

**Abb. 4.85.** Übliche Ausführung eines Differenzverstärkers mit gefalteter Kaskode  
und unsymmetrischem Ausgang
<!-- page-import:0416:end -->

<!-- page-import:0417:start -->
380  4. Verstärker

**Abb. 4.86.** Regelung der Ausgangsspannungen bei einem Differenzverstärker mit Kollektorschaltungen (Bezug auf die Versorgungsspannung $U_b^-$)

im Abschnitt 4.1.6 beschriebenen Referenzstromquellen, damit die Ruheströme nicht von den Versorgungsspannungen abhängen.

#### 4.1.4.11.7 Regelung der Ausgangsspannungen

Bei allen symmetrischen Differenzverstärkern mit Stromquellen sind die Ausgangsspannungen im Arbeitspunkt ohne Beschaltung undefiniert. Ursache hierfür sind geringe Unterschiede in den Strömen der npn- und pnp- bzw. n-Kanal- und p-Kanal-Transistoren, die dazu führen, dass die Ausgänge entweder an die obere oder an die untere Aussteuerungsgrenze geraten. Bei niederohmigen Lasten an den Ausgängen wird der Arbeitspunkt durch die Lasten festgelegt; sie nehmen die Differenzströme der Transistoren auf. Sind dagegen hochohmige Lasten angeschlossen, muss man die Ausgangsspannungen regeln, um eine Übersteuerung zu vermeiden; dazu muss man entweder die Stromquelle $2I_0$ oder die beiden ausgangsseitigen Stromquellen $I_0$ geeignet steuern.

Wenn an den Ausgängen Kollektor- bzw. Drainschaltungen zur Impedanzwandlung angeschlossen sind, kann man die Stromquelle $2I_0$ steuern, indem man die Ruheströme dieser Schaltungen über Widerstände einstellt und eine Kollektorschaltung mit dem Referenzzweig der Stromquelle verbindet; Abb. 4.86 zeigt dieses Verfahren am Beispiel eines npn-Differenzverstärkers mit npn-Kollektorschaltungen. Im Arbeitspunkt erhält man an den Ausgängen mit $R_2 = R_3$:

$$
U_{a,A} = U_b^- + U_{BE7} + I_1 R_2 = U_b^- + U_{BE7}\left(1 + \frac{R_2}{2R_4}\right)
\qquad \text{mit } U_{BE7} \approx 0{,}7\,\text{V}
$$

Dabei wird vorausgesetzt, dass der Stromspiegel $T_7, T_8$ wie im ungeregelten Fall das Übersetzungsverhältnis 2 besitzt. Alternativ kann man den Widerstand $R_4$ weglassen und den
<!-- page-import:0417:end -->

<!-- page-import:0418:start -->
4.1 Schaltungen 381

**Abb. 4.87.** Regelung der Ausgangsspannungen bei einem Differenzverstärker mit Kollektorschaltungen (Bezug auf die Versorgungsspannung $U_b^+$)

Arbeitspunkt mit dem Übersetzungsverhältnis $k_I$ des Stromspiegels $T_7,T_8$ einstellen; dann gilt

$$
k_I\,(I_0 + 2I_1) = 2I_0 \Rightarrow I_1 = I_0\left(\frac{1}{k_I} - \frac{1}{2}\right)
$$

Die Ausgangsspannungen beziehen sich auf die Versorgungsspannung $U_b^-$, was vor allem bei Schaltungen mit variablen Versorgungsspannungen ungünstig ist. Abhilfe schafft die in Abb. 4.87 gezeigte Variante mit Bezug auf die Versorgungsspannung $U_b^+$, bei der die pnp-Stromquellen gesteuert werden; hier gilt:

$$
U_{a,A} = U_b^+ - U_{EB12} - I_1R_2 = U_b^+ - U_{EB12}\left(1 + \frac{R_2}{2R_4}\right)
\qquad \text{mit } U_{EB12} \approx 0{,}7\ \text{V}
$$

Auch hier kann man den Widerstand $R_4$ weglassen und den Arbeitspunkt mit dem Übersetzungsverhältnis $k_I$ der Stromspiegel $T_{12},T_3$ und $T_{12},T_4$ einstellen:

$$
I_1 = \frac{I_0}{2}\left(\frac{1}{k_I} - 1\right)
$$

Dabei muss $k_I < 1$ gelten, d.h. $T_{12}$ ist größer als $T_3$ und $T_4$.

Bei beiden Varianten darf man die Widerstände $R_2$ und $R_3$ nicht zu klein wählen, weil sie die Ausgänge belasten und damit die Differenzverstärkung verringern. Bei Differenzverstärkern mit sehr hohem Ausgangswiderstand muss man deshalb meist zwei Kollektorschaltungen in Reihe schalten, bevor man die Widerstände anschließen kann. Bei
<!-- page-import:0418:end -->

<!-- page-import:0419:start -->
382 4. Verstärker

**Abb. 4.88.** Regelung der Ausgangsspannungen bei nachfolgendem npn-Differenzverstärker

den entsprechenden Schaltungen mit Mosfets ist dagegen bereits mit einer Drainschaltung eine Rückwirkung der Widerstände auf den Differenzverstärker ausgeschlossen.

Man kann dasselbe Verfahren auch anwenden, wenn anstelle der Kollektorschaltungen ein weiterer npn-Differenzverstärker folgt; Abb. 4.88 zeigt die entsprechende Schaltung. Hier gilt mit dem Übersetzungsverhältnis $k_I$ des Stromspiegels $T_9, T_{10}$:

$$
I_1 = \frac{I_0}{k_I}, \quad U_{a,A} = U_b^- + U_{BE9} + 2I_1R_2 + U_{BE5}
$$

Folgt ein pnp-Differenzverstärker, kann man die in Abb. 4.89 gezeigte Schaltung verwenden, bei der die pnp-Stromquellen ohne zusätzliche Widerstände gesteuert werden; hier gilt

$$
U_{a,A} = U_b^+ - U_{EB9} - U_{EB5} \approx U_b^+ - 1{,}4\,\mathrm{V}
$$

und mit dem Übersetzungsverhältnis $k_I$ der Stromspiegel $T_9,T_3$ und $T_9,T_4$:

$$
I_1 = \frac{I_0}{2k_I}
$$

Bei dieser Variante ist die Schleifenverstärkung der Regelung sehr hoch und muss ggf. durch Stromgegenkopplungswiderstände in den Stromspiegeln begrenzt werden, d.h. in die Emitter-Leitungen von $T_3$, $T_4$ und $T_9$ müssen Widerstände entsprechend dem Übersetzungsverhältnis eingefügt werden. Diese Schaltung wird vor allem in Präzisions-Operationsverstärkern verwendet.
<!-- page-import:0419:end -->

<!-- page-import:0420:start -->
4.1 Schaltungen 383

**Abb. 4.89.** Regelung der Ausgangsspannungen bei nachfolgendem pnp-Differenzverstärker

Alle Verfahren zur Regelung der Ausgangsspannungen haben eine Erhöhung der Gleichtaktunterdrückung zur Folge, weil sie die durch eine Gleichtaktaussteuerung verursachte gleichsinnige Änderung der Ausgangsspannungen ausregeln. Deshalb haben Operationsverstärker, die die in Abb. 4.89 gezeigte Schaltung verwenden, eine besonders hohe Gleichtaktunterdrückung und – wegen der beiden Differenzverstärker– eine besonders hohe Differenzverstärkung.

### 4.1.4.12 Frequenzgänge und Grenzfrequenzen des Differenzverstärkers

Die Differenz- und Gleichtaktverstärkung gelten in der bisher berechneten Form nur für niedrige Signalfrequenzen; bei höheren Frequenzen muss man die Kapazitäten der Transistoren berücksichtigen und die Frequenzgänge unter Verwendung der dynamischen Kleinsignalmodelle berechnen. Beim Differenzverstärker muss man zwischen dem Frequenzgang der Differenzverstärkung und dem Frequenzgang der Gleichtaktverstärkung unterscheiden; der Quotient aus beiden ergibt den Frequenzgang der Gleichtaktunterdrückung.

Wegen der Abhängigkeit des Frequenzgangs von der Beschaltung wird die jeweilige Betriebsverstärkung betrachtet, d.h. es werden die Innenwiderstände $R_g$ der Signalquellen und die Lastimpedanzen, bestehend aus dem Lastwiderstand $R_L$ und der Lastkapazität $C_L$, berücksichtigt, siehe Abb. 4.90. Die Kleinsignalspannungen $u_{g1}$ und $u_{g2}$ der Signalquellen werden in gewohnter Form durch die Signal-Differenzspannung $u_{g,D}$ und die Signal-Gleichtaktspannung $u_{g,Gl}$ ersetzt:

$$
u_{g,D} = u_{g1} - u_{g2} \ , \quad u_{g,Gl} = \frac{u_{g1} + u_{g2}}{2}
$$

(4.112)
<!-- page-import:0420:end -->

<!-- page-import:0421:start -->
384 4. Verstärker

**Abb. 4.90.** Schaltung zur Bestimmung der Frequenzgänge

Damit kann man die Betriebs-Differenzverstärkung $\underline{A}_{B,D}(s)$, die Betriebs-Gleichtaktverstärkung $\underline{A}_{B,Gl}(s)$ und die Betriebs-Gleichtaktunterdrückung $\underline{G}_B(s)$ definieren:

$$
\underline{A}_{B,D}(s)=\left.\frac{u_{a1}(s)}{u_{g,D}(s)}\right|_{u_{g,Gl}=0}
$$

(4.113)

$$
\underline{A}_{B,Gl}(s)=\left.\frac{u_{a1}(s)}{u_{g,Gl}(s)}\right|_{u_{g,D}=0}
$$

(4.114)

$$
\underline{G}_B(s)=\frac{\underline{A}_{B,D}(s)}{\underline{A}_{B,Gl}(s)}
$$

(4.115)

Im folgenden wird der Präfix Betrieb der Einfachheit halber weggelassen.

Auch bei der Berechnung der Frequenzgänge macht man von den Symmetrieeigenschaften Gebrauch. Dadurch kann man den symmetrischen Differenzverstärker auf die entsprechenden Emitter-, Source- oder Kaskodeschaltungen zurückführen. Beim unsymmetrischen Differenzverstärker mit Stromspiegel ist dies auf Grund der Unsymmetrie nicht möglich; außerdem muss der Frequenzgang des Stromspiegels berücksichtigt werden. Bei der Berechnung der statischen Größen wurde ein idealer Stromspiegel angenommen; deshalb konnten die Ergebnisse für den symmetrischen Differenzverstärker einfach auf den unsymmetrischen übertragen werden. Da Stromspiegel im allgemeinen eine sehr hohe Grenzfrequenz aufweisen, kann man diese Vorgehensweise auch hier anwenden; dazu setzt man für den Stromspiegels einen idealen Frequenzgang voraus. Die Grenzfrequenzen eines symmetrischen und eines unsymmetrischen Differenzverstärkers gleicher Bauart sind in diesem Fall gleich.

#### 4.1.4.12.1 Frequenzgang und Grenzfrequenz der Differenzverstärkung

Der Frequenzgang der Differenzverstärkung wird näherungsweise durch einen Tiefpass 1.Grades beschrieben:

$$
\underline{A}_{B,D}(s)\approx \frac{A_0}{1+\frac{s}{\omega_g}}
$$

(4.116)

Dabei ist $A_0$ die Betriebsverstärkung bei niedrigen Frequenzen unter Berücksichtigung des Innenwiderstands $R_g$ der Signalquelle und des Lastwiderstands $R_L$:
<!-- page-import:0421:end -->

<!-- page-import:0422:start -->
4.1 Schaltungen 385

$$
A_0 = \underline{A}_{B,D}(0) = A_B = \frac{r_{e,D}}{r_{e,D}+2R_g}\,A_D\,\frac{R_L}{r_{a,D}+R_L}
\qquad (4.117)
$$

Für die -3dB-Grenzfrequenz $f_{-3dB}$, bei der der Betrag der Verstärkung um 3 dB abgenommen hat, erhält man aus (4.116) $\omega_{-3dB} \approx \omega_g$. Sie lässt sich mit Hilfe der Niederfrequenzverstärkung $A_0$ und zwei Zeitkonstanten beschreiben:

$$
\omega_{-3dB} = 2\pi f_{-3dB} = \frac{1}{T_1 + T_2|A_0|}
\qquad \overset{|A_0|\gg T_1/T_2}{\approx} \qquad
\frac{1}{T_2|A_0|}
\qquad (4.118)
$$

Für $|A_0| \gg T_1/T_2$ ist die Grenzfrequenz umgekehrt proportional zum Betrag der Verstärkung $A_0$ und man erhält ein konstantes Verstärkungs-Bandbreite-Produkt (_gain-bandwidth-product_, GBW):

$$
GBW = f_{-3dB}\,|A_0| \approx \frac{1}{2\pi\,T_2}
\qquad (4.119)
$$

Die Zeitkonstanten $T_1$ und $T_2$ für die verschiedenen Ausführungen des Differenzverstärkers kann man den folgenden Abschnitten entnehmen:

2.4.1 Emitterschaltung: (2.105), (2.109), (2.112)–(2.114) Seite 131ff.  
3.4.1 Sourceschaltung: (3.86), (3.89), (3.92) Seite 256ff.  
4.1.3 Kaskodeschaltung: (4.45), (4.46), (4.53), (4.54) Seite 333 und 339

Abbildung 4.91 enthält eine Zusammenfassung für den Fall, dass die Kapazitäten der npn- und pnp-Transistoren und die der n- und p-Kanal-Mosfets gleich sind. Will man hier unterscheiden, muss man bei der Zeitkonstanten $T_2$ alle Kapazitäten mit dem Faktor 2 durch die Summe der entsprechenden Werte ersetzen:

$$
2C_C \rightarrow C_{C,npn} + C_{C,pnp}\ ,\qquad
2C_S \rightarrow C_{S,npn} + C_{S,pnp}
$$

$$
2C_{GD} \rightarrow C_{GD,nK} + C_{GD,pK}\ ,\qquad
2C_{BD} \rightarrow C_{BD,nK} + C_{BD,pK}
$$

Alle anderen Kapazitäten beziehen sich beim npn-Differenzverstärker auf die npn-Transistoren und beim n-Kanal-Differenzverstärker auf die n-Kanal-Mosfets; das gilt auch für die Kapazitäten mit dem Faktor 2 in der Zeitkonstanten $T_1$.

Einige Gleichungen in Abb. 4.91 sind im Vergleich zur ursprünglich berechneten Form modifiziert:

- Die Basisbahn- und Gatewiderstände werden vernachlässigt, d.h. anstelle von $R_g' = R_g + R_B$ bzw. $R_g' = R_g + R_G$ wird $R_g$ eingesetzt.
- Bei den npn-Differenzverstärkern werden die zugrundeliegenden Gleichungen der Emitterschaltung um die Substratkapazität $C_S$ erweitert; dazu wird $C_L + C_S$ anstelle von $C_L$ eingesetzt, da die Substratkapazität wie eine Lastkapazität wirkt.
- Bei den n-Kanal-Differenzverstärkern wird in den zugrundeliegenden Gleichungen der Sourceschaltung die Drain-Source-Kapazität $C_{DS}$, die nur bei diskreten Mosfets auftritt, durch die Bulk-Drain-Kapazität $C_{BD}$ ersetzt.

Bei Stromgegenkopplung werden einige Größen mit dem Gegenkopplungsfaktor transformiert; in Abb. 4.91 ist dies nur für den Differenzverstärker mit Widerständen aufgeführt, kann aber in gleicher Weise auch auf die anderen Ausführungen übertragen werden.
<!-- page-import:0422:end -->

<!-- page-import:0423:start -->
386 4. Verstärker

| npn | Zeitkonstanten |
|---|---|
| mit Widerständen | $T_1 = (C_E + C_C)(R_g \parallel r_{BE})$  |
|  | $T_2 = \left(C_C + \frac{C_S + C_L}{\beta}\right)R_g + \frac{C_C + C_S + C_L}{S}$ |
| mit Widerständen und Stromgegenkopplung | $T_1 = (C'_E + C_C)(R_g \parallel r'_{BE})$  |
|  | $T_2 = \left(C_C + \frac{C_S + C_L}{\beta}\right)R_g + \frac{C_C + C_S + C_L}{S'}$  |
|  | mit $S' = S/(1 + SR_E)$, $C'_E = C_E/(1 + SR_E)$ |
|  | und $r'_{BE} = r_{BE}(1 + SR_E)$ |
| mit Stromquellen | $T_1 = (C_E + C_C)(R_g \parallel r_{BE})$  |
|  | $T_2 = \left(C_C + \frac{C_C + 2C_S + C_L}{\beta}\right)R_g + \frac{2C_C + 2C_S + C_L}{S}$ |
| mit Kaskode | $T_1 = (C_E + 2C_C)(R_g \parallel r_{BE})$  |
|  | $T_2 = (2C_C + 2C_S + C_L)\left(\frac{R_g}{\beta} + \frac{1}{S}\right)$ |

| n-Kanal | Zeitkonstanten |
|---|---|
| mit Widerständen | $T_1 = (C_{GS} + C_{GD})R_g$  |
|  | $T_2 = C_{GD}R_g + \frac{C_{GD} + C_{BD} + C_L}{S}$ |
| mit Widerständen und Stromgegenkopplung | $T_1 = (C'_{GS} + C_{GD})R_g$  |
|  | $T_2 = C_{GD}R_g + \frac{C_{GD} + C_{BD} + C_L}{S'}$  |
|  | mit $S' \approx S/(1 + SR_S)$ und $C'_{GS} \approx C_{GS}/(1 + SR_S)$ |
| mit Stromquellen | $T_1 = (C_{GS} + C_{GD})R_g$  |
|  | $T_2 = C_{GD}R_g + \frac{2C_{GD} + 2C_{BD} + C_L}{S}$ |
| mit Kaskode | $T_1 = (C_{GS} + 2C_{GD})R_g$  |
|  | $T_2 = \frac{2C_{GD} + 2C_{BD} + C_L}{S}$ |

**Abb. 4.91.** Zeitkonstanten für die Grenzfrequenz der Differenzverstärkung

Die zur Auswertung der Zeitkonstanten benötigten Kleinsignalparameter integrierter Bipolartransistoren und Mosfets sind in Abb. 4.92 zusammengefasst; sie sind Abb. 2.45 auf Seite 86 (ohne $C_E$ und $C_C$), (4.49) und (4.50) auf Seite 337 und Abb. 3.52 auf Seite 231 entnommen. Bei den Sperrschichtkapazitäten $C_C$, $C_S$ und $C_{BD}$ wird ohne Rücksicht auf die aktuelle Sperrspannung die jeweilige Null-Kapazität $C(U = 0)$ verwendet; die tatsächliche Kapazität ist geringer.

Die Betragsfrequenzgänge der Differenzverstärkung sind in Abb. 4.93 dargestellt. Die Werte für die Niederfrequenzverstärkung gelten für npn-Differenzverstärker; bei den ent-
<!-- page-import:0423:end -->

<!-- page-import:0424:start -->
4.1 Schaltungen 387

| Bipolartransistor | Mosfet |
|---|---|
| $S = \dfrac{\beta}{r_{BE}} = \dfrac{I_{C,A}}{U_T}$ mit $\beta \approx B$ | $S = \sqrt{2K\,I_{D,A}} = \sqrt{2\mu C_{ox}' I_{D,A}\dfrac{W}{L}}$ |
| $C_E \approx S\tau_{0,N} + 2C_{S0,E}$ | $C_{GS} \approx \dfrac{2}{3}C_{ox} = \dfrac{2}{3}C_{ox}'WL$ |
| $C_C \approx C_{S0,C}$ | $C_{GD} = C_{GD,\ddot{U}}'W$ |
| $C_S \approx C_{S0,S}$ | $C_{BD} \approx C_S' A_D \qquad (A_D:$ Drainfläche$)$ |

**Abb. 4.92.** Kleinsignalparameter integrierter Bipolartransistoren und Mosfets

sprechenden n-Kanal-Differenzverstärkern sind die Werte etwa um den Faktor 10 geringer. Die Differenzverstärker mit einfacher und mit Kaskode-Stromquelle erreichen eine höhere Differenzverstärkung als der Differenzverstärker mit Widerständen, haben allerdings wegen der zusätzlichen Kapazitäten der Stromquellen-Transistoren ein geringeres Verstärkungs-Bandbreite-Produkt $(GBW)$. Beim Kaskode-Differenzverstärker mit Kaskode-Stromquellen ist sowohl die Differenzverstärkung als auch das Verstärkungs-Bandbreite-Produkt am größten.

$|A_D|$

10000

1000

100

10

1

$f$ [log]

$f_{-3\,dB}$

GBW

1: Differenzverstärker mit Widerständen  
2: Differenzverstärker mit einfachen Stromquellen  
3: Differenzverstärker mit Kaskode-Stromquellen  
4: Kaskode-Differenzverstärker mit Kaskode-Stromquellen

**Abb. 4.93.** Betragsfrequenzgänge der Differenzverstärkung (die Zahlenwerte gelten für npn-Diffe-
renzverstärker)
<!-- page-import:0424:end -->

<!-- page-import:0425:start -->
388 4. Verstärker

**Abb. 4.94.** Dynamisches Kleinsignalersatzschaltbild eines npn-Differenzverstärkers mit Widerständen bei Gleichtaktaussteuerung

Der Differenzverstärker mit einfachem Stromspiegel erreicht etwa die doppelte Differenzverstärkung und das doppelte Verstärkungs-Bandbreite-Produkt wie der entsprechende symmetrische Differenzverstärker; dadurch haben beide Schaltungen dieselbe Grenzfrequenz. Das gilt auch für den n-Kanal-Kaskode-Differenzverstärker mit Kaskode-Stromspiegel. Beim npn-Kaskode-Differenzverstärker mit Kaskode-Stromspiegel ist das Verstärkungs-Bandbreite-Produkt ebenfalls doppelt so groß wie beim npn-Kaskode-Differenzverstärker mit Kaskode-Stromquellen, jedoch ist die Differenzverstärkung aufgrund des geringeren Ausgangswiderstands des Kaskode-Stromspiegels im Vergleich zur Kaskode-Stromquelle nur wenig größer; deshalb ist die Grenzfrequenz höher. Die Frequenzgänge der Differenzverstärker mit Stromspiegel sind in Abb. 4.93 der Übersichtlichkeit wegen nicht dargestellt.

#### 4.1.4.12.2 Frequenzgang der Gleichtaktverstärkung

Zur Berechnung wird das in Abb. 4.94 gezeigte Kleinsignalersatzschaltbild eines npn-Differenzverstärkers mit Widerständen verwendet; es entsteht aus dem in Abb. 4.71 auf Seite 360 gezeigten statischen Kleinsignalersatzschaltbild für Gleichtaktaussteuerung durch Übergang vom statischen zum dynamischen Kleinsignalmodell des Transistors. $C_0$ ist die Ausgangskapazität der Stromquelle, die wegen der Aufteilung nur zur Hälfte eingeht. Das Ersatzschaltbild für Gleichtaktaussteuerung unterscheidet sich vom Ersatzschaltbild für Differenzaussteuerung nur durch die Impedanz der Stromquelle, die eine frequenzabhängige Stromgegenkopplung bewirkt; deshalb kann man den Frequenzgang der Gleichtaktverstärkung näherungsweise aus dem Frequenzgang der Differenzverstärkung berechnen, indem man anstelle der Steilheit $S$ die reduzierte Steilheit

$$
S_{red}(s)=\frac{S}{1+S\left(2r_0\parallel\frac{2}{sC_0}\right)}\overset{Sr_0\gg1}{\approx}\frac{1+sC_0r_0}{2r_0\left(1+s\frac{C_0}{2S}\right)}
$$

einsetzt. Da bei Gleichtaktaussteuerung an jedem Eingang die volle Gleichtaktspannung anliegt, muss man zusätzlich mit 2 multiplizieren. Mit (4.116) und unter Berücksichtigung der Ausgangswiderstände folgt:

$$
A_{B,Gl}(s)\approx2A_{B,D}(s)\frac{S_{red}(s)r_{a,Gl}}{Sr_{a,D}}\approx\frac{A_0r_{a,Gl}}{Sr_0r_{a,D}}\frac{1+sC_0r_0}{\left(1+s\frac{C_0}{2S}\right)\left(1+\frac{s}{\omega_g}\right)}
$$

Wenn man die Gleichtaktunterdrückung

$$
G=\frac{Sr_0r_{a,D}}{r_{a,Gl}}
$$

```
<!-- page-import:0425:end -->

<!-- page-import:0426:start -->
4.1 Schaltungen 389

einsetzt und die Zeitkonstante $C_O r_0$ durch die Grenzfrequenz der Gleichtaktunterdrückung

$$
\omega_{g,G} = 2\pi f_{g,G} = \frac{1}{C_O r_0}
$$

ersetzt, erhält man:

$$
\underline{A}_{B,Gl}(s) \approx \frac{A_0}{G}\,\frac{1 + \frac{s}{\omega_{g,G}}}{\left(1 + \frac{s}{2G\omega_{g,G}}\right)\left(1 + \frac{s}{\omega_g}\right)}
$$

(4.121)

$$
\underline{G}_B(s) \approx G\,\frac{1 + \frac{s}{2G\omega_{g,G}}}{1 + \frac{s}{\omega_{g,G}}}
$$

(4.122)

Abb. 4.95 zeigt die Betragsfrequenzgänge $|A_{B,D}|$, $|A_{B,Gl}|$ und $|G_B|$ für die Fälle $f_{g,G} < f_g$ und $f_{g,G} > f_g$.

Der Fall $f_{g,G} < f_g$ ist typisch für Differenzverstärker mit Widerständen oder mit einfachen Stromquellen. Der Betrag der Gleichtaktverstärkung nimmt im Bereich zwischen der Gleichtakt-Grenzfrequenz $f_{g,G}$ und der Grenzfrequenz $f_g$ zu, verläuft oberhalb $f_g$ konstant und ist bei hohen Frequenzen doppelt so groß wie der Betrag der Differenzverstärkung. Der Betrag der Gleichtaktunterdrückung nimmt ab der Gleichtakt-Grenzfrequenz $f_{g,G}$ mit 20 dB/Dek. ab und geht bei hohen Frequenzen gegen $1/2$.

Der Fall $f_{g,G} > f_g$ tritt vor allem bei Kaskode-Differenzverstärkern auf, die aufgrund ihrer sehr hohen Niederfrequenzverstärkung selbst bei einem hohen Verstärkungs-Bandbreite-Produkt nur eine relativ geringe Grenzfrequenz $f_g$ besitzen. Der Betrag der Gleichtaktverstärkung nimmt zwischen der Grenzfrequenz $f_g$ und der Gleichtakt-Grenzfrequenz $f_{g,G}$ ab, ist oberhalb $f_{g,G}$ konstant und bei hohen Frequenzen doppelt so groß wie der Betrag der Differenzverstärkung. Der Betrag der Gleichtaktunterdrückung verläuft wie im Fall $f_{g,G} < f_g$.

Die vereinfachte Herleitung des Frequenzgangs der Gleichtaktverstärkung ist für die Anschauung nützlich, führt aber zu Ungenauigkeiten:

– Aufgrund der frequenzabhängigen Gegenkopplung hat die Grenzfrequenz $f_g$ bei Gleichtaktaussteuerung einen anderen Wert als bei Differenzaussteuerung. Dieser Effekt ist bei den meisten Schaltungen gering, bei einigen jedoch stark ausgeprägt; dadurch tritt in der Gleichtaktunterdrückung ein zusätzlicher Pol und eine zusätzliche Nullstelle auf. Als Folge tritt beim Differenzverstärker mit Widerständen ein Bereich auf, in dem der Betrag der Gleichtaktunterdrückung mit 40 dB/Dek. abnimmt, und beim Differenzverstärker mit Kaskode-Stromspiegeln ein Bereich, in dem der Betrag der Gleichtaktunterdrückung zunimmt; Abb. 4.96 zeigt diese speziellen Fälle.

– Beim npn-Differenzverstärker werden der Differenz- und der Gleichtaktanteil des Eingangssignals aufgrund der unterschiedlichen Eingangswiderstände bei Differenz- und Gleichtaktaussteuerung unterschiedlich stark abgeschwächt. Deshalb entspricht der niederfrequente Wert der Betriebs-Gleichtaktunterdrückung $\underline{G}_B(s)$ vor allem bei hochohmigen Signalquellen nicht der Gleichtaktunterdrückung $G$, sondern ist um das Verhältnis der Spannungsteiler-Faktoren
<!-- page-import:0426:end -->

<!-- page-import:0427:start -->
390 4. Verstärker

**Abb. 4.95.** Betragsfrequenzgänge $|A_{B,D}|$, $|A_{B,G}|$ und $|G_B|$ für die Fälle $f_{g,G} < f_g$ (oben) und $f_{g,G} > f_g$ (unten)

$$
\frac{\dfrac{r_{e,Gl}}{r_{e,Gl}+2R_g}}{\dfrac{r_{e,D}}{r_{e,D}+2R_g}}
\overset{R_g \ll r_{e,Gl}}{\approx}
1+\frac{2R_g}{r_{e,D}}
$$

geringer. Bei niederohmigen Quellen mit $R_g \ll r_{e,D}$ macht sich dieser Effekt nicht bemerkbar.

*Beispiel:* Im folgenden werden die verschiedenen npn- und n-Kanal-Differenzverstärker verglichen. Alle Schaltungen sind für eine unipolare Versorgungsspannung von $U_b = 5\ \mathrm{V}$ und eine Ausgangsspannung von $U_{a,A} = 2{,}5\ \mathrm{V}$ ausgelegt. Für die Bipolartransistoren werden die Parameter aus Abb. 4.5 auf Seite 284 und für die Mosfets die Parameter aus Abb. 4.6 auf Seite 285 angenommen. Der Ruhestrom beträgt $I_0 = 100\ \mu\mathrm{A}$ bei den npn-Dif-
<!-- page-import:0427:end -->

<!-- page-import:0428:start -->
391

# 4.1 Schaltungen

a Differenzverstärker  
mit Widerständen

b Differenzverstärker mit  
Kaskode-Stromquellen

**Abb. 4.96.** Betragsfrequenzgänge $|A_{B,D}|$, $|A_{B,GI}|$ und $|G_B|$

ferenzverstärkern und $I_0 = 10\,\mu\text{A}$ bei den n-Kanal-Differenzverstärkern. Bei den Bipolartransistoren wird generell die Größe 1 pro $100\,\mu\text{A}$ Ruhestrom verwendet; das entspricht dem in Abb. 4.5 aufgeführten typischen Wert. Bei den Mosfets würde nach Abb. 4.6 ebenfalls die Größe 1 ausreichen, jedoch ist die damit verbundene Gate-Source-Spannung von $|U_{GS}| \approx 1{,}8 \dots 2\,\text{V}$ ($|U_{BS}| = 0 \dots 1\,\text{V}$) für die hier vorliegende Versorgungsspannung von $5\,\text{V}$ zu hoch; deshalb werden n-Kanal-Mosfets der Größe 5 ($U_{GS} \approx 1{,}4 \dots 1{,}6\,\text{V}$) und p-Kanal-Mosfets der Größe 2 ($U_{GS} \approx -\,1{,}6 \dots -\,1{,}8\,\text{V}$) pro $10\,\mu\text{A}$ Ruhestrom verwendet. Da das geometrische Größenverhältnis der n- und p-Kanal-Mosfets der Größe 1 genau $2/5$ beträgt, sind alle Mosfets – mit Ausnahme des Mosfets in der Stromquelle – geometrisch gleich groß:

$$
W = 15\,\mu\text{m} \quad,\quad L = 3\,\mu\text{m}
$$

Die Gleichtaktspannung am Eingang beträgt bei den npn-Differenzverstärkern $U_{GI,A} = 1\,\text{V}$ und bei den n-Kanal-Differenzverstärkern $U_{GI,A} = 2\,\text{V}$; dadurch werden die Stromquellen im Emitter- bzw. Sourcezweig gerade noch oberhalb ihrer Aussteuerungsgrenze betrieben.

Abbildung 4.97 zeigt die Differenzverstärker mit Widerständen; dabei sind die Kollektor- bzw. Drainwiderstände so gewählt, dass die gewünschte Ausgangsspannung $U_{a,A} = 2{,}5\,\text{V}$ erreicht wird:

$$
\begin{array}{c}
R_C \\
R_D
\end{array}
\right\}
=
\frac{U_b - U_{a,A}}{I_0}
=
\left\{
\begin{array}{l}
25\,\text{k}\Omega \\
250\,\text{k}\Omega
\end{array}
\right.
$$

Im Gegensatz dazu stellt sich der Arbeitspunkt bei den Differenzverstärkern mit einfachen Stromquellen und einfachen Stromspiegeln in Abb. 4.98 nicht automatisch ein. Da die Kollektor- bzw. Drainströme der Transistoren $T_1$ und $T_3$ sowie $T_2$ und $T_4$ im gewünschten Arbeitspunkt im allgemeinen nicht exakt gleich sind, geht der Transistor mit dem größeren Strom in die Sättigung bzw. in den Abschnürbereich; die Ausgänge sind in diesem Fall übersteuert. In einer integrierten Schaltung hängt der tatsächliche Arbeitspunkt von der Beschaltung der Ausgänge und einer eventuell vorhandenen Arbeitspunktregelung ab;
<!-- page-import:0428:end -->

<!-- page-import:0429:start -->
392 4. Verstärker

a mit Bipolartransistoren

b mit Mosfets

**Abb. 4.97.** Beispiel: Differenzverstärker mit Widerständen

letztere wird im Abschnitt über die Arbeitspunkteinstellung bei Differenzverstärkern näher beschrieben. In der Schaltungssimulation kann man den gewünschten Arbeitspunkt z.B. dadurch einstellen, dass man die Ausgänge über sehr große Induktivitäten (z.B. $L = 10^9\,\mathrm{H}$) mit einer Spannungsquelle mit der Spannung $U_{a,A}$ verbindet; dadurch werden die Ausgänge gleichspannungsmäßig auf $U_{a,A}$ gehalten, während sie wechselspannungsmäßig aufgrund der bereits bei niedrigen Frequenzen sehr hohen Impedanzen der Induktivitäten praktisch offen sind. Diese Methode muss man bei allen Differenzverstärkern mit Stromquellen oder Stromspiegeln anwenden. Bei den Differenzverstärkern dieses Beispiels wird ein Arbeitspunkt mit $U_{a,A} = 2{,}5\,\mathrm{V}$ vorausgesetzt, ohne dass die dazu notwendige Beschaltung oder Arbeitspunktregelung dargestellt wird.

Bei den Differenzverstärkern mit Kaskode-Stromquellen in Abb. 4.99 sowie den Kaskode-Differenzverstärkern mit Kaskode-Stromquellen in Abb. 4.100 und mit Kaskode-Stromspiegeln in Abb. 4.101 werden Hilfsspannungen zur Arbeitspunkteinstellung der Kaskode-Transistoren benötigt; auf die Erzeugung dieser Spannungen wird im Abschnitt 4.1.6 näher eingegangen.

Mit Hilfe von Abb. 4.92 auf Seite 387 und den Parametern aus Abb. 4.5 auf Seite 284 und Abb. 4.6 auf Seite 285 kann man ausgehend von den Ruheströmen und den Größen der Transistoren die Kleinsignalparameter der Transistoren ermitteln. Daraus erhält man mit den folgenden Gleichungen die Verstärkung, den Ausgangs- und den Eingangswiderstand der Differenzverstärker für Differenz- und Gleichtaktaussteuerung:

mit Widerständen: (4.79)–(4.85)  
mit einfachen Stromquellen: (4.90)–(4.92)  
mit einfachem Stromspiegel: (4.90), (4.104)–(4.106)  
mit Kaskode-Stromspiegel: (4.95)–(4.97)  
Kaskode mit Stromquellen: (4.100), (4.101)  
Kaskode mit Stromspiegel: (4.100), (4.104)–(4.106)
<!-- page-import:0429:end -->

<!-- page-import:0430:start -->
4.1 Schaltungen 393

*a* mit Bipolartransistoren

*b* mit Mosfets

**Abb. 4.98.** Beispiel: Differenzverstärker mit einfachen Stromquellen und einfachen Stromspiegeln

Die Betriebs-Differenzverstärkung $A_0$ erhält man aus (4.117), die Zeitkonstanten $T_1$ und $T_2$ aus Abb. 4.91, das Verstärkungs-Bandbreite-Produkt $GBW$ aus (4.119), die -3dB-Grenzfrequenz $f_{-3dB}$ aus (4.118) und die Grenzfrequenz $f_{g,G}$ der Gleichtaktunterdrückung aus (4.120).

Bei der Berechnung der Kleinsignalparameter der npn-Transistoren werden die geringen Unterschiede in den Ruheströmen der einzelnen Transistoren vernachlässigt, d.h. es wird mit $|I_{C,A}| \approx I_0 \approx 100\,\mu\mathrm{A}$ gerechnet; daraus folgt:

npn: $S = 3{,}85\,\mathrm{mS},\ \beta = 100,\ r_{BE} = 26\,\mathrm{k}\Omega,\ r_{CE} = 1\,\mathrm{M}\Omega,$
<!-- page-import:0430:end -->

<!-- page-import:0431:start -->
394  4. Verstärker

a mit Bipolartransistoren  
b mit Mosfets

**Abb. 4.99.** Beispiel: Differenzverstärker mit Kaskode-Stromquellen

$$
C_E = 0{,}6\,\mathrm{pF}\ ,\ C_C = 0{,}2\,\mathrm{pF}\ ,\ C_S = 1\,\mathrm{pF}
$$

pnp: $\beta = 50,\ r_{CE} = 500\,\mathrm{k}\Omega\ ,\ C_C = 0{,}5\,\mathrm{pF}\ ,\ C_S = 2\,\mathrm{pF}$

Für die Stromquelle gilt $r_0 = U_{A,npn}/(2I_0) = 500\,\mathrm{k}\Omega$. Die Ausgangskapazität $C_0$ der Stromquelle ergibt sich als Summe der Substrat- und der Kollektorkapazität des Stromquellen-Transistors. Beide Teilkapazitäten sind wegen der Größe 2 doppelt so groß wie bei den anderen npn-Transistoren; daraus folgt: $C_0 = 2(C_S + C_C) = 2{,}4\,\mathrm{pF}$. Damit erhält man aus (4.120) die Grenzfrequenz der Gleichtaktunterdrückung: $f_{g,G} = 133\,\mathrm{kHz}$. Die resultierenden Werte für die npn-Differenzverstärker sind in Abb. 4.102 zusammengefasst. Bei den Differenzverstärkern mit Stromspiegel wurden die Werte für Gleichtaktaussteuerung mit Hilfe einer Schaltungssimulation ermittelt; sie sind in Klammern angegeben.

Für die Mosfets erhält man mit $I_0 = 10\,\mu\mathrm{A}$:

n-Kanal: $K = 150\,\mu\mathrm{A}/\mathrm{V}^2,\ S = 54{,}8\,\mu\mathrm{S},\ r_{DS} = 5\,\mathrm{M}\Omega,$  
$C_{GS} = 18\,\mathrm{fF},\ C_{GD} = 7{,}5\,\mathrm{fF},\ C_{BD} = 17\,\mathrm{fF}$

p-Kanal: $K = 60\,\mu\mathrm{A}/\mathrm{V}^2,\ S = 34{,}6\,\mu\mathrm{S},\ r_{DS} = 3{,}3\,\mathrm{M}\Omega,$  
$C_{GD} = 7{,}5\,\mathrm{fF},\ C_{BD} = 17\,\mathrm{fF}$

Dabei wird angenommen, dass die Draingebiete $5\,\mu\mathrm{m}$ lang und $2\,\mu\mathrm{m}$ breiter als die Kanalweite $W$ sind; daraus folgt:

$$
A_D = (15 + 2)\cdot 5\ \mu\mathrm{m}^2 = 85\ \mu\mathrm{m}^2 \Rightarrow C_{BD} = C'_S A_D = (0{,}2 \cdot 85)\,\mathrm{fF} = 17\,\mathrm{fF}
$$

Für die Stromquelle gilt $r_0 = U_{A,nK}/(2I_0) = 2{,}5\,\mathrm{M}\Omega$. Die Ausgangskapazität $C_0$ der Stromquelle setzt sich aus der Bulk-Drain- und der Gate-Drain-Kapazität des
<!-- page-import:0431:end -->

<!-- page-import:0432:start -->
4.1 Schaltungen 395

a mit Bipolartransistoren

b mit Mosfets

**Abb. 4.100.** Beispiel: Kaskode-Differenzverstärker mit Kaskode-Stromquellen

Stromquellen-Mosfets und den Bulk-Source-Kapazitäten der Mosfets $T_1$ und $T_2$ zusammen; letztere sind aufgrund des symmetrischen Aufbaus genauso groß wie die Bulk-Drain-Kapazitäten. Mit der Drainfläche $A_D = (32 \cdot 5)\,\mu\mathrm{m}^2 = 160\,\mu\mathrm{m}^2$ des Stromquellen-Mosfets erhält man:

$$
C_0 = C_s' A_D + 2 C_{GD} + 2 C_{BD} = (0{,}2 \cdot 160 + 2 \cdot 7{,}5 + 2 \cdot 17)\,\mathrm{fF} = 83\,\mathrm{fF}
$$

Damit folgt für die Grenzfrequenz der Gleichtaktunterdrückung: $f_{g,G} = 767\,\mathrm{kHz}$. Die resultierenden Werte für die n-Kanal-Differenzverstärker sind in Abb. 4.103 zusammengefaßt. Auch hier wurden die Werte für Gleichtaktaussteuerung bei den Differenzverstärkern mit Stromspiegel mit Hilfe einer Schaltungssimulation ermittelt.

Ein Vergleich der Werte der npn- und n-Kanal-Differenzverstärker zeigt, dass die Differenzverstärkung bei den npn-Differenzverstärkern etwa um den Faktor 10 größer ist als bei den korrespondierenden n-Kanal-Differenzverstärkern; lediglich bei den Kaskode-Differenzverstärkern ist der Unterschied geringer. Man muss dabei berücksichtigen, dass die n-Kanal-Mosfets bereits um den Faktor 5 größer gewählt wurden, als dies aufgrund des Ruhestroms erforderlich wäre; dadurch nimmt die Differenzverstärkung um den Faktor $\sqrt{5}$ zu. Ursache für die geringere Differenzverstärkung der n-Kanal-Differenzverstärker ist die geringere Maximalverstärkung der Mosfets. Bei den Kaskode-Differenzverstärkern holen die Mosfets auf, weil bei ihnen der Ausgangswiderstand mit zunehmender Stromgegenkopplung unbegrenzt ansteigt, während er bei Bipolartransistoren auf $\beta\,r_{CE}$
<!-- page-import:0432:end -->

<!-- page-import:0433:start -->
396  4. Verstärker

a mit Bipolartransistoren

b mit Mosfets

**Abb. 4.101.** Beispiel: Kaskode-Differenzverstärker mit Kaskode-Stromspiegel

beschränkt ist. Daraus folgt, dass man die Differenzverstärkung eines n-Kanal-Kaskode-Differenzverstärkers durch weitere Kaskode-Stufen fast beliebig vergrößern kann.

Im allgemeinen sind an den Ausgängen eines Differenzverstärkers weitere Verstärkerstufen angeschlossen. Damit die Differenzverstärkung in vollem Umfang erhalten bleibt, müssen die Eingangswiderstände dieser Stufen größer sein als die Ausgangswiderstände des Differenzverstärkers. In CMOS-Schaltungen ist diese Bedingung wegen der isolierten Gate-Anschlüsse der Mosfets automatisch gegeben, so dass die maximale Betriebsverstärkung $A_{B,D} = A_D$ ohne besondere Maßnahmen erreicht wird. In bipolaren Schaltungen muss man dagegen an jedem Ausgang einen Impedanzwandler mit einer oder mehreren Kollektorschaltungen einsetzen, um die Ausgangswiderstände auf einen Wert unterhalb des Eingangswiderstands der nächsten Stufe zu reduzieren. Impedanzwandler werden im Abschnitt 4.1.5 näher beschrieben.

Ein sinnvoller Vergleich der Grenzfrequenzen der hier betrachteten Differenzverstärker ist wegen der stark unterschiedlichen Verstärkung nur auf der Basis des Verstärkungs-Bandbreite-Produkts möglich. Hier erreichen die n-Kanal-Differenzverstärker aufgrund der sehr kleinen Kapazitäten der integrierten Mosfets trotz des geringeren Ruhestroms höhere Werte als die npn-Differenzverstärker. Da die Eingangskapazitäten nachfolgender Verstärkerstufen ebenfalls sehr klein sind, bleibt dieser Vorteil im Inneren einer integrierten Schaltung in vollem Umfang erhalten. Wenn aber größere Lastkapazitäten an den
<!-- page-import:0433:end -->

<!-- page-import:0434:start -->
397

# 4.1 Schaltungen

| npn | W | ESQ | ESS | KSQ | KASQ | KASS | Einheit |
|---|---:|---:|---:|---:|---:|---:|---|
| \multicolumn{8}{l}{Verstärkung, Aus- und Eingangswiderstand} |
| $A_D$ | $-47$ | $-641$ | $-1282$ | $-1851$ | $-38.500$ | $-42.800$ | — |
| $A_{D,dB}$ | $33$ | $56$ | $62$ | $65$ | $92$ | $93$ | dB |
| $A_{Gl}$ | $-0,025$ | $-0,5$ | $(-0,008)$ | $-20$ | $-20$ | $(-0,8)$ | — |
| $A_{Gl,dB}$ | $-32$ | $-6$ | $(-42)$ | $26$ | $26$ | $(-2)$ | dB |
| $G$ | $1880$ | $1282$ | $(160.000)$ | $93$ | $1925$ | $(54.000)$ | — |
| $G_{dB}$ | $65$ | $62$ | $(104)$ | $39$ | $66$ | $(95)$ | dB |
| $r_{a,D}$ | $24,4$ | $333$ | $333$ | $962$ | $20.000$ | $11.100$ | k$\Omega$ |
| $r_{a,Gl}$ | $25$ | $498$ | — | $20.000$ | $20.000$ | — | k$\Omega$ |
| $r_{e,D}$ |  |  |  | $26$ |  |  | k$\Omega$ |
| $r_{e,Gl}$ |  |  |  | $100$ |  |  | M$\Omega$ |
| \multicolumn{8}{l}{Frequenzgang und Grenzfrequenz mit $R_g = 10\,\mathrm{k}\Omega$, $R_L = \infty$, $C_L = 0$} |
| $A_0$ | $-34$ | $-463$ | $-926$ | $-1337$ | $-27.800$ | $-30.900$ | — |
| $A_{0,dB}$ | $31$ | $53$ | $59$ | $63$ | $89$ | $90$ | dB |
| $T_1$ | $5,67$ | $5,67$ | $2,84$ | $5,67$ | $7,10$ | $3,55$ | ns |
| $T_2$ | $2,41$ | $3,31$ | $1,66$ | $3,31$ | $1,33$ | $0,67$ | ns |
| $GBW$ | $66$ | $48$ | $96$ | $48$ | $120$ | $240$ | MHz |
| $f_{-3dB}$ | $1800$ | $103$ | $103$ | $36$ | $4,3$ | $7,7$ | kHz |
| $f_{g,G}$ |  |  | $133$ |  |  |  | kHz |

W: mit Widerständen (Abb. 4.97a)  
ESQ: mit einfachen Stromquellen (Abb. 4.98a)  
ESS: mit einfachem Stromspiegel (Abb. 4.98a)  
KSQ: mit Kaskode-Stromquellen (Abb. 4.99a)  
KASQ: Kaskode mit Stromquellen (Abb. 4.100a)  
KASS: Kaskode mit Stromspiegel (Abb. 4.101a)

**Abb. 4.102.** Kleinsignalparameter der npn-Differenzverstärker (simulierte Werte in Klammern)

Anschlüssen oder außerhalb einer integrierten Schaltung vorliegen, erreichen die npn-Differenzverstärker aufgrund der größeren Steilheit der Bipolartransistoren ein größeres Verstärkungs-Bandbreite-Produkt. Man erkennt dies, wenn man die Zeitkonstante $T_2$ aus Abb. 4.91 für den Grenzfall großer Lastkapazitäten $C_L$ betrachtet:

$$
\lim_{C_L \to \infty} T_2 =
\begin{cases}
C_L \left(\dfrac{R_g}{\beta} + \dfrac{1}{S}\right) \quad \text{npn-Differenzverstärker} \\
\dfrac{C_L}{S} \quad \text{n-Kanal-Differenzverstärker}
\end{cases}
$$

Wenn man eine Lastkapazität von $C_L = 100\,\mathrm{pF}$ bei den npn-Differenzverstärkern und $C_L = 10\,\mathrm{pF}$ bei den n-Kanal-Differenzverstärkern annimmt – damit ist das Verhältnis von Ruhestrom und Lastkapazität bei beiden gleich –, erhält man für den npn-Differenzverstärker $GBW \approx 4{,}4\,\mathrm{MHz}$ und für den n-Kanal-Differenzverstärker $GBW \approx 870\,\mathrm{kHz}$. Auch hier muss man berücksichtigen, dass die n-Kanal-Mosfets bereits um den Faktor 5 größer gewählt wurden, als dies aufgrund des Ruhestroms erforderlich wäre; dadurch nimmt die Steilheit und in der Folge auch das Verstärkungs-Bandbreite-Produkt bei kapazitiver Last um den Faktor $\sqrt{5}$ zu.
<!-- page-import:0434:end -->

<!-- page-import:0435:start -->
398  4. Verstärker

| n-Kanal | W | ESQ | ESS | KSQ | KASQ | KASS | Einheit |
|---|---:|---:|---:|---:|---:|---:|---|
|  |  |  |  |  |  |  |  |
| **Verstärkung, Aus- und Eingangswiderstand** |  |  |  |  |  |  |  |
| $A_D$ | $-\,6{,}5$ | $-\,55$ | $-\,110$ | $-\,135$ | $-\,8110$ | $-\,16.220$ | – |
| $A_{D,dB}$ | 16 | 35 | 41 | 42 | 78 | 84 | dB |
| $A_{Gl}$ | $-\,0{,}05$ | $-\,0.67$ | ($-\,0{,}005$) | $-\,59$ | $-\,75$ | ($-\,0{,}035$) | – |
| $A_{Gl,dB}$ | $-\,26$ | $-\,3$ | ($-\,46$) | 35 | 38 | ($-\,29$) | dB |
| $G$ | 130 | 82 | (22.000) | 2,3 | 108 | (460.000) | – |
| $G_{dB}$ | 42 | 38 | (87) | 7 | 40 | (113) | dB |
| $r_{a,D}$ | 0,238 | 2 | 2 | 4,93 | 296 | 296 | M$\Omega$ |
| $r_{a,Gl}$ | 0,25 | 3,3 | – | 296 | 376 | – | M$\Omega$ |
| $r_{e,D}$ |  |  | $\infty$ |  |  |  | $\Omega$ |
| $r_{e,Gl}$ |  |  | $\infty$ |  |  |  | $\Omega$ |

|  |  |  |  |  |  |  |  |
|---|---:|---:|---:|---:|---:|---:|---|
| **Frequenzgang und Grenzfrequenz mit $R_g = 100\,\mathrm{k}\Omega$, $R_L = \infty$, $C_L = 0$** |  |  |  |  |  |  |  |
| $A_0$ | $-\,6{,}5$ | $-\,55$ | $-\,110$ | $-\,135$ | $-\,8110$ | $-\,16.220$ | – |
| $A_{0,dB}$ | 16 | 35 | 41 | 42 | 78 | 84 | dB |
| $T_1$ | 2,55 | 2,55 | 1,28 | 2,55 | 3,30 | 1,65 | ns |
| $T_2$ | 1,20 | 1,64 | 0,82 | 1,64 | 0,58 | 0,29 | ns |
| $GBW$ | 133 | 97 | 194 | 97 | 275 | 550 | MHz |
| $f_{-3dB}$ | 15.000 | 1700 | 1700 | 700 | 34 | 34 | kHz |
| $f_{g,G}$ |  |  | 767 |  |  |  | kHz |

W: mit Widerständen (Abb. 4.97b)  
ESQ: mit einfachen Stromquellen (Abb. 4.98b)  
ESS: mit einfachem Stromspiegel (Abb. 4.98b)  
KSQ: mit Kaskode-Stromquellen (Abb. 4.99b)  
KASQ: Kaskode mit Stromquellen (Abb. 4.100b)  
KASS: Kaskode mit Stromspiegel (Abb. 4.101b)

**Abb. 4.103.** Kleinsignalparameter der n-Kanal-Differenzverstärker  
(simulierte Werte in Klammern)

## 4.1.4.13 Zusammenfassung

Der Differenzverstärker ist aufgrund seiner besonderen Eigenschaften eine der wichtigsten Schaltungen in der integrierten Schaltungstechnik. Man findet ihn nicht nur in Verstärkern, sondern auch in Komparatoren, ECL-Logikschaltungen, Spannungsreglern, aktiven Mischern und einer Vielzahl weiterer Schaltungen. Seine besondere Stellung in Verstärkerschaltungen verdankt er vor allem der weitgehend freien Wahl der Gleichtaktspannung am Eingang, die ein direktes Anschließen an jede Signalquelle erlaubt, deren Gleichspannungsanteil innerhalb des Gleichtaktaussteuerbereichs liegt; Spannungsteiler zur Arbeitspunkteinstellung und Koppelkondensatoren werden nicht benötigt. Daraus folgt auch, dass der Differenzverstärker von Hause aus ein echter Gleichspannungsverstärker ist. Da er praktisch nur das Differenzsignal verstärkt, ist er weiterhin *der* Regler schlechthin, da er durch die Differenzbildung die Regelabweichung berechnet und diese anschließend verstärkt, d.h. er vereint die Blöcke *Subtrahierer* und *Regelverstärker* eines Regelkreises. Damit bildet er auch die Basis für die Operationsverstärker. Der Differenzverstärker ist in diesem Sinne der *kleinste* Operationsverstärker, und der Operationsverstärker ist der *bessere* Differenzverstärker.
<!-- page-import:0435:end -->

<!-- page-import:0436:start -->
4.1 Schaltungen 399

a Kollektorschaltung  b Drainschaltung

**Abb. 4.104.** Einstufige Impedanzwandler

## 4.1.5 Impedanzwandler

Der Ausgangswiderstand einer Verstärkerstufe mit hoher Spannungsverstärkung ist im allgemeinen sehr hoch und muss mit einem Impedanzwandler herabgesetzt werden, bevor man weitere Verstärkerstufen oder Lastwiderstände ohne Verstärkungsverlust anschließen kann. Als Impedanzwandler werden ein- oder mehrstufige Kollektor- und Drainschaltungen verwendet.

### 4.1.5.1 Einstufige Impedanzwandler

Abb. 4.104 zeigt die einfachste Ausführung mit einer Kollektor- bzw. Drainschaltung ($T_1$) und einem Stromspiegel zur Arbeitspunkteinstellung ($T_2, T_3$); dabei repräsentiert der Widerstand $R_g$ den Ausgangswiderstand der vorausgehenden Stufe. Für den Ausgangswiderstand erhält man aus (2.129) und (3.108):

$$
r_a=
\begin{cases}
\dfrac{R_g}{\beta}+\dfrac{1}{S}
\qquad \overset{S R_g \gg \beta}{\approx}\qquad
\dfrac{R_g}{\beta}
\qquad \text{Kollektorschaltung}\\[1.2ex]
\dfrac{1}{S+S_B}
\qquad \overset{S \gg S_B}{\approx}\qquad
\dfrac{1}{S}
\qquad \text{Drainschaltung}
\end{cases}
$$

(4.123)

#### 4.1.5.1.1 Kollektorschaltung

Bei der Kollektorschaltung hängt der Ausgangswiderstand bei einer hochohmigen Signalquelle nur vom Innenwiderstand $R_g$ und der Stromverstärkung $\beta$ ab; der Ruhestrom $I_0$ geht nicht ein, solange $S R_g \gg \beta$ gilt. Daraus kann man mit $S = I_0/U_T$ und $S R_g \approx 10\beta$ einen Richtwert für die Wahl des Ruhestroms ableiten:

$$
I_0 \approx \frac{10\beta\,U_T}{R_g}
\qquad
\overset{\beta \approx 100}{\approx}
\qquad
\frac{26\ \mathrm{V}}{R_g}
$$

(4.124)

Bei sehr hochohmigen Signalquellen muss man meist einen höheren Ruhestrom einstellen, da sonst die Bandbreite der Schaltung zu gering wird; Ursache hierfür ist die Abnahme der Transitfrequenz eines Transistors bei kleinen Strömen. Wenn die Impedanzwandlung um den Faktor $\beta$ nicht ausreicht, muss man einen mehrstufigen Impedanzwandler einsetzen. Bei niederohmigen Signalquellen mit $S R_g \ll \beta$ bestimmt die Steilheit des Transistors den Ausgangswiderstand:
<!-- page-import:0436:end -->

<!-- page-import:0437:start -->
400 4. Verstärker

$$
r_a \approx \frac{1}{S} = \frac{U_T}{I_0} \approx \frac{26\,\mathrm{mV}}{I_0}
$$

#### 4.1.5.1.2 Drainschaltung

Die Drainschaltung zeigt bei hochohmigen Signalquellen ein völlig anderes Verhalten. Hier hängt der Ausgangswiderstand nur von der Steilheit ab:

$$
r_a \approx \frac{1}{S} = \frac{1}{\sqrt{2K\,I_0}} = \frac{U_{GS} - U_{th}}{2I_0}
$$

(4.125)

Für die Mosfets aus Abb. 4.6 auf Seite 285 erhält man bei einem typischen Ruhestrom von $10\,\mu\mathrm{A}$ für die Größe 1 die Werte $U_{GS} - U_{th} \approx 0{,}8\,\mathrm{V}$ und $r_a \approx 0{,}4\,\mathrm{V}/I_0$. Bei kleinen Ausgangswiderständen werden große Mosfets mit einer entsprechend hohen Eingangskapazität benötigt; dadurch nimmt die Bandbreite bei hochohmigen Signalquellen stark ab. Wenn die Bandbreite nicht ausreicht, muss man einen mehrstufigen Impedanzwandler verwenden.

#### 4.1.5.1.3 Ausgangsspannung

Bei beiden Schaltungen liegt die Ausgangsspannung im Arbeitspunkt um eine Basis-Emitter- bzw. Gate-Source-Spannung unter der Eingangsspannung. Alternativ kann man eine pnp-Kollektorschaltung oder eine p-Kanal-Drainschaltung einsetzen; in diesem Fall ist die Ausgangsspannung im Arbeitspunkt größer als die Eingangsspannung. Allerdings haben pnp-Transistoren im allgemeinen eine geringere Stromverstärkung als npn-Transistoren, und p-Kanal-Mosfets sind bei gleichem Steilheitskoeffizienten geometrisch größer als n-Kanal-Mosfets und haben deshalb größere Kapazitäten.

### 4.1.5.2 Mehrstufige Impedanzwandler

Mehrstufige Impedanzwandler werden benötigt, wenn

- die Impedanztransformation einer Kollektorschaltung nicht ausreicht;
- die Kapazitäten einer Drainschaltung mit dem gewünschten Ausgangswiderstand so groß sind, dass die Bandbreite nicht ausreicht.

Abb. 4.105 zeigt als Beispiel zweistufige Impedanzwandler mit den zugehörigen Stromspiegeln zur Arbeitspunkteinstellung. Die optimale Auslegung eines mehrstufigen Impedanzwandlers erfordert eine optimale Wahl der Ruheströme und der Transistor-Größen.

#### 4.1.5.2.1 Mehrstufige Kollektorschaltung

Bei einer mehrstufigen Kollektorschaltung könnte man den Ruhestrom jeder Stufe mit Hilfe von (4.124) wählen. Demnach müsste der Ruhestrom von Stufe zu Stufe um die Stromverstärkung $\beta$ zunehmen, da der wirksame Innenwiderstand der Signalquelle mit jeder Stufe um den Faktor $\beta$ abnimmt; damit würde man eine optimale Impedanztransformation bei hochohmigen Signalquellen erreichen. Da jedoch jede Stufe den Basisstrom der nächsten Stufe liefern muss und dieser deutlich kleiner als der Ruhestrom sein sollte, wird in der Praxis ein Ruhestromverhältnis von etwa $\beta/10 \approx \beta/10$ verwendet; dadurch ist der Ruhestrom jeder Stufe um den Faktor 10 größer als der Basisstrom der nächsten Stufe. Da man den Ruhestrom der ersten Stufe bei sehr hochohmigen Signalquellen ohnehin meist größer wählen muss, als dies nach (4.124) erforderlich wäre, ist ein Ruhestromverhältnis von $\beta/10$ bei zweistufigen Kollektorschaltungen auch in dieser Hinsicht vorteilhaft. Deshalb wählt man bei einer zweistufigen Kollektorschaltung zunächst den
<!-- page-import:0437:end -->

<!-- page-import:0438:start -->
4.1 Schaltungen 401

a mit Kollektorschaltungen

b mit Drainschaltungen

**Abb. 4.105.** Zweistufige Impedanzwandler

Ruhestrom $I_2$ der zweiten Stufe mit Hilfe von (4.124); der wirksame Quellenwiderstand an dieser Stelle beträgt $R_g/\beta$. Daraus folgt für die Ruheströme der beiden Stufen:

$$
I_2 \approx \frac{10\beta^2 U_T}{R_g} \qquad \overset{\beta \approx 100}{\approx} \qquad \frac{2600\ \mathrm{V}}{R_g},
\qquad
I_1 \approx \frac{10I_2}{B} \qquad \overset{B \approx \beta \approx 100}{\approx} \qquad \frac{260\ \mathrm{V}}{R_g}
\qquad (4.126)
$$

Eine dritte Stufe würde den Ruhestrom $I_3 = I_2 B/10$ erhalten.

*Beispiel:* Eine Signalquelle mit $R_g = 2{,}6\,\mathrm{M}\Omega$ soll über eine zweistufige Kollektorschaltung mit dem Ruhestromverhältnis $B/10$ an eine niederohmige Last angeschlossen werden; es gelte $B \approx \beta \approx 100$. Aus (4.126) erhält man $I_2 = 1\,\mathrm{mA}$ und $I_1 = 100\,\mu\mathrm{A}$. Am Ausgang der zweiten Stufe hat der wirksame Innenwiderstand der Signalquelle auf $R_g/\beta^2 \approx 260\,\Omega$ abgenommen. Bei einer dritten Stufe mit dem Ruhestrom $I_3 = 10\,\mathrm{mA}$ gilt $S\,R_g = I_3\,R_g/U_T = 100$, d.h. die Bedingung $S\,R_g \gg \beta$ ist nicht mehr erfüllt; deshalb muss man den Ausgangswiderstand ohne die Näherung in (4.123) berechnen:
$r_a = R_g/\beta + 1/S = (2{,}6 + 2{,}6)\,\Omega = 5{,}2\,\Omega$.

### 4.1.5.2.2 Darlington-Schaltung

Man kann die zweistufige Kollektorschaltung auch mit einem Darlington-Transistor aufbauen; dazu muss man nur die Transistoren $T_1$ und $T_2$ in Abb. 4.105a zu einem Darlington-Transistor zusammenfassen und den Transistor $T_4$ entfernen. Der Ruhestrom von $T_1$ entspricht in diesem Fall dem Basisstrom von $T_2$. In der Praxis erreicht man jedoch meist keine ausreichende Bandbreite, weil die Transitfrequenz von $T_1$ wegen des geringen Ruhestroms sehr klein wird.

### 4.1.5.2.3 Mehrstufige Drainschaltung

Bei der Drainschaltung hängt der Ausgangswiderstand nach (4.125) nur vom Ruhestrom ab; deshalb hängt der Ausgangswiderstand einer mehrstufigen Drainschaltung nur vom Ruhestrom der letzten Stufe ab. Die Ruheströme der anderen Stufen wirken sich jedoch auf die Bandbreite aus, da jede Stufe mit der Eingangskapazität der nächsten Stufe belastet wird. Die optimale Wahl der Ruheströme wird am Beispiel einer zweistufigen Drainschaltung erläutert; Abb. 4.106 zeigt die Schaltung und das zugehörige Kleinsignalersatzschaltbild.
<!-- page-import:0438:end -->

<!-- page-import:0439:start -->
402  4. Verstärker

**Abb. 4.106.** Zweistufige Drainschaltung: Schaltung (oben) und Kleinsignalersatzschaltbild (unten)

Die Ausgangswiderstände und die Eingangskapazitäten hängen von den Größen$^{26}$ $G_1$ und $G_2$ der Mosfets $T_1$ und $T_2$ ab:

$$
r_{a1}=\frac{r_a'}{G_1}\ ,\quad r_{a2}=\frac{r_a'}{G_2}\ ,\quad C_{e1}=C_e'G_1\ ,\quad C_{e2}=C_e'G_2
$$

Dabei sind $r_a'$ und $C_e'$ die Werte für einen Mosfet der Größe 1. Aus dem Kleinsignalersatzschaltbild in Abb. 4.106 erhält man die Zeitkonstanten

$$
T_1=R_g\,(C_g+C_{e1})=R_g\,(C_g+C_e'G_1)\ ,\quad T_2=r_{a1}C_{e2}=\frac{r_a'C_e'G_2}{G_1}
$$

und die -3dB-Grenzfrequenz:

$$
\omega_{-3dB}=2\pi\,f_{-3dB}\approx\frac{1}{T_1+T_2}
=\frac{1}{R_gC_g+R_gC_e'G_1+\frac{r_a'C_e'G_2}{G_1}}
\qquad (4.127)
$$

Die Grenzfrequenz nimmt mit zunehmender Größe $G_2$ ab. Für die Größe $G_1$ erhält man über die Bedingung $\partial(T_1+T_2)/\partial G_1=0$ ein Optimum:

$$
G_{1,opt}=\sqrt{\frac{r_a'G_2}{R_g}}=G_2\sqrt{\frac{r_{a2}}{R_g}}
\qquad (4.128)
$$

Man erkennt, dass das optimale Größenverhältnis $G_1/G_2$ vom Transformationsverhältnis $R_g/r_{a2}$ abhängt. Durch die Wurzel kommt zum Ausdruck, dass die Transformation zu gleichen Teilen von beiden Stufen übernommen wird. Bei einer drei- oder mehrstufigen Drainschaltung geht man in gleicher Weise vor. Für den allgemeinen n-stufigen Fall erhält man:

$$
G_{i,opt}=G_n\left(\frac{r_{a,n}}{R_g}\right)^{\frac{n-i}{n}}
\qquad \text{für } i=1\dots n-1
\qquad (4.129)
$$

---

$^{26}$ Mit Größe ist die elektrische und nicht die geometrische Größe gemeint, d.h. $G\sim K$.
<!-- page-import:0439:end -->

<!-- page-import:0440:start -->
4.1 Schaltungen 403

*Beispiel:* Ein Lastwiderstand $R_L = 1\,\mathrm{k}\Omega$ soll über einen Impedanzwandler an eine Signalquelle mit $R_g = 2\,\mathrm{M}\Omega$ und $C_g = 20\,\mathrm{fF}$ angeschlossen werden. Damit am Ausgang nur eine geringe Abschwächung des Signals auftritt, wird $r_a = 100\,\Omega$ gewählt. Aus (4.125) auf Seite 400 erhält man mit dem für die Mosfets aus Abb. 4.6 typischen Wert $U_{GS} - U_{th} \approx 0{,}8\,\mathrm{V}$ den erforderlichen Ruhestrom:

$$
I_0 = \frac{U_{GS} - U_{th}}{2r_a} = \frac{0{,}4\,\mathrm{V}}{100\,\Omega} = 4\,\mathrm{mA}
$$

Die erforderliche Größe für den Mosfet ist $G = 4\,\mathrm{mA}/10\,\mu\mathrm{A} = 400$. Die Eingangskapazität einer Drainschaltung erhält man aus (3.115) auf Seite 268, indem man die mit $R'_g$ verbundene Kapazität betrachtet und $R'_L = 1/S_B$ einsetzt:

$$
C_e = C_{GS}\,\frac{S_B}{S} + C_{GD} \qquad \overset{S_B/S \approx 0{,}2}{\approx} \qquad 0{,}2 \cdot C_{GS} + C_{GD}
$$

Mit den Parametern aus Abb. 4.6 auf Seite 285 erhält man für einen n-Kanal-Mosfet der Größe 1 mit $W = L = 3\,\mu\mathrm{m}$ und einem Ruhestrom von $10\,\mu\mathrm{A}$:

$$
r'_a \approx \frac{1}{S} = \frac{1}{\sqrt{2K\cdot I_0}} = \frac{1}{\sqrt{2 \cdot 30\,\mu\mathrm{A}/\mathrm{V}^2 \cdot 10\,\mu\mathrm{A}}} \approx 40\,\mathrm{k}\Omega
$$

$$
C'_e \approx 0{,}2 \cdot \frac{2C'_{ox}\,WL}{3} + C'_{GD,\ddot{U}}\,W = 0{,}72\,\mathrm{fF} + 1{,}5\,\mathrm{fF} \approx 2{,}2\,\mathrm{fF}
$$

Der Mosfet der Größe 400 hat demnach eine Eingangskapazität von $C_e = 400 \cdot 2{,}2\,\mathrm{fF} = 880\,\mathrm{fF}$. Wenn man diesen Mosfet direkt an die Signalquelle anschließt, erhält man die Zeitkonstante $T = R_g(C_g + C_e) = 1{,}8\,\mu\mathrm{s}$ und die Grenzfrequenz $f_{-3dB} = 1/(2\pi\ T) \approx 88\,\mathrm{kHz}$. Bei einer zweistufigen Drainschaltung erhält man aus (4.128) die optimale Größe für den Mosfet der ersten Stufe:

$$
G_{1,opt} = G_2 \sqrt{\frac{r_a}{R_g}} = 400 \cdot \sqrt{\frac{100\,\Omega}{2\,\mathrm{M}\Omega}} = 2\sqrt{2} \approx 3
$$

Damit erhält man aus (4.127) eine Grenzfrequenz von $f_{-3dB} \approx 2{,}5\,\mathrm{MHz}$. Demnach ist die Bandbreite bei Einsatz einer zweistufigen Drainschaltung um den Faktor 28 größer als bei einer Stufe.

#### 4.1.5.2.4 Ausgangsspannung

Bei einer zweistufigen npn-Kollektorschaltung liegt die Ausgangsspannung im Arbeitspunkt um $2\,U_{BE} \approx 1{,}4\,\mathrm{V}$ unter der Eingangsspannung. Bei einer zweistufigen Drainschaltung ist der Spannungsversatz mit $2\,U_{GS} \approx 3\dots 4\,\mathrm{V}$ bereits so groß, dass man – unter Berücksichtigung der Aussteuerungsgrenze der Stromquelle von etwa $1\,\mathrm{V}$ – eine Eingangsspannung von mindestens $4\dots 5\,\mathrm{V}$ benötigt. Bei Impedanzwandlern mit mehr als zwei Stufen wird der Spannungsversatz noch größer. Alternativ kann man eine oder mehrere Stufen als pnp-Kollektor- oder p-Kanal-Drainschaltungen ausführen; dadurch kompensieren sich die Basis-Emitter- bzw. Gate-Source-Spannungen ganz oder teilweise. Abb. 4.107 zeigt als Beispiel zweistufige Impedanzwandler mit $U_{e,A} \approx U_{a,A}$.
<!-- page-import:0440:end -->

<!-- page-import:0441:start -->
404 4. Verstärker

a npn-pnp  
$(U_{BE1} \approx -U_{BE2})$

b n-Kanal-p-Kanal  
$(U_{GS1} \approx -U_{GS2})$

**Abb. 4.107.** Zweistufige Impedanzwandler mit $U_{e,A} \approx U_{a,A}$

### 4.1.5.3 Komplementäre Impedanzwandler

Bei niederohmigen oder größeren kapazitiven Lasten werden bevorzugt komplementäre Impedanzwandler eingesetzt. Es wird zunächst auf den Aufbau und anschließend auf die Vorteile eingegangen.

Abb. 4.108 zeigt die Prinzipschaltung eines einstufigen komplementären Impedanzwandlers mit Bipolartransistoren und mit Mosfets. Die Ruheströme müssen mit Vorspannungsquellen eingestellt werden, auf deren praktische Realisierung später noch näher eingegangen wird. Im Arbeitspunkt sind Ein- und Ausgangsspannung gleich, d.h. es tritt kein Spannungsversatz auf. Aus Symmetriegründen sind die Schaltungen mit einer symmetrischen Spannungsversorgung dargestellt; man kann aber auch eine unipolare Spannungsversorgung verwenden.

a mit Bipolartransistoren

b mit Mosfets

**Abb. 4.108.** Prinzipschaltung eines einstufigen komplementären Impedanzwandlers
<!-- page-import:0441:end -->

<!-- page-import:0442:start -->
4.1 Schaltungen 405

**Abb. 4.109.** Vergleich einer komplementären und einer einfachen Kollektorschaltung bei sprunghafter Änderung der Eingangsspannung

Komplementäre Impedanzwandler haben den Vorteil, dass sie in beiden Richtungen große Ausgangsströme liefern können; Abb. 4.109 zeigt dies durch einen Vergleich einer komplementären und einer einfachen Kollektorschaltung bei einer sprunghaften Änderung der Eingangsspannung. Bei der komplementären Kollektorschaltung wird der Ausgangsstrom in beiden Richtungen über eine aktive Kollektorschaltung geliefert und kann deshalb sehr groß werden; die jeweils andere Kollektorschaltung sperrt in diesem Fall. Bei der einfachen Kollektorschaltung ist der Ausgangsstrom bei sprunghaft abnehmender Eingangsspannung durch die Stromquelle vorgegeben und damit auf den Ruhestrom begrenzt. Deshalb werden komplementäre Impedanzwandler immer dann eingesetzt, wenn ein einfacher Impedanzwandler einen unverhältnismäßig hohen Ruhestrom benötigen würde.

#### 4.1.5.3.1 Einstufige komplementäre Impedanzwandler

Wenn man die Vorspannungsquellen in Abb. 4.108 mit Transistor- bzw. Mosfet-Dioden realisiert, erhält man die Schaltungen in Abb. 4.110. Die Arbeitspunktspannungen am Eingang und am Ausgang sind gleich, wenn das Größenverhältnis von $T_1$ und $T_3$ gleich dem Größenverhältnis von $T_2$ und $T_4$ ist; in diesem Fall arbeiten $T_3$ und $T_1$ sowie $T_4$ und $T_2$ bezüglich der Ruheströme als Stromspiegel mit dem Übersetzungsverhältnis:

$$
k_I \approx \frac{I_{S1}}{I_{S3}} = \frac{I_{S2}}{I_{S4}}
\qquad \text{bzw.} \qquad
k_I = \frac{K_1}{K_3} = \frac{K_2}{K_4}
$$
<!-- page-import:0442:end -->

<!-- page-import:0443:start -->
406 4. Verstärker

a mit Bipolartransistoren

b mit Mosfets

**Abb. 4.110.** Einstufige komplementäre Impedanzwandler

Dabei sind $I_{S1}\ldots I_{S4}$ die Sättigungssperrströme der Bipolartransistoren und $K_1\ldots K_4$ die Steilheitskoeffizienten der Mosfets. Für die Ruheströme gilt:

$$
I_1 = k_1 I_0
$$

Die Schaltung in Abb. 4.110a kann als Parallelschaltung einer npn- und einer pnp-Kollektorschaltung aufgefasst werden; daraus folgt für den Ausgangswiderstand:

$$
r_a \approx \frac{1}{2}\left(\frac{R_g}{\beta_1}+\frac{R_g}{\beta_2}+\frac{1}{S}\right)
\overset{S\,R_g \gg \beta_1,\beta_2}{\approx}
\frac{R_g}{2}\left(\frac{1}{\beta_1}+\frac{1}{\beta_2}\right)
\overset{\beta_1=\beta_2=\beta}{=}
\frac{R_g}{\beta}
\qquad (4.130)
$$

Dabei wird der differentielle Widerstand der Transistor-Dioden $T_3$ und $T_4$ vernachlässigt, da er viel kleiner als $R_g$ ist. Die Steilheit der Transistoren $T_1$ und $T_2$ ist gleich: $S=I_1/U_T$. Entsprechend kann man die Schaltung in Abb. 4.110b als Parallelschaltung einer n-Kanal- und einer p-Kanal-Drainschaltung auffassen; hier gilt:

$$
r_a=\frac{1}{S_1}\parallel\frac{1}{S_2}=\frac{1}{S_1+S_2}
\overset{S_1=S_2=S}{=}
\frac{1}{2S}=
\frac{1}{2\sqrt{2K\,I_1}}
\qquad (4.131)
$$

## 4.1.5.3.2 Zweistufige komplementäre Kollektorschaltung

Wenn man die Transistor-Dioden $T_3$ und $T_4$ in Abb. 4.110a durch Kollektorschaltungen ersetzt, die neben der Vorspannungserzeugung eine Impedanzwandlung bewirken, erhält man ohne zusätzlichen Aufwand die in Abb. 4.111 gezeigte zweistufige komplementäre Kollektorschaltung. Man beachte, dass die npn-Transistor-Diode $T_3$ durch eine pnp-Kollektorschaltung und die pnp-Transistor-Diode $T_4$ durch eine npn-Kollektorschaltung ersetzt wird. Für die Stromquellen sind hier bereits die Stromspiegel $T_5,T_7$ und $T_6,T_8$ eingesetzt. Die Schaltung kann als Parallelschaltung einer pnp-npn- ($T_3,T_1$) und einer npn-pnp-Kollektorschaltung ($T_4,T_2$) aufgefasst werden.

Die Einstellung der Ruheströme und die Wahl der Transistor-Größen kann im einfachsten Fall wie bei der einfachen komplementären Kollektorschaltung erfolgen; bei gleichem Größenverhältnis der npn- und pnp-Transistoren erhält man das Übersetzungsverhältnis
<!-- page-import:0443:end -->

<!-- page-import:0444:start -->
4.1 Schaltungen 407

**Abb. 4.111.** Zweistufige komplementäre Kollektorschaltung

$$
k_I \approx \frac{I_{S1}}{I_{S4}} = \frac{I_{S2}}{I_{S3}}
$$

und $I_2 = k_I I_1$. Eine allgemeine Berechnung folgt im nächsten Abschnitt. Die Ein- und die Ausgangsspannung im Arbeitspunkt sind hier jedoch nicht gleich, weil die Transistor-Dioden durch Kollektorschaltungen der jeweils anderen Polarität ersetzt wurden und die Basis-Emitter-Spannungen von npn- und pnp-Transistoren gleicher Größe bei gleichem Strom unterschiedlich sind. Man kann diesen Spannungsversatz minimieren, indem man die Skalierung der Transistoren geeignet ändert.

Zur allgemeinen Berechnung der Ruheströme und des Spannungsversatzes geht man von der Maschengleichung

$$
U_{BE3} + U_{BE1} - U_{BE2} - U_{BE4} = 0
$$

aus. Für die Basis-Emitter-Spannungen gilt:

$$
U_{BE} =
\begin{cases}
U_T \ln \dfrac{I_C}{I_S} & \text{npn-Transistor} \\
- U_T \ln \dfrac{-I_C}{I_S} & \text{pnp-Transistor}
\end{cases}
$$

Durch Einsetzen und Dividieren mit $U_T$ erhält man:

$$
- \ln \dfrac{-I_{C3}}{I_{S3}} + \ln \dfrac{I_{C1}}{I_{S1}} + \ln \dfrac{-I_{C2}}{I_{S2}} - \ln \dfrac{I_{C4}}{I_{S4}} = 0
$$
<!-- page-import:0444:end -->

<!-- page-import:0445:start -->
408 4. Verstärker

Wenn man die Basisströme vernachlässigt, kann man $-\,I_{C2}=I_{C1}\approx I_2$ und $-\,I_{C3}=I_{C4}\approx I_1$ einsetzen; dann folgt

$$
\ln \frac{I_{S3}\,I_{S4}\,I_2^2}{I_{S1}\,I_{S2}\,I_1^2} \approx 0
$$

und daraus:

$$
k_I \;=\; \frac{I_2}{I_1} \;\approx\; \sqrt{\frac{I_{S1}I_{S2}}{I_{S3}I_{S4}}}
\;=\; \sqrt{g_{npn}g_{pnp}}
\qquad \text{mit} \qquad
g_{npn}=\frac{I_{S1}}{I_{S4}},\; g_{pnp}=\frac{I_{S2}}{I_{S3}}
\qquad (4.132)
$$

Dabei ist $g_{npn}$ das Größenverhältnis der npn-Transistoren $T_1$ und $T_4$ und $g_{pnp}$ das Größenverhältnis der pnp-Transistoren $T_2$ und $T_3$.

Im allgemeinen wählt man gleiche Größenverhältnisse und gleichzeitig gleiche Größen für $T_1$ und $T_2$, z.B. Größe 10 für $T_1$ und $T_2$ und Größe 1 für $T_3$ und $T_4$; dann gilt $k_I \approx g_{npn}=g_{pnp}=10$ und $I_2\approx 10\,I_1$. Der Faktor 10 ist typisch für die praktische Anwendung, weil man hier wie bei den einfachen mehrstufigen Kollektorschaltungen mit einem Ruhestromverhältnis von etwa $B/10$ arbeitet und $B \approx \beta \approx 100$ ein typischer Wert für integrierte Transistoren ist.

Der Spannungsversatz wird als Offsetspannung $U_{off}=U_{e,A}-U_{a,A}$ angegeben; aus Abb. 4.111 folgt:

$$
U_{off} \;=\; U_{BE1}+U_{BE3} \;\approx\; U_T \ln \frac{I_2}{I_{S1}} - U_T \ln \frac{I_1}{I_{S3}}
\;=\; U_T \ln \frac{I_{S3}I_2}{I_{S1}I_1}
$$

Wenn man gleiche Größenverhältnisse und gleiche Größen für $T_1$ und $T_2$ wählt, gilt $k_I=I_2/I_1\approx g_{npn}=g_{pnp}$; daraus folgt:

$$
U_{off} \;\approx\; U_T \ln \frac{I_{S2}}{I_{S1}}
\;=\; U_T \ln \frac{I_{S3}}{I_{S4}}
\;=\; U_T \ln \frac{I_{S,pnp}}{I_{S,npn}}
$$

Dabei sind $I_{S,npn}$ und $I_{S,pnp}$ die Sättigungssperrströme von npn- und pnp-Transistoren gleicher Größe, z.B. der Größe 1. Für die Transistoren in Abb. 4.5 auf Seite 284 gilt $I_{S,npn}=2\,I_{S,pnp}$; daraus folgt $U_{off}=U_T\cdot \ln 0{,}5 \approx -18\,\mathrm{mV}$.

Die Offsetspannung wird Null, wenn die Sättigungssperrströme der Transistoren $T_1$ und $T_2$ gleich sind. Dazu muss man im Fall der Transistoren aus Abb. 4.5 $T_2$ doppelt so groß wie $T_1$ und – um die Gleichheit der Größenverhältnisse zu wahren – $T_3$ doppelt so groß wie $T_4$ wählen. In der Praxis nimmt die Offsetspannung durch diese Maßnahme stark ab; typische Werte liegen im Bereich von einigen Millivolt. Ursache für die verbleibende Offsetspannung ist die durch die unterschiedliche Stromverstärkung der npn- und pnp-Transistoren verursachte unsymmetrische Stromverteilung. Um diese ebenfalls zu eliminieren, kann man

– die Größe von $T_1$ oder $T_2$ geringfügig anpassen;  
– $T_8$ geringfügig größer machen, bis die Kollektorströme von $T_3$ und $T_4$ betragsmäßig gleich sind; dann wird der aufgrund der geringeren Stromverstärkung der pnp-Transistoren relativ große Basisstrom von $T_2$ vom unteren Stromspiegel $T_6,T_8$ zusätzlich bereitgestellt.

Trotz dieser Maßnahmen erreicht man mit dieser Schaltung keine so geringe Offsetspannung wie mit der Schaltung in Abb. 4.110a, weil die Offsetspannung hier vom Verhältnis der Sättigungssperrströme der npn- und pnp-Transistoren abhängt, das in der Praxis herstellungsbedingte Toleranzen aufweist.
<!-- page-import:0445:end -->

<!-- page-import:0446:start -->
4.1 Schaltungen 409

Abb. 4.112. Zweistufige komplementäre Drainschaltung

Die zweistufige komplementäre Kollektorschaltung kann als Reihenschaltung von zwei einstufigen komplementären Kollektorschaltungen aufgefasst werden; deshalb kann man den Ausgangswiderstand durch zweimaliges Anwenden von (4.130) auf Seite 406 berechnen.

#### 4.1.5.3.3 Zweistufige komplementäre Drainschaltung

Man kann den zweistufigen komplementären Impedanzwandler aus Abb. 4.111 auch mit Mosfets aufbauen, siehe Abb. 4.112. In diesem Fall muss man die Größenverhältnisse mit Hilfe einer Schaltungssimulation ermitteln, weil die Mosfets $T_1 \ldots T_4$ mit unterschiedlichen, zunächst unbekannten Bulk-Source-Spannungen arbeiten und deshalb aufgrund des Substrat-Effekts unterschiedliche Schwellenspannungen haben. Für eine erste näherungsweise Auslegung kann man den Substrat-Effekt vernachlässigen und die Größenverhältnisse entsprechend dem Optimum für die zweistufige Drainschaltung wählen, siehe (4.128) auf Seite 402. Den Ruhestrom und die Größe für die Mosfets der zweiten Stufe erhält man aus (4.131) auf Seite 406 durch Vorgabe des gewünschten Ausgangswiderstands.

Da sich die Bulk-Source-Spannungen bei Aussteuerung ändern, ändert sich auch der Ruhestrom der zweiten Stufe. Auch hier muss man mit Hilfe einer Schaltungssimulation sicherstellen, dass die Schaltung im gewünschten Aussteuerbereich die Anforderungen erfüllt. Der Ruhestrom ist üblicherweise am größten, wenn die Eingangsspannung etwa in der Mitte des Versorgungsspannungsbereichs liegt, und nimmt mit Annäherung an eine der Versorgungsspannungen ab. Die Ruheströme der ersten Stufe bleiben dagegen konstant, da sie durch die Stromspiegel vorgegeben werden.
<!-- page-import:0446:end -->

<!-- page-import:0447:start -->
410 4. Verstärker

# 4.1.6 Schaltungen zur Arbeitspunkteinstellung

In integrierten Schaltungen erfolgt die Arbeitspunkteinstellung in den meisten Fällen durch Einprägen der Ruheströme mit Hilfe von Stromquellen oder Stromspiegeln. Die Einstellung eines stabilen Arbeitspunkts erfordert deshalb in erster Linie temperaturstabile und von der Versorgungsspannung unabhängige Referenzstromquellen. Im Gegensatz dazu werden Referenzspannungsquellen nur selten benötigt; so kann man z.B. die für die Arbeitspunkteinstellung von Kaskode-Stufen benötigten Hilfsspannungen im allgemeinen ohne größeren schaltungstechnischen Aufwand und ohne besondere Anforderungen an die Stabilität erzeugen. Im folgenden werden zunächst die wichtigsten Referenz-Stromquellen beschrieben; anschließend werden Schaltungen zur Verteilung der Ströme behandelt.

## 4.1.6.1 UBE-Referenzstromquelle

Bei dieser Referenzstromquelle wird die näherungsweise konstante Basis-Emitter-Spannung $U_{BE}$ eines Bipolartransistors als Referenzgröße verwendet; Abb. 4.113 zeigt die Prinzipschaltung. Der Transistor $T_1$ erhält seinen Basisstrom $I_{B1}$ über den Widerstand $R_2$. Der Kollektorstrom $I_{C1} = B\,I_{B1}$ nimmt solange zu, bis die Spannung am Stromgegenkopplungswiderstand $R_1$ so groß wird, dass $T_2$ leitet und eine weitere Zunahme von $I_{B1}$ und $I_{C1}$ verhindert. Wenn man die Basisströme vernachlässigt und eine näherungsweise konstante Basis-Emitter-Spannung von $U_{BE2} \approx 0{,}7\,\mathrm{V}$ annimmt, erhält man für den Referenzstrom:

$$
I_{ref} = I_{C1} \approx \frac{U_{BE2}}{R_1} \approx \frac{0{,}7\,\mathrm{V}}{R_1}
$$

Er hängt in erster Näherung nicht vom Strom $I_2$ und damit nicht von der Versorgungsspannung $U_b$ ab.

### 4.1.6.1.1 Kennlinie

Abb. 4.114 zeigt die Kennlinie einer $U_{BE}$-Referenzstromquelle mit $R_1$ = $6{,}6\,\mathrm{k}\Omega$ und $R_2$ = $36\,\mathrm{k}\Omega$. Für $U_b > 1{,}4\,\mathrm{V}$ ist der Strom näherungsweise konstant; nur in diesem Bereich arbeitet die Schaltung als Stromquelle.

Bei der Berechnung der Kennlinie muss man die Abhängigkeit der Basis-Emitter-Spannung $U_{BE2}$ vom Strom $I_{C2} \approx I_2$ berücksichtigen:

**Abb. 4.113.**  
Prinzip einer $U_{BE}$-Referenzstromquelle
<!-- page-import:0447:end -->

<!-- page-import:0448:start -->
4.1 Schaltungen 411

Abb. 4.114. Kennlinie einer $U_{BE}$-Referenzstromquelle mit $R_1 = 6{,}6\,\mathrm{k}\Omega$ und $R_2 = 36\,\mathrm{k}\Omega$

$$
I_2 \approx I_{C2} = I_{S2}\left(e^{\frac{U_{BE2}}{U_T}} - 1\right)
\;\Rightarrow\;
U_{BE2} \approx U_T \ln\left(\frac{I_2}{I_{S2}} + 1\right)
$$

Dabei ist $I_{S2}$ der Sättigungssperrstrom von $T_2$ und $U_T$ die Temperaturspannung; bei Raumtemperatur gilt $U_T \approx 26\,\mathrm{mV}$. Für den Referenzstrom folgt:

$$
I_{ref} \approx \frac{U_T}{R_1}\ln\left(\frac{I_2}{I_{S2}} + 1\right)
\qquad
\overset{I_2 \gg I_{S2}}{\approx}
\qquad
\frac{U_T}{R_1}\ln\frac{I_2}{I_{S2}}
\tag{4.133}
$$

Mit

$$
I_2 = \frac{U_b - U_{BE1} - U_{BE2}}{R_2}
\approx
\frac{U_b - 1{,}4\,\mathrm{V}}{R_2}
$$

erhält man:

$$
I_{ref} \approx \frac{U_T}{R_1}\ln\frac{U_b - 1{,}4\,\mathrm{V}}{I_{S2}R_2}
\qquad \text{für } U_b > 1{,}4\,\mathrm{V}
\tag{4.134}
$$

Für $U_b < 1{,}4\,\mathrm{V}$ sperrt $T_2$; dann folgt aus
$U_b = (I_{C1} + I_{B1})R_1 + U_{BE1} + I_{B1}R_2$:

$$
I_{ref} = I_{C1} \approx \frac{U_b - 0{,}7\,\mathrm{V}}{R_1 + \frac{R_1 + R_2}{B}}
\qquad \text{für } U_b < 1{,}4\,\mathrm{V}
\tag{4.135}
$$

Die Näherungen (4.134) und (4.135) sind in Abb. 4.114 eingezeichnet.

#### 4.1.6.1.2 UBE-Referenzstromquelle mit Stromspiegel

Man erreicht eine deutliche Verbesserung des Verhaltens, wenn man eine Stromrückkopplung über einen Stromspiegel einsetzt; Abb. 4.115a zeigt die Schaltung bei Einsatz eines einfachen Stromspiegels. Der Strom $I_2$ wird nicht mehr über einen Widerstand eingestellt, sondern vom Referenzstrom abgeleitet. Im Normalfall sind alle Transistoren gleich
<!-- page-import:0448:end -->

<!-- page-import:0449:start -->
412  4. Verstärker

a Grundschaltung

b praktische Ausführung

**Abb. 4.115.** $U_{BE}$-Referenzstromquelle mit Stromspiegel

groß; der Stromspiegel hat in diesem Fall das Übersetzungsverhältnis $k_I \approx 1$, d.h. es gilt $I_2 \approx I_{ref}$. Durch Einsetzen in (4.133) erhält man die transzendente Gleichung:

$$
I_{ref} \approx \frac{U_T}{R_1}\,\ln\left(\frac{I_{ref}}{I_{S2}} + 1\right)
$$

Die Lösung dieser Gleichung hängt nur noch von $U_T$, $R_1$ und $I_{S2}$ und nicht mehr von der Versorgungsspannung $U_b$ ab. In der Praxis bleibt eine sehr geringe Abhängigkeit aufgrund der Early-Spannung der Transistoren, die hier nicht berücksichtigt wurde $^{27}$. Da nun auch der Strom $I_2$ stabilisiert wird, kann man von einer konstanten Basis-Emitter-Spannung $U_{BE2}$ ausgehen und die Näherung

$$
I_{ref} \approx \frac{U_{BE2}}{R_1}
$$

(4.136)

verwenden.

Die praktische Ausführung der $U_{BE}$-Referenzstromquelle mit Stromspiegel ist in Abb. 4.115b gezeigt. Der Stromspiegel $T_3,T_4$ wird mit $T_5$ zum 3-Transistor-Stromspiegel erweitert und erhält mit $T_6$ einen zusätzlichen Ausgang zur Auskopplung des Referenzstroms. Der zusätzliche Ausgang muss mit einer Kaskode-Stufe $T_7$ versehen werden, damit die Unabhängigkeit von der Versorgungsspannung nicht durch den Early-Effekt von $T_6$ beeinträchtigt wird. Damit man am Ausgang den gewünschten Referenzstrom erhält, muss man $R_1$ etwas kleiner wählen als in (4.136), um die durch die diversen Basisströme verursachten Stromverluste auszugleichen. Abbildung 4.116 zeigt die resultierenden

---

$^{27}$ Eine Berechnung unter Berücksichtigung des Early-Effekts ergibt, dass der Early-Faktor $1 + U/U_A$ nur in das Argument des Logarithmus eingeht und deshalb in seiner Wirkung etwa um den Faktor $20\ldots30$ abgeschwächt wird; damit wird bereits ein Ausgangswiderstand wie bei einer Kaskodeschaltung erreicht.
<!-- page-import:0449:end -->

<!-- page-import:0450:start -->
4.1 Schaltungen 413

**Abb. 4.116.** Kennlinien der $U_{BE}$-Referenzstromquelle mit Stromspiegel bei verschiedenen Temperaturen $(R_1 = 6{,}2\,\mathrm{k}\Omega)$

Kennlinien für $R_1 = 6{,}2\,\mathrm{k}\Omega$ bei Raumtemperatur $(T = 27\,^\circ\mathrm{C})$ und an den Grenzen des Temperaturbereichs für allgemeine Anwendungen $(T = 0 \dots 70\,^\circ\mathrm{C})$.

#### 4.1.6.1.3 Temperaturabhängigkeit

Ein Nachteil der $U_{BE}$-Referenzstromquelle ist die relative starke Temperaturabhängigkeit, die durch die Temperaturabhängigkeit der Basis-Emitter-Spannung verursacht wird. Aus (2.21) auf Seite 56 entnimmt man $dU_{BE}/dT \approx -1{,}7\,\mathrm{mV/K}$; daraus folgt eine Stromänderung von

$$
\frac{dI_{ref}}{dT} = \frac{1}{R_1}\frac{dU_{BE2}}{dT} \approx -\frac{1{,}7\,\mathrm{mV/K}}{R_1}
$$

(4.137)

und ein Temperaturkoeffizient von:

$$
\frac{1}{I_{ref}}\frac{dI_{ref}}{dT} = \frac{1}{U_{BE2}}\frac{dU_{BE2}}{dT} \qquad {}_{U_{BE2}\approx 0{,}7\,\mathrm{V}} \approx -2{,}5 \cdot 10^{-3}\,\mathrm{K}^{-1}
$$

Daraus folgt, dass der Referenzstrom bei einer Temperaturerhöhung um $4\,\mathrm{K}$ um ein Prozent abnimmt.

#### 4.1.6.1.4 Startschaltung

Die $U_{BE}$-Referenzstromquelle hat neben dem gewünschten noch einen weiteren Arbeitspunkt, bei dem alle Transistoren stromlos sind. Ob dieser zweite Arbeitspunkt stabil oder instabil ist, hängt von den Leckströmen der Transistoren ab; diese hängen stark vom verwendeten Herstellungsprozess ab und sind auch in den meisten Simulationsmodellen nicht enthalten. Wenn der Stromspiegel $T_3 \dots T_5$ mit lateralen pnp-Transistoren aufgebaut wird, reicht der aufgrund der großen Fläche relativ große Leckstrom von $T_4$ normalerweise aus, um einen ausreichenden Startstrom für $T_1$ zur Verfügung zu stellen; in diesem Fall existiert kein stabiler stromloser Arbeitspunkt. Andernfalls muss man eine Startschaltung verwenden, die einen Startstrom zur Verfügung stellt, der bei Annäherung an den gewünschten Arbeitspunkt abgeschaltet wird.
<!-- page-import:0450:end -->

<!-- page-import:0451:start -->
414  4. Verstärker

*Abb. 4.117.*  
$U_{BE}$-Referenzstromquelle  
mit Startschaltung

Abbildung 4.117 zeigt eine einfache und häufig verwendete Startschaltung [4.1],[4.2]. Sie besteht aus den Dioden $D_1 \dots D_4$, die als Transistor-Dioden ausgeführt werden, und den Widerständen $R_2$ und $R_3$. Die Dioden $D_1 \dots D_3$ und der Widerstand $R_3$ bilden eine einfache Referenzspannungsquelle mit $U_1 = 3\,U_{BE} \approx 2{,}1\,\mathrm{V}$, die über die Diode $D_4$ und den Widerstand $R_2$ einen Startstrom für $T_1$ bereitstellt. Der Widerstand $R_2$ wird so dimensioniert, dass die Spannung $U_2$ durch den einsetzenden Kollektorstrom von $T_4$ soweit ansteigt, dass $D_4$ im gewünschten Arbeitspunkt sperrt. Wenn man

$$
R_2 \approx \frac{U_{BE}}{I_{ref}} \approx R_1
$$

wählt, erhält man im gewünschten Arbeitspunkt $U_1 = U_2$; damit sperrt $D_4$. Der Widerstand $R_3$ muss so klein gewählt werden, dass der Startstrom auch bei minimaler Versorgungsspannung ausreichend groß ist; andererseits darf er nicht zu klein gewählt werden, damit der Querstrom durch die Dioden $D_1 \dots D_3$ bei maximaler Versorgungsspannung nicht zu groß wird.

*Beispiel:* Die $U_{BE}$-Referenzstromquelle in Abb. 4.117 soll für einen Referenzstrom von $I_{ref} = 100\,\mu\mathrm{A}$ ausgelegt werden. Für die npn-Transistoren aus Abb. 4.5 auf Seite 284 gilt in diesem Fall $U_{BE} \approx U_T \ln I_{ref}/I_S \approx 0{,}66\,\mathrm{V}$; damit folgt aus (4.136) $R_1 \approx 6{,}6\,\mathrm{k}\Omega$. Mit Hilfe einer Schaltungssimulation wird eine Feinabstimmung auf $R_1 = 6{,}2\,\mathrm{k}\Omega$ vorgenommen. Für die Startschaltung erhält man $R_2 = R_1 = 6{,}2\,\mathrm{k}\Omega$. Der Widerstand $R_3$ kann in einem weiten Bereich liegen; er wird hier so gewählt, dass der Strom in der Startschaltung bei einer maximalen Versorgungsspannung von $U_b = 12\,\mathrm{V}$ noch kleiner als der Referenzstrom ist: $R_3 \approx (U_b - 3U_{BE})/I_{ref} \approx 100\,\mathrm{k}\Omega$.

## 4.1.6.2 PTAT-Referenzstromquelle

Wenn man in Abb. 4.115a die $U_{BE}$-Referenzstromquelle $T_1,T_2$ gegen einen Widlar-Stromspiegel austauscht, erhält man die $PTAT$-Referenzstromquelle in Abb. 4.118a. Die Bezeichnung $PTAT$ bedeutet proportional to absolute temperature und weist darauf hin, dass der Strom proportional zur absoluten Temperatur in Kelvin ist. Daraus folgt, dass die $PTAT$-Referenzstromquelle im Gegensatz zur $U_{BE}$-Referenzstromquelle einen positiven Temperaturkoeffizienten aufweist.
<!-- page-import:0451:end -->

<!-- page-import:0452:start -->
4.1 Schaltungen 415

a Prinzip

b mit Startschaltung

**Abb. 4.118.** PTAT-Referenzstromquelle

#### 4.1.6.2.1 PTAT-Strom

Aus Abb. 4.118 entnimmt man die Maschengleichung:

$$
U_{BE2} = U_{BE1} + (I_{C1} + I_{B1})\,R_1
\qquad
\overset{I_{ref}=I_{C1}\gg I_{B1}}{\approx}
\qquad
U_{BE1} + I_{ref}\,R_1
$$

Daraus folgt mit $U_{BE} = U_T \ln I_C/I_S$, $I_{C1} = I_{ref}$ und $I_{C2} \approx I_2$:

$$
U_T \ln \frac{I_2}{I_{S2}} \approx U_T \ln \frac{I_{ref}}{I_{S1}} + I_{ref}\,R_1
$$

Der Stromspiegel $T_3,T_4$ hat normalerweise das Übersetzungsverhältnis $k_I \approx 1$; daraus folgt $I_2 \approx I_{ref}$. Durch Einsetzen in die letzte Gleichung und Auflösen nach $I_{ref}$ erhält man den Referenzstrom:

$$
I_{ref} \approx \frac{U_T}{R_1}\,\ln \frac{I_{S1}}{I_{S2}}
\qquad \text{für } I_{S1} > I_{S2} \text{ und } k_I \approx 1
\qquad\qquad (4.138)
$$

Da $I_{ref}$ positiv sein muss, ist in (4.138) die Einschränkung $I_{S1} > I_{S2}$ erforderlich; sie besagt, dass $T_1$ größer als $T_2$ sein muss. Im allgemeinen gibt man $I_{ref}$ und $I_{S1}/I_{S2} \approx 4\ldots 10$ vor und berechnet damit $R_1$.

Auch die PTAT-Referenzstromquelle besitzt einen zweiten, stromlosen Arbeitspunkt, der durch eine Startschaltung eliminiert werden muss. Abbildung 4.118b zeigt eine mögliche Schaltung, die bereits bei der $U_{BE}$-Referenzstromquelle angewendet wurde und dort näher beschrieben ist. Der Widerstand $R_2$ muss hier aber größer gewählt werden als bei der $U_{BE}$-Referenzstromquelle, damit die Spannung $U_2$ im gewünschten Arbeitspunkt ausreichend groß wird; als Richtwert gilt hier $I_{ref}\,R_2 \approx 2\,U_{BE} \approx 1{,}4\,\mathrm{V}$.

Damit die PTAT-Referenzstromquelle einen von der Versorgungsspannung unabhängigen Strom liefert, muss man noch Kaskode-Stufen ergänzen, die den Early-Effekt der Transistoren $T_1$ und $T_4$ eliminieren, und einen Ausgang bereitstellen. Abbildung 4.119
<!-- page-import:0452:end -->

<!-- page-import:0453:start -->
416 4. Verstärker

**Abb. 4.119.**  
Praktische Ausführung einer  
PTAT-Referenzstromquelle

zeigt eine praktische Schaltung, die im Vergleich zu Abb. 4.118b folgende Ergänzungen aufweist:

– der Stromspiegel $T_3, T_4$ wird mit $T_5$ zum 3-Transistor-Stromspiegel erweitert und erhält am Ausgang die Kaskode-Stufe $T_6$;

– der Transistor $T_1$ erhält die Kaskode-Stufe $T_7$, die als Basis-Vorspannung die Spannung $U_2$ der Startschaltung verwendet;

**Abb. 4.120.** Kennlinie der PTAT-Referenzstromquelle aus Abb. 4.119
<!-- page-import:0453:end -->

<!-- page-import:0454:start -->
4.1 Schaltungen 417

*– mit dem Transistor $T_8$ und der zugehörigen Kaskode-Stufe $T_9$ wird der Referenzstrom ausgekoppelt.*

**Abb. 4.121.** Geregelte PTAT-Referenzstromquelle

Abbildung 4.120 zeigt die resultierenden Kennlinien für verschiedene Temperaturen.

#### 4.1.6.2.2 Geregelte PTAT-Referenzstromquelle

Abbildung 4.121 zeigt das Prinzip einer geregelten PTAT-Referenzstromquelle; dabei wird der PTAT-Strom nach (4.138) nicht über einen Stromspiegel, sondern über zwei Regelverstärker A1 und A2 eingestellt.

Wenn beide Regelverstärker hochohmige Eingänge und die Verstärkung $A$ besitzen, gilt:

$$
U_1 = A\,(U_0 - U_4)
$$

$$
U_2 = U_3 - I_{C2}R_2
$$

$$
U_3 = A\,(U_0 - U_2)
$$

$$
U_4 = U_3 - I_{C1}R_2
$$

Bei ausreichend hoher Verstärkung $A$ erhält man – Stabilität vorausgesetzt – einen Arbeitspunkt mit $U_2 = U_4 = U_0$ und $I_{C1} = I_{C2} = I_{ref}$; letzteres ist wegen der gemeinsamen Basisspannung $U_1$ nur für den PTAT-Strom nach (4.138) erfüllt. Die Stabilität wird mit Hilfe einer Kleinsignalbetrachtung geprüft; dabei erhält man

$$
u_1 = -Au_4
$$

$$
u_2 = u_3 - i_{C2}R_2 = u_3 - S_2R_2u_1
$$

$$
u_3 = -Au_2
$$

$$
u_4 = u_3 - i_{C1}R_2 = u_3 - S_1R_2u_1
$$

mit den Steilheiten:

$$
S_1 = \frac{I_{ref}}{U_T + I_{ref}R_1}, \quad S_2 = \frac{I_{ref}}{U_T} > S_1
$$

Abbildung 4.122 zeigt das regelungstechnische Ersatzschaltbild für den statischen Fall; dabei kann man den Kreis mit dem Regelverstärker A2 wegen
<!-- page-import:0454:end -->

<!-- page-import:0455:start -->
418 4. Verstärker

**Abb. 4.122.** Regelungstechnisches Ersatzschaltbild der geregelten PTAT-Referenzstromquelle

$$
\frac{u_3}{u_x}=\frac{A}{1+A}\overset{A\gg 1}{\approx}1
$$

durch eine direkte Verbindung ersetzen. Der Regelverstärker A1 wird demnach über den Transistor $T_1$ mit $S_1 R_2$ mit- und über den Transistor $T_2$ mit $S_2 R_2$ gegengekoppelt; wegen $S_2 > S_1$ ist der Kreis statisch stabil. Die dynamische Stabilität muss durch eine Frequenzgangkompensation der beiden Regelverstärker sichergestellt werden; wir gehen darauf im folgenden noch näher ein.

Abbildung 4.123 zeigt eine praktische Ausführung der geregelten PTAT-Referenzstromquelle. Als Regelverstärker wird jeweils eine Emitterschaltung $(T_3, T_5)$ mit nachfolgender Kollektorschaltung $(T_4, T_6)$ eingesetzt; der Regelverstärker A1 enthält zusätzlich einen nichtlinearen Pegelumsetzer $(R_6, T_7)$, der den Kreis großsignalmäßig linearisiert. Die Spannungen $U_0$ entsprechen den Basis-Emitter-Spannungen der Transistoren $T_3$ und $T_5$ im Arbeitspunkt: $U_2 \approx U_4 \approx U_0 \approx 0{,}7\ \mathrm{V}$. Daraus folgt auch, dass die Transistoren $T_1$ und $T_2$ mit konstanter Kollektorspannung betrieben werden; dadurch wirkt sich der Early-Effekt nicht auf den Referenzstrom aus. Die Auskopplung erfolgt durch Anschließen weiterer Transistoren an die Spannung $U_1$; dies ist in Abb. 4.123 am linken Rand angedeutet. Auch hier muss man die Auskoppel-Transistoren gegebenenfalls mit einer Kaskode-Stufe ver-

**Abb. 4.123.** Praktische Ausführung einer geregelten PTAT-Referenzstromquelle
<!-- page-import:0455:end -->

<!-- page-import:0456:start -->
419

# 4.1 Schaltungen

**Abb. 4.124.** Kennlinien der geregelten PTAT-Referenzstromquelle aus Abb. 4.123

sehen, um deren Early-Effekt zu eliminieren. Abbildung 4.124 zeigt die Kennlinien für verschiedene Temperaturen.

Beide Regelverstärker benötigen eine Frequenzgangkompensation, damit die Schaltung dynamisch stabil ist; dazu dienen die Kapazitäten $C_1$ und $C_2$. Die Dimensionierung erfolgt mit Hilfe einer Schaltungssimulation. Man verwendet dazu eine Zeitbereichsanalyse, bei der mit einer Stromquelle ein kurzer Strom-Impuls in den Knoten $U_1$ eingespeist wird; man kann damit die Impulsantwort an den verschiedenen Knoten begutachten und die Kapazitäten entsprechend wählen. Ohne Kompensation ist die Schaltung im allgemeinen instabil; in der Schaltungssimulation erhält man in diesem Fall eine Dauerschwingung.

#### 4.1.6.2.3 Temperaturabhängigkeit

Da der Strom der PTAT-Referenzstromquelle proportional zur Temperaturspannung $U_T$ ist, geht deren Temperaturabhängigkeit ein:

$$
U_T=\frac{kT}{q}
\qquad\Rightarrow\qquad
\frac{dU_T}{dT}=\frac{k}{q}\approx 86\,\mu\text{V}/\text{K}
$$

Daraus folgt eine Stromänderung von

$$
\frac{dI_{ref}}{dT}
=
\frac{1}{R_1}\ln\frac{I_{S1}}{I_{S2}}\frac{dU_T}{dT}
\approx
\frac{86\,\mu\text{V}/\text{K}}{R_1}\ln\frac{I_{S1}}{I_{S2}}
\qquad (4.139)
$$

und ein Temperaturkoeffizient von:

$$
\frac{1}{I_{ref}}\frac{dI_{ref}}{dT}
=
\frac{1}{U_T}\frac{dU_T}{dT}
=
\frac{1}{T}\Big|_{T=300\,\text{K}}
=
3{,}3\cdot 10^{-3}\,\text{K}^{-1}
$$

Der Referenzstrom nimmt bei einer Temperaturerhöhung um $3\ \text{K}$ um ein Prozent zu. Damit ist die Temperaturabhängigkeit der PTAT-Referenzstromquelle noch größer als die der $U_{BE}$-Referenzstromquelle; sie hat aber umgekehrtes Vorzeichen.
<!-- page-import:0456:end -->

<!-- page-import:0457:start -->
420 4. Verstärker

Abb. 4.125. Temperaturunabhängige Referenzstromquelle

## 4.1.6.2.4 Einsatz in bipolaren Verstärkern

Trotz ihrer starken Temperaturabhängigkeit wird die PTAT-Referenzstromquelle als Referenzquelle für die Ruheströme in bipolaren Verstärkern eingesetzt. In diesem Fall ist die Temperaturabhängigkeit sogar von Vorteil, weil die Verstärkung bei bipolaren Verstärkerstufen ohne Stromgegenkopplung proportional zur Steilheit $S = I_{C,A}/U_T$ der Transistoren ist; mit $I_{C,A} \sim I_{ref} \sim U_T$ bleibt die Steilheit und damit die Verstärkung konstant.

## 4.1.6.3 Temperaturunabhängige Referenzstromquelle

Wenn man den Ströme einer $U_{BE}$- und einer PTAT-Referenzstromquelle addiert und so wählt, dass

$$
\left.\frac{d\,I_{ref}}{dT}\right|_{U_{BE}\text{-Ref.}} + \left.\frac{d\,I_{ref}}{dT}\right|_{\text{PTAT-Ref.}} = 0
$$

gilt, erhält man die in Abb. 4.125 gezeigte temperaturunabhängige Referenzstromquelle. Der linke Teil der Schaltung entspricht der PTAT-Referenzstromquelle in Abb. 4.119. Dabei wird die Transistor-Diode $T_{10}$ ergänzt, damit die Basis-Anschlüsse der pnp-Kaskode-Transistoren am Emitter von $T_5$ angeschlossen werden können; dadurch wird der durch die Basisströme verursachte Fehler geringer. An den ursprünglichen Ausgang $T_8,T_9$ wird die $U_{BE}$-Referenzstromquelle $T_{13},T_{14}$ angeschlossen; sie wird in diesem Fall bereits mit einem stabilisierten Strom versorgt und benötigt deshalb keine Rückkopplung über einen Stromspiegel. Die PTAT-Referenzstromquelle erhält mit $T_{11},T_{12}$ einen weiteren Ausgang, an dem über den Stromspiegel $T_{15},T_{16}$ der Strom der $U_{BE}$-Referenzstromquelle addiert wird. Mit (4.136)–(4.139) folgt für das Verhältnis der Ströme
<!-- page-import:0457:end -->

<!-- page-import:0458:start -->
421

$$\frac{I_{ref,UBE}}{U_{BE}}\,\frac{dU_{BE}}{dT}+\frac{I_{ref,PTAT}}{U_T}\,\frac{dU_T}{dT}=0
\Rightarrow
\frac{I_{ref,UBE}}{I_{ref,PTAT}}=-\frac{U_{BE}}{U_T}\,\frac{\frac{dU_T}{dT}}{\frac{dU_{BE}}{dT}}\approx 1{,}3$$

und für den Referenzstrom:

$$I_{ref}=I_{ref,UBE}+I_{ref,PTAT}\approx 2{,}3\cdot I_{ref,PTAT}\approx 1{,}77\cdot I_{ref,UBE}$$

Für einen Referenzstrom $I_{ref}=100\,\mu\mathrm{A}$ erhält man $I_{ref,PTAT}\approx I_{ref}/2{,}3\approx 43\,\mu\mathrm{A}$ und $I_{ref,UBE}\approx I_{ref}/1{,}77\approx 57\,\mu\mathrm{A}$.

## 4.1.6.4 Referenzstromquellen in MOS-Schaltungen

Die $U_{BE}$-Referenzstromquelle aus Abb. 4.113 kann auch mit Mosfets realisiert werden; sie wird dann $U_{GS}$-Referenzstromquelle genannt [4.2]. Bei Betrieb im quadratischen Bereich der Kennlinie ist die Stabilisierung des Stroms vergleichsweise schlecht. Deutlich besseres Verhalten erreicht man, wenn man die Mosfets so groß macht, dass sie im Unterschwellenbereich arbeiten; dort haben sie eine exponentielle Kennlinie und verhalten sich näherungsweise wie Bipolartransistoren. Aus (3.25) auf Seite 210 folgt, dass für einen Betrieb im Unterschwellenbereich

$$|U_{GS}-U_{th}|<2n_U\,U_T \qquad \overset{n_U\approx 1{,}5\ldots2{,}5}{\approx}\qquad 3\ldots5\cdot U_T$$

gelten muss; dadurch werden die Mosfets selbst bei kleinen Strömen sehr groß. Nachteilig ist die Abhängigkeit von der Schwellenspannung $U_{th}$, die herstellungsbedingt schwankt.

Die PTAT-Referenzstromquelle kann ebenfalls mit Mosfets im Unterschwellenbereich realisiert werden; dabei tritt bei der Berechnung des Stroms die Spannung $n_U\,U_T$ an die Stelle von $U_T$, weil bei Mosfets im Unterschwellenbereich

$$I_D\sim e^{\frac{u_{GS}-U_{th}}{n_U\,U_T}}\qquad \text{mit } n_U\approx 1{,}5\ldots2{,}5$$

gilt. Die Verschiebung um die Schwellenspannung $U_{th}$ wirkt sich dagegen nicht auf den Strom aus, sondern führt nur zu einer Verschiebung der Arbeitspunktspannungen.

Referenzstromquellen mit Mosfets haben im allgemeinen erheblich schlechtere Eigenschaften als bipolare Referenzstromquellen. Deshalb werden integrierte Schaltungen mit sehr hohen Anforderungen bezüglich Genauigkeit und Temperaturverhalten meist in Bipolar-Technik hergestellt.

Bei geringen Anforderungen an die Genauigkeit und die Temperaturabhängigkeit kann man eine der in Abb. 4.126 gezeigten Abschnür-Stromquellen einsetzen, die alle den konstanten Drainstrom eines selbstleitenden Fets im Abschnürbereich als Referenzstrom verwenden; dabei kann man mit $U_{GS}=0$ oder – bei Stromgegenkopplung mit einem Widerstand – mit $U_{GS}<0$ arbeiten.

Die Abschnür-Stromquellen mit Sperrschicht-Fets in Abb. 4.126b werden in integrierten Schaltungen durch einen Abschnür-Widerstand (pinch resistor) realisiert. Dabei handelt es sich um einen hochohmigen integrierten Widerstand, der mit zunehmender Spannung abgeschnürt wird. Da der prinzipielle Aufbau dem eines Sperrschicht-Fets entspricht, ist das Verhalten praktisch gleich. Nachteilig sind die hohen fertigungsbedingten Toleranzen, die typisch in der Größenordnung von $\pm 30\%$ liegen [4.1].
<!-- page-import:0458:end -->

<!-- page-import:0459:start -->
422 4. Verstärker

a mit Mosfets

b mit Sperrschicht-Fets

**Abb. 4.126.** Abschnür-Stromquellen

## 4.1.6.5 Arbeitspunkteinstellung in integrierten Verstärkerschaltungen

Zur Arbeitspunkteinstellung in integrierten Schaltungen werden hauptsächlich Stromquellen zur Ruhestromeinstellung und Hilfsspannungen für Kaskode-Stufen benötigt; dabei werden die Stromquellen als Stromquellenbank mit einer gemeinsamen Referenzstromquelle ausgeführt.

### 4.1.6.5.1 Bipolare Schaltungen

Abbildung 4.127 zeigt eine typische Schaltung zur Arbeitspunkteinstellung in bipolaren Verstärkerschaltungen. Sie setzt sich aus einer PTAT-Referenzstromquelle $(T_1 \dots T_8)$ mit Startschaltung $(D_1 \dots D_5)$ sowie einer npn- $(T_9)$ und einer pnp-Kollektorschaltung $(T_{11})$ mit den zugehörigen Stromquellen $(T_{10}, T_{12})$ zur Bereitstellung der Hilfsspannungen $U_1$ und $U_2$ für Kaskode-Stufen zusammen; die Transistor-Diode $D_6$ demonstriert eine einfache Möglichkeit zur Erzeugung weiterer Hilfsspannungen. Da an der PTAT-Referenzstromquelle zusätzlich zur Auskopplung am Stromspiegel $T_3 \dots T_6$ auch eine Auskopplung am Widlar-Stromspiegel $T_1, T_2$ erfolgt, wird dieser im Vergleich zu Abb. 4.119 mit $T_8$ zum 3-Transistor-Stromspiegel ausgebaut, um den Fehler durch die Basisströme klein zu halten; dadurch wird auch in der Startschaltung eine weitere Transistor-Diode benötigt, um die Startspannung entsprechend anzuheben. Der Widerstand $R_3$ wird als p-Kanal-Abschnür-Widerstand ausgeführt. Das ist keine Besonderheit, vielmehr kann man Widerstände im Bereich von $100\,\mathrm{k}\Omega$ meist ohnehin nur in dieser Form herstellen. Die Eigenschaft eines Abschnür-Widerstands, bei größeren Spannungen als Konstantstromquelle zu arbeiten – siehe Abschnitt über Abschnür-Stromquellen –, ist hier vorteilhaft, weil dadurch der Strom in der Startschaltung begrenzt wird; auch die herstellungsbedingten Toleranzen stören hier nicht, da der Strom in der Startschaltung um fast eine Größenordnung variieren kann, ohne dass die Funktion beeinträchtigt wird.

An die Auskopplungen und die Hilfsspannungen kann man einfache Stromquellen oder Stromquellen mit Kaskode mit beliebigem Übersetzungsverhältnis anschließen; in Abb. 4.127 ist als Beispiel je eine Stromquelle mit Kaskode dargestellt. Weitere Hilfsspannungen, wie z.B. die Spannung $U_3$, können mit Transistor-Dioden einfach erzeugt werden; wenn größere Ströme benötigt werden, muss man Kollektorschaltungen wie bei $U_1$ und $U_2$ einsetzen.
<!-- page-import:0459:end -->

<!-- page-import:0460:start -->
4.1 Schaltungen 423

Abb. 4.127. Typische Schaltung mit PTAT-Referenzstromquelle zur Arbeitspunkteinstellung in bipolaren Verstärkerschaltungen (Zahlenbeispiel mit $I_{ref}=100\,\mu\text{A}$ für $U_b>3{,}5\,\text{V}$ unter Verwendung der Bipolartransistoren aus Abb. 4.5 auf Seite 284)

Abb. 4.128. Typische Schaltung mit $U_{GS}$-Referenzstromquelle zur Arbeitspunkteinstellung in MOS-Verstärkerschaltungen (Zahlenbeispiel mit $I_{ref}=10\,\mu\text{A}$ für $U_b>7\,\text{V}$ unter Verwendung der Mosfets aus Abb. 4.6 auf Seite 285)
<!-- page-import:0460:end -->

<!-- page-import:0461:start -->
424  4. Verstärker

## 4.1.6.5.2 MOS-Schaltungen

Abbildung 4.128 zeigt eine typische Schaltung zur Arbeitspunkteinstellung in MOS-Verstärkerschaltungen. Sie setzt sich aus einer $U_{GS}$-Referenzstromquelle $(T_1, T_2)$ mit Stromspiegel $(T_3, T_4)$ und Startschaltung $(T_5, T_6)$ sowie einer Auskopplung mit Hilfsspannungserzeugung $(T_8 \ldots T_{12})$ zusammen. Die Startschaltung liefert über $T_5$ einen Startstrom, der nach Anlaufen der Schaltung über $T_6$ abgeschaltet wird. Der selbstleitende Mosfet $T_7$ dient als Ruhestromquelle (Abschnür-Stromquelle) für $T_6$; sein Strom muss kleiner als der Referenzstrom sein, damit die Startschaltung über $T_6$ abgeschaltet werden kann. Die Größe von $T_7$ hängt von der Schwellenspannung der selbstleitenden Mosfets im jeweiligen Herstellungsprozess ab.

Die Schaltung ist in dieser Form nur sinnvoll, wenn die herstellungsbedingten Toleranzen des Widerstands $R_1$ und der Schwellenspannung von $T_2$ geringer sind als die Toleranz der Schwellenspannung von $T_7$; andernfalls wäre es besser, den Strom der Abschnür-Stromquelle $T_7$ als Referenzstrom zu verwenden.

## 4.2 Eigenschaften und Kenngrößen

Die Eigenschaften eines Verstärkers werden in Form von Kenngrößen angegeben. Man geht dabei von den Kennlinien des Verstärkers aus. Durch Linearisierung im Arbeitspunkt erhält man die Kleinsignal-Kenngrößen (z.B. die Verstärkung) und durch Reihenentwicklung die nichtlinearen Kenngrößen (z.B. den Klirrfaktor). Da eine geschlossene Darstellung der Kennlinien oft nicht möglich ist, muss man sich ggf. auf Messungen oder Schaltungssimulationen stützen.

### 4.2.1 Kennlinien

Ein Verstärker mit einem Eingang und einem Ausgang wird im allgemeinen durch zwei Kennlinienfelder beschrieben; mit den Größen aus Abb. 4.129 gilt:

$$
I_e = f_E(U_e, U_a)
$$

$$
I_a = f_A(U_e, U_a)
$$

Die Rückwirkung vom Ausgang auf den Eingang ist bei den meisten Verstärkern im interessierenden Bereich vernachlässigbar klein, d.h. die Eingangskennlinie hängt praktisch nicht von der Ausgangsspannung ab. Damit erhält man:

$$
I_e = f_E(U_e)
$$
(4.140)

$$
I_a = f_A(U_e, U_a)
$$
(4.141)

Daraus erhält man bei offenem Ausgang die Leerlauf-Übertragungskennlinie:

**Abb. 4.129.** Spannungen und Ströme bei einem Verstärker mit einem Eingang und einem Ausgang
<!-- page-import:0461:end -->

<!-- page-import:0545:start -->
508  4. Verstärker

Zwei Betriebsfälle treten in der Praxis besonders häufig auf:

- Symmetrischer Betrieb mit $R_{g1} = R_{g2} = R_g$; dann gilt:

$$
F = 1 + \frac{|u_{r,0}|^2 + 2 R_g^2 |i_{r,01}|^2}{8 k T R_g}
= 1 + \frac{|u_{r,T1}|^2 + R_g^2 |i_{r,T1}|^2}{4 k T R_g}
$$

Dieser Fall entspricht der Emitterschaltung. Zwar sind die Rauschdichten des Differenzverstärkers aufgrund des Einsatzes von zwei Transistoren um den Faktor 2 größer, dies wird jedoch durch eine ebenfalls um den Faktor 2 größere Rauschdichte der beiden Signalquellen kompensiert.

- Unsymmetrischer Betrieb mit $R_{g1} = R_g$ und $R_{g2} = 0$; dann gilt:

$$
F = 1 + \frac{|u_{r,0}|^2 + R_g^2 |i_{r,01}|^2}{4 k T R_g}
= 1 + \frac{2\,|u_{r,T1}|^2 + R_g^2 |i_{r,T1}|^2}{4 k T R_g}
$$

In diesem Fall ist die Rauschspannungsdichte um den Faktor 2 größer als bei der Emitterschaltung; dadurch nehmen der optimale Quellenwiderstand und die Rauschzahl entsprechend zu.

Bei einem direkten Vergleich des Differenzverstärkers mit der Emitterschaltung muss man dagegen eine Signalquelle mit dem Quellenwiderstand $R_g$ zugrunde legen, die in gleicher Weise zur Ansteuerung der Emitterschaltung wie zur symmetrischen und unsymmetrischen Ansteuerung des Differenzverstärkers verwendet wird. Der unsymmetrische Betrieb mit der um den Faktor 2 größeren Rauschspannungsdichte ist direkt vergleichbar. Dagegen muss der Vergleich beim symmetrischen Betrieb mit $R_{g1} = R_{g2} = R_g/2$ erfolgen; dann sind beide Rauschdichten um den Faktor 2 größer. Demzufolge ist für eine vorgegebene Quelle die Emitterschaltung am günstigsten, gefolgt vom unsymmetrisch betriebenen Differenzverstärker und vom ungünstigsten Fall, dem symmetrisch betriebenen Differenzverstärker.

Bei unsymmetrischem Betrieb wird der nicht benutzte Eingang häufig nicht direkt, sondern über einen Widerstand entsprechend dem Quellenwiderstand $R_g$ mit der Kleinsignalmasse verbunden; dadurch wird der durch die Basisströme der Transistoren verursachte Spannungsabfall kompensiert. In rauscharmen Schaltungen muss man diesen Widerstand durch eine parallel liegende Kapazität kleinsignalmäßig kurzschließen, damit die Rauschstromquelle an diesem Eingang unwirksam wird. In der Praxis führt dies gelegentlich zu unerwünschten Schwingungen; dann muss man einen kleinen Widerstand im Bereich $10 \dots 100\,\Omega$ in Reihe schalten, der nicht durch die Kapazität überbrückt wird.

Die Rauschstromquelle $i_{r,R0}$ oder die Rauschstromquelle einer anstelle von $R_0$ eingesetzten Stromquelle wirkt sich an beiden Ausgängen des Differenzverstärkers gleich aus, da sich ihr Strom entsprechend dem Ruhestrom zu gleichen Teilen auf die Transistoren aufteilt; sie hat demnach keinen Einfluss, wenn das Ausgangssignal differentiell weiterverarbeitet wird. Bei Verwendung nur eines Ausgangs wird der halbe Rauschstrom und damit ein Viertel der Rauschstromdichte wirksam; dagegen wird bei einem unsymmetrischen Ausgang mit Stromspiegel entsprechend Abb. 4.66 der ganze Rauschstrom wirksam. In der Praxis kann man den Einfluss von $i_{r,R0}$ vernachlässigen, da $R_0$ im allgemeinen viel größer ist als der Steilheitswiderstand der Transistoren: $S R_0 \gg 1$. Dasselbe gilt für den Einsatz einer Stromquelle mit Gegenkopplung, wenn der Gegenkopplungswiderstand derselben Bedingung genügt.

Für einen Differenzverstärker mit Mosfets gelten alle Zusammenhänge in gleicher Weise.
<!-- page-import:0545:end -->

<!-- page-import:1359:start -->
1322 24. Hochfrequenz-Verstärker

Spannungsverstärker

Stromverstärker  
(Impedanzwandler)

$R_g \approx 50\ldots500\,\Omega$

$u_g$

$u_e$

$r_{e1} \approx 0{,}5\ldots5\,\mathrm{k}\Omega$

$r_{a1} \approx 5\ldots50\,\mathrm{k}\Omega$

$i_1$

$u_1 = A_u u_e$

$r_{e2} \approx 5\ldots50\,\mathrm{k}\Omega$

$i_a = A_i i_1$

$r_{a2} \approx 50\ldots500\,\Omega$

$u_a$

$R_L \approx 0{,}5\ldots5\,\mathrm{k}\Omega$

$a$ Prinzip und Ausführung eines integrierten Verstärkers

$R_g$

$u_g$

$u_e$

$2I_0$

$i_1$

$u_1 = A_u u_e$

$i_1$

$I_E$

$I_E$

$i_a = A_i i_1$

$i_a = A_i i_1$

$u_a$

$R_L$

Leistungsverstärker

$R_g = Z_W$

$u_g$

$u_e$

$Z_W$

$r_e = Z_W$

$r_a = Z_W$

$Z_W$

$u_a$

$R_L = Z_W$

$R_g = Z_W$

$u_g$

$u_e$

$Z_W$

$U_b$

$I_{B,A}$

$U_b$

$I_{C,A}$

$Z_W$

$u_a$

$R_L = Z_W$

$b$ Prinzip und Ausführung eines angepassten Verstärkers mit einem Einzeltransistor

**Abb. 24.1.** Prinzipieller Aufbau von Hochfrequenz-Verstärkern

als Stromverstärker bzw. Impedanzwandler, siehe Abb. 24.1a. Der Differenzverstärker wird häufig als Kaskode-Differenzverstärker ausgeführt, um die Rückwirkung und die Eingangskapazität zu verringern (kein Miller-Effekt). Diese Schaltungen werden im Abschnitt 4.1 beschrieben. Da die typische Transitfrequenz der Hochfrequenz-Transistoren ($f_T \approx 50\ldots100\,\mathrm{GHz}$) um den Faktor 100 höher ist als die der Niederfrequenz-Transisto-
<!-- page-import:1359:end -->
