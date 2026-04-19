# Digital-to-Analog Conversion

<!-- page-import:0887:start -->
850  12. Aktive Filter

Integrationszeitkonstante: $\tau = RC(Z_{\max}+1)/Z$

Tiefpass:

$$
\frac{U_{TP}}{U_e}=\frac{-R_3/R_2}{1+\frac{R_3}{R_4}\tau\omega_g s_n+\frac{R_3}{R_1}\tau^2\omega_g^2 s_n^2}
$$

Bandpass:

$$
\frac{U_{BP}}{U_e}=\frac{-\tau\omega_r s_n\,R_3/R_2}{1+\frac{R_3}{R_4}\tau\omega_r s_n+\frac{R_3}{R_1}\tau^2\omega_g^2 s_n^2}
$$

Hochpass:

$$
\frac{U_{HP}}{U_e}=\frac{-s_n^2\,R_1/R_2}{\frac{R_1}{R_3\tau^2\omega_g^2}+\frac{R_1}{R_4\tau\omega_g}s_n+s_n^2}
$$

**Abb. 12.73.** Universalfilter mit digital einstellbarer Frequenz

Besonders günstig für den Einsatz in Filtern sind solche Typen, bei denen die Referenzspannung beliebige positive und negative Werte annehmen darf. Aus diesem Grund sind die multiplizierenden DA-Umsetzer mit CMOS-Schaltern, wie sie in Kapitel 17.2.2 beschrieben werden, hier besonders geeignet. Da sie jedoch beträchtliche Widerstandstoleranzen besitzen, kann man sie nicht einfach in Abb. 12.71 vor die Integratoren schalten. Der Einfluss des absoluten Widerstandswertes lässt sich jedoch dadurch eliminieren, dass man Operationsverstärker hinzufügt, die über den im DA-Umsetzer enthaltenen Widerstand gegengekoppelt werden. Die resultierende Schaltung zur digitalen Frequenzeinstellung ist in Abb. 12.73 dargestellt. Beiden Integratoren wurde ein DA-Umsetzer vorgeschaltet. Daraus ergibt sich hier eine resultierende Integrationszeitkonstante:

$$
\tau = RC(Z_{\max}+1)/Z
$$

(12.74)

Wenn die Zahl $Z$ gleich dem Maximalwert $Z_{\max}$ ist, also alle Bits gleich Eins sind, erhält man demnach praktisch dieselbe Resonanzfrequenz wie bei der Schaltung in Abb. 12.71.

Im Vergleich zu Abb. 12.71 wurde die Anordnung der Gegenkopplungsschleifen etwas modifiziert, weil die DA-Umsetzer zusammen mit den zugehörigen Operationsverstärkern und den nachfolgenden Integratoren nichtinvertierende Integratoren bilden. Die resultierenden Übertragungsfunktionen sind aber ganz ähnlich. Die Dimensionierung wird besonders einfach, wenn man auch hier $\tau\omega_g = 1$ wählt. Setzt man die Integrationszeitkonstante aus (12.74) ein, erkennt man, dass die Grenz- bzw. Resonanzfrequenz proportional zur Zahl $Z$ wird:
<!-- page-import:0887:end -->

<!-- page-import:1052:start -->
17.2 Digital-Analog Umsetzung 1015

Parallelverfahren  
$2^N$ Schalter

Wägeverfahren  
N Schalter

Zählverfahren  
1 Schalter

**Abb. 17.12.** Verfahren zur Digital-Analog-Umsetzung

Das Zählverfahren erlangt zunehmende Bedeutung, weil hier der Pulsbreitenmodulator eine einfach zu integrierende digitale Schaltung darstellt. Wenn man ihn mit einer Frequenz betreibt, die weit über der Abtastfrequenz liegt (oversampling), vereinfacht sich dadurch das erforderliche Tiefpassfilter.

