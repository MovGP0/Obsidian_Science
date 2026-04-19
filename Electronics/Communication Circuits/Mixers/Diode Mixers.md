# Diode Mixers

<!-- page-import:1435:start -->
1398  25. Mischer

a  mit Diode und Addition mittels Übertrager

b  mit Bipolartransistor und Addition mittels Übertrager

c  mit Bipolartransistor und Addition durch getrennte Zuführung an Basis und Emitter

**Abb. 25.12.** Typische Schaltungen für eine additive Mischung. Die Parallelschwingkreise sind auf die HF-Frequenz $f_{HF}$ abgestimmt.

einen Übertrager eingekoppelt. Als Bandpass für das HF-Signal wird ein Parallelschwingkreis verwendet. Die Spannung an der Diode entspricht der Summe $U_0 + u_{ZF} + u_{LO}$, da der Parallelschwingkreis bei der ZF- und der LO-Frequenz als Kurzschluss wirkt. Alle Stromanteile mit Ausnahme des HF-Anteils werden ausgangsseitig durch den Parallelschwingkreis kurzgeschlossen; der HF-Anteil erzeugt am Widerstand des Schwingkreises die HF-Ausgangsspannung $u_{HF}$. Die Schaltung hat den Nachteil, dass der HF-Strom über die ZF- und LO-Signalquelle fließen muss, damit der HF-Stromkreis geschlossen ist. Man kann dies verhindern, indem man zwischen dem Übertrager und der Diode einen Serienschwingkreis nach Masse anschließt, der den HF-Strom an dieser Stelle kurzschließt, siehe Abb. 25.12a. Für einen optimalen Betrieb ist eine vollständige Entkopplung der ZF-, LO- und HF-Anschlüsse erforderlich; dazu muss man auch den ZF- und den LO-Kreis mit einem Parallelschwingkreis versehen, der für die jeweilige Frequenz als Leerlauf, für die anderen Frequenzen dagegen näherungsweise als Kurzschluss wirkt. Wir gehen darauf im Abschnitt 25.3 noch näher ein. Da die Diode ein passives Element ist, ist die verfügbare HF-Leistung am Ausgang grundsätzlich geringer als die zugeführte ZF-Leistung, d.h. es entsteht ein Mischverlust (conversion loss).
<!-- page-import:1435:end -->

<!-- page-import:1444:start -->
25.3 Mischer mit Dioden 1407

Diode leitet

Diode sperrt

Kleinsignalersatzschaltbilder

Darstellung mit Schalter

**Abb. 25.18.** Beispiel für einen multiplikativen Mischer mit einer Diode

Wir gehen im folgenden ausführlich auf den Mischer mit einer Diode ein, da man alle Mischer mit Dioden bezüglich ihres Übertragungsverhaltens auf diese Struktur reduzieren kann.

### 25.3.1 Eintaktmischer

Abbildung 25.19a zeigt das Schaltbild eines Mischers mit einer Diode, der als *Eintakt-(Dioden-)mischer* bezeichnet wird. Die LO-Spannung $U_{LO}$ ist eine Großsignalspannung, mit der der Arbeitspunkt der Diode periodisch zwischen dem Durchlass- und dem Sperrbereich umgeschaltet wird. Die ZF-Spannung $u_{ZF}$ ist eine Kleinsignalspannung und wird entsprechend dem Kleinsignalverhalten der Diode auf den HF-Ausgang übertragen. Die LO- und die ZF-Spannung werden mit einem 1:1-Übertrager addiert.

Die Trennung der Frequenzen an den drei Anschlüssen erfolgt mit drei schmalbandigen Parallelschwingkreisen. Sie wirken bei der Resonanzfrequenz als Leerlauf und sind des-
<!-- page-import:1444:end -->

<!-- page-import:1445:start -->
1408  25. Mischer

a Schaltbild mit Signalquellen und HF-Lastwiderstand

b LO-Kreis

c Kleinsignalersatzschaltbild für den HF- und den ZF-Kreis

**Abb. 25.19.** Eintaktmischer

halb für diese Frequenz unwirksam. Dagegen werden alle anderen Frequenzen näherungsweise kurzgeschlossen. Daraus folgt, dass an den Anschlüssen nur noch Spannungen und Ströme mit der jeweiligen Resonanzfrequenz auftreten. Die Kapazität der Diode wird als Bestandteil der Parallelschwingkreise aufgefasst und muss deshalb nicht getrennt berücksichtigt werden $^2$. Aufgrund der schmalbandigen Filter bezeichnet man diese Betriebsart als *Schmalbandbetrieb*.

Die Vorgehensweise zur Berechnung der Eigenschaften ist prinzipiell dieselbe wie bei allen Kleinsignalschaltungen: man ermittelt den Arbeitspunkt und linearisiert die Schaltung; anschließend kann man das Kleinsignalverhalten berechnen. Im Unterschied zu Ver-

---

$^2$ Durch das Zusammenwirken von Kapazität und Bahnwiderstand der Diode entstehen frequenzproportionale Verluste, die wir im Rahmen unserer einfachen Untersuchung vernachlässigen. Eine ausführliche Berechnung findet sich in [25.1].
<!-- page-import:1445:end -->

<!-- page-import:1446:start -->
25.3 Mischer mit Dioden 1409

stärkern ist der Arbeitspunkt bei Mischern jedoch nicht konstant, sondern ändert sich periodisch entsprechend der LO-Spannung; man erhält einen *zeitvarianten Arbeitspunkt*. Die Berechnung dieses zeitvarianten Arbeitspunkts erfolgt durch eine Betrachtung des *LO-Kreises*.

#### 25.3.1.1 LO-Kreis

Abbildung 25.19b zeigt den LO-Kreis des Eintaktmischers; dabei ist berücksichtigt, dass die Parallelschwingkreise am ZF- und am HF-Anschluss bei der LO-Frequenz und Vielfachen davon als Kurzschluss wirken. Der 1:1-Übertrager überträgt die LO-Spannung auf die Diode. Sie ist sinusförmig mit der LO-Frequenz $f_{LO}$, da der LO-Parallelschwingkreis alle Oberwellen bei Vielfachen von $f_{LO}$ unterdrückt:

$$
U_D(t) = U_{LO}(t) = \hat{u}_{LO}\cos \omega_{LO} t
$$

Aus der Spannung erhält man mit Hilfe der Kennlinie der Diode den Strom $I_{D,LO}(t)$ des zeitvarianten Arbeitspunkts

$$
I_{D,LO}(t) = I_D(U_{LO}(t))
$$

mit dem Maximalwert:

$$
I_{D,max} = I_D(\hat{u}_{LO})
$$

Man kann ihn nicht mit der einfachen, exponentiellen Diodenkennlinie nach (1.1) berechnen, da Mischerdioden in einem Bereich betrieben werden, in dem sich der Bahnwiderstand deutlich bemerkbar macht. Abbildung 25.20 zeigt den prinzipiellen Verlauf von $U_{LO}(t)$ und $I_{D,LO}(t)$. Damit ein nennenswerter Strom fließt, muss die Amplitude $\hat{u}_{LO}$ größer sein als die Flussspannung $U_F$ der Diode.

Der Strom $I_{D,LO}(t)$ kann in eine Fourier-Reihe entwickelt werden:

$$
I_{D,LO}(t) = I_{D,0} + \sum_{n=1}^{\infty} \hat{i}_{D,n}\cos n\omega_{LO} t
$$

(25.2)

Dabei ist $I_{D,0}$ der Gleichanteil und $\hat{i}_{D,1}$ die Amplitude der Grundwelle mit der Frequenz $f_{LO}$. Die Reihe enthält hier nur Cosinus-Anteile, da der Strom in Abb. 25.20 eine *gerade* Funktion der Zeit ist ($I_{D,LO}(-t)=I_{D,LO}(t)$); für die Koeffizienten der Fourier-Reihe gilt in diesem Fall:

$$
I_{D,0} = f_{LO}\int_0^{1/f_{LO}} I_{D,LO}(t)\,dt
$$

$$
\hat{i}_{D,n} = 2f_{LO}\int_0^{1/f_{LO}} I_{D,LO}(t)\cos n\omega_{LO} t\,dt
$$

In der Praxis kann man die Koeffizienten mit Hilfe einer Schaltungssimulation ermitteln, indem man eine Zeitbereichssimulation des LO-Kreises vornimmt, den Strom $I_{D,LO}(t)$ spektral darstellt³ und die Amplituden der Anteile abliest.

Abbildung 25.21a zeigt den Gleichanteil $I_{D,0}$, den Grundwellenanteil $\hat{i}_{D,1}$ und den Maximalstrom $I_{D,max}$ für eine Schottky-Diode des Typs BAS40 in Abhängigkeit von der LO-Amplitude $\hat{u}_{LO}$. Oberhalb $\hat{u}_{LO}=0{,}3\ \mathrm{V}$ verlaufen die Anteile aufgrund des Bahnwiderstands nicht mehr exponentiell.

---

³ Bei PSpice nutzt man dazu die FFT-Funktion des Programms *Probe*.
<!-- page-import:1446:end -->

<!-- page-import:1447:start -->
1410  25. Mischer

Abb. 25.20. Eintaktmischer: Spannung $U_{LO}(t)$ am LO-Kreis, Strom $I_{D,LO}(t)$ der Diode und resultierender Verlauf des Kleinsignalleitwerts $g_D(t)$. $U_F$ ist die Flussspannung der Diode.

Der Gleichanteil und die Oberwellen des Stroms $I_{D,LO}(t)$ werden durch den LO-Parallelschwingkreis kurzgeschlossen; nur für die Grundwelle ist der Schwingkreis unwirksam. Daraus folgt, dass der Strom $I_{LO}(t)$ am LO-Anschluss der Grundwelle des Stroms $I_{D,LO}(t)$ entspricht:

$$
I_{LO}(t)=I_{D,LO}(t)\big|_{f=f_{LO}}=\hat{i}_{D,1}\cos\omega_{LO}t
$$

Da sowohl $U_{LO}(t)$ als auch $I_{LO}(t)$ sinusförmig sind, verhält sich der LO-Kreis bei konstanter LO-Amplitude nach außen wie ein ohmscher Widerstand mit:

$$
R_{LO}=\frac{U_{LO}(t)}{I_{LO}(t)}=\frac{\hat{u}_{LO}}{\hat{i}_{D,1}}
\qquad\qquad (25.3)
$$

Demnach treten beim Betrieb mit einer sinusförmigen LO-Spannungsquelle $U_{g,LO}$ mit Innenwiderstand $R_{g,LO}$ keine Oberwellen im Strom $I_{LO}(t)$ auf. Bei $R_{LO}=R_{g,LO}$ liegt Leistungsanpassung zwischen der LO-Spannungsquelle und dem LO-Kreis vor; bei $R_{LO}\ne R_{g,LO}$ kann man ein Anpassnetzwerk einsetzen oder das Übersetzungsverhältnis des Übertragers ändern. Die Leistungsanpassung wird allerdings nur für die vorgegebene LO-Amplitude erzielt, da der Widerstand $R_{LO}$ aufgrund des nichtlinearen Zusammenhangs zwischen $\hat{u}_{LO}$ und $\hat{i}_{D,1}$ mit zunehmender LO-Amplitude abnimmt. Abbildung 25.21b zeigt den Widerstand $R_{LO}$ in Abhängigkeit von der LO-Amplitude für eine Schottky-Diode des Typs BAS40.

Die LO-Spannung wird in der Praxis mit einem Hochfrequenz-Oszillator erzeugt; dabei ist die benötigte Leistung am LO-Anschluss von Interesse:
<!-- page-import:1447:end -->

<!-- page-import:1448:start -->
25.3 Mischer mit Dioden 1411

a Strom der Diode: Gleichanteil $I_{D,0}$, Grundwellenanteil $\hat{i}_{D,1}$ und Maximalstrom $I_{D,max}$

b Widerstände für Leistungsanpassung: $R_{LO}$ am LO-Anschluss und $Z_{W,M}$ am ZF- und HF-Anschluss

c Leistung $P_{LO}$ am LO-Anschluss

d Kleinsignalleitwert: Gleichanteil $g_{D,0}$ und Grundwellenanteil $g_{D,1}$

**Abb. 25.21.** Größen für einen Eintaktmischer mit einer Schottky-Diode des Typs BAS40

$$
P_{LO}=\frac{1}{2}\,\hat{u}_{LO}\,\hat{i}_{D,1}=\frac{1}{2}\,\frac{\hat{u}_{LO}^{2}}{R_{LO}}
\qquad (25.4)
$$

Sie nimmt mit zunehmender LO-Amplitude stärker zu als bei einem ohmschen Widerstand, da $R_{LO}$ gleichzeitig abnimmt. Abbildung 25.21c zeigt die LO-Leistung in Abhängigkeit von der LO-Amplitude für eine Schottky-Diode des Typs BAS40.

#### 25.3.1.2 Kleinsignalersatzschaltbild

Durch Linearisieren der Diode erhält man das in Abb. 25.19c gezeigte Kleinsignalersatzschaltbild für den ZF- und den HF-Kreis. Da der Arbeitspunkt zeitvariant ist, wird die Diode durch einen zeitvarianten Kleinsignalleitwert $g_D(t)$
<!-- page-import:1448:end -->

<!-- page-import:1449:start -->
1412  25. Mischer

$$
g_D(t)=g_D(U_{LO}(t))=\left.\frac{d\,I_D}{d\,U_D}\right|_{U_D=U_{LO}(t)}
\qquad\qquad (25.5)
$$

mit dem Maximalwert

$$
g_{D,max}=g_D(\hat{u}_{LO})=\left.\frac{d\,I_D}{d\,U_D}\right|_{U_D=\hat{u}_{LO}}
$$

beschrieben. Man verwendet den Kleinsignalleitwert, da der Kleinsignalwiderstand $r_D(t)=1/g_D(t)$ im Sperrbereich gegen Unendlich geht und deshalb nicht adäquat dargestellt werden kann.

Der Verlauf des Kleinsignalleitwerts ist in Abb. 25.20 dargestellt. Er ist bei kleinen Strömen proportional zu $I_{D,LO}(t)$, da hier gemäß (1.3)

$$
g_D(t)=\frac{1}{r_D(t)}\approx \frac{I_{D,LO}(t)}{nU_T}
\qquad\qquad (25.6)
$$

gilt. Bei großen Strömen macht sich der Bahnwiderstand bemerkbar. Hier nimmt der Leitwert nicht mehr proportional zum Strom zu; deshalb sind die Spitzen im Verlauf des Leitwerts weniger ausgeprägt als die des Stroms.

Der Kleinsignalleitwert wird ebenfalls in eine Fourier-Reihe entwickelt:

$$
g_D(t)=g_{D,0}+\sum_{n=1}^{\infty} g_{D,n}\cos n\omega_{LO}t
\qquad\qquad (25.7)
$$

Die Berechnung der Koeffizienten kann wie beim Strom $I_{D,LO}(t)$ über die Integralgleichungen der Fourier-Reihenentwicklung erfolgen. In der Praxis ist dies nicht erforderlich, da man die benötigten Koeffizienten mit Hilfe einer Schaltungssimulation ermitteln kann; wir gehen darauf später noch ein. Abbildung 25.21d zeigt den Gleichanteil $g_{D,0}$ und den Grundwellenanteil $g_{D,1}$ für eine Schottky-Diode des Typs BAS40 in Abhängigkeit von der LO-Amplitude.

### 25.3.1.3 Kleinsignalverhalten

Wir betreiben den Mischer im folgenden in Gleichlage mit $f_{HF}=f_{LO}+f_{ZF}$ und berechnen zunächst den Kleinsignalstrom $i_D(t)$ der Diode. Aus Abb. 25.19c folgt:

$$
i_D(t)=g_D(t)\,u_D(t)=g_D(t)\,(u_{ZF}(t)-u_{HF}(t))
\qquad\qquad (25.8)
$$

Die Spannungen $u_{ZF}(t)$ und $u_{HF}(t)$ enthalten nur Anteile bei der ZF- bzw. HF-Frequenz, da die Parallelschwingkreise alle anderen Frequenzen kurzschließen:

$$
u_{ZF}(t)=\hat{u}_{ZF}\cos\omega_{ZF}t \quad,\quad
u_{HF}(t)=\hat{u}_{HF}\cos\omega_{HF}t
\qquad\qquad (25.9)
$$

Durch Einsetzen von (25.7) und (25.9) in (25.8) erhält man:

$$
i_D(t)=\left(g_{D,0}+\sum_{n=1}^{\infty} g_{D,n}\cos n\omega_{LO}t\right)
\left(\hat{u}_{ZF}\cos\omega_{ZF}t-\hat{u}_{HF}\cos\omega_{HF}t\right)
$$

$$
=\left(g_{D,0}+g_{D,1}\cos\omega_{LO}t+\cdots\right)
\left(\hat{u}_{ZF}\cos\omega_{ZF}t-\hat{u}_{HF}\cos\omega_{HF}t\right)
$$

$$
=g_{D,0}\hat{u}_{ZF}\cos\omega_{ZF}t-g_{D,0}\hat{u}_{HF}\cos\omega_{HF}t
$$

$$
\quad + g_{D,1}\hat{u}_{ZF}\cos\omega_{LO}t\cos\omega_{ZF}t
- g_{D,1}\hat{u}_{HF}\cos\omega_{LO}t\cos\omega_{HF}t + \cdots
$$

$$
= g_{D,0}\hat{u}_{ZF}\cos\omega_{ZF}t-g_{D,0}\hat{u}_{HF}\cos\omega_{HF}t
$$
<!-- page-import:1449:end -->

<!-- page-import:1450:start -->
25.3 Mischer mit Dioden 1413

$$
+\frac{g_{D,1}\,\hat{u}_{ZF}}{2}\left[\cos(\omega_{LO}+\omega_{ZF})\,t+\cos(\omega_{LO}-\omega_{ZF})\,t\right]
$$

$$
-\frac{g_{D,1}\,\hat{u}_{HF}}{2}\left[\cos(\omega_{HF}+\omega_{LO})\,t+\cos(\omega_{HF}-\omega_{LO})\,t\right]+\ldots
$$

Man erkennt, dass der Grundwellenanteil $g_{D,1}$ des Kleinsignalleitwerts $g_D(t)$ die gewünschte Frequenzumsetzung von $f_{ZF}$ nach $f_{HF}$ bewirkt, indem er einen Anteil bei der Frequenz $f_{LO}+f_{ZF}=f_{HF}$ verursacht, der proportional zur ZF-Amplitude $\hat{u}_{ZF}$ ist. In gleicher Weise erfolgt eine Umsetzung von $f_{HF}$ nach $f_{ZF}$, d.h. es entsteht ein Anteil bei der Frequenz $f_{HF}-f_{LO}=f_{ZF}$, der proportional zur HF-Amplitude $\hat{u}_{HF}$ ist. Durch die Oberwellenanteile des Kleinsignalleitwerts entstehen weitere Anteile bei höheren Frequenzen, die für die weitere Rechnung nicht relevant sind.

Der Kleinsignalstrom $i_D(t)$ der Diode fließt durch den ZF- und den HF-Kreis. Durch die Parallelschwingkreise werden im ZF-Kreis alle Anteile mit $f\neq f_{ZF}$ und im HF-Kreis alle Anteile mit $f\neq f_{HF}$ kurzgeschlossen; nur die Anteile mit den jeweiligen Resonanzfrequenzen fließen über die Anschlüsse. Demnach erhält man die Kleinsignalströme $i_{ZF}(t)$ und $i_{HF}(t)$, indem man aus dem Strom $i_D(t)$ die Anteile bei $f_{ZF}$ bzw. $f_{HF}$ extrahiert:

$$
i_{ZF}(t)=i_D(t)\big|_{f=f_{ZF}}=\left(g_{D,0}\hat{u}_{ZF}-\frac{g_{D,1}\hat{u}_{HF}}{2}\right)\cos\omega_{ZF}t
$$

$$
i_{HF}(t)=-i_D(t)\big|_{f=f_{HF}}=\left(g_{D,0}\hat{u}_{HF}-\frac{g_{D,1}\hat{u}_{ZF}}{2}\right)\cos\omega_{HF}t
$$

Daraus entnimmt man für die Spannungs- und Stromzeiger die Zusammenhänge:

$$
\underline{i}_{ZF}=g_{D,0}\,\underline{u}_{ZF}-\frac{g_{D,1}\,\underline{u}_{HF}}{2}
\qquad\qquad (25.10)
$$

$$
\underline{i}_{HF}=g_{D,0}\,\underline{u}_{HF}-\frac{g_{D,1}\,\underline{u}_{ZF}}{2}
\qquad\qquad (25.11)
$$

Diese Gleichungen entsprechen den Gleichungen eines Vierpols in Y-Darstellung; deshalb kann man das Kleinsignalverhalten des Mischers durch eine Y-Matrix beschreiben:

$$
\begin{bmatrix}
\underline{i}_{ZF}\\
\underline{i}_{HF}
\end{bmatrix}
=
\begin{bmatrix}
g_{D,0} & -\dfrac{g_{D,1}}{2}\\
-\dfrac{g_{D,1}}{2} & g_{D,0}
\end{bmatrix}
\begin{bmatrix}
\underline{u}_{ZF}\\
\underline{u}_{HF}
\end{bmatrix}
\qquad (25.12)
$$

Mit dieser Y-Matrix kann man alle interessierenden Größen wie z.B. die Kleinsignalverstärkung oder die Ein- bzw. Ausgangswiderstände an den Anschlüssen berechnen. Die Frequenzumsetzung des Mischers tritt dabei nicht mehr explizit in Erscheinung. Abbildung 25.22 zeigt das zugehörige Kleinsignalersatzschaltbild.

Aus der Y-Darstellung des Mischers folgt unmittelbar ein Verfahren zur Ermittlung der Koeffizienten $g_{D,0}$ und $g_{D,1}$ mit Hilfe einer Schaltungssimulation. Dazu betreibt man den Mischer gemäß Abb. 25.23 mit einer LO-Spannungsquelle mit der vorgesehenen Amplitude $\hat{u}_{LO}$ und einer ZF-Spannungsquelle mit der Kleinsignalamplitude $\hat{u}_{ZF}\ll \hat{u}_{LO}$. In der Schaltungssimulation kann man die beiden Spannungsquellen unmittelbar in Reihe schalten; dadurch entfällt der Übertrager. Die Parallelschwingkreise am LO- und am ZF-Anschluss entfallen ebenfalls, da die Spannungsquellen nur Anteile mit der jeweiligen
<!-- page-import:1450:end -->

<!-- page-import:1451:start -->
1414  25. Mischer

ZF-Kreis mit $f=f_{ZF}$

HF-Kreis mit $f=f_{HF}$

**Abb. 25.22.** Kleinsignalersatzschaltbild eines Mischers bei Schmalbandbetrieb

Frequenz enthalten und alle anderen Frequenzen kurzschließen; sie übernehmen damit dieselbe Funktion wie die Schwingkreise. Der HF-Ausgang wird kurzgeschlossen; dadurch entfällt der HF-Parallelschwingkreis. Für diesen Betriebsfall folgt aus (25.12) mit $u_{HF}=0$:

$$
i_{ZF}=g_{D,0}u_{ZF} \quad ; \quad i_{HF}=-\frac{g_{D,1}}{2}u_{ZF}
$$

Daraus erhält man durch Einsetzen der Kleinsignalamplituden die Bestimmungsgleichungen für die Koeffizienten:

$$
g_{D,0}=\frac{\hat{i}_{ZF}}{\hat{u}_{ZF}} \quad ; \quad g_{D,1}=-\frac{2\hat{i}_{HF}}{\hat{u}_{ZF}}
$$

Die Kleinsignalamplitude $\hat{u}_{ZF}$ ist durch die ZF-Spannungsquelle vorgegeben. Nun wird mit Hilfe einer Zeitbereichssimulation der Strom $I_D(t)$ der Diode ermittelt. Aus der spektralen Darstellung von $I_D(t)$ kann man die Kleinsignalamplituden $\hat{i}_{ZF}$ (Anteil bei $f_{ZF}$) und $\hat{i}_{HF}$ (Anteil bei $f_{HF}$) entnehmen.

#### 25.3.1.4 Mischverstärkung

Wir können nun die Mischverstärkung

$$
A_M=\frac{u_{HF}}{u_{ZF}}
$$

des Mischers berechnen. Am HF-Anschluß gilt nach Abb. 25.19c:

$$
i_{HF}=-\frac{u_{HF}}{R_{L,HF}}
$$

Einsetzen in (25.11) und Auflösen nach $u_{HF}/u_{ZF}$ und liefert:

$U_D(t)=U_{LO}(t)+u_{ZF}(t)$

$U_{LO}(t)=\hat{u}_{LO}\cos\omega_{LO}t$

$u_{ZF}(t)=\hat{u}_{ZF}\cos\omega_{ZF}t$

mit $\hat{u}_{ZF}\ll \hat{u}_{LO}$

$I_D(t)=\cdots+\hat{i}_{ZF}\cos\omega_{ZF}t-\hat{i}_{HF}\cos\omega_{HF}t\cdots$

$$
g_{D,0}=\frac{\hat{i}_{ZF}}{\hat{u}_{ZF}} \qquad g_{D,1}=-\frac{2\hat{i}_{HF}}{\hat{u}_{ZF}}
$$

**Abb. 25.23.** Schaltungssimulation zur Ermittlung der Koeffizienten $g_{D,0}$ und $g_{D,1}$ eines Eintaktmischers. Die Amplituden $\hat{i}_{ZF}$ und $\hat{i}_{HF}$ erhält man aus der spektralen Darstellung des Stroms $I_D(t)$.
<!-- page-import:1451:end -->

<!-- page-import:1452:start -->
25.3 Mischer mit Dioden 1415

$$
A_M \;=\; \frac{u_{HF}}{u_{ZF}} \;=\; \frac{1}{2}\,\frac{g_{D,1}R_{L,HF}}{1+g_{D,0}R_{L,HF}}
$$

(25.13)

Die Mischverstärkung ist proportional zum Grundwellenanteil $g_{D,1}$ des Kleinsignalleitwerts der Diode. Sie wird für $R_{L,HF}\rightarrow\infty$ maximal; in diesem Fall wird allerdings keine Leistung an den HF-Kreis abgegeben.

### 25.3.1.5 Mischgewinn

Mischer werden in den meisten Fällen in einem angepassten System eingesetzt; in diesem Fall entsprechen der Innenwiderstand $R_{g,ZF}$ der ZF-Spannungsquelle und der HF-Lastwiderstand $R_{L,HF}$ dem Wellenwiderstand $Z_W$ des Systems: $R_{g,ZF}=R_{L,HF}=Z_W$. Die dabei erzielte Leistungsverstärkung wird Mischgewinn (conversion gain) $G_M$ genannt und entspricht dem Übertragungsgewinn $G_T$ eines Verstärkers; mit den Y-Parametern

$$
Y_{11}=Y_{22}=g_{D,0}\;,\quad Y_{12}=Y_{21}=-\frac{g_{D,1}}{2}
$$

des Mischers und den Quellen- und Lastleitwerten

$$
\operatorname{Re}\{Y_g\}=\frac{1}{R_{g,ZF}}\;,\quad \operatorname{Re}\{Y_L\}=\frac{1}{R_{L,HF}}
$$

erhält man aus (24.34):

$$
G_M \;=\; \frac{g_{D,1}^2\,R_{g,ZF}R_{L,HF}}{\left[\left(1+g_{D,0}R_{g,ZF}\right)\left(1+g_{D,0}R_{L,HF}\right)-\frac{1}{4}g_{D,1}^2R_{g,ZF}R_{L,HF}\right]^2}
$$

(25.14)

Daraus folgt mit $R_{g,ZF}=R_{L,HF}=Z_W$:

$$
G_M \;=\; \left[\frac{g_{D,1}Z_W}{\left(1+g_{D,0}Z_W\right)^2-\frac{1}{4}g_{D,1}^2Z_W^2}\right]^2
$$

(25.15)

Da der Mischgewinn bei Mischern mit Dioden kleiner als Eins ist, wird häufig der Mischverlust (conversion loss) $L_M=1/G_M$ angegeben. Die Werte werden meist in Dezibel angegeben:

$$
G_M\;[\mathrm{dB}] \;=\; 10\,\log G_M \;,\qquad L_M\;[\mathrm{dB}] \;=\; 10\,\log L_M \;=\; -\,G_M\;[\mathrm{dB}]
$$

Im Abschnitt 24.4.1.6 haben wir gezeigt, dass ein Verstärker genau dann beidseitig an einen Wellenwiderstand $Z_W$ angepasst ist, wenn die Y-Parameter die Bedingungen

$$
Y_{11}=Y_{22}\;,\qquad (Y_{11}Y_{22}-Y_{12}Y_{21})\,Z_W^2=1
$$

erfüllen, siehe (24.38). Da ein Diodenmischer die erste Bedingung erfüllt, kann man aus der zweiten Bedingung den für eine beidseitige Anpassung erforderlichen Wellenwiderstand berechnen:

$$
Z_{W,M} \;=\; \frac{1}{\sqrt{Y_{11}Y_{22}-Y_{12}Y_{21}}}
\;=\;
\frac{1}{\sqrt{g_{D,0}^2-\frac{g_{D,1}^2}{4}}}
$$

(25.16)
<!-- page-import:1452:end -->

<!-- page-import:1453:start -->
1416  25. Mischer

*Abb. 25.24.*  
Maximaler verfügbarer Leistungsgewinn $MAG$ in Abhängigkeit vom Verhältnis der Koeffizienten $g_{D,1}$ und $g_{D,0}$ des Kleinsignalleitwerts $g_D(t)$

Die zugehörige Leistungsverstärkung entspricht dem maximalen verfügbaren Leistungsgewinn $MAG$ eines Verstärkers und wird mit (24.39) berechnet:

$$
MAG \;=\; \frac{|Y_{21}|^2 Z_{W,M}^2}{|1 + Y_{11} Z_{W,M}|^2}
\;=\;
\frac{1 - \sqrt{1 - \frac{1}{4}\left(\frac{g_{D,1}}{g_{D,0}}\right)^2}}
{1 + \sqrt{1 - \frac{1}{4}\left(\frac{g_{D,1}}{g_{D,0}}\right)^2}}
$$

(25.17)

Dasselbe Ergebnis erhält man, wenn man (25.16) in (25.15) einsetzt oder das Maximum des Mischgewinns über die Bedingung

$$
\frac{dG_M}{dZ_W} = 0
$$

ermittelt. Der maximale verfügbare Leistungsgewinn hängt nur noch vom Verhältnis der Koeffizienten $g_{D,1}$ und $g_{D,0}$ des Kleinsignalleitwerts der Diode ab, siehe Abb. 25.24. Damit der Mischer bei beidseitiger Anpassung stabil ist, muss die Stabilitätsbedingung

$$
g_{D,0} \;>\; \frac{g_{D,1}}{2}
$$

