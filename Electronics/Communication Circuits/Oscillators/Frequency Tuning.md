# Frequency Tuning

<!-- page-import:1622:start -->
1585

## 26.4 Frequenzabstimmung

In nachrichtentechnischen Systemen sind die Oszillatoren mit Ausnahme der freilaufenden Referenzoszillatoren immer über eine phasenstarre Schleife (PLL) an eine Referenz gekoppelt. Bei Sendern und Empfängern gilt das nicht nur für die Lokaloszillatoren mit variabler Frequenz, mit denen der Sende- bzw. Empfangskanal ausgewählt wird, sondern auch für die Lokaloszillatoren mit fester Frequenz, da die Frequenzgenauigkeit im freilaufenden Betrieb selbst bei Quarz-Oszillatoren in der Regel zu gering ist oder aus systemtechnischen Gründen ohnehin eine phasenstarre Kopplung erfolgen muss; siehe Abschnitt 22.1.3 und Abb. 22.7 auf Seite 1240.

Die Frequenzabstimmung erfolgt in der Regel mit Kapazitätsdioden ((bipolare) Varaktoren) oder MOS-Kondensatoren (MOS-Varaktoren), deren Kapazität mit einer Gleichspannung leistungslos gesteuert werden kann. Kapazitätsdioden haben wir im Abschnitt 1.4.3 behandelt. Bei MOS-Varaktoren nutzt man die Spannungsabhängigkeit der Gate-Kapazität eines Mosfets, bei dem Source- und Bulk-Anschluss verbunden sind. Die Varaktoren werden direkt oder über Koppelkapazitäten am Schwingkreis eines Oszillators angeschlossen – siehe Abb. 1.27 auf Seite 29 –, so dass die Frequenz des Oszillators mit Hilfe der Gleichspannung am Varaktor eingestellt werden kann. Man nennt diese Oszillatoren deshalb auch spannungsgesteuerte Oszillatoren (voltage-controlled oscillator) oder kurz VCO.

Es gibt zahlreiche weitere Möglichkeiten, die Frequenz eines Oszillators zu steuern, die aber nur in Ausnahmefällen angewendet werden; wir verzichten deshalb auf eine Darstellung. In breitbandigen Sendern und Empfängern mit Frequenzen im GHz-Bereich werden gelegentlich YIG-Oszillatoren verwendet, bei denen das Resonanzverhalten eines dielektrischen Resonators durch ein Magnetfeld beeinflusst wird; dabei bezieht sich die Bezeichnung YIG auf das Material des Resonators: Yttrium-Indium-Granat. Obwohl die primäre Steuergröße in diesem Fall keine Spannung ist, zählt man diese Oszillatoren dennoch zu den VCOs, da die Steuergröße ihrerseits wieder durch eine Spannung gesteuert wird.

In der Praxis wird die Bezeichnung VCO nicht einheitlich verwendet. Während man in der Schaltungstechnik alle Oszillatoren mit Frequenzabstimmung als VCOs bezeichnet, werden in der Nachrichtentechnik nur die Oszillatoren als VCOs bezeichnet, die ein Signal mit variabler Frequenz liefern müssen. Oszillatoren, bei denen die Frequenzabstimmung nur dazu dient, den Oszillator durch eine geringfügige Änderung der Frequenz an eine Referenz zu koppeln, werden in der Nachrichtentechnik nicht als VCOs bezeichnet.

Aus dem zulässigen Bereich der Steuerspannung und der zugehörigen Änderung der Kapazität der Varaktoren ergibt sich zusammen mit den Parametern des abzustimmenden Schwingkreises der Abstimmbereich (tuning range), d.h. der Bereich, innerhalb dem die Frequenz des Oszillators abgestimmt werden kann. Wenn der Abstimmbereich größer ist als eine Oktave (Frequenzverhältnis 1:2), bezeichnet man den Oszillator als Breitband-VCO (wideband VCO).

VCOs in mobilen Endgeräten, die verschiedene Funkdienste nutzen, verfügen häufig nicht nur über eine kontinuierliche Abstimmung innerhalb eines Frequenzbandes, sondern zusätzlich über eine Umschaltung zwischen den Frequenzbändern der verschiedenen Dienste. Ob man dabei einen einzigen Oszillator – z.B. einen LC-Oszillator mit einer Bandumschaltung durch eine elektronische Umschaltung der Induktivität und einer Abstimmung innerhalb des Bandes mit einem Varaktor – verwenden kann oder getrennte Oszillatoren verwenden muss, muss im Einzelfall geprüft werden. VCOs mit Bandumschaltung werden als Multiband-VCOs (multiband VCO) bezeichnet.
<!-- page-import:1622:end -->

<!-- page-import:1623:start -->
1586  26. Oszillatoren

a Kapazitätsdiode (bipolarer Varaktor)

b MOS-Varaktor (n-Kanal-Ausführung)

**Abb. 26.90.** Aufbau von Varaktoren

## 26.4.1 Varaktoren

### 26.4.1.1 Bipolare Varaktoren

Bipolare Varaktoren (Kapazitätsdioden, Abstimmddioden, varicap) haben wir bereits im Abschnitt 1.4.3 beschrieben. Sie sind als diskrete Bauelemente in verschiedenen Ausführungen und Kapazitätsbereichen erhältlich und werden in allen diskret aufgebauten VCOs eingesetzt.

Abbildung 26.90a zeigt den inneren Aufbau mit der spannungsabhängigen Sperrschicht, die die Kapazität bildet. Das Ersatzschaltbild erhält man aus dem Kleinsignalmodell in Abb. 1.20b auf Seite 23, indem man berücksichtigt, dass die Diode im Sperrbereich betrieben wird ($r_D \rightarrow \infty$) und die Kapazität $C_D$ in diesem Fall der Sperrschichtkapazität $C_S$ entspricht, siehe Abschnitt 1.3.4.2:

$$
C_D(U_A) = C_S(U_D = -U_A) = \frac{C_{S0}}{\left(1 + \frac{U_A}{U_{Diff}}\right)^{m_S}}
\qquad (26.32)
$$

Dabei ist $C_{S0}$ die Null-Kapazität bei $U_A = 0$, $U_{Diff}$ die Diffusionsspannung und $m_S$ der Kapazitätskoeffizient. Da bei Kapazitätsdioden ein anderes Dotierungsprofil verwendet wird als bei gewöhnlichen Dioden, sind die Werte für $U_{Diff}$ und $m_S$ größer; typische Werte sind $U_{Diff} \approx 0{,}7 \ldots 1\ \text{V}$ und $m_S = 0{,}4 \ldots 1$.

In integrierten Schaltungen kann man zwar jeden gesperrten pn-Übergang durch Variation der Sperrspannung als Kapazitätsdiode betreiben, man erreicht dabei aber nicht die Kapazitätsänderung und die Güte der mit speziellen Halbleiterprozessen hergestellten diskreten Dioden.

### 26.4.1.2 MOS-Varaktoren

Es gibt mehrere Möglichkeiten, in einem MOS-Prozess einen Varaktor herzustellen. Wir beschränken uns hier auf die Variante, die man aus einem n-Kanal-Mosfet erhält, indem man den Bulk-, den Source- und den Drain-Anschluss verbindet, siehe Abb. 26.90b. Da der Source- und der Drain-Anschluss aufgrund der Symmetrie gleichwertig sind, werden häufig beide Anschlüsse mit Source bezeichnet. Die als Steuerspannung wirkende Gate-Substrat-Spannung $U_{GB}$ kann im Gegensatz zur Steuerspannung einer Kapazitätsdiode beide Polaritäten annehmen, da das Gate isoliert ist.

Die Funktion eines MOS-Varaktors hängt von der Ladungsverteilung im Substrat unterhalb des Gate-Anschlusses ab, siehe Abb. 26.91:
<!-- page-import:1623:end -->

<!-- page-import:1624:start -->
26.4 Frequenzabstimmung 1587

a Akkumulation *(accumulation)*  
b Entleerung *(depletion)*  
c Inversion *(inversion)*

**Abb. 26.91.** Ladungsverteilung in einem n-Kanal-MOS-Varaktor

- **Akkumulation** *(accumulation)*: Für $U_{GB} < 0$ akkumulieren positive Ladungen im Substrat unter dem Gate und bilden den Gegenpol zum Gate. Die wirksame Kapazität entspricht in diesem Fall der Oxid-Kapazität $C_{ox}$.
- **Entleerung** *(depletion)*: Für $0 < U_{GB} < U_{th}$ werden die positiven Ladungen im Substrat verdrängt, d.h. der Bereich unter dem Gate wird entleert. In diesem Fall wird der Gegenpol zum Gate durch die Ladung in der Tiefe des Substrats gebildet, so dass die Substrat-Kapazität $C_B$ in Reihe zu $C_{ox}$ wirksam wird; dadurch nimmt die Gesamtkapazität ab.
- **Inversion** *(inversion)*: Für $U_{GB} > U_{th}$ bildet sich der aus negativen Ladungen bestehende Kanal, d.h. das Substrat unter dem Gate invertiert seine Ladung. In diesem Fall bildet der Kanal den Gegenpol zum Gate und die Tiefe des Substrats ist nicht mehr beteiligt, da der kapazitive Strom $i$ nun nicht mehr über den Bulk-, sondern über den Source-Anschluss fließt. Die wirksame Kapazität entspricht wieder der Oxid-Kapazität.

Abbildung 26.92 zeigt den Verlauf der effektiven Kapazität im Vergleich zu einer typischen Kapazitätsdiode.

#### 26.4.1.3 Kleinsignalmodell

Abbildung 26.93 zeigt die Kleinsignalmodelle von Varaktoren mit der Varaktor-Kapazität $C_V$ und dem Bahnwiderstand $R_V$. Beide Werte hängen von der Abstimmspannung $U_A$ ab. Bei diskreten Varaktoren muss man zusätzlich die Induktivität $L_G$ und die Kapazität $C_G$ des Gehäuses berücksichtigen.

accumulation — depletion — inversion

MOS ($C_{ox} = 8\,\mathrm{pF}$)  
BBY51

$C$  
pF

$U_D$  
V

$U_{GB}$  
V

$U_{th}$

**Abb. 26.92.** Kapazität eines n-Kanal-MOS-Varaktors im Vergleich zu einer Kapazitätsdiode des Typs BBY51
<!-- page-import:1624:end -->

<!-- page-import:1625:start -->
1588 26. Oszillatoren

a integrierter Varaktor

b diskreter Varaktor (G = Gehäuse)

**Abb. 26.93.**  
Kleinsignalmodelle von Varaktoren

## 26.4.2 Abstimmung

Abbildung 26.94 zeigt die Frequenzabstimmung von Schwingkreisen mit einem Varaktor $C_V$. Bei dem Parallelschwingkreis in Abb. 26.94a kann es sich um einen LC-Schwingkreis oder das Modell für einen Resonator mit Parallelresonanz handeln, z.B. einen keramischen Koaxialresonator. Oszillatoren mit Parallelresonanz sind meist als Colpitts-Oszillatoren aufgebaut; für diesen Fall nehmen wir an, dass die Kapazitäten des Colpitts-Spannungsteilers und des Verstärkers in $C_P$ enthalten sind. Für $C_K \to \infty$ (Kurzschluss von $C_K$) liegt der Varaktor parallel zu $C_P$. Bei dem Serienschwingkreis in Abb. 26.94b kann es sich um einen Serienresonator mit statischer Kapazität $C_0$ handeln, z.B. einen Quarz-Resonator; dagegen erhält man mit $C \to \infty$ das HF-Ersatzschaltbild einer Spule.