Die größte Bedeutung haben DA-Umsetzer nach dem Wägeverfahren. Ihre vielfältigen Realisierungsmöglichkeiten wollen wir im folgenden beschreiben.

## 17.2.2 Wägeverfahren mit geschalteten Spannungen

Eine einfache Schaltung zur Umwandlung einer Dualzahl in eine dazu proportionale Spannung ist in Abb. 17.13 dargestellt. Die Widerstände sind so gewählt, dass durch sie bei geschlossenem Schalter ein Strom fließt, der dem betreffenden Stellenwert entspricht. Die Schalter müssen immer dann geschlossen werden, wenn in der betreffenden Stelle eine logische Eins auftritt. Wegen der Gegenkopplung des Operationsverstärkers über den Widerstand $R_{FB}$ bleibt der Summationspunkt auf Nullpotential. Die Teilströme werden also ohne gegenseitige Beeinflussung aufsummiert.

$$
U_a = -U_{ref}\frac{Z}{16}, \qquad I_k = \frac{U_{ref}}{R}\frac{Z}{16}
$$

**Abb. 17.13.** Prinzip eines DA-Umsetzers nach dem Wägeverfahren
<!-- page-import:1052:end -->

<!-- page-import:1053:start -->
1016  17. DA- und AD-Umsetzer

$$
I_k=\frac{U_{ref}}{R}\frac{Z}{Z_{max}+1},\qquad
I_k'=\frac{U_{ref}}{R}\frac{Z_{max}-Z}{Z_{max}+1},\qquad
U_a=-U_{ref}\frac{Z}{Z_{max}+1}
$$

**Abb. 17.14.** DA-Umsetzer mit Wechselschaltern

Wenn der von $z_0$ gesteuerte Schalter geschlossen ist, ergibt sich die Ausgangsspannung:

$$
U_a=U_{LSB}=-U_{ref}\frac{R_{FB}}{16R}=-\frac{1}{16}U_{ref}
$$

Im allgemeinen Fall erhält man:

$$
U_a=-\frac{1}{2}U_{ref}\,z_3-\frac{1}{4}U_{ref}\,z_2-\frac{1}{8}U_{ref}\,z_1-\frac{1}{16}U_{ref}\,z_0
$$

Daraus ergibt sich:

$$
U_a=-\frac{1}{16}U_{ref}\,(8z_3+4z_2+2z_1+z_0)=-U_{ref}\frac{Z}{Z_{max}+1}
\qquad (17.14)
$$

### 17.2.2.1 Einsatz von Wechselschaltern

Ein Nachteil des beschriebenen DA-Umsetzers besteht darin, dass die Potentiale an den Schaltern stark schwanken. Solange die Schalter offen sind, liegen sie auf $V_{ref}$-Potential, wenn sie geschlossen sind, auf Nullpotential. Deshalb müssen bei jedem Schaltvorgang die parasitären Kapazitäten des Schalters umgeladen werden. Dieser Nachteil lässt sich vermeiden, wenn man wie in Abb. 17.14 Wechselschalter einsetzt, mit denen jeweils zwischen der virtuellen Masse und der echten Masse umgeschaltet wird. Dadurch bleibt der Strom durch jeden Widerstand konstant. Daraus ergibt sich ein weiterer Vorteil: Die Belastung der Referenzspannungsquelle ist konstant. Ihr Innenwiderstand braucht also nicht wie bei der vorhergehenden Schaltung Null zu sein. Der Eingangswiderstand des Netzwerkes und damit der Lastwiderstand für die Referenzspannungsquelle beträgt in dem Beispiel:

$$
R_e=2R\parallel 4R\parallel 8R\parallel 16R=\frac{16}{15}R
$$