erfüllt sein; nur dann sind die Terme unter den Wurzeln in (25.16) und (25.17) positiv. Aus der Stabilitätsbedingung folgt die Stabilitätsgrenze in Abb. 25.24. Bei Mischern mit Dioden ist die Stabilitätsbedingung aufgrund der Passivität der Dioden immer erfüllt.

Abbildung 25.25 zeigt den Mischgewinn $G_{M(50)}$ in einem $50\,\Omega$-System ($R_{g,ZF} = R_{L,HF} = 50\,\Omega$) und den maximalen verfügbaren Leistungsgewinn $MAG$ ($R_{g,ZF} = R_{L,HF} = Z_{W,M}$) für einen Eintaktmischer mit einer Schottky-Diode des Typs BAS40 in Abhängigkeit von der LO-Amplitude. Der Wellenwiderstand $Z_{W,M}$ für beidseitige Anpassung ist in Abb. 25.21b auf Seite 1411 dargestellt. Der maximale verfügbare Leistungsgewinn $MAG$ erreicht für $\hat{u}_{LO} \approx 0{,}3\,\mathrm{V}$ einen Maximalwert von etwa $-3\,\mathrm{dB}$ und nimmt darüber langsam ab. Der Mischgewinn $G_{M(50)}$ ist bei kleinen LO-Amplituden aufgrund der starken Fehlanpassung ($Z_{W,M} \gg 50\,\Omega$) sehr klein, nimmt aber mit zunehmender LO-Amplitude rasch zu und weist im Bereich $\hat{u}_{LO} = 0{,}5 \ldots 0{,}6\,\mathrm{V}$ ein breites Maximum auf. Oberhalb dieses Maximums sind $G_{M(50)}$ und $MAG$ nahezu gleich, da $Z_{W,M}$ in diesem Bereich gegen $50\,\Omega$ geht.
<!-- page-import:1453:end -->

<!-- page-import:1454:start -->
25.3 Mischer mit Dioden 1417

**Abb. 25.25.**  
Mischgewinn $G_M(50)$ $(R_{g,ZF} = R_{L,HF} = 50\,\Omega)$ und maximaler verfügbarer Leistungsgewinn $MAG$ für einen Eintaktmischer mit einer Schottky-Diode des Typs BAS40

Mischer mit Dioden werden in den meisten Fällen ohne spezielle Anpassschaltungen betrieben. Die LO-Amplitude wird so gewählt, dass das Maximum des Mischgewinns $G_M(50)$ fast erreicht wird; dadurch wird ein guter Kompromiss zwischen Mischgewinn und benötigter LO-Leistung erzielt. In Abb. 25.25 ist der sinnvolle Arbeitsbereich für die Diode BAS40 eingezeichnet; hier wird $G_M(50) \approx -5\,\mathrm{dB}$ erzielt. Eine Anpassung lohnt sich nicht, da der maximale verfügbare Leistungsgewinn nur um etwa 1 dB größer ist.

Durch das Zusammenwirken von Bahnwiderstand und Kapazität der Diode entstehen zusätzliche, frequenzproportionale Verluste, die wir hier nicht berücksichtigt haben; dadurch reduziert sich der Mischgewinn je nach Diode und Frequenz auf $G_M(50) \approx -5 \dots -8\,\mathrm{dB}$. In [25.1] werden diese Verluste näher erläutert.

### 25.3.1.6 Vergleich mit idealem Schalter

In Abb. 25.18 auf Seite 1407 haben wir einen Eintaktmischer mit rechteckförmigem LO-Signal als Beispiel für einen multiplikativen Mischer mit Schalter gezeigt. Bei idealem Schaltverhalten erhält man bei diesem Mischer einen rechteckförmigen Verlauf des Kleinsignalleitwerts $g_D(t)$ mit den Werten $g_D = 0$ (Schalter geöffnet) und $g_{D,max} = 1/r_D(\hat{u}_{LO})$ (Schalter geschlossen); daraus folgt mit Hilfe der Reihenentwicklung für ein unipolares Rechtecksignal nach (25.1):

$$
g_{D,0} = \frac{g_{D,max}}{2}
,\qquad
g_{D,1} = \frac{2\,g_{D,max}}{\pi}
\qquad\Rightarrow\qquad
\frac{g_{D,1}}{g_{D,0}} = \frac{4}{\pi}
$$

Durch Einsetzen in (25.17) erhält man

$$
MAG = \frac{1-\sqrt{1-4/\pi^2}}{1+\sqrt{1-4/\pi^2}} \approx 0{,}13
$$

bzw. $MAG \approx -8{,}9\,\mathrm{dB}$. Demnach ist der maximale verfügbare Leistungsgewinn mit einer rechteckförmigen LO-Spannung deutlich geringer als mit einer sinusförmigen LO-Spannung $(MAG \approx -4 \dots -5\,\mathrm{dB})$. Dieses Ergebnis ist auf den ersten Blick überraschend. Es hängt damit zusammen, dass für den maximalen verfügbaren Leistungsgewinn nur das Verhältnis $g_{D,1}/g_{D,0}$ maßgebend ist. Dieses Verhältnis hat bei einem idealen Schalter den Wert $4/\pi \approx 1{,}27$ und ist damit geringer als bei typischen Diodenmischern mit sinusförmiger LO-Spannung $(g_{D,1}/g_{D,0} \approx 1{,}7 \dots 1{,}8)$, siehe Abb. 25.24. Für die Praxis ist dieses
<!-- page-import:1454:end -->

<!-- page-import:1455:start -->
1418  25. Mischer

Ergebnis von Vorteil, da die LO-Spannung ohnehin mit einem Hochfrequenz-Oszillator mit näherungsweise sinusförmiger Ausgangsspannung erzeugt wird.

### 25.3.1.7 Nachteile des Eintaktmischers

Beim Eintaktmischer ist vor allem die Verkopplung der Anschlüsse störend. Die Trennung der Frequenzen mit Hilfe der drei Parallelschwingkreise, die wir bei der vorausgegangenen Berechnung als ideal angenommen haben, ist in der Praxis nur näherungsweise möglich. Vor allem die HF- und die LO-Frequenz liegen häufig dicht beieinander, so dass eine Einkopplung des starken LO-Signals in den HF-Kreis nur mit hohem Filteraufwand verhindert werden kann. Bei einem Einsatz in Sendern und Empfängern mit variabler Sende- bzw. Empfangsfrequenz sind sowohl die HF- als auch die LO-Frequenz variabel; dadurch wird die Trennung der Frequenzen zusätzlich erschwert. Wenn sich die Abstimmbereiche der HF- und der LO-Frequenz überschneiden, ist eine Trennung mit festfrequenten Filtern nicht mehr möglich. Darüber hinaus erzeugt der Eintaktmischer eine starke Oberwelle bei der doppelten LO-Frequenz, da er nur eine Halbwelle der LO-Spannung nutzt.

## 25.3.2 Gegentaktmischer

Abbildung 25.26a zeigt das Schaltbild eines Mischers mit zwei Dioden, der als *Gegentakt-(Dioden-)mischer* bezeichnet wird. Mit der LO-Spannung $U_{LO}$ wird der Arbeitspunkt der Dioden periodisch zwischen dem Durchlass- und dem Sperrbereich umgeschaltet. Die ZF-Kleinsignalspannung $u_{ZF}$ wird mit dem 1:1:1-Übertrager $\ddot{U}_1$ zur Spannung der Diode $D_1$ addiert und von der Spannung der Diode $D_2$ subtrahiert; dadurch werden die Dioden kleinsignalmäßig im Gegentakt angesteuert, d.h. über beide Dioden fließt betragsmäßig derselbe Kleinsignalstrom $i_D$, jedoch mit unterschiedlicher Richtung. Auf der HF-Seite wird der Kleinsignalstrom $i_D$ mit dem 1:1:1-Übertrager $\ddot{U}_2$ ausgekoppelt und dem HF-Filter zugeführt.

Beim Gegentaktmischer sind der ZF- und der HF-Kreis vom LO-Kreis entkoppelt. Der Kleinsignalstrom $i_D$ der Dioden, der durch den ZF- und den HF-Kreis fließt, enthält keine Anteile bei der LO-Frequenz $f_{LO}$ oder Vielfachen davon. Umgekehrt fließen im LO-Kreis keine Ströme mit der ZF- oder der HF-Frequenz. Abbildung 25.27 verdeutlicht dies anhand der Betriebsfälle des Übertragers $\ddot{U}_1$. Abbildung 25.27a zeigt, dass der Mittelabgriff der Sekundärseite bei symmetrischer Belastung stromlos ist; deshalb verursacht die ZF-Spannung $u_{ZF}$ keinen Strom im LO-Kreis. Abbildung 25.27b zeigt, dass sich eine symmetrische Ansteuerung der Sekundärseite nicht auf die Primärseite auswirkt, da sich die Durchflutungen der beiden Sekundärspulen aufgrund des entgegengesetzten Stromflusses aufheben; deshalb verursacht die LO-Spannung $U_{LO}$ keinen Strom im ZF-Kreis. Demnach sind der ZF- und der LO-Kreis entkoppelt. In gleicher Weise sind auch der HF- und der LO-Kreis entkoppelt. Daraus folgt, dass die Filter im ZF- und im HF-Kreis nur noch zur Unterdrückung der jeweils anderen Frequenz und nicht mehr zur Unterdrückung der LO-Frequenz benötigt werden. Dadurch reduzieren sich vor allem die Anforderungen an das HF-Filter, da eine Trennung der dicht beieinander liegenden Frequenzen $f_{HF}$ und $f_{LO}$ nicht mehr notwendig ist. In gleicher Weise reduzieren sich die Anforderungen an das LO-Filter, da nun nur noch die Oberwellen bei Vielfachen von $f_{LO}$ unterdrückt werden müssen. Wenn man am LO-Anschluss Oberwellen zulassen kann, kann da LO-Filter entfallen; dadurch ändern sich jedoch die zeitlichen Verläufe der LO-Spannung und des LO-Stroms und damit auch das Kleinsignalverhalten.
<!-- page-import:1455:end -->

<!-- page-import:1456:start -->
25.3 Mischer mit Dioden 1419

a Schaltbild mit Lastwiderstand

b LO-Kreis

**Abb. 25.26.** Gegentaktmischer

a Ansteuerung der Primärseite

b symmetrische Ansteuerung der Sekundärseite

**Abb. 25.27.** Spannungen und Ströme am Übertrager Ü1 bei symmetrischer Belastung der Sekundärseite
<!-- page-import:1456:end -->

<!-- page-import:1457:start -->
1420  25. Mischer

**Abb. 25.28.** Kleinsignalersatzschaltbild eines Gegentaktmischers

## 25.3.2.1 LO-Kreis

Abbildung 25.26b zeigt den LO-Kreis des Gegentaktmischers. Über beide Dioden fließt derselbe Strom $I_{D,LO}(t)$ wie bei einem Eintaktmischer mit gleicher LO-Amplitude $\hat{u}_{LO}$. Da die beiden Dioden parallelgeschaltet sind, ist der Strom $I_{LO}(t)$ am LO-Anschluss doppelt so groß wie beim Eintaktmischer:

$$
I_{LO}(t) = 2\,I_{D,LO}(t)\,\big|_{f=f_{LO}}
$$

Dadurch halbiert sich der Widerstand $R_{LO}$:

$$
R_{LO} = \frac{1}{2}\,R_{LO(ET)}
\qquad\qquad (25.19)
$$

## 25.3.2.2 Kleinsignalersatzschaltbild und Kleinsignalverhalten

Durch Linearisieren der Dioden erhält man das in Abb. 25.28 oben gezeigte Kleinsignalersatzschaltbild. Die Kleinsignalleitwerte $g_{D1}(t)$ und $g_{D2}(t)$ sind gleich groß und entsprechen dem Kleinsignalleitwert eines Eintaktmischers mit gleicher LO-Amplitude, da die Spannungen und die Ströme der Dioden in beiden Fällen gleich sind:

$$
g_{D1}(t) = g_{D2}(t) = g_{D(ET)}(t)
\qquad\qquad (25.20)
$$

Man kann das Kleinsignalersatzschaltbild des Gegentaktmischers in das Kleinsignalersatzschaltbild eines Eintaktmischers überführen, indem man die Kleinsignalleitwerte der Dioden auf die Primärseite der Übertrager umrechnet; dazu wird zunächst der der Kleinsignalstrom $i_D(t)$ der Dioden berechnet:

$$
2u_{ZF}(t) - 2u_{HF}(t)
= \frac{i_D(t)}{g_{D1}(t)} + \frac{i_D(t)}{g_{D2}(t)}
\overset{(25.20)}{=}
\frac{2\,i_D(t)}{g_{D(ET)}(t)}
$$

$$
\Rightarrow\quad i_D(t) = g_{D(ET)}(t)\,\bigl(u_{ZF}(t) - u_{HF}(t)\bigr)
$$
<!-- page-import:1457:end -->

<!-- page-import:1458:start -->
25.3 Mischer mit Dioden 1421

**Abb. 25.29.**  
Mischgewinn $G_{M(50)}$ in einem  
50 $\Omega$-System für einen Eintakt-,  
einen Gegentakt- und einen  
Ringmischer mit Schottky-  
Dioden des Typs BAS40

Durch Umrechnen auf die Primärseite der Übertrager erhält man:

$$
i'_D(t) = 2\,i_D(t) = 2\,g_{D(ET)}(t)\,(u_{ZF}(t) - u_{HF}(t))
$$

Daraus folgt das in Abb. 25.28 unten gezeigte Kleinsignalersatzschaltbild, das dem Kleinsignalersatzschaltbild eines Eintaktmischers entspricht. Der Kleinsignalleitwert $g_D(t)$ ist doppelt so groß wie bei einem Eintaktmischer mit gleicher LO-Amplitude:

$$
g_D(t) = 2\,g_{D(ET)}(t)
$$

(25.21)

Damit sind auch die Koeffizienten der Fourier-Reihe von $g_D(t)$ doppelt so groß:

$$
g_{D,0} = 2\,g_{D,0(ET)} \quad,\quad g_{D,1} = 2\,g_{D,1(ET)}
$$

(25.22)

Mit diesem Zusammenhang kann man die Y-Matrix des Gegentaktmischers nach (25.12) aufstellen und alle weiteren Größen mit den Gleichungen (25.13)-(25.17) des Eintaktmischers berechnen.

Der maximale verfügbare Leistungsgewinn $MAG$ ist genauso groß wie bei einem Eintaktmischer mit gleicher LO-Amplitude, da hier gemäß (25.17) nur das Verhältnis von $g_{D,1}$ und $g_{D,0}$ eingeht; der zugehörige Wellenwiderstand ist jedoch um den Faktor 2 geringer, siehe (25.16):

$$
Z_{W,M} = \frac{1}{2}\,Z_{W,M(ET)}
$$

(25.23)

Der Mischgewinn $G_{M(50)}$ in einem 50 $\Omega$-System verläuft ähnlich wie bei einem Eintaktmischer; Abb. 25.29 zeigt einen Vergleich von Mischern mit Schottky-Dioden des Typs BAS40. Das Maximum von $G_{M(50)}$ liegt bei einem Gegentaktmischer immer etwas höher als bei einem Eintaktmischer und wird bei einer geringeren LO-Amplitude erreicht.

### 25.3.2.3 Vor- und Nachteile des Gegentaktmischers

Der wesentliche Vorteil des Gegentaktmischers im Vergleich zum Eintaktmischer ist die Entkopplung des LO-Kreises vom ZF- und vom HF-Kreis; dadurch wird eine Einkopplung des starken LO-Signals in den ZF- und den HF-Kreis verhindert. In der Praxis hängt der Grad der Entkopplung von der Symmetrie der Übertrager ab.