### 26.4.2.1 Abstimmung eines Parallelschwingkreises

Für die Resonanzfrequenz des Parallelschwingkreises in Abb. 26.94a gilt:

$$
\omega_R = 2\pi f_R = \frac{1}{\sqrt{L\left(C_P + \frac{C_K C_V}{C_K + C_V}\right)}}
$$

(26.33)

Wir nehmen an, dass der Varaktor im Bereich $C_{V,min} \leq C_V \leq C_{V,max}$ abgestimmt werden kann und verwenden im folgenden das Kapazitätsverhältnis:

$$
v = \frac{C_{V,max}}{C_{V,min}} \Rightarrow C_{V,max} = v C_{V,min}
$$

Die Kapazitäten $C_P$ und $C_K$ beziehen wir ebenfalls auf $C_{V,min}$:

$$
c_P = \frac{C_P}{C_{V,min}}, \quad c_K = \frac{C_K}{C_{V,min}}
$$

(26.34)

Setzt man diese Zusammenhänge für die Fälle $C_V = C_{V,min}$ und $C_V = C_{V,max} = v C_{V,min}$ in (26.33) ein, erhält man für das Verhältnis der minimalen und der maximalen Resonanzfrequenz:

$$
\frac{f_{R,max}}{f_{R,min}} = \sqrt{\frac{c_K + 1}{c_K + v}\,\frac{v c_P + (c_P + v)c_K}{c_P + (c_P + 1)c_K}}
$$

(26.35)

Für $C_K \to \infty$ (Kurzschluss von $C_K$) folgt $c_K \to \infty$ und:

a Parallelschwingkreis

b Serienschwingkreis

**Abb. 26.94.**  
Frequenzabstimmung mit einem Varaktor $C_V$
<!-- page-import:1625:end -->

<!-- page-import:1626:start -->
26.4 Frequenzabstimmung 1589

Abb. 26.95. Relativer Abstimmbereich eines Parallelschwingkreises für einen Varaktor mit einem Kapazitätsverhältnis $\nu = 3$

$$
\frac{f_{R,max}}{f_{R,min}} = \sqrt{\frac{c_P + \nu}{c_P + 1}}
\qquad \text{für } c_K \to \infty
$$

(26.36)

Daraus erhält man mit $C_P = 0$ bzw. $c_P = 0$ den maximal möglichen Abstimmbereich:

$$
\frac{f_{R,max}}{f_{R,min}} = \sqrt{\nu}
\qquad \text{für } c_K \to \infty,\; c_P = 0
$$

In diesem Fall besteht der Schwingkreis nur noch aus $L$ und $C_V$ und das Verhältnis der Resonanzfrequenzen entspricht der Wurzel des Kapazitätsverhältnisses $\nu$. In der Praxis kann man dies nur näherungsweise erreichen, indem man den Verstärker über eine möglichst kleine Kapazität mit dem Schwingkreis koppelt und dadurch die effektive Parallelkapazität $C_P$ klein hält. Für einen Oszillator mit einem Abstimmbereich von einer Oktave $(f_{R,max}/f_{R,min} = 2)$ benötigt man demnach einen Varaktor mit einem Kapazitätsverhältnis $\nu \geq 4$. Zur Darstellung verwenden wir den relativen Abstimmbereich:

$$
f_{R,rel} = \frac{f_{R,max}}{f_{R,min}} - 1 = \frac{f_{R,max} - f_{R,min}}{f_{R,min}}
$$

(26.37)

Bei einem Abstimmbereich von einer Oktave gilt $f_{R,rel} = 1$.

Abbildung 26.95 zeigt den relativen Abstimmbereich eines Parallelschwingkreises für einen Varaktor mit einem Kapazitätsverhältnis $\nu = 3$. Für $c_P = 0$ und $c_K \to \infty$ erhält man den maximal möglichen relativen Abstimmbereich $f_{R,rel} = \sqrt{3} - 1 \approx 0{,}73$. Mit zunehmender Parallelkapazität $C_P$ und mit abnehmender Koppelkapazität $C_K$ nimmt der relative Abstimmbereich ab.
<!-- page-import:1626:end -->

<!-- page-import:1627:start -->
1590  26. Oszillatoren

Bei der Dimensionierung gibt man den gewünschten Abstimmbereich vor und ermittelt die in der jeweiligen Schaltung unvermeidbare, minimale Parallelkapazität $C_{P,\min}$. Bei einem Colpitts-Oszillator ergibt sich $C_{P,\min}$ aus den Kapazitäten des Colpitts-Spannungsteilers und des Transistors. Damit erhält man den minimalen Wert für $c_P$:

$$
c_{P,\min}=\frac{C_{P,\min}}{C_{V,\min}}
$$

(26.38)

Aus (26.36) und (26.37) erhält man den maximalen Wert für $c_P$, bei dem der gewünschte relative Abstimmbereich mit $c_K \rightarrow \infty$ gerade noch erreicht werden kann:

$$
c_{P,\max}=\frac{v-\left(f_{R,\max}/f_{R,\min}\right)^2}{\left(f_{R,\max}/f_{R,\min}\right)^2-1}
=\frac{v-\left(f_{R,\mathrm{rel}}+1\right)^2}{f_{R,\mathrm{rel}}\left(f_{R,\mathrm{rel}}+2\right)}
$$

(26.39)

Es muss $c_{P,\max}\geq c_{P,\min}$ gelten, damit eine Lösung existiert; daraus erhält man eine Forderung für die minimale Varaktor-Kapazität:

$$
c_{P,\max}\geq c_{P,\min}=\frac{C_{P,\min}}{C_{V,\min}}
\Rightarrow
C_{V,\min}\geq \frac{C_{P,\min}}{c_{P,\max}}
$$

(26.40)