Zur Realisierung der Schalter verwendet man Transmission-Gates gemäß Abb. 17.15. Da sich die Elektroden der Schalter immer auf Nullpotential befinden, ist ihr On-Widerstand konstant und er lässt sich durch geringfügige Verkleinerung von $R_x$ berücksichtigen. Aus demselben Grund kann man auch die sonst in Transmission-Gates (Abb. 6.34) auf S. 637 erforderlichen p-Kanal-Fets in den Schaltern einsparen, da sie nie leitend würden.
<!-- page-import:1053:end -->

<!-- page-import:1054:start -->
17.2 Digital-Analog Umsetzung 1017

**Abb. 17.15.** Realisierung eines Wechselschalters mit einem modifizierten Transmission-Gate

## 17.2.2.2 Leiternetzwerk

Bei der Herstellung von integrierten DA-Umsetzern stößt die Realisierung genauer Widerstände mit stark unterschiedlichen Werten auf erhebliche Schwierigkeiten. Man realisiert die Gewichtung der Ströme deshalb mit gleichen Widerständen, die an gewichteten Spannungen angeschlossen sind wie man in Abb. 17.16 erkennt. Die Gewichtung der Spannungen erfolgt über hier einen Spannungsteiler, der die Referenzspannung von Stufe zu Stufe halbiert. Das ist hier nur deshalb möglich, weil die Belastung des Spannungsteiler konstant ist, unabhängig von der Stellung der Schalter. Da die Schaltung formal Ähnlichkeit mit einer Leiter besitzt, wird sie als Leiternetzwerk bezeichnet.

Die Referenzspannungsquelle wird mit dem konstanten Widerstand

$$
R_e = 2R \parallel 2R = R
$$

belastet. Die Ausgangsspannung des Summierverstärkers ergibt sich zu:

$$
U_a = -R_{FB} I_k
$$

$$
= -U_{ref}\,\frac{R_{FB}}{16R}\,(8z_3 + 4z_2 + 2z_1 + z_0) = -U_{ref}\,\frac{Z}{Z_{max}+1}
\qquad (17.15)
$$

$$
U_a = -U_{ref}\,\frac{Z}{Z_{max}+1}
$$

**Abb. 17.16.** DA-Umsetzer mit Leiternetzwerk
<!-- page-import:1054:end -->

<!-- page-import:1055:start -->
1018  17. DA- und AD-Umsetzer

$$
U_a = U_{ref}\,\frac{R_L}{R+R_L}\,\frac{Z}{Z_{max}+1}
= U_{ref}\,\frac{R_L}{R+R_L}\,\frac{Z}{16}
$$

**Abb. 17.17.** Invers betriebenes Leiternetzwerk. Hier ist ein Verstärker am Ausgang nicht erforderlich.

Der DA-Umsetzer in Abb. 17.16 erfordert lediglich Widerstände der Größe $R$, wenn man die Widerstände $2R$ durch Reihenschaltung von zwei Widerständen realisiert. Daher ist die Anordnung gut geeignet für die Herstellung als monolithisch integrierte Schaltung. Dabei lassen sich leicht die erforderlichen Paarungstoleranzen für die Widerstände erreichen. Ihr Absolutwert lässt sich jedoch nicht genau festlegen. So sind Toleranzen bis zu $\pm 50\%$ üblich. Entsprechend stark können natürlich auch die Ströme $I_k$ bzw. $I'_k$ schwanken. Um trotzdem eine eng tolerierte Ausgangsspannung zu erhalten, wird der Gegenkopplungswiderstand $R_{FB}$ mit integriert. Dadurch kürzt sich der Absolutwert von $R$ aus der (17.15) für die Ausgangsspannung heraus. Aus diesem Grund sollte man zur Strom-Spannungs-Umsetzung immer den internen Gegenkopplungswiderstand einsetzen und nie einen externen.

#### 17.2.2.3 Inversbetrieb eines Leiternetzwerks