Der wesentliche Nachteil des Gegentaktmischers besteht darin, dass er ebenfalls nur eine Halbwelle der LO-Spannung nutzt und deshalb eine starke Oberwelle bei der doppelten LO-Frequenz erzeugt. Darüber hinaus stört die Verkopplung von ZF- und HF-Kreis, vor allem dann, wenn die ZF-Frequenz relativ hoch ist.
<!-- page-import:1458:end -->

<!-- page-import:1459:start -->
1422  25. Mischer

a Darstellung in Form von zwei antiparallelen Gegentaktmischern

b Darstellung mit Diodenring

**Abb. 25.30. Ringmischer**

### 25.3.3 Ringmischer

Abbildung 25.30 zeigt das Schaltbild eines Mischers mit vier Dioden, der als *Ringmischer* oder *Ringmodulator* bezeichnet wird. Er besteht aus zwei antiparallel geschalteten Gegentaktmischern $(D_1/D_2$ und $D_3/D_4)$, die kreuzweise verbunden sind, siehe Abb. 25.30a. Durch Umzeichnen erhält man die Darstellung mit einem Diodenring in Abb. 25.30b; ihr verdankt der Ringmischer seinen Namen. Wir verwenden im folgenden die Darstellung mit zwei Gegentaktmischern, da sie übersichtlicher ist.

Aufgrund der Antiparallelschaltung der beiden Gegentaktmischer nutzt der Ringmischer beide Halbwellen der LO-Spannung: bei positiver LO-Spannung leiten die Dioden $D_1$ und $D_2$, bei negativer die Dioden $D_3$ und $D_4$. Abbildung 25.31 zeigt die beiden Zustände des LO-Kreises. Die kreuzweise Verbindung bewirkt, dass die Polarität des Kleinsignalstroms $2i_D$ auf der HF-Seite mit jeder Halbwelle der LO-Spannung wechselt; deshalb arbeitet ein Ringmischer prinzipiell als multiplikativer Mischer mit bipolarem Rechtecksignal.
<!-- page-import:1459:end -->

<!-- page-import:1460:start -->
25.3 Mischer mit Dioden 1423

a positive LO-Spannung

b negative LO-Spannung

**Abb. 25.31.**  
LO-Kreis eines Ringmischers. $U_F$ ist die Flussspannung der Dioden.

Im Abschnitt 25.2.2 haben wir gezeigt, dass das HF-Signal eines multiplikativen Mischers mit bipolarem Rechtecksignal keinen Anteil bei der ZF-Frequenz enthält, siehe 25.16c auf Seite 1404; entsprechend enthält das ZF-Signal keinen Anteil bei der HF-Frequenz. Daraus folgt, dass ZF- und HF-Kreis bei einem Ringmischer entkoppelt sind. Da der LO-Kreis bereits aufgrund der Eigenschaften der beiden Gegentaktmischer vom ZF- und vom HF-Kreis entkoppelt ist, sind demnach alle drei Kreise entkoppelt. Die Anzahl der benötigten Filter lässt sich dadurch aber nicht reduzieren, da sowohl das ZF- als auch das HF-Signal Anteile im Bereich von Vielfachen der LO-Frequenz enthalten.

#### 25.3.3.1 LO-Kreis

Abbildung 25.31 zeigt den LO-Kreis des Ringmischers für die beiden Halbwellen der LO-Spannung. Die Ströme $I_{D1,LO}(t), \ldots, I_{D4,LO}(t)$ der Dioden und der Gesamtstrom $I_{LOD}(t)$ sind in Abb. 25.32 dargestellt. Durch jede Diode fließt derselbe Strom wie bei
<!-- page-import:1460:end -->

<!-- page-import:1461:start -->
1424  25. Mischer

Abb. 25.32. Ringmischer: Spannung $U_{LO}(t)$ am LO-Kreis, Ströme der Dioden $D_1 \ldots D_4$, Gesamtstrom $I_{LOD}$ der Dioden, Kleinsignalleitwerte $g_D(t)$ und $g_{D,U}(t)$. $U_F$ ist die Flussspannung der Dioden.

einem Eintaktmischer mit gleicher LO-Amplitude. Der Gesamtstrom $I_{LOD}(t)$ ist aufgrund der Symmetrie mittelwertfrei und enthält nur Anteile bei ungeradzahligen Vielfachen der LO-Frequenz:

$$
I_{LOD}(t)=\hat{i}_{LOD,1}\cos \omega_{LO} t+\hat{i}_{LOD,3}\cos 3\omega_{LO} t+\hat{i}_{LOD,5}\cos 5\omega_{LO} t+\cdots
$$

Die Oberwellen von $I_{LOD}(t)$ werden durch das LO-Filter kurzgeschlossen. Der Grundwellenanteil entspricht dem LO-Strom $I_{LO}(t)$:
<!-- page-import:1461:end -->

<!-- page-import:1462:start -->
25.3 Mischer mit Dioden 1425