Wenn diese Forderung erfüllt ist, kann man im Prinzip einen beliebigen Wert $c_P$ im Bereich $c_{P,\min}\ldots c_{P,\max}$ wählen und den zugehörigen Wert für $c_K$ mit

$$
c_K=\frac{b+\sqrt{b^2+4ac}}{2a}
\qquad \text{mit} \qquad
\left\{
\begin{aligned}
a&=c_{P,\max}-c_P\\
b&=c_P+v\,(c_P+1)\\
c&=v\,c_P
\end{aligned}
\right.
$$

berechnen. Da die Varaktor-Kapazität jedoch nichtlinear ist, muss die Spannungsamplitude am Varaktor klein bleiben; dazu muss die Kapazität $C_K$ des kapazitiven Spannungsteilers $C_K,C_V$ in Abb. 26.94a möglichst klein sein, d.h. $c_K$ muss minimiert werden. Aus den Verläufen in Abb. 26.95 erkennt man, dass $c_K$ für $c_P \rightarrow 0$ minimal wird, d.h. man muss $c_P$ minimieren, indem man $C_{V,\min}$ maximiert. Daraus ergibt sich folgende Vorgehensweise:

(26.41)

- Man ermittelt die unvermeidbare Parallelkapazität $C_{P,\min}$.
- Man wählt einen Varaktor aus und ermittelt das erzielbare Kapazitätsverhältnis $v$.
- Aus (26.39) erhält man $c_{P,\max}$ und damit mit (26.40) die Untergrenze für $C_{V,\min}$.
- Da keine Obergrenze für $C_{V,\min}$ existiert und ein möglichst großer Wert vorteilhaft ist, muss man in der Praxis einen Kompromisswert finden, für den man mit (26.38) und (26.41) einen ausreichend kleinen Wert für $c_K$ erhält. Gegebenenfalls muss man mehrere Varaktoren parallel schalten, um einen ausreichend großen Wert für $C_{V,\min}$ zu erzielen.
- Aus (26.34) folgt $C_P=c_P\,C_{V,\min}$ und $C_K=c_K\,C_{V,\min}$.
- Aus (26.33) erhält man die Induktivität:

$$
L=\frac{1}{(2\pi\,f_{R,\max})^2\left(C_P+\dfrac{C_K\,C_{V,\min}}{C_K+C_{V,\min}}\right)}
=
\frac{1}{(2\pi\,f_{R,\max})^2\,C_{V,\min}\left(c_P+\dfrac{c_K}{c_K+1}\right)}
$$

In der Praxis muss man diese Schritte in der Regel für verschiedene Varaktoren und verschiedene Werte für $C_{V,\min}$ durchführen, bis eine Dimensionierung mit praktikablen Werten für die Kapazitäten und die Induktivität $L$ vorliegt. Wenn $L$ vorgegeben ist, ermittelt man den zugehörigen Wert für $C_{V,\min}$, indem man die Gleichungen mit einem Mathematikprogramm auswertet.
<!-- page-import:1627:end -->

<!-- page-import:1628:start -->
26.4 Frequenzabstimmung 1591

**Abb. 26.96.**  
Beispiel: Colpitts-Oszillator für $f_R = 100\,\text{MHz}$

*Beispiel:* Wir versehen den Colpitts-Oszillator in Basisschaltung aus Abb. 26.27a auf Seite 1529 mit einer Frequenzabstimmung um $\pm 2{,}5\%$, um ihn in einem Empfänger als Festfrequenz-Lokaloszillator einsetzen zu können. Mit $f_{R,\min} = 97{,}5\,\text{MHz}$ und $f_{R,\max} = 102{,}5\,\text{MHz}$ erhalten wir $f_{R,rel} = 0{,}051$. Wir nehmen an, dass die Abstimmspannung von einer phasenstarren Schleife (PLL) erzeugt wird, die ebenfalls mit einer Versorgungsspannung $U_b = 1{,}5\,\text{V}$ betrieben wird und deshalb nur eine Spannung im Bereich $U_A = 0{,}3 \dots 1{,}2\,\text{V}$ liefern kann. Wir verwenden eine Kapazitätsdiode des Typs BB804 mit $C_{V,\max} = C_D(U_A = 0{,}3\,\text{V}) = 70\,\text{pF}$, $C_{V,\min} = C_D(U_A = 1{,}2\,\text{V}) = 52\,\text{pF}$ und $\nu = C_{V,\max}/C_{V,\min} = 1{,}35$. Aus (26.39) folgt $c_{P,\max} = 2{,}29$.

Abbildung 26.96 zeigt den Oszillator mit den dimensionierten Kapazitäten $C_1, C_2, C_3$. Alle Kapazitäten mit Ausnahme der Kapazität $C_1$ bilden die unvermeidbare, minimale Parallelkapazität $C_{P,\min}$; dazu gehören neben $C_2$ und $C_3$ auch die Kapazitäten der Transistoren. Wir können $C_{P,\min}$ aus $L = 100\,\text{nH}$, $C_1 = 21{,}9\,\text{pF}$ und $f_R = 100\,\text{MHz}$ berechnen:

$$
C_{P,\min} = \frac{1}{(2\pi f_R)^2 L} - C_1 = \frac{1}{(2\pi \cdot 100\,\text{MHz})^2 \cdot 100\,\text{nH}} - 21{,}9\,\text{pF} = 3{,}43\,\text{pF}
$$

Damit folgt (26.38) $c_{P,\min} = 0{,}066$ und aus (26.40) $C_{V,\min} \geq 1{,}5\,\text{pF}$.

Da die Induktivität $L = 100\,\text{nH}$ vorgegeben ist, werten wir Gleichungen entsprechend der beschriebenen Vorgehensweise mit einem Mathematikprogramm aus. Abbildung 26.97

**Abb. 26.97.**  
Beispiel: Dimensionierung der Frequenzabstimmung
<!-- page-import:1628:end -->

<!-- page-import:1630:start -->
26.4 Frequenzabstimmung 1593

teln, indem man die Schwingkreisinduktivität $L$ verringert, Dioden mit einem größeren Kapazitätsverhältnis verwendet oder den Bereich für die Abstimmspannung vergrößert.

### 26.4.2.2 Kennlinie

Aus der Kennlinie $C_V(U_A)$ des Varaktors und dem Zusammenhang zwischen der Kapazität $C_V$ und der Resonanzfrequenz $f_R(C_V)$ erhält man die Abstimmkennlinie (tuning characteristic):

$$
f_R(U_A) = f_R(C_V(U_A))
$$

Sie sollte möglichst linear sein, damit der Betrieb mit einer phasenstarren Schleife (PLL) erleichtert wird. Für die regelungstechnische Auslegung einer PLL ist die Steigung

$$
K_{VCO} = \frac{df_R}{dU_A} = \frac{\partial f_R}{\partial C_V}\frac{\partial C_V}{\partial U_A}
$$

der Abstimmkennlinie maßgebend. Sie wird Abstimmsteilheit oder VCO-Steilheit (VCO gain) genannt und geht direkt in die Schleifenverstärkung der PLL ein. Ein einigermaßen konstantes Regelverhalten im gesamten Abstimmbereich erhält man nur, wenn die Steigung etwa konstant, d.h. die Abstimmkennlinie näherungsweise linear ist.

Aus (26.33) erhält man:

$$
\frac{\partial f_R}{\partial C_V}
=
-\frac{\left(\frac{C_K}{C_K + C_V}\right)^2}{4\pi\sqrt{L}\left(C_P + \frac{C_K C_V}{C_K + C_V}\right)^{3/2}}
=
-2\pi^2 f_R^3 L \left(\frac{C_K}{C_K + C_V}\right)^2
\qquad (26.43)
$$

Wir betrachten die Grenzfälle:

- Der Abstimmbereich wird maximal, wenn die Schwingkreiskapazität nur aus der Varaktor-Kapazität $C_V$ besteht ($C_P = 0, C_K \to \infty$); in diesem Fall gilt:

$$
f_R = \frac{1}{2\pi\sqrt{LC_V}}
\quad\Rightarrow\quad
\frac{\partial f_R}{\partial C_V} = -\frac{1}{4\pi\sqrt{L}\,C_V^{3/2}}
$$

Für eine Kapazitätsdiode mit

$$
C_V = \frac{C_{S0}}{\left(1 + \frac{U_A}{U_{Diff}}\right)^{m_S}}
\qquad\Rightarrow\qquad
\frac{\partial C_V}{\partial U_A}
=
-\frac{m_S C_{S0}}{U_{Diff}\left(1 + \frac{U_A}{U_{Diff}}\right)^{m_S+1}}
$$

kann man die Steigung der Abstimmkennlinie durch Einsetzen in (26.42) direkt angeben:

$$
\frac{df_R}{dU_A}
=
\frac{m_S}{4\pi\sqrt{LC_{S0}}\,U_{Diff}}
\left(1 + \frac{U_A}{U_{Diff}}\right)^{\frac{m_S}{2}-1}
\stackrel{!}{=}\mathrm{const.}
\quad\Rightarrow\quad
m_S = 2
$$

Sie ist für $m_S = 2$ konstant. Kapazitätsdioden mit $m_S = 0,4 \ldots 1$ sind für diesen Anwendungsfall demnach nicht geeignet; deshalb gibt es spezielle hyperabrupte Kapazitätsdioden, die diesen Verlauf mit Hilfe eines speziellen Dotierungsprofils in einem Teilbereich annähern.
<!-- page-import:1630:end -->

<!-- page-import:1631:start -->
1594  26. Oszillatoren

a Abstimmkennlinie

b Abstimmsteilheit

**Abb. 26.99.** Beispiel: Abstimmverhalten der Schaltung aus Abb. 26.98

– Wenn der Abstimmbereich sehr klein wird, bleibt die Resonanzfrequenz $f_R$ etwa konstant; in diesem Fall folgt aus (26.43):

$$
\frac{\partial f_R}{\partial C_V}\sim -\left(\frac{C_K}{C_K+C_V}\right)^2 \quad \overset{C_K\ll C_V}{\sim}\quad -\frac{1}{C_V^2}
$$

Daraus folgt für die Steigung der Abstimmkennlinie:

$$
\frac{df_R}{dU_A}\sim \left(1+\frac{U_A}{U_{Diff}}\right)^{m_S-1}\! = \mathrm{const.}
\quad\Rightarrow\quad m_S=1
$$

Hier erhält man für $m_S = 1$ eine konstante Steigung. Auch für diesen Anwendungsfall gibt es spezielle hyperabrupten Kapazitätsdioden, die diesen Verlauf über den gesamten Abstimmbereich annähern. Man erhält aber auch mit $m_S < 1$ in den meisten Fällen eine akzeptable Abstimmkennlinie.

In der Praxis ermittelt man die Abstimmkennlinie numerisch. Wenn der Bereich für die Abstimmspannung $U_A$ relativ klein ist, kann man den Kapazitätsverlauf der Dioden in der Regel durch geeignete Parameter $C_{S0}, U_{Diff}, m_S$ sehr gut beschreiben. Viele Dioden besitzen jedoch aufgrund spezieller Dotierungsprofile einen Kapazitätsverlauf, der sich bei voller Ausnutzung des zulässigen Bereichs für die Abstimmspannung nicht mit einfachen Gleichungen beschreiben lässt; in diesem Fall muss man eine Wertetabelle verwenden und eventuell benötigte Zwischenwerte interpolieren.

*Beispiel:* Wir bestimmen die Abstimmkennlinie und die Abstimmsteilheit der Schaltung aus Abb. 26.98, indem wir (26.33) und (26.43) mit $C_P = C_{P,min} = 3{,}43\,\mathrm{pF}$, $C_K = 34{,}5\,\mathrm{pF}$ und $L = 100\,\mathrm{nH}$ auswerten und dabei die für die Kapazitätsdiode BB804 im Bereich $U_A = 0{,}3 \dots 1{,}2\,\mathrm{V}$ gültige Näherung

$$
C_V(U_A)\approx \frac{82{,}1\,\mathrm{pF}}{\left(1+\frac{U_A}{0{,}72\,\mathrm{V}}\right)^{0{,}46}}
$$

verwenden, die wir aus den im Datenblatt angegebenen Kurven ermittelt haben. Abbildung 26.99 zeigt, dass die Abstimmkennlinie trotz des ungünstigen Kapazitätskoeffizienten
<!-- page-import:1631:end -->

<!-- page-import:1632:start -->
26.4 Frequenzabstimmung 1595

a Parallelabstimmung                             b Serienabstimmung

**Abb. 26.100. Breitband-Abstimmung**

$m_S = 0{,}46$ noch näherungsweise linear ist. Die Abstimmsteilheit $K_{VCO}$ variiert etwa um den Faktor 1,5, was mit Hinblick auf die Einbindung in eine PLL unproblematisch ist. Die guten Eigenschaften beruhen wesentlich darauf, dass der Bereich für die Abstimmspannung relativ klein ist.

### 26.4.2.3 Abstimmung eines Serienschwingkreises

Für die Resonanzfrequenz des Serienschwingkreises in Abb. 26.94b auf Seite 1588 gilt:

$$
\omega_R = 2\pi f_R = \sqrt{\frac{C + C_0 + C_V}{LC\,(C_0 + C_V)}} = \frac{1}{\sqrt{L\,\frac{CC'_V}{C + C'_V}}}
\qquad \text{mit } C'_V = C_0 + C_V
\qquad (26.44)
$$

Ein Vergleich mit (26.33) auf Seite 1588 zeigt, dass man bei der Dimensionierung der Abstimmung genauso vorgehen kann wie bei einem Parallelschwingkreis, wenn man $C_P = 0$ setzt, $C_K$ durch $C$ ersetzt und anstelle der Varaktor-Kapazität $C_V$ die Kapazität $C'_V = C_0 + C_V$ einsetzt. Der Abstimmbereich wird durch die Kapazität $C_0$ eingeschränkt, da das wirksame Kapazitätsverhältnis $v = C'_{V,max}/C'_{V,min}$ kleiner ist als das Kapazitätsverhältnis $C_{V,max}/C_{V,min}$ des Varaktors.

In der Praxis werden vor allem Quarz- und SAW-Resonatoren auf diese Weise abgestimmt. Da die Resonanzfrequenz dieser Resonatoren nur minimalen Schwankungen unterliegt, ist der erforderliche Abstimmbereich in der Regel sehr klein; typische Werte liegen unter $\pm 0{,}1\,\%$.

### 26.4.2.4 Breitband-Abstimmung

Bei einer Breitband-Abstimmung, bei der das Verhältnis $f_{R,max}/f_{R,min}$ noch deutlich kleiner ist als die Wurzel aus dem Kapazitätsverhältnis $v = C_{V,max}/C_{V,min}$ der Varaktoren, hat man die Wahl zwischen Parallel- und Serienabstimmung, siehe Abb. 26.100; es gilt:

$$
\omega_R =
\begin{cases}
\frac{1}{\sqrt{L\,(C_P + C_V)}} & \text{Parallelabstimmung} \\
\\
\sqrt{\frac{C_P + C_V}{L C_P C_V}} & \text{Serienabstimmung}
\end{cases}
$$

Wir haben beide Ausführungen so dimensioniert, dass wir mit einer Kapazitätsdiode des Typs BBY51 ($C_V = 2{,}5 \dots 7{,}5\,\mathrm{pF}$, $U_A = 0 \dots 6\,\mathrm{V}$, $m_S = 0{,}6$) einen Abstimmbereich $f_R = 85 \dots 115\,\mathrm{MHz}$ erhalten. Die Kapazität $C_P$ entspricht wieder der unvermeidbaren Parallelkapazität, in der die Kapazitäten des Verstärkers und des Colpitts-Spannungsteilers zusammengefasst sind. Die Parallelabstimmung hat den Vorteil, dass man die Induktivität [unclear]
<!-- page-import:1632:end -->

<!-- page-import:1633:start -->
1596  26. Oszillatoren

a  Abstimmkennlinien

b  Abstimmsteilheiten

**Abb. 26.101.** Kennlinien der Breitband-Abstimmung aus Abb. 26.100

$L$ anstelle mit Masse auch mit einer beliebigen Gleichspannung verbinden und zur Arbeitspunkteinstellung des folgenden Verstärkers nutzen kann. Abbildung 26.101 zeigt die Abstimmkennlinien und die Abstimmsteilheiten. Die Serienabstimmung erweist sich als deutlich besser; die Abstimmsteilheit variiert hier nur um den Faktor 3 im Gegensatz zum Faktor 8 bei Parallelabstimmung.

Wesentlich bessere Ergebnisse erzielt man mit einer hyperabrupten Kapazitätsdiode. Abbildung 26.102 zeigt die Schaltung und die Kennlinien einer Serienabstimmung mit einer Diode des Typs MA4ST1230 ($m_S \approx 1$). Wir haben die Schaltung wieder für $f_R = 85 \dots 115\,\mathrm{MHz}$ dimensioniert. Die Abstimmkennlinie ist nahezu linear und die Abstimmsteilheit bleibt im Bereich $K_{VCO} = 5{,}4 \dots 6{,}6\,\mathrm{MHz}/\mathrm{V}$.

Der Abstimmbereich wird maximal, wenn bei Parallelabstimmung $C_P \to 0$ und bei Serienabstimmung $C_P \to \infty$ gilt. Letzteres führt auf einen Oszillator mit Serienresonanz,

a  Schaltung

$R_A$

$U_A$

$0 \dots 5\,\mathrm{V}$

$C_k \to \infty$

$L$

$1{,}52\,\mu\mathrm{H}$

MA4ST1230

$2{,}4 \dots 15{,}8\,\mathrm{pF}$

$C_P$

$2{,}7\,\mathrm{pF}$

b  Abstimmkennlinie und Abstimmsteilheit

**Abb. 26.102.** Serienabstimmung mit einer hyperabrupten Kapazitätsdiode
<!-- page-import:1633:end -->

<!-- page-import:1634:start -->
26.4 Frequenzabstimmung 1597

a Schaltung

b Abstimmkennlinie und Abstimmsteilheit

**Abb. 26.103.** Breitband-VCO für $f_R = 82 \ldots 170\,\mathrm{MHz}$

d.h. die Kapazität $C_P$ in Abb. 26.100b entfällt und der folgende Verstärker muss einen niederohmigen Eingang haben. Wir haben bereits im Zusammenhang mit den zweistufigen LC-Oszillatoren im Abschnitt 26.1.4 darauf hingewiesen, dass eine Serienresonanz ungünstig ist, da die Ruheströme des Verstärkers verhältnismäßig hoch sein müssen, damit der effektive Serienwiderstand des Schwingkreises klein bleibt; deshalb wird bei Breitband-VCOs mit maximalem Abstimmbereich in der Regel die Parallelabstimmung verwendet. Abbildung 26.103 zeigt ein typisches Beispiel auf der Basis des Colpitts-Oszillators mit Differenzverstärker aus Abb. 26.40 auf Seite 1541. Wir nehmen hier an, dass der Verstärker einschließlich der Kapazitäten als integrierte Schaltung vorliegt, an die die Induktivitäten und die Kapazitätsdioden extern angeschlossen werden. Die Abstimmsapnnung $U_A$ wird hier nicht an den Kathoden, sondern an den Anoden der Dioden zugeführt. Da die Anoden in der Symmetrieebene des Differenzverstärkers liegen, ist die Spannung an diesem Punkt bei idealer Differenzaussteuerung konstant, d.h. der Punkt liegt kleinsignalmäßig auf Masse; wir können deshalb die Abstimmspannung direkt anlegen, ohne dass die Dioden kleinsignalmäßig kurzgeschlossen werden.

Bei Breitband-VCOs ist es im allgemeinen nicht möglich, die Schleifenverstärkung über den gesamten Abstimmbereich optimal einzustellen, d.h. eine maximale Verstärkung von 3 dB bei Phase Null zu erzielen. Mit zunehmender Frequenz nimmt das Betragsmaximum der Schleifenverstärkung ab und die Phase eilt immer stärker nach. Um dennoch der optimalen Einstellung möglichst nahe zu kommen, muss der Verstärker einen Hochpass enthalten, der dem Abfall von Betrag und Phase entgegenwirkt. Diesen Hochpass haben wir in der Schaltung in Abb. 26.103a dadurch realisiert, dass wir im Gegensatz zu Abb. 26.40 zwei Stromquellen $(T_3, T_4)$ eingesetzt und einen Gegenkopplungswiderstand $R_E$ vorgesehen haben. Wir müssen in diesem Fall keine separate Kapazität parallel zu $R_E$ vorsehen, da die Kollektor-Substrat-Kapazitäten der Transistoren $T_3$ und $T_4$ bereits in diesem Sinne wirken. Wir haben $R_E$ und die Kapazitäten $C_2, C_3$ des Colpitts-Spannungsteilers
<!-- page-import:1634:end -->

<!-- page-import:1635:start -->
1598  26. Oszillatoren

mit Hilfe einer Schaltungssimulation so dimensioniert, dass der Hochpass die Phase über den gesamten Abstimmbereich $f_R = 82 \ldots 170\,\mathrm{MHz}$ nahezu optimal kompensiert. Das Betragsmaximum schwankt zwischen 3,5 dB bei $f_R = 82\,\mathrm{MHz}$ und noch akzeptablen 2,2 dB bei $f_R = 170\,\mathrm{MHz}$. Eine weitere Verbesserung kann man dadurch erzielen, dass man die Abstimmspannung $U_A$ nicht nur zur Abstimmung der Varaktoren, sondern auch zur Steuerung der Stromquelle $I_0$ verwendet, um die Ruheströme und damit auch die Schleifenverstärkung mit zunehmender Frequenz anzuheben. Denkbar wäre auch, den Colpitts-Spannungsteiler $C_2, C_3$ um einen lose angekoppelten Varaktor so zu erweitern, dass der Teilerfaktor mit zunehmender Frequenz abnimmt. Man kann aber auch eine deutlich höhere Schleifenverstärkung einstellen und eine Amplitudenregelung verwenden. Wir gehen hier nicht weiter auf diese Möglichkeiten ein.

Der Abstimmbereich der Schaltung ist etwas größer als eine Oktave und die Abstimmsteilheit variiert um den Faktor 4, siehe Abb. 26.103b. Die Kennlinien verlaufen hier nach unten, da die Zählrichtung der Abstimmspannung im Vergleich zu den bisherigen Schaltungen invertiert ist.

Viele VCOs in integrierten Schaltungen für die Mobilkommunikation sind auf diese Weise realisiert. Da die meisten modernen Mobilkommunikationssysteme im Frequenzbereich 1,8, . . . 5,5 GHz arbeiten, sind die Oszillatorfrequenzen um den Faktor $10 \ldots 30$ höher als in unserem Beispiel; dadurch werden die Induktivitäten so klein, dass sie ebenfalls integriert werden können. Auch hyperabrupt[e] bipolare Varaktoren sind in modernen HF-Halbleiterprozessen verfügbar, so dass keine externen Varaktoren benötigt werden. In HF-CMOS-Prozessen werden MOS-Varaktoren verwendet.

### 26.4.2.5 Aussteuerung

Bei VCOs mit Kapazitätsdioden und großem Abstimmbereich sind die Dioden mit einem geringen Teilerfaktor an den Schwingkreis angekoppelt; dadurch wird die Spannungsamplitude an den Dioden relativ groß und entspricht im Grenzfall einer direkten Ankopplung der vollen Amplitude der Schwingkreisspannung. Daraus ergeben sich zwei Probleme:

- Wenn die Amplitude zu groß wird, geraten die Dioden in den Durchlassbereich, begrenzen die Schwingkreisspannung und reduzieren die Güte des Kreises. Das gilt vor allem für kleine Abstimmspannungen $U_A$, bei denen der Abstand zum Durchlassbereich am geringsten ist. Bei $U_A = 0$ ist nur noch eine Amplitude von etwa 0,4 V zulässig. Dieses Problem tritt bei MOS-Varaktoren nicht auf, da diese keinen Durchlassbereich besitzen.
- Aufgrund der Nichtlinearität der Varaktor-Kapazität hängt die effektive Kapazität von der Spannungsamplitude ab. Bei Kapazitätsdioden nimmt die effektive Kapazität mit der Amplitude zu; dadurch nimmt die Resonanzfrequenz ab. Die resultierende Umwandlung von Amplitudenschwankungen in Frequenzschwankungen beeinträchtigt die Frequenzstabilität des Oszillators und wirkt sich negativ auf das Rauschverhalten aus. Darüber hinaus verursacht die Nichtlinearität Oberwellen in der Schwingkreisspannung und – im Falle einer Modulation – Intermodulationsverzerrungen.

In beiden Fällen erzielt man bessere Ergebnisse, wenn man eine Reihenschaltung von zwei entgegengesetzt gepolten Kapazitätsdioden verwendet, siehe Abb. 1.28b auf Seite 30 und die Dioden $D_1, D_2$ in Abb. 26.104. Dieselbe Anordnung liegt auch bei dem in Abb. 26.103 gezeigten Breitband-VCO vor.

Ob eine derartige Reihenschaltung notwendig ist und welche Verbesserung man damit erzielen kann, muss man im Einzelfall mit Hilfe von Schaltungssimulationen oder Testmustern prüfen. Im allgemeinen versucht man zunächst, das Begrenzungsverhalten des

[unclear]
<!-- page-import:1635:end -->

<!-- page-import:1636:start -->
26.4 Frequenzabstimmung 1599

Abb. 26.104. Einfacher Sender mit Kanalabstimmung und Frequenztastung

Oszillators so auszulegen, dass keine zu großen Amplituden auftreten. Wenn dies nicht gelingt, kann man schnelle Schottky-Dioden zur Amplitudenbegrenzung einsetzen oder eine Amplitudenregelung verwenden.

### 26.4.2.6 Modulation

In Sendern mit FM-Modulation oder Frequenztastung (2-FSK) wird häufig eine direkte Modulation des HF-Oszillators vorgenommen; dazu verwendet man einen VCO mit kleinem Abstimmbereich, siehe Abschnitt 21.4.2.3 und Abb. 21.60 auf Seite 1201. Für die FM-Modulation wird eine hochlineare Abstimmkennlinie benötigt; deshalb wählt man den Abstimmbereich größer als den benötigten Frequenzhub und verwendet nur einen kleinen Teil der Kennlinie. Bei Frequenztastung wird die Frequenz mit einer rechteckförmigen Abstimms spannung zwischen zwei Werten umgeschaltet; die Form der Abstimmkennlinie ist dabei unbedeutend. In beiden Fällen werden häufig zwei Abstimmkreise verwendet: ein Kreis mit einem geringen Abstimmbereich zur Modulation und ein Kreis mit einem großen Abstimmbereich zur Einstellung der Senderfrequenz.

Abbildung 26.104 zeigt die typische Ausführung eines einfachen Senders mit Kanalabstimmung und Frequenztastung. Ausgangspunkt ist ein LC-Clapp-Oszillator mit den Schwingkreiselementen $L, C_1, C_2, C_3, C_k$. Die Kanalabstimmung erfolgt mit den antiseriell geschalteten Kapazitätsdioden $D_1, D_2$; die Abstimmspannung $U_A$ wird dabei von einer phasenstarren Schleife (PLL) so geregelt, dass $f_R = n f_{REF}$ gilt. Die Frequenztastung erfolgt über einen zweiten Abstimmkreis mit der Kapazitätsdiode $D_3$, die über die sehr kleine Kapazität $C_K$ nur schwach angekoppelt. Als Abstimmspannung dient hier eine Gleichspannung zur Einstellung des Arbeitspunkts mit einem überlagerten Rechtecksignal kleiner Amplitude zur Umtastung der Frequenz. Erzeugt wird dieses Signal mit den Widerständen $R_1, R_2, R_3$ aus dem Ausgangssignal eines UND-Gatters mit dem Dateneingang D (data) und dem Freigabeeingang EN (enable). Die Bandbreite der PLL muss deutlich geringer sein als die Taktrate der Daten (Umtastrate), damit die Frequenztastung nicht durch die Kanalabstimmung ausgeregelt wird.

Eine weitere Vereinfachung ergibt sich, wenn man auf die Kanalabstimmung verzichtet und einen passend abgestimmten Quarz- oder SAW-Resonator einsetzt; dann entfallen die PLL und die Dioden $D_1, D_2$. Die Induktivität $L$ und die Kapazität $C_1$ werden durch den Resonator ersetzt; $C_k$ wird durch einen Kurzschluss ersetzt. Der Sendekanal ist durch den Resonator vorgegeben und kann nicht verändert werden. Man verwendet in diesem Fall Co-
<!-- page-import:1636:end -->