Gelegentlich wird das Leiternetzwerk auch wie in Abb. 17.17 mit vertauschtem Eingang und Ausgang betrieben, da man dann keinen Verstärker zur Summation benötigt. Man muss dann allerdings die bereits erwähnten Nachteile eines hohen Spannungshubes an den Schaltern und einer ungleichmäßig belasteten Referenzspannungsquelle in Kauf nehmen.

Zur Berechnung der Ausgangsspannung benötigen wir den Zusammenhang zwischen den eingespeisten Spannungen $U_i$ und den zugehörigen Knotenspannungen $U'_i$. Dabei benutzen wir den Überlagerungssatz, d.h. wir setzen alle eingespeisten Spannungen außer der betrachteten Spannung $U_i$ gleich Null und addieren die einzelnen Anteile. Wenn wir das Netzwerk auch rechts mit dem Widerstand $R_L = 2R$ abschließen, ergibt sich voraussetzungsgemäß an jedem Knotenpunkt nach rechts und links die Belastung $2R$. Daraus folgen die Spannungsanteile $\Delta U'_i = \frac{1}{3}\Delta U_i$ und wir erhalten durch Addition der entsprechend gewichteten Anteile die Ausgangsspannung:

$$
U_a = \frac{1}{3}\left(U_3 + \frac{1}{2}U_2 + \frac{1}{4}U_1 + \frac{1}{8}U_0\right)
= \frac{2U_{ref}}{3}\,\frac{Z}{16}
\qquad (17.16)
$$

Da der Innenwiderstand des Netzwerkes unabhängig von der eingestellten Zahl den konstanten Wert $R$ besitzt, bleibt die Gewichtung auch dann erhalten, wenn der Lastwiderstand nicht den zunächst vorausgesetzten Wert $R_L = 2R$ besitzt. Aus dem Ersatzschaltbild in
<!-- page-import:1055:end -->

<!-- page-import:1056:start -->
17.2 Digital-Analog Umsetzung 1019

**Abb. 17.18.**  
Ersatzschaltbild zur Berechnung von Leerlaufspannung und Kurzschlussstrom

Abb. 17.18 können wir mit (17.16) unmittelbar die Leerlaufspannung und den Kurzschlussstrom berechnen:

$$
U_{a0} = U_{ref}\,\frac{Z}{16} = U_{ref}\,\frac{Z}{Z_{max}+1}
\qquad \text{für} \qquad R_L = \infty
$$

$$
I_{ak} = \frac{U_{ref}}{R}\,\frac{Z}{16} = \frac{U_{ref}}{R}\,\frac{Z}{Z_{max}+1}
\qquad \text{für} \qquad R_L = 0
\tag{17.17}
$$

## 17.2.3 Wägeverfahren mit geschalteten Strömen

DA-Umsetzer lassen sich auch vorteilhaft mit Konstantstromquellen realisieren, die die einzelnen Beiträge zum Ausgangsstrom liefern. Dieses Prinzip ist in Abb. 17.19 dargestellt. Die Ströme sind nach dem Stellenwert gewichtet. Je nachdem, ob die betreffende Dualstelle Eins oder Null ist, gelangt der zugehörige Strom an den Ausgang oder wird nach Masse abgeleitet. Die Sammelschiene für den Strom $I_k$ muss hier nicht unbedingt auf Nullpotential liegen, da der Strom, den die Stromquellen liefern, unabhängig von dem Ausgangspotential ist. Dies gilt natürlich nur innerhalb des Aussteuerungsbereiches der Konstantstromquellen (Compliance Voltage). Die Stromschalter realisiert man hier mit Differenzverstärkern gemäß Abb. 4.62 auf S. 352, weil sich damit der Strom mit einer kleinen Differenzspannung ganz von den einen auf den anderen Transistor umschalten lässt.

Zur Erzeugung der Konstantströme verwendet man bei dem Beispiel in Abb. 17.20 einfache Transistorstromquellen gemäß Abb. 4.10 auf S. 288. Der Operationsverstärker bildet zusammen mit den Transistoren $T_1$ und $T_2$ einen Stromspiegel für $I_{ref}$:

$$
I_{ref} = \frac{U_{ref}}{R_{ref}} = \frac{U_1}{2R} = 8I_{LSB}
$$

Um auch hier die unterschiedlichen Ströme mit gleichen Widerständen zu realisieren, verwendet man ein Leiternetzwerk zur Stromteilung in den Sourceleitungen. Für die gewünschte Funktionsweise der Schaltung ist es erforderlich, dass die Gate-Source Spannun-

$$
U_a = -R_L\,I_{LSB}\,Z , \qquad I_k = I_{LSB}\,Z , \qquad I_k' = I_{LSB}\,(Z_{max}-Z)
$$

**Abb. 17.19.** DA-Umsetzer mit geschalteten Stromquellen
<!-- page-import:1056:end -->

<!-- page-import:1057:start -->
1020  17. DA- und AD-Umsetzer

**Abb. 17.20.** Erzeugung gewichteter Konstantströme mit einem Leiternetzwerk in der Stromquel-
lenbank

gen aller Transistoren gleich groß ist. Um das bei unterschiedlichen Strömen zu erreichen, muss die Größe der Transistoren proportional zum Strom sein.

Eine andere Möglichkeit zur DA-Umsetzung mit geschalteten Stromquellen ist in Abb. 17.21 dargestellt. Hier werden gleich große Ströme erzeugt, die über ein Leiternetzwerk Netzwerk am Ausgang gewichtet werden. Die Anordnung entspricht dem invers betriebenen Leiternetzwerk in Abb. 17.17. Die Widerstände $2R$, die die Abschwächung innerhalb der Kette bewirken, müssen hier an Masse angeschlossen werden. In Reihe mit den Konstantstromquellen wären sie wirkungslos. Andererseits wird die Abschwächung in der Kette durch das Zuschalten einer Stromquelle nicht verändert, da sie einen zumindest theoretisch unendlich hohen Innenwiderstand besitzt.

## 17.2.4 DA-Umsetzer für spezielle Anwendungen

### 17.2.4.1 Verarbeitung vorzeichenbehafteter Zahlen

Bei der Beschreibung der DA-Umsetzer sind wir bis jetzt davon ausgegangen, dass positive Zahlen vorliegen, die in positive (je nach Schaltung auch negative) Spannungen umgewandelt werden sollen. Hier wollen wir untersuchen, wie man mit den beschriebe-

$I_{k0}=\frac{I\,Z}{8}=\frac{2I}{\frac{Z_{\max}}{Z}+1}, \quad U_a=-I_{k0}\,(2R\parallel R_L)$

**Abb. 17.21.** DA-Umsetzer mit einem Leiternetzwerk am Ausgang zur Gewichtung der Ströme
<!-- page-import:1057:end -->

<!-- page-import:1058:start -->
17.2 Digital-Analog Umsetzung 1021

| Dezimal | Zweierkomplement K |  |  |  |  |  |  |  | Offset-Dual Z |  |  |  |  |  |  |  | Analog |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | $v_k$ | $k_6$ | $k_5$ | $k_4$ | $k_3$ | $k_2$ | $k_1$ | $k_0$ | $z_7$ | $z_6$ | $z_5$ | $z_4$ | $z_3$ | $z_2$ | $z_1$ | $z_0$ | $U_1/U_{LSB}$ | $U_a/U_{LSB}$ |
| 127 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | $-255$ | 127 |
| 126 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | $-254$ | 126 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | $-129$ | 1 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | $-128$ | 0 |
| $-1$ | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | $-127$ | $-1$ |
| $-127$ | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | $-1$ | $-127$ |
| $-128$ | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | $-128$ |

**Abb. 17.22.** Verarbeitung negativer Zahlen in DA-Umsetzern. Beispiel für eine Wortbreite von 8bit mit $U_{LSB}=U_{ref}/256$.