![Abb. 25.33. Kleinsignalersatzschaltbild eines Ringmischers](#)

Abb. 25.33. Kleinsignalersatzschaltbild eines Ringmischers

$$
I_{LO}(t)=\left.I_{LOD}(t)\right|_{f=f_{LO}}=\hat{i}_{LOD,1}\cos \omega_{LO} t
$$

Die Amplitude $\hat{i}_{LOD,1}$ ist um den Faktor vier größer als bei einem Eintaktmischer mit gleicher LO-Amplitude, da in beiden Halbwellen der LO-Spannung ein Strom fließt und jeweils zwei Dioden parallelgeschaltet sind; dadurch reduziert sich der Widerstand $R_{LO}$ um den Faktor vier:

$$
R_{LO}=\frac{\hat{u}_{LO}}{\hat{i}_{LOD,1}}=\frac{1}{4}R_{LO\,(ET)}
$$

#### 25.3.3.2 Kleinsignalersatzschaltbild und Kleinsignalverhalten

Abbildung 25.33 zeigt das Kleinsignalersatzschaltbild eines Ringmischers; es folgt aus dem Kleinsignalersatzschaltbild eines Gegentaktmischers durch Einfügen von zwei Umschaltern zur Beschreibung des Polaritätswechsels. Der Kleinsignalleitwert $g_D(t)$ setzt sich aus den Kleinsignalleitwerten der beiden Gegentaktmischer zusammen, die um eine halbe LO-Periodendauer gegeneinander verschoben sind; in Abb. 25.32 ist der Verlauf von $g_D(t)$ dargestellt.

Die Berechnung des Kleinsignalverhaltens ist aufgrund des Polaritätswechsels aufwendiger als bei einem Ein- oder Gegentaktmischer. Zunächst werden die Kleinsignalströme $i_D'(t)$ und $i_{D,U}'(t)$ auf der ZF- bzw. HF-Seite berechnet; aus Abb. 25.33 folgt:

$$
i_D'(t)=
\begin{cases}
g_D(t)\,[\,u_{ZF}(t)-u_{HF}(t)\,] & U_{LO}\geq 0\\
g_D(t)\,[\,u_{ZF}(t)+u_{HF}(t)\,] & U_{LO}<0
\end{cases}
$$

$$
i_{D,U}'(t)=
\begin{cases}
i_D'(t)=g_D(t)\,[\,u_{ZF}(t)-u_{HF}(t)\,] & U_{LO}\geq 0\\
-i_D'(t)=-g_D(t)\,[\,u_{ZF}(t)+u_{HF}(t)\,] & U_{LO}<0
\end{cases}
$$

Die Fallunterscheidung kann entfallen, wenn man zusätzlich den Kleinsignalleitwert

$$
g_{D,U}(t)=
\begin{cases}
g_D(t) & U_{LO}\geq 0\\
-g_D(t) & U_{LO}<0
\end{cases}
$$

einführt; dann gilt:

$$
i_D'(t)=g_D(t)\,u_{ZF}(t)-g_{D,U}(t)\,u_{HF}(t)
$$

$$
i_{D,U}'(t)=g_{D,U}(t)\,u_{ZF}(t)-g_D(t)\,u_{HF}(t)
\qquad\qquad (25.24)
$$
<!-- page-import:1462:end -->

<!-- page-import:1463:start -->
1426  25. Mischer

Der Verlauf von $g_{D,U}(t)$ ist in Abb. 25.32 dargestellt. Die Gleichungen zeigen, dass die Ströme und Spannungen auf derselben Seite der Umschalter durch den Kleinsignalleitwert $g_D(t)$ verknüpft sind, während die kreuzweise Verknüpfung über den Kleinsignalleitwert $g_{D,U}(t)$ erfolgt.

Die Kleinsignalleitwerte $g_D(t)$ und $g_{D,U}(t)$ können mit Hilfe des Kleinsignalleitwerts eines Eintaktmischers mit gleicher LO-Amplitude dargestellt werden:

$$
g_D(t) = 2\left[g_{D(ET)}(t) + g_{D(ET)}\left(t - T_{LO}/2\right)\right]
$$

$$
g_{D,U}(t) = 2\left[g_{D(ET)}(t) - g_{D(ET)}\left(t - T_{LO}/2\right)\right]
$$

Dabei ist berücksichtigt, dass die Kleinsignalleitwerte der beiden Gegentaktmischer jeweils um den Faktor zwei größer sind als die des Eintaktmischers und mit einer Verschiebung um eine halbe LO-Periodendauer ($T_{LO} = 1/f_{LO}$) addiert bzw. subtrahiert werden. Setzt man die Fourier-Reihe

$$
g_{D(ET)}(t) = g_{D,0(ET)} + \sum_{n=1}^{\infty} g_{D,n(ET)} \cos n\omega_{LO}t
$$

aus (25.7) ein, entfallen bei $g_D(t)$ alle Anteile bei ungeradzahligen Vielfachen von $f_{LO}$ und bei $g_{D,U}(t)$ alle Anteile bei geradzahligen Vielfachen von $f_{LO}$ einschließlich des Gleichanteils; es gilt:

$$
g_D(t) = 4\left[g_{D,0(ET)} + g_{D,2(ET)} \cos 2\omega_{LO}t + \cdots\right]
$$

$$
g_{D,U}(t) = 4\left[g_{D,1(ET)} \cos \omega_{LO}t + g_{D,3(ET)} \cos 3\omega_{LO}t + \cdots\right]
$$

(25.25)

Diese Eigenschaften kann man den Verläufen von $g_D(t)$ und $g_{D,U}(t)$ in Abb. 25.32 entnehmen: $g_D(t)$ hat die Grundfrequenz $2f_{LO}$ und besitzt demnach Anteile bei den Frequenzen $0$, $2f_{LO}$, $4f_{LO}$, $\ldots$; dagegen hat $g_{D,U}(t)$ die Grundfrequenz $f_{LO}$, ist symmetrisch und mittelwertfrei und besitzt demnach Anteile bei den Frequenzen $f_{LO}$, $3f_{LO}$, $5f_{LO}$, $\ldots$

Setzt man die Fourier-Reihen der Kleinsignalleitwerte aus (25.25) in die Gleichung (25.24) für die Kleinsignalströme ein und ordnet die Terme nach Frequenzen, erhält man Anteile bei folgenden Frequenzen:

$$
i_D'(t): \quad f_{ZF},\, 2f_{LO} \pm f_{ZF},\, 4f_{LO} \pm f_{ZF},\, 6f_{LO} \pm f_{ZF},\, \cdots
$$

$$
i_{D,U}'(t): \quad f_{LO} + f_{ZF}, \quad f_{LO} - f_{ZF}, \quad 3f_{LO} \pm f_{ZF}, \quad 5f_{LO} \pm f_{ZF}, \quad \cdots
$$

$f_{HF}$ unter $f_{LO}+f_{ZF}$, $f_{HF,Sp}$ unter $f_{LO}-f_{ZF}$

(25.26)

Der Kleinsignalstrom $i_D'(t)$ auf der ZF-Seite enthält keinen Anteil bei der HF-Frequenz und der Kleinsignalstrom $i_{D,U}'(t)$ auf der HF-Seite keinen Anteil bei der ZF-Frequenz, d.h. ZF- und HF-Kreis sind, wie bereits erwähnt, entkoppelt.

Aus den Kleinsignalströmen $i_D'(t)$ und $i_{D,U}'(t)$ erhält man durch Extraktion der betreffenden Anteile den ZF- und den HF-Strom:

$$
i_{ZF}(t) = i_D'(t)\big|_{f=f_{ZF}}, \qquad i_{HF}(t) = -\,i_{D,U}'(t)\big|_{f=f_{HF}}
$$

Alle anderen Anteile werden durch die Filter kurzgeschlossen. Die Berechnung, die wir hier nicht im Detail durchführen, erfolgt wie beim Eintaktmischer und führt ebenfalls auf eine Y-Matrix der Form:

$$
\begin{bmatrix}
i_{ZF} \\
i_{HF}
\end{bmatrix}
=
\begin{bmatrix}
g_{D,0} & -\dfrac{g_{D,1}}{2} \\
-\dfrac{g_{D,1}}{2} & g_{D,0}
\end{bmatrix}
\begin{bmatrix}
u_{ZF} \\
u_{HF}
\end{bmatrix}
$$

(25.27)
<!-- page-import:1463:end -->

<!-- page-import:1464:start -->
25.3 Mischer mit Dioden 1427

![Abb. 25.34. Breitbandiger Betrieb eines Mischers [Diagramm mit den Beschriftungen: ZF-Filter, ZF-Verstärker, Mischer ohne Filter, HF-Verstärker, HF-Filter, $Z_{ZF}(s)$, $Z_{HF}(s)$, $f_{LO}$]]()

**Abb. 25.34.** Breitbandiger Betrieb eines Mischers

Der Koeffizient $g_{D,0}$ entspricht dem Gleichanteil in $g_D(t)$ und der Koeffizient $g_{D,1}$ dem Grundwellenanteil in $g_{D,U}(t)$; daraus folgt mit (25.25) der Zusammenhang mit den Koeffizienten eines Eintaktmischers mit gleicher LO-Amplitude:

$$
g_{D,0} = 4\,g_{D,0(ET)} \;,\qquad g_{D,1} = 4\,g_{D,1(ET)}
$$

(25.28)

Damit kann man die Y-Matrix des Ringmischers aufstellen und alle weiteren Größen mit den Gleichungen (25.13)–(25.17) des Eintaktmischers berechnen.

Der maximale verfügbare Leistungsgewinn $MAG$ ist genauso groß wie bei einem Eintakt- oder Gegentaktmischer mit gleicher LO-Amplitude, da hier gemäß (25.17) nur das Verhältnis von $g_{D,1}$ und $g_{D,0}$ eingeht; der zugehörige Wellenwiderstand ist jedoch um den Faktor 4 geringer, siehe (25.16):

$$
Z_{W,M} = \frac{1}{4}\,Z_{W,M(ET)}
$$

(25.29)

Der Mischgewinn $G_{M(50)}$ in einem 50 $\Omega$-System verläuft ähnlich wie einem Eintakt- oder Gegentaktmischer; Abb. 25.29 auf Seite 1421 zeigt einen Vergleich von Mischern mit Schottky-Dioden des Typs BAS40. Das Maximum von $G_{M(50)}$ liegt bei einem Ringmischer immer etwas höher als bei einem Eintakt- oder Gegentaktmischer und wird bei einer geringeren LO-Amplitude erreicht.

## 25.3.4 Breitbandiger Betrieb

Mischer werden häufig in der in Abb. 25.34 gezeigten Anordnung betrieben. Das ZF- und das HF-Filter sind in diesem Fall durch Verstärker vom Mischer getrennt. Die störenden Anteile in den Kleinsignalströmen am Eingang und am Ausgang des Mischers werden nun nicht mehr durch die Filter kurzgeschlossen, sondern wirken sich entsprechend den Impedanzen $Z_{ZF}(s)$ und $Z_{HF}(s)$ der Verstärker aus. Das gilt vor allem für den Anteil bei der Spiegelfrequenz $f_{HF,Sp}$, der genauso groß ist wie der Anteil bei der HF-Frequenz $f_{HF}$; er wird, wie alle anderen Störanteile auch, vom HF-Verstärker in Abb. 25.34 verstärkt und erst im nachfolgenden HF-Filter unterdrückt.

Das Kleinsignalverhalten des Mischers hängt von den Werten der Impedanzen $Z_{ZF}(s)$ und $Z_{HF}(s)$ bei allen beteiligten Frequenzen ab und kann im allgemeinen nur noch mit Hilfe numerischer Methoden oder einer Schaltungssimulation ermittelt werden. Man spricht in diesem Zusammenhang von einem breitbandigen Betrieb des Mischers.

Wir betrachten im folgenden zunächst den in der Praxis häufigen Fall, bei dem die Spiegelfrequenz berücksichtigt werden muss, alle weiteren Frequenzen aber nach wie vor kurzgeschlossen sind. Diesen Fall kann man noch geschlossen behandeln. Anschließend
<!-- page-import:1464:end -->

<!-- page-import:1465:start -->
1428  25. Mischer

Abb. 25.35. Kleinsignalersatzschaltbild eines Mischers bei Breitbandbetrieb mit kurzgeschlossenen Oberwellen bei $n f_{LO} \pm f_{ZF}$ für $n > 1$

beschreiben wir den allgemeinen Fall und zeigen, wie Mischer in Schaltungssimulatoren berechnet werden.

## 25.3.4.1 Kleinsignalverhalten

Nimmt man an, dass die Beträge der Impedanzen $Z_{ZF}(s)$ und $Z_{HF}(s)$ bei Vielfachen der LO-Frequenz vernachlässigbar klein sind, werden von den in (25.26) genannten Anteilen nur die Anteile bei der ZF-Frequenz $f_{ZF}$, der HF-Frequenz $f_{HF}$ und der Spiegelfrequenz $f_{HF,Sp}$ wirksam. Berechnet man diese Anteile, indem man anstelle der HF-Spannung $u_{HF}(t)$ die Summe $u_{HF}(t) + u_{HF,Sp}(t)$ einsetzt, erhält man die Y-Matrix

$$
\begin{bmatrix}
i_{ZF} \\
i_{HF} \\
i_{HF,Sp}
\end{bmatrix}
=
\begin{bmatrix}
g_{D,0} & -\dfrac{g_{D,1}}{2} & -\dfrac{g_{D,1}}{2} \\
-\dfrac{g_{D,1}}{2} & g_{D,0} & \dfrac{g_{D,2}}{2} \\
-\dfrac{g_{D,1}}{2} & \dfrac{g_{D,2}}{2} & g_{D,0}
\end{bmatrix}
\begin{bmatrix}
u_{ZF} \\
u_{HF} \\
u_{HF,Sp}
\end{bmatrix}
$$

(25.30)

und das Kleinsignalersatzschaltbild in Abb. 25.35. Dabei tritt eine Verkoppelung der Anteile bei der HF-Frequenz und der Spiegelfrequenz über den Fourier-Koeffizienten $g_{D,2}$ des Kleinsignalleitwerts $g_D(t)$ auf. Dieser Anteil kommt dadurch zustande, dass man bei der Multiplikation

$$
g_{D,2}\cos 2\omega_{LO}t \cdot \cos \omega_{HF}t
=
g_{D,2}\cos 2\omega_{LO}t \cdot \cos(\omega_{LO} + \omega_{ZF})t
$$

einen Anteil

$$
\dfrac{g_{D,2}}{2}\cos(2\omega_{LO} - \omega_{LO} - \omega_{ZF})t
=
\dfrac{g_{D,2}}{2}\cos(\omega_{LO} - \omega_{ZF})t
=
\dfrac{g_{D,2}}{2}\cos \omega_{HF,Sp}t
$$

bei der Spiegelfrequenz erhält. Dieser Anteil wird bei schmalbandigem Betrieb durch das HF-Filter kurzgeschlossen; setzt man $u_{HF,Sp} = 0$ ein und berücksichtigt, dass der Strom $i_{HF,Sp}$ in diesem Fall nicht von Interesse ist, reduziert sich (25.30) auf (25.27).

Man beachte, dass das Kleinsignalersatzschaltbild in Abb. 25.35 nur deshalb zwei HF-Anschlüsse aufweist, weil wir die Anteile bei der HF-Frequenz und der Spiegelfrequenz
<!-- page-import:1465:end -->

<!-- page-import:1466:start -->
25.3 Mischer mit Dioden 1429

a Aufwärtsmischer

b Abwärtsmischer

**Abb. 25.36.** Kleinsignalersatzschaltbilder zur Berechnung der Kenngrößen eines Mischers bei Breitbandbetrieb mit kurzgeschlossenen Oberwellen bei $n f_{LO} \pm f_{ZF}$ für $n > 1$

getrennt dargestellt haben. Der reale Mischer hat nach wie vor nur einen HF-Anschluss. Für die weitere Rechnung nehmen wir folgendes an:

- Die Impedanzen bei der HF- und der Spiegelfrequenz sind gleich und alle Impedanzen sind reell:

$$
Z_{ZF}(2\,j\pi\, f_{ZF}) = R_{ZF}
,\qquad
Z_{HF}(2\,j\pi\, f_{HF}) = Z_{HF}(2\,j\pi\, f_{HF,Sp}) = R_{HF}
$$

- Der ZF-Kreis ist von den beiden HF-Kreisen entkoppelt. Diese Entkopplung ist bei einem Ringmischer unabhängig von der Beschaltung immer gegeben; dagegen muss man bei einem Eintakt- oder Gegentaktmischer zusätzlich

$$
Z_{ZF}(2\,j\pi\, f_{HF}) = Z_{ZF}(2\,j\pi\, f_{HF,Sp}) = 0
,\qquad
Z_{HF}(2\,j\pi\, f_{ZF}) = 0
$$

fordern.

- Der LO-Kreis ist von den anderen Kreisen entkoppelt. Diese Entkopplung ist bei einem Gegentakt- oder Ringmischer unabhängig von der Beschaltung immer gegeben; dagegen muss man bei einem Eintaktmischer zusätzlich

$$
Z_{ZF}(2\,j\pi\, f_{LO}) = 0
,\qquad
Z_{HF}(2\,j\pi\, f_{LO}) = 0
$$

fordern.

Mit diesen Annahmen erhält man die in Abb. 25.36 gezeigten Kleinsignalersatzschaltbilder für den Betrieb als Aufwärts- und als Abwärtsmischer. Der Aufwärtsmischer in Abb. 25.36a ist symmetrisch; daraus folgt $u_{HF} = u_{HF,Sp}$ und $i_{HF} = i_{HF,Sp}$. Mit den normierten Leitwerten

$$
g_1 = \frac{g_{D,1}}{2g_{D,0}}
,\qquad
g_2 = \frac{g_{D,2}}{2g_{D,0}}
,\qquad
g_{ZF} = \frac{1}{R_{ZF}\,g_{D,0}}
,\qquad
g_{HF} = \frac{1}{R_{HF}\,g_{D,0}}
\tag{25.31}
$$

und

$$
i_{HF} = -\frac{u_{HF}}{R_{HF}} = -g_{HF}\,g_{D,0}\,u_{HF}
$$

folgt aus (25.30) für den Aufwärtsmischer:

$$
\begin{bmatrix}
i_{ZF}\\
0
\end{bmatrix}
=
g_{D,0}
\begin{bmatrix}
1 & -2g_1\\
-g_1 & 1 + g_2 + g_{HF}
\end{bmatrix}
\begin{bmatrix}
u_{ZF}\\
u_{HF}
\end{bmatrix}
\tag{25.32}
$$
<!-- page-import:1466:end -->

<!-- page-import:1467:start -->
1430  25. Mischer

Abb. 25.37. Anpassung eines Breitbandmischers

Entsprechend folgt mit

$$
i_{ZF}=-\frac{u_{ZF}}{R_{ZF}}=-g_{ZF}\,g_{D,0}\,u_{ZF}, \quad
i_{HF,Sp}=-\frac{u_{HF,Sp}}{R_{HF}}=-g_{HF}\,g_{D,0}\,u_{HF,Sp}
$$

für den Abwärtsmischer:

$$
\begin{bmatrix}
0\\
i_{HF}\\
0
\end{bmatrix}
=
g_{D,0}
\begin{bmatrix}
1+g_{ZF} & -g_1 & -g_1\\
-g_1 & 1 & g_2\\
-g_1 & g_2 & 1+g_{HF}
\end{bmatrix}
\begin{bmatrix}
u_{ZF}\\
u_{HF}\\
u_{HF,Sp}
\end{bmatrix}
\eqno{(25.33)}
$$

## 25.3.4.2 Anpassung

Aus (25.32) erhält man die Eingangsimpedanz

$$
Z_{W,M(ZF)}=\frac{u_{ZF}}{i_{ZF}}=\frac{1}{g_{D,0}}\,\frac{1+g_2+g_{HF}}{1-2g_1^2+g_2+g_{HF}}
\eqno{(25.34)}
$$

am ZF-Anschluss und aus (25.33) die Eingangsimpedanz

$$
Z_{W,M(HF)}=\frac{u_{HF}}{i_{HF}}=\frac{1}{g_{D,0}}\,
\frac{(1+g_{ZF})(1+g_{HF})-g_1^2}
{(1+g_{ZF})(1-g_2^2+g_{HF})-g_1^2(2-2g_2+g_{HF})}
\eqno{(25.35)}
$$

am HF-Anschluss. Damit beidseitige Anpassung vorliegt, müssen die Bedingungen

$$
Z_{W,M(ZF)}\stackrel{!}{=}R_{ZF}=\frac{1}{g_{ZF}\,g_{D,0}}
\eqno{(25.36)}
$$

$$
Z_{W,M(HF)}\stackrel{!}{=}R_{HF}=\frac{1}{g_{HF}\,g_{D,0}}
\eqno{(25.37)}
$$

erfüllt werden, d.h. die normierten Leitwerte $g_{ZF}$ und $g_{HF}$ müssen entsprechend gewählt werden. Gleichzeitig sollten die zugehörigen Impedanzen $R_{ZF}$ und $R_{HF}$ möglichst gut mit dem Wellenwiderstand $Z_W$ der verwendeten Leitungen übereinstimmen, damit die Transformationsfaktoren der in Abb. 25.37 gezeigten Anpassnetzwerke klein bleiben oder auf eine Anpassung verzichtet werden kann.

Aus der ZF-Eingangsimpedanz nach (25.34) und der Anpassungsbedingung (25.36) erhält man den Zusammenhang zwischen $g_{ZF}$ und $g_{HF}$ bei ZF-Anpassung:

$$
g_{ZF}=1-\frac{2g_1^2}{1+g_2+g_{HF}}
$$

Man ermittelt nun für verschiedene LO-Amplituden $\hat{u}_{LO}$ die Parameter $g_{D,0}$, $g_1$ und $g_2$ und daraus den Wert für $g_{HF}$, für den die HF-Eingangsimpedanz nach (25.35) die Anpassungsbedingung (25.37) erfüllt; dazu verwendet man entweder ein Mathematikprogramm oder
<!-- page-import:1467:end -->

<!-- page-import:1468:start -->
25.3 Mischer mit Dioden 1431

den Optimierer eines Schaltungssimulators. Anschließend wählt man die LO-Amplitude aus, für die die Impedanzen $R_{ZF}$ und $R_{HF}$ am besten mit dem Wellenwiderstand $Z_W$ übereinstimmen. Man kann $R_{ZF}=Z_W$ oder $R_{HF}=Z_W$ wählen und dadurch eines der beiden in Abb. 25.37 gezeigten Anpassnetzwerke einsparen. In der Praxis wird häufig auf eine Anpassung verzichtet; man minimiert dann die Fehlanpassung an den beiden Anschlüssen.

#### 25.3.4.3 Mischgewinn

Aus Abb. 25.36a entnimmt man:

$$
i_{ZF}=\frac{u_g-u_{ZF}}{R_{ZF}}=(u_g-u_{ZF})\,g_{D,0}\,g_{ZF}
$$

Setzt man diesen Zusammenhang in (25.32) ein, erhält man die Betriebsverstärkung

$$
A_B=\frac{u_{HF}}{u_g}=\frac{g_1\,g_{ZF}}{(1+g_{ZF})(1+g_2+g_{HF})-2g_1^2}
$$

und daraus mit (24.33) auf Seite 1376 den Mischgewinn $G_M$ bei Breitbandbetrieb:

$$
G_M=A_B^2\,\frac{4R_g}{R_L}=A_B^2\,\frac{4R_{ZF}}{R_{HF}}=
\frac{4g_1^2g_{ZF}g_{HF}}{\big((1+g_{ZF})(1+g_2+g_{HF})-2g_1^2\big)^2}
$$

Dabei ist $R_g=R_{ZF}$ der Innenwiderstand der Quelle und $R_L=R_{HF}$ der Lastwiderstand, siehe Abb. 25.36a. Nach Entnormierung erhält man:

$$
G_M=
\frac{g_{D,1}^2\,R_{ZF}\,R_{HF}}
{\left[(1+g_{D,0}R_{ZF})\left(1+\left(g_{D,0}+\frac{g_{D,2}}{2}\right)R_{HF}\right)-\frac{1}{2}g_{D,1}^2R_{ZF}R_{HF}\right]^2}
\qquad (25.38)
$$

Daraus folgt mit $R_{ZF}=R_{HF}=Z_W$ der Mischgewinn ohne Anpassung und mit $R_{ZF}=Z_{W,M(ZF)}$ und $R_{HF}=Z_{W,M(HF)}$ der maximale verfügbare Leistungsgewinn $MAG$.

Wir haben den Mischgewinn für den Aufwärtsmischer in Abb. 25.36a berechnet. Da Diodenmischer passive Netzwerke und damit reziprok sind, ist der Mischgewinn für den Abwärtsmischer in Abb. 25.36b identisch. Der rechnerische Beweis ist umfangreich, da man bei der Berechnung des Mischgewinns für den Abwärtsmischer mit Hilfe von (25.33) einen Ausdruck erhält, der nur aufwendig in (25.38) überführt werden kann.

Vergleicht man den Mischgewinn bei Breitbandbetrieb gemäß (25.38) mit dem Mischgewinn bei Schmalbandbetrieb gemäß (25.14) auf Seite 1415, fällt auf, dass die Ausdrücke im Zähler gleich sind. Bei Breitbandbetrieb ergeben sich im Nenner zwei Änderungen: der Leitwert $g_{D,2}$ führt zu einer Abnahme des Mischgewinns, der geänderte Faktor vor dem rechten Term zu einer Zunahme. Im typischen Arbeitsbereich kompensieren sich die Einflüsse sehr gut, so dass in der Praxis häufig nicht zwischen den beiden Gewinnen unterschieden wird.

*Beispiel:* Wir haben einen Ringmischer mit vier Dioden des Typs BAS40 untersucht und die Kenngrößen bei breitbandigem Betrieb ermittelt, siehe Abb. 25.38. Abbildung 25.38a zeigt die Ströme einer einzelnen Diode in Abhängigkeit von der LO-Amplitude. Wir haben hier zusätzlich zu den bereits in Abb. 25.21a auf Seite 1411 dargestellten Kurven auch den Strom $i_{D,2}$ dargestellt. Abbildung 25.38b zeigt die Leitwerte des Mischers; sie sind bei einem Ringmischer gemäß (25.28) um den Faktor 4 größer als die in Abb. 25.21d gezeigten Werte eines Eintaktmischers mit einer Diode. Durch Normierung gemäß (25.31) erhält
<!-- page-import:1468:end -->

<!-- page-import:1469:start -->
1432 25. Mischer

a Ströme einer einzelnen Diode

b Leitwerte des Mischers (alle vier Dioden)

c normierte Leitwerte des Mischers

d normierte Leitwerte bei Anpassung

e Wellenwiderstände

f maximaler verfügbarer Mischgewinn

**Abb. 25.38.** Kenngrößen eines Ringmischers mit Dioden des Typs BAS40 bei Breitbandbetrieb mit kurzgeschlossenen Oberwellen. Zum Vergleich sind der Wellenwiderstand $Z_W$ und der maximale verfügbare Leistungsgewinn bei Schmalbandbetrieb dargestellt.

man die in Abb. 25.38c gezeigten normierten Leitwerte $g_1$ und $g_2$ des Mischers. Mit diesen Werten haben wir die Gleichungen (25.34)–(25.37) mit einem Mathematikprogramm ausgewertet und die in Abb. 25.38d gezeigten normierten Leitwerte $g_{ZF}$ und $g_{HF}$ bei beidseitiger Anpassung ermittelt. Daraus erhält man durch Entnormierung mit (25.31) die in Abb. 25.38e dargestellten Wellenwiderstände $Z_{W,M}(ZF)$ und $Z_{W,M}(HF)$. Zum Vergleich ist der Wellenwiderstand $Z_W$ bei Schmalbandbetrieb gemäß (25.16) dargestellt. Abschließend haben wir die maximalen verfügbaren Leistungsgewinne für beide Betriebsarten mit (25.17) und (25.38) ermittelt und durch Simulationen mit PSpice verifiziert; Abb. 25.38f zeigt die Ergebnisse.
<!-- page-import:1469:end -->

<!-- page-import:1470:start -->
25.3 Mischer mit Dioden 1433

Man erkennt, dass die Wellenwiderstände $Z_{W,M(ZF)}$ und $Z_{W,M(HF)}$ für eine LO-Amplitude $\hat{u}_{LO}=0{,}5\,\mathrm{V}$ nahe am typischen Wellenwiderstand $Z_W=50\,\Omega$ liegen. Für diese LO-Amplitude gilt $g_{D,0}=86{,}4\,\mathrm{mS}$, $g_{D,1}=154\,\mathrm{mS}$ und $g_{D,2}=106\,\mathrm{mS}$; daraus folgt $g_1=0{,}891$ und $g_2=0{,}613$. Mit diesen Werten erhält man die normierten Leitwerte $g_{ZF}=0{,}177$ und $g_{HF}=0{,}319$ bei beidseitiger Anpassung und daraus die Wellenwiderstände:

$$
Z_{W,M(ZF)}=\frac{1}{g_{ZF}\,g_{D,0}}\approx 65\,\Omega \quad,\quad
Z_{W,M(HF)}=\frac{1}{g_{HF}\,g_{D,0}}\approx 36\,\Omega
$$

Der maximale verfügbare Leistungsgewinn beträgt $MAG\approx -4{,}2\,\mathrm{dB}$ und ist damit etwas größer als der maximale verfügbare Leistungsgewinn bei Schmalbandbetrieb. Wir verzichten auf eine Anpassung und betreiben den Mischer mit $R_{ZF}=R_{HF}=50\,\Omega$; für diesen Fall beträgt der Mischgewinn gemäß (25.38) $G_M\approx 0{,}36=-4{,}4\,\mathrm{dB}$. Eine Anpassung lohnt also nicht.

## 25.3.4.4 Allgemeiner Fall

Im allgemeinen Fall erhält man eine $m\times m$-Y-Matrix, in die alle Fourier-Koeffizienten $g_{D,n}$ des Leitwerts $g_D(t)$ eingehen. Wir betrachten im folgenden einen Abwärtsmischer und nehmen an, dass das Empfangssignal im oberen Seitenband liegt, d.h. es gilt $f_{HF}=f_{LO}+f_{ZF}$.

Da man bei allgemeinem Breitbandbetrieb auf eine Entkopplung der Kreise durch separate Filter verzichtet, eine Entkopplung des LO-Kreises aber auf jeden Fall erforderlich ist, damit sich die Impedanzen $Z_{ZF}(s)$ und $Z_{HF}(s)$ nicht auf den LO-Kreis und den Leitwert $g_D(t)$ auswirken, werden in der Praxis ausschließlich Gegentakt- und Ringmischer verwendet, die diese Entkopplung inhärent besitzen.

Bei einem Abwärtsmischer werden alle Frequenzen $f=nf_{LO}\pm f_{ZF}$ auf die ZF-Frequenz $f_{ZF}$ umgesetzt. Wir verwenden im folgenden Indices der Form $(n,\pm 1)$ für die Größen bei den Port-Frequenzen $f=nf_{LO}\pm f_{ZF}$; dabei entspricht $(0,1)$ der ZF-Frequenz, $(1,+1)$ der HF-Frequenz und $(1,-1)$ der Spiegelfrequenz.

Für die Y-Matrix eines Diodenmischers gilt

$$
\begin{bmatrix}
i_{(0,1)}\\
i_{(1,+1)}\\
i_{(1,-1)}\\
i_{(2,+1)}\\
i_{(2,-1)}\\
i_{(3,+1)}\\
i_{(3,-1)}\\
\vdots
\end{bmatrix}
=
g_{D,0}
\begin{bmatrix}
1 & -g_1 & -g_1 & -g_2 & -g_2 & -g_3 & -g_3 & \cdots\\
-g_1 & 1 & g_2 & g_1 & g_3 & g_2 & g_4\\
-g_1 & g_2 & 1 & g_3 & g_1 & g_4 & g_2\\
-g_2 & g_1 & g_3 & 1 & g_4 & g_1 & g_5\\
-g_2 & g_3 & g_1 & g_4 & 1 & g_5 & g_1\\
-g_3 & g_2 & g_4 & g_1 & g_5 & 1 & g_6\\
-g_3 & g_4 & g_2 & g_5 & g_1 & g_6 & 1\\
\vdots & & & & & & & \ddots
\end{bmatrix}
\begin{bmatrix}
u_{(0,1)}\\
u_{(1,+1)}\\
u_{(1,-1)}\\
u_{(2,+1)}\\
u_{(2,-1)}\\
u_{(3,+1)}\\
u_{(3,-1)}\\
\vdots
\end{bmatrix}
$$

mit den normierten Fourier-Koeffizienten:

$$
g_1=\frac{g_{D,1}}{2g_{D,0}}
,\quad
g_2=\frac{g_{D,2}}{2g_{D,0}}
,\quad
g_3=\frac{g_{D,3}}{2g_{D,0}}
,\quad
g_4=\frac{g_{D,4}}{2g_{D,0}}
,\quad \ldots
$$

Die Y-Matrix beschreibt ein Vieltor, dessen Anschlüsse als Ports bezeichnet werden. In der normierten Y-Matrix sind Strom und Spannung am selben Port über den Faktor 1 verknüpft; die weiteren Verknüpfungen lauten:

$$
i_{(0,1)} \longleftrightarrow u_{(n,\pm 1)} \quad \text{mit} \quad -g_n
\qquad,\qquad
i_{(m,\pm 1)} \longleftrightarrow u_{(n,\pm 1)} \quad \text{mit} \quad g_{|m-n|}
\qquad,\qquad
i_{(m,\pm 1)} \longleftrightarrow u_{(n,\mp 1)} \quad \text{mit} \quad g_{m+n}
$$
<!-- page-import:1470:end -->

<!-- page-import:1471:start -->
1434  25. Mischer

**Abb. 25.39.** Impedanzen bei einem Breitband-Gegentaktmischer.

In unserem Fall dient der ZF-Port $(0,1)$ als Ausgang und der HF-Port $(1,+1)$ als Eingang.

Alle Ports sind mit äußeren *Port-Impedanzen* beschaltet, die sich aus den Impedanzen $Z_{HF}(s)$ und $Z_{ZF}(s)$ im ZF- und im HF-Kreis ergeben. Gegentakt- und Ringmischer verhalten sich in diesem Zusammenhang unterschiedlich und müssen getrennt untersucht werden.

#### 25.3.4.4.1 Breitband-Gegentaktmischer

Abbildung 25.39 verdeutlicht die Schritte zur Bestimmung der Port-Impedanzen eines Gegentaktmischers; dabei gehen wir zunächst von der allgemeinen Darstellung zum Kleinsignalersatzschaltbild über und verschieben anschließend die Elemente. Die Port-Impedanzen entsprechen der Impedanz $Z(s)=Z_{HF}(s)+Z_{ZF}(s)$ bei der jeweiligen Port-Frequenz:

$$
Z_{(0,1)} = Z(j2\pi f_{ZF}) = Z_{HF}(j2\pi f_{ZF}) + Z_{ZF}(j2\pi f_{ZF})
$$

$$
Z_{(1,+1)} = Z(j2\pi (f_{LO}+f_{ZF})) = Z_{HF}(j2\pi (f_{LO}+f_{ZF})) + Z_{ZF}(j2\pi (f_{LO}+f_{ZF}))
$$

$$
Z_{(1,-1)} = Z(j2\pi (f_{LO}-f_{ZF})) = Z_{HF}(j2\pi (f_{LO}-f_{ZF})) + Z_{ZF}(j2\pi (f_{LO}-f_{ZF}))
$$

$$
\vdots
$$

Damit erhalten wir das in Abb. 25.40 gezeigte Kleinsignalersatzschaltbild; dabei haben wir den ZF-Port auf der rechten Seite und alle anderen Ports auf der linken Seite dargestellt. Die Spannungsquelle $u_{g,HF}$ erscheint nur am HF-Port, da sie nur ein Signal bei der HF-Frequenz liefert. Am HF- und am ZF-Port haben wir die Anteile der Port-Impedanzen getrennt dargestellt, damit man die Auswirkungen der Verkopplung des HF- und des ZF-Kreises auf die Port-Impedanzen explizit erkennen kann. Mit

$$
Z_{ZF}(j2\pi f_{HF}) = Z_{HF}(j2\pi f_{ZF}) = 0
$$

sind die Kreise entkoppelt. Schließt man zusätzlich alle anderen Ports kurz, erhält man den Schmalbandbetrieb.

Wir können nun die Kenngrößen des Mischers bestimmen, indem wir die Y-Matrix zusammen mit den Port-Gleichungen

$$
i_{(0,1)} = -\frac{u_{(0,1)}}{Z_{(0,1)}}, \quad
i_{(1,+1)} = \frac{u_{g,HF}-u_{(1,+1)}}{Z_{(1,+1)}}, \quad
i_{(1,-1)} = -\frac{u_{(1,-1)}}{Z_{(1,-1)}}, \quad \ldots
$$

auswerten. Das resultierende lineare Gleichungssystem
<!-- page-import:1471:end -->

<!-- page-import:1472:start -->
25.3 Mischer mit Dioden 1435

**Abb. 25.40.** Kleinsignalersatzschaltbild zur Berechnung der Kenngrößen eines Breitband-Gegentaktmischers

$$
u_{g,HF}
\begin{bmatrix}
0\\
y_{(1,+1)}\\
0\\
\vdots
\end{bmatrix}
=
\begin{bmatrix}
1+y_{(0,1)} & -g_1 & -g_1 & \cdots\\
-g_1 & 1+y_{(1,+1)} & g_2 & \\
-g_1 & g_2 & 1+y_{(1,-1)} & \\
\vdots &  &  & \ddots
\end{bmatrix}
\begin{bmatrix}
u_{(0,1)}\\
u_{(1,+1)}\\
u_{(1,-1)}\\
\vdots
\end{bmatrix}
$$

mit den normierten Port-Admittanzen

$$
y_{(0,1)}=\frac{1}{Z_{(0,1)}\,g_{D,0}},\qquad
y_{(n,\pm1)}=\frac{1}{Z_{(n,\pm1)}\,g_{D,0}}
\qquad \text{für } n\geq 1
$$

wird numerisch gelöst $^4$; damit erhält man alle Spannungen, durch Einsetzen der Spannungen in die Port-Gleichungen alle Ströme und daraus alle weiteren Kenngrößen. Für die ZF-Spannung entnehmen wir aus Abb. 25.40:

$$
u_{ZF}=-i_{(0,1)}\,Z_{ZF}(j2\pi f_{ZF})
= u_{(0,1)}\,\frac{Z_{ZF}(j2\pi f_{ZF})}{Z_{ZF}(j2\pi f_{ZF})+Z_{HF}(j2\pi f_{ZF})}
$$

---

$^4$ Gleichungssysteme der Form $b=Ax$ mit einem gegebenen Vektor $b$, einer gegebenen Matrix $A$ und einem gesuchten Vektor $x$ löst man durch Invertieren der Matrix: $x=A^{-1}b$. In numerischen Mathematikprogrammen wie z.B. *MathWorks MATLAB* oder *GNU Octave* verwendet man dazu den Befehl x=inv(A)*b.
<!-- page-import:1472:end -->

<!-- page-import:1473:start -->
1436 25. Mischer

Wenn ein Port kurzgeschlossen ist, wird die entsprechende Spannung zu Null; dadurch entfällt die zugehörige Spalte in der Y-Matrix. Da in diesem Fall der zugehörige Strom nicht von Interesse ist, entfällt auch die zugehörige Zeile. Schließt man alle Ports mit Ausnahme des ZF- und des HF-Ports kurz, reduziert sich die Y-Matrix auf die $2 \times 2$-Y-Matrix bei Schmalbandbetrieb. Wenn ein Port offen ist, wird der entsprechende Strom zu Null; in diesem Fall ergibt sich keine Reduktion der Y-Matrix.

Wir stellen fest, dass die allgemeine Berechnung der Kleinsignal-Kenngrößen eines Diodenmischers auf ein lineares Gleichungssystem führt, das nicht geschlossen ausgewertet werden kann und auch keine anschaulichen Schlüsse zulässt, das aber sehr leicht numerisch ausgewertet werden kann; deshalb werden Mischer in der Praxis üblicherweise mit Hilfe von numerischen Optimierungsverfahren dimensioniert.

#### 25.3.4.4.2 Breitband-Ringmischer

Beim Ringmischer sind der HF- und der ZF-Anschluss entkoppelt. An den Anschlüssen treten nach (25.26) nur die folgenden Anteile auf:

HF-Anschluss: $f_{LO} + f_{ZF}$ , $f_{LO} - f_{ZF}$ , $3\,f_{LO} \pm f_{ZF}$ , $5\,f_{LO} \pm f_{ZF}$ , $\ldots$

ZF-Anschluss: $f_{ZF}$ , $2f_{LO} \pm f_{ZF}$ , $4f_{LO} \pm f_{ZF}$ , $6f_{LO} \pm f_{ZF}$ , $\ldots$

Aufgrund der Entkopplung wird an den entsprechenden Ports nur die HF-Impedanz $Z_{HF}(s)$ oder nur die ZF-Impedanz $Z_{ZF}(s)$ wirksam; daraus folgt für die Port-Impedanzen:

$$
Z_{(0,1)} = Z_{ZF}(j\,2\pi\,f_{ZF})
$$

$$
Z_{(n,\pm 1)} =
\begin{cases}
Z_{HF}(j\,2\pi\,(n f_{LO} \pm f_{ZF})) & \text{für } n = 1,3,5,7,\ldots \\
Z_{ZF}(j\,2\pi\,(n f_{LO} \pm f_{ZF})) & \text{für } n = 2,4,6,8,\ldots
\end{cases}
$$

Abbildung 25.41 zeigt das zugehörige Kleinsignalersatzschaltbild. Da man nun die Ports den Anschlüssen zuordnen kann, haben wir die zum HF-Anschluss gehörenden Ports links und die zum ZF-Anschluss gehörenden Ports rechts dargestellt.

Die Port-Gleichungen und das resultierende lineare Gleichungssystem bleiben unverändert; man muss nur die Port-Impedanzen und die Fourier-Koeffizienten $g_{D,n}$ des Ringmischers einsetzen. Am ZF-Port tritt nun keine Spannungsteilung mehr auf und wir erhalten:

$$
u_{ZF} = u_{(0,1)} = -\,i_{(0,1)} Z_{ZF}(j\,2\pi\,f_{ZF})
$$

*Beispiel:* Der Mischgewinn eines Ringmischers wird in der Praxis üblicherweise mit breitbandigen $50\,\Omega$-Abschlüssen am HF- und am ZF-Anschluss gemessen; dann gilt:

$$
Z_{HF}(s) = Z_{ZF}(s) = Z_{(0,1)} = Z_{(1,+1)} = Z_{(1,-1)} = \cdots = Z_W = 50\,\Omega
$$

Aus der verfügbaren Leistung

$$
P_{A,g} = \frac{|u_{g,HF}|^2}{4Z_W}
$$

des HF-Signalgenerators und der Leistung

$$
P_L = \frac{|u_{ZF}|^2}{Z_W}
$$

am ZF-Ausgang erhält man den zugehörigen Mischgewinn $G_{M(50)}$:
<!-- page-import:1473:end -->

<!-- page-import:1474:start -->
25.3 Mischer mit Dioden 1437

**Abb. 25.41.** Kleinsignalersatzschaltbild zur Berechnung der Kenngrößen eines Breitband-Ringmischers

$$
G_{M(50)}=\frac{P_L}{P_{A,g}}=\frac{4\,|u_{ZF}|^2}{|u_{g,HF}|^2}
\Rightarrow
G_{M(50)}\,[\mathrm{dB}]=20\log\left|\frac{u_{ZF}}{u_{g,HF}}\right|+6\ \mathrm{dB}
$$

Wir haben den Mischgewinn eines Ringmischers mit Dioden des Typs BAS40 für diesen *echten* Breitbandbetrieb numerisch bestimmt und mit dem Mischgewinn bei Breitbandbetrieb mit kurzgeschlossenen Oberwellen und dem Mischgewinn bei Schmalbandbetrieb verglichen. Abbildung 25.42 zeigt die Ergebnisse.

Zur Verdeutlichung geben wir noch Zahlenwerte für $\hat{u}_{LO}=0{,}5\ \mathrm{V}$ an. Für die Dioden haben wir mit PSpice folgende Werte ermittelt:

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---:|---:|---:|---:|---:|---:|---:|
| $g_{D,n}$ [mS] | 86,4 | 154 | 106 | 48,9 | 3,1 | $-19{,}4$ | $-19{,}9$ |
| $g_n$ | — | 0,891 | 0,614 | 0,283 | 0,018 | $-0{,}112$ | $-0{,}115$ |

Für die normierten Port-Admittanzen gilt:

$$
y_{(0,1)}=y_{(1,+1)}=y_{(1,-1)}=\ldots=\frac{1}{Z_W\,g_{D,0}}=0{,}231
$$

Wir beschränken uns hier auf die ersten drei Oberwellen und erhalten damit das lineare Gleichungssystem

1
<!-- page-import:1474:end -->

<!-- page-import:1475:start -->
1438 25. Mischer

**Abb. 25.42.** Mischgewinn $G_{M(50)}$ eines Ringmischers mit Dioden des Typs BAS40 bei (a) Schmalbandbetrieb, (b) Breitbandbetrieb mit kurzgeschlossenen Oberwellen und (c) Breitbandbetrieb

$$
u_{g,HF}
\begin{bmatrix}
0\\
0{,}231\\
0\\
0\\
0\\
0\\
0
\end{bmatrix}
=
Y_M
\begin{bmatrix}
u_{(0,1)}\\
u_{(1,+1)}\\
u_{(1,-1)}\\
u_{(2,+1)}\\
u_{(2,-1)}\\
u_{(3,+1)}\\
u_{(3,-1)}
\end{bmatrix}
$$

mit:

$$
Y_M =
\begin{bmatrix}
1{,}231 & -0{,}891 & -0{,}891 & -0{,}614 & -0{,}614 & -0{,}283 & -0{,}283\\
-0{,}891 & 1{,}231 & 0{,}614 & 0{,}891 & 0{,}283 & 0{,}614 & 0{,}018\\
-0{,}891 & 0{,}614 & 1{,}231 & 0{,}283 & 0{,}891 & 0{,}018 & 0{,}614\\
-0{,}614 & 0{,}891 & 0{,}283 & 1{,}231 & 0{,}018 & 0{,}891 & -0{,}112\\
-0{,}614 & 0{,}283 & 0{,}891 & 0{,}018 & 1{,}231 & -0{,}112 & 0{,}891\\
-0{,}283 & 0{,}614 & 0{,}018 & 0{,}891 & -0{,}112 & 1{,}231 & -0{,}115\\
-0{,}283 & 0{,}018 & 0{,}614 & -0{,}112 & 0{,}891 & -0{,}115 & 1{,}231
\end{bmatrix}
$$

Die Lösung

$$
\begin{bmatrix}
u_{(0,1)}\\
u_{(1,+1)}\\
u_{(1,-1)}\\
u_{(2,+1)}\\
u_{(2,-1)}\\
u_{(3,+1)}\\
u_{(3,-1)}
\end{bmatrix}
=
u_{g,HF}\,Y_M^{-1}
\begin{bmatrix}
0\\
0{,}231\\
0\\
0\\
0\\
0\\
0
\end{bmatrix}
=
u_{g,HF}
\begin{bmatrix}
0{,}270\\
0{,}661\\
-0{,}121\\
-0{,}259\\
0{,}016\\
-0{,}070\\
0{,}071
\end{bmatrix}
$$

haben wir mit einem Mathematikprogramm ermittelt. Daraus erhalten wir mit

$$
u_{ZF} = u_{(0,1)} = 0{,}27\,u_{g,HF}
$$

den Mischgewinn $G_{M(50)} = 0{,}292 = -5{,}4\,\mathrm{dB}$. Er ist etwas größer als der Wert in Abb. 25.42, da wir hier nur drei Oberwellen berücksichtigt haben. Bei der Simulation eines Mischers mit einem Schaltungssimulator muss der Nutzer angeben, wie viele Oberwellen berücksichtigt werden sollen; die Berechnung erfolgt dann auf die hier vorgestellte Weise.
<!-- page-import:1475:end -->

<!-- page-import:1476:start -->
25.3 Mischer mit Dioden 1439

#### 25.3.4.5 Vergleich von Schmalband- und Breitbandbetrieb

Die Verläufe des Mischgewinns in Abb. 25.42 sind typisch für Diodenmischer. Bei Schmalbandbetrieb wird bereits bei geringer LO-Amplitude ein hoher Mischgewinn erzielt; eine weitere Erhöhung der LO-Amplitude führt zu einer deutlichen Abnahme. Der Breitbandbetrieb mit kurzgeschlossenen Oberwellen zeichnet sich üblicherweise durch ein sehr breites Maximum des Mischgewinns aus; Abweichungen der LO-Amplitude vom optimalen Wert sind unkritisch. Beim echten Breitbandbetrieb muss man eine erheblich größere LO-Amplitude wählen, um einen vergleichbaren Mischgewinn zu erzielen; diese Betriebsart spielt aber in der Praxis keine Rolle, da in typischen Sendern und Empfängern aufgrund der Filter und Anpassnetzwerke ohnehin keine breitbandigen Abschlüsse mit konstantem Wellenwiderstand vorliegen. Der Schmalbandbetrieb ist die bevorzugte Betriebsart.

In der Praxis sind die Anteile im Bereich der Oberwellen üblicherweise relativ gut kurzgeschlossen; wir bezeichnen deshalb den Breitbandbetrieb mit kurzgeschlossenen Oberwellen als den Breitbandbetrieb schlechthin. Der Anteil bei der Spiegelfrequenz ist mehr oder weniger gut kurzgeschlossen, so dass der praktische Betrieb zwischen dem Schmal- und dem Breitbandbetrieb liegt. Für die Grenzfälle halten wir fest:

- Die Wellenwiderstände $Z_{W,M(ZF)}$ und $Z_{W,M(HF)}$ für eine Leistungsanpassung am ZF- bzw. HF-Anschluss sind bei Breitbandbetrieb größer als bei Schmalbandbetrieb und nicht mehr gleich; typische Werte sind:

$$
Z_{W,M(ZF)} \approx (2\dots3{,}5)\,Z_{W,M}, \quad Z_{W,M(HF)} \approx (1{,}2\dots1{,}8)\,Z_{W,M}
$$

Dabei ist $Z_{W,M}$ der Wellenwiderstand bei Schmalbandbetrieb, siehe (25.16). Der Wellenwiderstand $Z_{W,M(ZF)}$ am ZF-Anschluss ist demnach etwa um den Faktor zwei größer als der Wellenwiderstand $Z_{W,M(HF)}$ am HF-Anschluss.

- Der Mischgewinn $G_M$ und der maximale verfügbare Leistungsgewinn $MAG$ unterscheiden sich im typischen Arbeitsbereich nur wenig. Bei kleinen LO-Amplituden ist der $MAG$ bei Schmalbandbetrieb größer, bei großen LO-Amplituden der $MAG$ bei Breitbandbetrieb.

- Bei Breitbandbetrieb wird meist auf separate Anpassnetzwerke verzichtet. Man optimiert den Mischgewinn $G_M$ durch eine geeignete Wahl der LO-Amplitude und – sofern möglich – der Übersetzungsverhältnisse der Übertrager.

### 25.3.5 Kenngrößen

Wir haben gesehen, dass man einen Diodenmischer mit Hilfe einer Y-Matrix beschreiben kann; dabei tritt die Frequenzumsetzung nicht mehr explizit in Erscheinung. Ein Mischer verhält sich demnach wie ein Verstärker, der zusätzlich eine Frequenzumsetzung bewirkt; deshalb gelten die im Abschnitt 24.4 beschriebenen Kenngrößen von HF-Verstärkern auch für Mischer. Bei der Berechnung des Mischgewinns $G_M$, der dem Übertragungsgewinn $G_T$ eines Verstärkers entspricht, und des maximal verfügbaren Mischgewinns $MAG$ haben wir diese Analogie bereits verwendet.

Auch die im Abschnitt 24.4.2 beschriebenen nichtlinearen Kenngrößen gelten für Mischer in gleicher Weise. Abbildung 25.43 zeigt als Beispiel die AM/AM-Kennlinie und die Intermodulationskennlinie eines Eintaktmischers mit einer Schottky-Diode des Typs BAS40 bei allseitiger Anpassung und einer LO-Leistung $P_{LO} = 1\,\mathrm{mW} = 0\,\mathrm{dBm}$.

Diodenmischer haben ein ausgezeichnetes Intermodulationsverhalten. Im Gegensatz zu Verstärkern bleibt die Leistung der Intermodulationsprodukte immer unterhalb der extrapolierten Geraden. Der für Verstärker typische starke Anstieg der Intermodulations-
<!-- page-import:1476:end -->

<!-- page-import:1477:start -->
1440  25. Mischer

a  AM/AM-Kennlinie

b  Intermodulationskennlinie

**Abb. 25.43.** Kennlinien eines Eintaktmischers mit einer Schottky-Diode des Typs BAS40 bei allseitiger Anpassung $(Z_W = 50\,\Omega)$ und einer LO-Leistung $P_{LO} = 1\,\mathrm{mW} = 0\,\mathrm{dBm}$

produkte bei Übersteuerung tritt hier nicht auf; deshalb kann man die Leistungen der Intermodulationsprodukte und die Intermodulationsabstände bis zum Kompressionspunkt mit Hilfe der Intercept-Punkte berechnen, siehe (24.57) und (24.58) auf Seite 1386.

Darüber hinaus gibt es einen engen Zusammenhang zwischen den nichtlinearen Kenngrößen und der LO-Leistung. Bei typischen Diodenmischern entspricht der Eingangs-Kompressionspunkt etwa der LO-Leistung und der Eingangs-Intercept-Punkt $IIP3$ liegt um etwa $10\,\mathrm{dB}$ über der LO-Leistung:

$$
P_{A,g(Komp)}\;[\mathrm{dBm}] \;\approx\; P_{LO}\;[\mathrm{dBm}]
$$

$$
P_{A,g(IP3)}\;[\mathrm{dBm}] \;\approx\; P_{LO}\;[\mathrm{dBm}] + 10\,\mathrm{dB}
$$

Bei sehr guten Diodenmischern liegt der $IIP3$ um bis zu $15\,\mathrm{dB}$ über der LO-Leistung.

*Beispiel:* Für einen Eintaktmischer mit einer Schottky-Diode des Typs BAS40 und einer LO-Leistung $P_{LO} = 0\,\mathrm{dBm}$ entnimmt man aus den Kennlinien in Abb. 25.43 den Eingangs-Kompressionspunkt $P_{A,g(Komp)} = -2{,}5\,\mathrm{dBm}$ und den Eingangs-Intercept-Punkt $P_{A,g(IP3)} = 7{,}5\,\mathrm{dBm}$. Die Werte liegen nur um $2{,}5\,\mathrm{dB}$ unter den Werten der Näherungen.

## 25.3.6 Rauschen

Die Berechnung der Rauschzahl eines Diodenmischers ist aufwendig und kann nur numerisch erfolgen. Viele HF-Schaltungssimulatoren besitzen dafür eine spezielle Analysefunktion (*mixer noise analysis*). Wir skizzieren die Vorgehensweise, da sie wichtige Einblicke in die Zusammenhänge ermöglicht, und beschreiben anschließend Näherungen für den Schmalband- und den Breitbandbetrieb. Wir betrachten einen Abwärtsmischer, da das Rauschen der Abwärtsmischer in einem Empfänger von besonderem Interesse ist; dagegen sind die Pegel der Signale in einem Sender meist so groß, dass das Rauschen keinen störenden Einfluss hat.
<!-- page-import:1477:end -->

<!-- page-import:1478:start -->
25.3 Mischer mit Dioden 1441

**Abb. 25.44.**  
Kleinsignalersatzschaltbild einer  
Diode mit Rauschquellen

### 25.3.6.1 Verfahren zur Berechnung der Rauschzahl

Wir gehen kurz auf das Verfahren zur Berechnung der Rauschzahl ein, um einige Zusammenhänge zu erläutern, die für die weitere Betrachtung wichtig sind. HF-Schaltungssimulatoren verwenden dieses Verfahren zur numerischen Berechnung der Rauschzahl.

#### 25.3.6.1.1 Rauschquellen

Eine Diode besitzt zwei Rauschquellen: den pn-Übergang und den Bahnwiderstand $R_B$. Abbildung 25.44 zeigt das Kleinsignalersatzschaltbild einer Diode mit der Rauschstromquelle $i_{D,r}$ des pn-Übergangs und der Rauschspannungsquelle $u_{RB,r}$ des Bahnwiderstands $R_B$. Da die Diode durch die LO-Spannung großsignalmäßig ausgesteuert wird, ist der Arbeitspunkt zeitvariant; dadurch sind auch die Rauschstromdichte der Rauschstromquelle $i_{D,r}$ und der differentielle Widerstand $r_D$ zeitvariant. Eine exakte Berechnung ist aufwendig. Man erhält jedoch eine ausreichend genaue Näherung, indem man die mittleren Werte verwendet, die sich aus dem Gleichanteil $I_{D,0}$ des Diodenstroms ergeben; daraus folgt für den differentiellen Widerstand

$$
r_D \stackrel{(1.3)}{=} \frac{U_T}{I_{D,0}} \qquad U_T = kT/q \qquad = \frac{kT}{q\,I_{D,0}}
$$

und für die Rauschstromdichte des pn-Übergangs:

$$
|i_{D,r}(f)|^2 \stackrel{(2.50)}{=} 2q\,I_{D,0} \qquad U_T = kT/q \qquad \frac{2kT\,I_{D,0}}{U_T} = \frac{2kT}{r_D}
$$

Für die Rauschspannungsdichte des Bahnwiderstands gilt:

$$
|u_{RB,r}(f)|^2 \stackrel{(2.49)}{=} 4kT\,R_B
$$

Rechnet man die Rauschstromdichte des pn-Übergangs in die äquivalente Rauschspannungsdichte

$$
|u_{D,r}(f)|^2 = |i_{D,r}(f)|^2\,r_D^2 = 2kT\,r_D = \frac{1}{2}\cdot 4kT\,r_D
$$

um, zeigt sich, dass die Rauschdichte eines pn-Übergangs nur halb so groß ist wie die Rauschdichte eines thermisch rauschenden Widerstands mit demselben Widerstandswert. Von diesem Zusammenhang machen wir im folgenden noch Gebrauch.

#### 25.3.6.1.2 Kleinsignalersatzschaltbild

Abbildung 25.45 zeigt das Kleinsignalersatzschaltbild zur Berechnung der Rauschzahl eines Diodenmischers. Man erhält dieses Kleinsignalersatzschaltbild, indem man das im Abschnitt 25.3.4.4 für den allgemeinen Breitbandbetrieb entwickelte Kleinsignalersatzschaltbild um die Rauschquellen ergänzt. Wir unterscheiden hier nicht mehr zwischen
<!-- page-import:1478:end -->

<!-- page-import:1479:start -->
1442  25. Mischer

Abb. 25.45. Kleinsignalersatzschaltbild zur allgemeinen Berechnung der Rauschzahl eines Diodenmischers. Die Pfeile verdeutlichen die Umrechnung der Rauschquellen auf den Eingang.

Eintakt-, Gegentakt- und Ringmischer, sondern setzen voraus, dass die Port-Impedanzen $Z_{(0,1)}$ und $Z_{(n,\pm 1)}$ für den jeweiligen Mischertyp korrekt bestimmt wurden^5.

Die Rauschspannungsquellen $u_{r,g(0,1)}$ und $u_{r,g(n,\pm 1)}$ beschreiben das Rauschen der äußeren Beschaltung im Bereich der jeweiligen Port-Frequenz. Das Rauschen des Diodenmischers wird durch die Rauschstromquellen $i_{r,D}$ beschrieben, die sich aus den Rauschquellen der Dioden ergeben. Wir gehen hier nicht weiter auf die Berechnung ein, die dadurch erschwert wird, dass die von den pn-Übergängen an den einzelnen Ports hervorgerufenen Anteile korreliert sind, die von den Bahnwiderständen hervorgerufenen Anteile jedoch nicht.

#### 25.3.6.1.3 Berechnung der Rauschzahl

Zur Berechnung der Rauschzahl müssen wir:

- den Mischer mit einem Referenz-Signalgenerator mit der Referenztemperatur $T_0 =$ 290 K betreiben;

---

^5 Ohne den Bezug der Port-Impedanzen auf die Impedanzen $Z_{HF}(s)$ und $Z_{ZF}(s)$ an den Anschlüssen sind die Kleinsignalersatzschaltbilder des Gegentaktmischers in Abb. 25.40 auf Seite 1435 und des Ringmischers in Abb. 25.41 auf Seite 1437 identisch.
<!-- page-import:1479:end -->

<!-- page-import:1480:start -->
25.3 Mischer mit Dioden 1443

– alle Rauschquellen auf den Eingang umrechnen und unter Berücksichtigung der Korrelation zu einer Ersatzrauschquelle zusammenfassen;  
– das Verhältnis der Rauschspannungsdichten der Ersatzrauschquelle und der Rauschspannungsdichte des Referenz-Signalgenerators bilden.

Wir haben diese Schritte im Abschnitt 4.2.4 für Verstärker beschrieben. Die Umrechnung der Rauschquellen auf den Eingang erfolgt in zwei Schritten: zunächst werden die Rauschquellen mit Hilfe der Übertragungsfunktionen von der jeweiligen Quelle zum ZF-Port auf den ZF-Port umgerechnet; anschließend werden diese umgerechneten Rauschquellen mit Hilfe der Übertragungsfunktion vom HF- zum ZF-Port auf den HF-Port umgerechnet. Die Pfeile in Abb. 25.45 verdeutlichen die Umrechnung.

Man erkennt, dass die Rauschzahl im allgemeinen von den Impedanzen und den Rauschdichten an allen Ports abhängt. Durch die Verwendung eines Referenz-Signalgenerators sind nur die Verhältnisse am HF-Port definiert; die Beschaltung der anderen Ports und die zugehörigen Rauschdichten bleiben unbestimmt. Die Angabe einer Rauschzahl für einen Mischer ist deshalb grundsätzlich immer mit Annahmen bezüglich der Impedanzen an den anderen Ports verbunden; besondere Bedeutung haben dabei der Schmalbandbetrieb, bei dem alle Ports außer dem HF- und dem ZF-Port kurzgeschlossen sind, und der Breitbandbetrieb, bei dem angenommen wird, dass am Spiegelfrequenz-Port dieselben Verhältnisse vorliegen wie am HF-Port und das Rauschen der anderen Ports vernachlässigt werden kann.

## 25.3.6.2 Näherungen für Schmalband- und Breitbandbetrieb

Bei der Bestimmung der Näherungen macht man sich die Tatsache zu Nutze, dass ein Diodenmischer passiv ist. Bei passiven Vierpolen mit ausschließlich thermischem Rauschen entspricht die Rauschzahl $F$ dem Kehrwert des verfügbaren Gewinns $G_A$:

$$
F = \frac{1}{G_A}
\quad\Rightarrow\quad
F\;[\mathrm{dB}] = -G_A\;[\mathrm{dB}]
$$

(25.39)

Typische Beispiele sind Dämpfungsglieder und Leistungsteiler. Man kann diesen Zusammenhang auch auf einen Diodenmischer bei Schmalbandbetrieb anwenden, wenn man die Bahnwiderstände vernachlässigt und berücksichtigt, dass die pn-Übergänge nur die halbe Rauschdichte eines entsprechenden, thermisch rauschenden Widerstands aufweisen.

Für die Rauschzahl gilt allgemein $F = 1 + F_Z$; dabei beschreibt die Zusatzrauschzahl $F_Z$ den Anteil des Rauschens, der vom rauschenden Vierpol hinzugefügt wird. Bei einem thermisch rauschenden Vierpol gilt nach (25.39):

$$
F_Z = F - 1 = \frac{1}{G_A} - 1
$$

Dieser Anteil ist bei einem Diodenmischer ohne Bahnwiderstände nur halb so groß; daraus folgt für die Rauschzahl eines Diodenmischers bei Schmalbandbetrieb die Zweiseitenband-Rauschzahl (double sideband noise figure):

$$
F_{DSB} = 1 + \frac{1}{2}\left(\frac{1}{G_A} - 1\right) = \frac{1}{2}\left(1 + \frac{1}{G_A}\right)
$$

(25.40)

Aus der Bedingung $G_A \leq 1$ für passive Netzwerke folgt $F_{DSB} \geq 1 = 0\,\mathrm{dB}$.
<!-- page-import:1480:end -->

<!-- page-import:1481:start -->
1444  25. Mischer

Die Bezeichnung *Zweiseitenband-Rauschzahl* ist sehr verwirrend, da der Spiegelfrequenz-Port bei Schmalbandbetrieb kurzgeschlossen ist und deshalb bezüglich des Rauschens nur *ein* Seitenband wirksam wird. Die Bezeichnung bezieht sich aber auf einen ganz anderen, für nachrichtentechnische Empfänger unüblichen Betriebsfall, bei dem Breitbandbetrieb vorliegt und das Nutzsignal ebenfalls in beiden Seitenbändern vorhanden ist. Die Bezeichnung *Zweiseitenband* bezieht sich hier also auf das Nutzsignal und nicht auf das Rauschen.

Bei Breitbandbetrieb mit gleichen Verhältnissen am HF- und am Spiegelfrequenz-Port ist der Anteil des Rauschens, der vom Mischer hinzugefügt wird, doppelt so groß wie bei Schmalbandbetrieb; daraus folgt für die Rauschzahl eines Diodenmischers bei Breitbandbetrieb die *Einseitenband-Rauschzahl* (*single sideband noise figure*):

$$
F_{SSB} = 1 + \left(\frac{1}{G_A} - 1\right) = \frac{1}{G_A}
$$

(25.41)

Auch hier bezieht sich die Bezeichnung *Einseitenband* auf das Nutzsignal.

Man kann zeigen, dass bei Breitbandbetrieb $G_A \leq 1/2$ gilt; daraus folgt $F_{SSB} \geq 2 = 3\,\mathrm{dB}$. Für praktische Diodenmischer ist dieser Zusammenhang jedoch ohne Bedeutung, da für den verfügbaren Gewinn bei Schmalband- und bei Breitbandbetrieb dieselben Zusammenhänge gelten wie für den maximalen Gewinn $MAG$ oder den Mischgewinn $G_M$: bei kleinen LO-Leistungen sind die Gewinne bei Schmalbandbetrieb, bei hohen LO-Leistungen die bei Breitbandbetrieb größer; im Bereich typischer LO-Leistungen sind die Unterschiede gering, siehe Abb. 25.38f auf Seite 1432 oder Abb. 25.42 auf Seite 1438. Damit erhält man für das Verhältnis der beiden Rauschzahlen unter Voraussetzung gleicher verfügbarer Gewinne bei Schmal- und Breitbandbetrieb:

$$
\frac{F_{SSB}}{F_{DSB}} = \frac{2}{1+G_A} \qquad G_A \approx 0{,}15 \ldots 0{,}3 \qquad \approx 1{,}5 \ldots 1{,}75
$$

Demnach ist die Einseitenband-Rauschzahl bei praktischen Diodenmischern mit geringer Fehlanpassung und $G_A \approx G_M \approx -8 \ldots -5\,\mathrm{dB} \approx 0{,}15 \ldots 0{,}3$ etwa um den Faktor $1{,}5 \ldots 1{,}75 \approx 2 \ldots 2{,}5\,\mathrm{dB}$ größer als die Zweiseitenband-Rauschzahl.

Die tatsächlichen Rauschzahlen eines Diodenmischers sind aufgrund des thermischen Rauschens der Bahnwiderstände höher; das gilt vor allem bei hohen LO-Leistungen, bei denen sich die Bahnwiderstände immer stärker bemerkbar machen. Darüber hinaus treten ohmsche Verluste in den Übertragern auf, die ebenfalls mit einem entsprechenden thermischen Rauschen verbunden sind. Wenn die thermischen Anteile des Rauschens dominieren, gilt $F_{DSB} \approx 1/G_A$ und $F_{SSB} \approx 2/G_A - 1$.

In der Praxis liegt meist weder reiner Schmalband- noch reiner Breitbandbetrieb vor; gleichzeitig macht sich das thermische Rauschen der Bahnwiderstände und Übertrager bemerkbar, dominiert aber nicht. In diesem Fall kann man für die Rauschzahl eines Diodenmischers die Abschätzung

$$
F \approx \frac{1}{G_A} \approx \frac{1}{G_M}
$$

(25.42)

verwenden. Genauere Werte erhält man nur mit Hilfe einer numerischen Analyse.
<!-- page-import:1481:end -->

<!-- page-import:1482:start -->
25.3 Mischer mit Dioden 1445

**Abb. 25.46.**  
Ringmischer als diskretes Bauteil

## 25.3.7 Praktische Diodenmischer

In der Praxis werden überwiegend Ringmischer eingesetzt. Sie sind als diskrete Bauteile erhältlich und enthalten neben den vier Dioden auch die beiden Übertrager; Abb. 25.46 zeigt die übliche Ausführung mit insgesamt vier Anschlüssen: LO-, ZF-, HF- und ein gemeinsamer Masse-Anschluss. Bei einigen Ausführungen sind die Masseanschlüsse nicht verbunden; dann hat der Ringmischer sechs Anschlüsse.

Aufgrund der Entkopplung der Anschlüsse und der Symmetrie der Schaltung kann man die Anschlüsse eines Ringmischers vertauschen; dadurch ändern sich zwar die Spannungen und Ströme der Dioden, das Kleinsignalersatzschaltbild und die Betriebsgrößen ($R_{LO}, Z_{W,M}, MAG$, usw.) bleiben aber gleich, sofern die Übertrager symmetrisch sind. Bei praktischen Ringmischern werden häufig der LO- und der ZF-Anschluss vertauscht, siehe Abb. 25.46. Der Übertrager $\ddot{U}_1$ arbeitet dann nicht mehr bei der ZF-Frequenz, sondern bei der wesentlich höheren LO-Frequenz; dadurch reduziert sich die Baugröße des Übertragers. Die ZF-Frequenz kann in diesem Fall sehr niedrig gewählt werden. Abbildung 25.47 zeigt die zugehörige Stromverteilung. Im LO-Kreis leiten abwechselnd die Dioden $D_1/D_4$ ($U_{LO} > 0$) und $D_2/D_3$ ($U_{LO} < 0$); dadurch fließt der ZF-Strom abwechselnd über die beiden Sekundärwicklungen des Übertragers $\ddot{U}_2$.

Diskrete Ringmischer sind immer für eine bestimmte LO-Leistung ausgelegt. Bei dieser Leistung wird der Mischgewinn $G_M(50)$ in einem 50 $\Omega$-System maximal und die Anschlüsse sind möglichst gut an 50 $\Omega$ angepasst. Dies wird durch die Verwendung geeigneter Dioden und eine Anpassung der Übersetzungsverhältnisse der Übertrager erreicht. Der Ringmischer ist dann nicht mehr symmetrisch, d.h. die angegebene Anschlussbelegung muss eingehalten werden. Im Datenblatt wird anstelle des Mischgewinns der Mischverlust (*conversion loss*) in dB angegeben:

$$
L_{M(50)}\ [\mathrm{dB}] = -G_{M(50)}\ [\mathrm{dB}] = -10 \log G_{M(50)}
$$

Die LO-Leistung wird in dBm angegeben:

$$
P_{LO}\ [\mathrm{dBm}] = 10 \log \frac{P_{LO}}{1\ \mathrm{mW}}
$$

Ein Mischer für eine LO-Leistung von $n$ dBm wird als *Level-$n$-Mischer* bezeichnet.

Für den ZF- und den LO-/HF-Anschluss sind Frequenzbereiche angegeben, in denen der Mischer seine Spezifikationen erfüllt; sie resultieren aus der Bandbreite der Dioden und der Übertrager. Die Entkopplung der Anschlüsse ist aufgrund von Unsymmetrien in den Übertragern sowie kapazitiven und induktiven Kopplungen nicht ideal. Besonders kritisch
<!-- page-import:1482:end -->