nen DA-Umsetzern bipolare Ausgangsspannungen erzeugen kann. Die übliche Darstellung für Dualzahlen mit beliebigem Vorzeichen ist die Zweierkomplement-Darstellung (siehe Abschnitt 7.7.3.2 auf S. 665). Mit 8 bit kann man auf diese Weise den Bereich von $-128$ bis $+127$ darstellen; dies ist in Abb. 17.22 zu sehen.

Zur Eingabe in den DA-Umsetzer verschiebt man den Zahlenbereich durch Addition von $Z = K + 128$ auf positive Werte. Zahlen über 128 sind demnach positiv zu werten, Zahlen unter 128 als negativ. Die Bereichsmitte 128 bedeutet in diesem Fall Null. Diese Charakterisierung von vorzeichenbehafteten Zahlen durch rein positive Zahlen bezeichnet man als Offset-Dualdarstellung (Offset Binary). Die Addition von 128 kann man ganz einfach durch Negation des Vorzeichenbits vornehmen wie man in Abb. 17.22 erkennt.

Um eine Ausgangsspannung mit dem richtigen Vorzeichen zu bekommen, macht man die Addition des Offsets wieder rückgängig, indem man auf der Analogseite $128U_{LSB}=\frac{1}{2}U_{ref}$ subtrahiert. Dazu dient der Summierer OV2 in Abb. 17.23. Er bildet die Ausgangsspannung $U_a=-U_1-\frac{1}{2}U_{ref}$

$$
U_a = U_{ref}\frac{Z}{256} - \frac{1}{2}U_{ref}
= U_{ref}\frac{K+128}{256} - \frac{1}{2}U_{ref}
= U_{ref}\frac{K}{256}
\qquad (17.18)
$$

Ihre Größe ist zusammen mit der Spannung $U_1$ in Abb. 17.22 eingetragen.

Die Nullpunktstabilität der Schaltung in Abb. 17.23 lässt sich verbessern indem man zur Subtraktion des Offsets am Ausgang nicht die Referenzspannung direkt, sondern den komplementären Ausgangsstrom $I_k'$ verwendet. Bei der Zweierkomplementzahl $K = 0$, die der Offset-Dualzahl 128 entspricht, beträgt nämlich:

$U_a = U_{ref}\dfrac{K}{256}$ für $-128 \leq K \leq 127$

**Abb. 17.23.** DA-Umsetzer mit bipolarem Ausgang
<!-- page-import:1058:end -->

<!-- page-import:1059:start -->
1022  17. DA- und AD-Umsetzer

$U_a = U_{ref}\,\dfrac{K}{128}\quad \text{für}\quad -128 \leq K \leq 127$

**Abb. 17.24.** Bipolarer DA-Umsetzer mit verbesserter Nullpunktstabilität

$I_k = 128\,I_{LSB}\quad \text{und}\quad I_k' = 127\,I_{LSB}$

Wenn man also $I_k'$ von $I_k$ subtrahiert stimmt der Nullpunkt schon fast. Man muss dann lediglich noch ein $I_{LSB}$ subtrahieren, um den exakten Nullpunkt zu erhalten. Diese Methode ist in Abb. 17.24 dargestellt. Der Operationsverstärker OV1 wandelt wie bisher den Strom $I_k$ in die Ausgangsspannung um. Damit dabei keine Fehler auftreten, wird er über den DAU-internen Widerstand $R_{FB}$ gegengekoppelt. Der Operationsverstärker OV2 invertiert $I_k'$ und addiert diesen Strom in den Summationspunkt von OV1. Dabei ist der Absolutwert der beiden Widerstände $R_1$ beliebig; sie müssen nur gleich sein. Über den Widerstand $R_2$ wird der Strom $I_{LSB}$ addiert. Wenn $I_{LSB} = U_{ref}/(256R)$ ist, folgt:

$$
R_2 = \frac{U_{ref}}{I_{LSB}} = 256\,R_1
$$

Zur Berechnung der Ausgangsspannung brauchen wir lediglich die Ströme am Summationspunkt von OV1 zu addieren und erhalten mit $K = Z - 128$:

$$
U_a = R\left[\frac{U_{ref}}{R}\frac{Z}{256} - \frac{U_{ref}}{R}\frac{255 - Z}{256} - \frac{U_{ref}}{R}\frac{1}{256}\right]
= U_{ref}\frac{K}{128}
\qquad (17.19)
$$

## 17.2.4.2 Multiplizierende DA-Umsetzer

Wir haben gesehen, dass DA-Umsetzer eine Ausgangsspannung liefern, die proportional zur eingegebenen Zahl $Z$ und zur Referenzspannung $U_{ref}$ ist. Sie bilden also das Produkt $U_{ref} Z$. Aus diesem Grund bezeichnet man die Typen, bei denen eine Variation der Referenzspannung möglich ist, auch als *multiplizierende* DA-Umsetzer.

Bei den Typen mit geschalteten Strömen darf die Referenzspannung nur positive Werte annehmen, da sonst die Stromquellen in Abb. 17.20 sperren. Bei den Typen mit geschalteten Spannungen sind dagegen positive und negative Referenzspannungen zulässig. Die Referenzspannung muss nicht unbedingt konstant sein, sondern kann z.B. ein Musiksignal darstellen. Mit der Zahl $Z$ lässt sich dann die Verstärkung einstellen. Die Schaltung stellt also einen multiplizierenden DA-Umsetzer dar: Sie bildet das Produkt von $U_{ref}\,Z$.

Wenn man dabei Schaltungen mit bipolarer Ausgangsspannung wie in Abb. 17.23 und 17.24 einsetzt, die die vorzeichenrichtige Umsetzung von positiven und negativen Zahlen ermöglichen, ergibt sich sogar eine *Vier-Quadranten-Multiplikation*.
<!-- page-import:1059:end -->

<!-- page-import:1060:start -->
17.2 Digital-Analog Umsetzung 1023

Abb. 17.25.  
Dividierender DA-Umsetzer  
durch Erweiterung eines  
multiplizierenden DA-  
Umsetzers

$$
U_a=-U_e\frac{R}{R_{FB}}\frac{Z_{max}+1}{Z}
$$

### 17.2.4.3 Dividierende DA-Umsetzer

Man kann einen multiplizierenden DA-Umsetzer auch so betreiben, dass er durch die eingegebene Zahl dividiert. Dazu schaltet man ihn wie in Abb. 17.25 in die Gegenkopplungsschleife eines Operationsverstärkers. Dadurch stellt sich die Referenzspannung $U_{ref}$ so ein, dass $I_k=-U_e/R_{FB}$ wird. Mit der Umsetzergleichung

$$
I_k=\frac{U_{ref}}{R}\frac{Z}{Z_{max}+1}
$$

erhalten wir die Ausgangsspannung:

$$
U_a=U_{ref}=I_kR\frac{Z_{max}+1}{Z}=-U_e\frac{R}{R_{FB}}\frac{Z_{max}+1}{Z}=-U_e\frac{Z_{max}+1}{Z}
$$
(17.20)

## 17.2.5 Genauigkeit von DA-Umsetzern

### 17.2.5.1 Statische Kenngrößen

Der Nullpunktfehler eines DA-Umsetzers wird durch die Sperrströme bestimmt, die durch die geöffneten Schalter fließen.

Der Vollausschlagfehler wird einerseits durch die Ein-Widerstände der Schalter und andererseits durch die Genauigkeit des Gegenkopplungswiderstandes $R_{FB}$ bestimmt. Beide Fehler lassen sich durch Abgleich weitgehend beseitigen.

Die Nichtlinearität dagegen lässt sich nicht abgleichen. Sie gibt an, um wie viel eine Stufe im ungünstigsten Fall größer oder kleiner als 1 LSB ist. In Abb. 17.26 ist der Fall einer

Abb. 17.26. DA-Umsetzer mit Nichtlinearität
<!-- page-import:1060:end -->

<!-- page-import:1061:start -->
1024  17. DA- und AD-Umsetzer

Abb. 17.27. Auftreten positiver Glitche bei zu langsamem Öffnen der Schalter

Nichtlinearität von $\pm \frac{1}{2}\,\mathrm{LSB}$ dargestellt. Der kritische Fall liegt dabei in der Bereichsmitte: Wenn nur das höchste Bit Eins ist, fließt der Strom über einen einzigen Schalter. Verringert man die Zahl um Eins, muss über alle niedrigeren Schalter zusammen ein um ein $I_{LSB}$ kleinerer Strom fließen.

Ist der Linearitätsfehler größer als 1 LSB, kehrt sich die Tendenz um. Dann sinkt an dieser Stelle die Ausgangsspannung ab, wenn man die Zahl um Eins erhöht. Einen derart schwerwiegenden Fehler bezeichnet man als Monotoniefehler. Ein Beispiel dafür ist ebenfalls in Abb. 17.26 dargestellt. Die meisten DA-Umsetzer sind so ausgelegt, dass ihre Nichtlinearität $\pm \frac{1}{2}\,\mathrm{LSB}$ nicht überschreitet, da sonst das niedrigste Bit wertlos wird.

## 17.2.5.2 Glitche

Sehr unangenehme Störimpulse (Glitche) können beim Übergang von einer Zahl auf die andere entstehen. Ihre Ursache liegt meist nur zum kleinen Teil in den Ansteuersignalen, die über die Schalter kapazitiv an den Ausgang gelangen. Große Glitche entstehen dann, wenn die Schalter im DA-Umsetzer nicht gleichzeitig schalten. Der kritische Punkt ist dabei wieder die Bereichsmitte: Wenn das höchste Bit (MSB) Eins ist, fließt der Strom nur über einen einzigen Schalter. Verringert man die Zahl um Eins, öffnet sich der Schalter des MSB und alle anderen schließen sich. Wenn sich dabei der Schalter für das MSB öffnet, bevor sich die übrigen Schalter geschlossen haben, geht das Ausgangssignal kurzzeitig auf Null. Öffnet sich der Schalter für das MSB aber etwas zu spät, geht das Ausgangssignal kurzzeitig auf Vollausschlag. Auf diese Weise können also Störimpulse mit der Amplitude des halben Bereichs auftreten. Ein Beispiel für den Fall, dass sich die Schalter schneller schließen als öffnen, ist in Abb. 17.27 dargestellt.

Da die Glitche kurze Impulse sind, lassen sie sich mit einem nachfolgenden Tiefpass verkleinern. Dadurch werden sie aber entsprechend länger. Konstant bleibt dabei die Spannungs-Zeit-Fläche, also die Glitch-Energie. Glitche lassen sich auch dadurch beseitigen, dass man ein Abtast-Halte-Glied nachschaltet. Man kann es während der Glitch-Phase in den Haltezustand versetzen und dadurch den Glitch ausblenden. Abtast-Halte-Glieder, die speziell für diesen Zweck dimensioniert sind, werden als Deglitcher bezeichnet. Einfacher ist es jedoch, glitch-arme DA-Umsetzer zu verwenden. Sie besitzen in der Regel einen internen flankengesteigerten Datenspeicher für die Zahl $Z$, um sicherzustellen, dass die Steuersignale gleichzeitig an alle Schalter gelangen. Mitunter wird auch für die höchsten, kritischen Bits das Parallelverfahren eingesetzt, weil es von Hause aus glitch-frei ist.
<!-- page-import:1061:end -->
