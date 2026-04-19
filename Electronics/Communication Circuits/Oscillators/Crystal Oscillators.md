# Crystal Oscillators

<!-- page-import:1602:start -->
26.3 Quarz-Oszillatoren 1565

Abb. 26.68.  
Typischer Aufbau eines Oszillators mit  
dielektrischem Resonator (DRO)

führt werden, dass man bei $C_2$ die gewünschte Kompensationsinduktivität $L_{C2}$ erhält und bei $C_3$ keine zusätzliche parasitäre Induktivität auftritt. Bei CAD-Programmen, die speziell für den Entwurf von Hochfrequenzschaltungen ausgelegt sind, werden die parasitären Elemente des Layouts automatisch in die Schaltungssimulation übernommen, so dass man die Auswirkungen unmittelbar beurteilen kann. Anschließend wird ein Prototyp erstellt, an dem man einen letzten Feinabgleich der Elemente vornimmt.

Dieses Beispiel zeigt, dass der Entwurf diskret aufgebauter Oszillatoren oberhalb 100 MHz eine genaue Modellierung der parasitären Elemente und Erfahrung im Umgang mit parasitären Resonanzen erfordert. Bei schwach angekoppelten Resonatoren erhält man zudem keine ausgeprägte Bandpass-Charakteristik, die bei der Unterdrückung parasitärer Resonanzstellen hilfreich wäre. Bei Leitungsresonatoren mit ihren zahlreichen Resonanzstellen muss man die Schleifenverstärkung bis zu sehr hohen Frequenzen prüfen. Das bei HF-Verstärkern übliche Verfahren, parasitäre Resonanzen mit Dämpfungswiderständen zu unterdrücken – z.B. dem Widerstand $R_{LC}$ in Abb. 24.31 auf Seite 1353 –, kann man bei Oszillatoren oft nicht anwenden, da sich die Widerstände auch im Bereich der gewünschten Resonanzfrequenz auswirken und die Güte der Schleifenverstärkung erheblich reduzieren können. Bei dem Widerstand $R_B$ in unserem Beispiel ist das nicht der Fall.

## 26.2.2.2 Oszillatoren mit dielektrischen Resonatoren

Diese Oszillatoren werden als DRO (dielectric resonator oscillator) bezeichnet. Wir zählen sie zu den Oszillatoren mit Leitungen, da ihre Funktion auf der Kopplung des Resonators mit einer oder zwei Streifenleitungen beruht. Oberhalb etwa 3 GHz sind nahezu alle diskret aufgebauten Oszillatoren als DRO realisiert. Die Obergrenze liegt bei etwa 50 GHz. Aufgrund der hohen Frequenzen werden alle Elemente als Streifenleitungen ausgeführt; Abb. 26.68 zeigt einen typischen DRO mit einem GaAs-Mesfet als Verstärker.

Die Dimensionierung erfolgt mit Hilfe der Reflexionsfaktoren des Resonators und des Verstärkers nach dem im Abschnitt 26.1.3.6 beschriebenen Verfahren, siehe Abb. 26.15 auf Seite 1518. Wir gehen nicht weiter auf diese Oszillatoren ein.

## 26.3 Quarz-Oszillatoren

Bei Quarz-Oszillatoren (crystal oscillator, XTAL oscillator, XO) wird die hohe Güte der mechanischen Schwingung und die geringe Toleranz der Resonanzfrequenz eines schwingenden Quarz-Kristalls (SiO$_2$) genutzt. Wir beschränken uns im folgenden auf die Dickenscherschwinger mit AT-Schnitt, die für Anwendungen ab 1 MHz eingesetzt werden und im Oberton-Betrieb für Frequenzen bis etwa 250 MHz geeignet sind.
<!-- page-import:1602:end -->

<!-- page-import:1603:start -->
1566  26. Oszillatoren

a Aufbau  
b Schaltsymbol  
c Ersatzschaltbild

Abb. 26.69. Quarz-Resonator

Quarz-Oszillatoren werden in zwei verschiedenen Bereichen eingesetzt, die unterschiedliche Anforderungen stellen:

- **Taktoszillatoren** werden zur Taktung (Clock, CLK) digitaler Schaltungen und Mikroprozessoren verwendet. Sie sind für alle gängigen Frequenzen als fertige Module erhältlich und arbeiten in der Regel *freilaufend*, d.h. ohne eine phasenstarre Kopplung an eine Referenz. Die Frequenz muss je nach Anwendung mehr oder weniger genau sein; eine Temperaturkompensation ist im allgemeinen nicht erforderlich. Die Anforderungen an das Rauschen des Oszillators, dass im wesentlichen von der Güte des Quarzes und vom schaltungstechnischen Aufwand im Oszillator abhängt, sind gering; deshalb werden meist sehr einfache Schaltungen verwendet. Bei vielen digitalen Schaltungen und Mikroprozessoren ist der Oszillator bereits eingebaut, so dass man nur noch einen Quarz mit der gewünschten Frequenz anschließen muss.

- **Referenzoszillatoren** müssen ein Referenzsignal mit sehr genauer Frequenz liefern. Freilaufende Referenzoszillatoren werden meist als temperaturkompensierte Quarz-Oszillatoren (*temperature compensated crystal oscillator, TCXO*) oder als temperaturgeregelte Quarz-Oszillatoren (*oven-controlled crystal oscillator, OCXO*) realisiert; bei letzteren wird der Oszillator durch ein geregeltes Heizelement auf konstanter Temperatur gehalten. Darüber hinaus gibt es Quarz-Referenzoszillatoren, bei denen die erforderliche Langzeitgenauigkeit durch eine phasenstarre Kopplung mit einem Frequenznormal – z.B. dem Langwellen-Zeitsignalsender DCF77 – erzielt wird. In hochwertigen Messgeräten wird ein 10 MHz-OCXO eingesetzt, der ausreichend genau für die Einzelanwendung ist und zusätzlich mit einer externen Referenz synchronisiert werden kann, damit man mehrere Messgeräte über eine gemeinsame Referenz phasenstarr koppeln kann. In Sendern und Empfängern werden alle Lokaloszillatoren mit phasenstarren Schleifen (PLL) an den Referenzoszillator gekoppelt, siehe Abb. 22.7 auf Seite 1240.

## 26.3.1 Quarz-Resonatoren

Abbildung 26.69 zeigt den Aufbau, das Schaltsymbol und das Ersatzschaltbild eines Quarz-Resonators. Der Resonator besteht aus einem Quarz-Kristallplättchen, das unter einem bestimmten Winkel aus einem Kristallblock herausgeschnitten wird; daher resultiert die Bezeichnung *Schnitt*. Für Resonatoren oberhalb 1 MHz wird der *AT-Schnitt* verwendet, der in diesem Frequenzbereich eine hohe Schwingungsgüte und einen geringen Temperaturkoeffizienten gewährleistet. Bei Quarz-Resonatoren im kHz-Bereich (*NF-Quarze*) werden andere Schnitte verwendet. Das Kristallplättchen wird auf beiden Außenflächen metallisiert und kontaktiert. Man erhält einen Plattenkondensator mit einer Kapazität $C_0$, die als statische Kapazität bezeichnet wird. Aus diesem Grund ist auch das Schaltsymbol aus dem
<!-- page-import:1603:end -->

<!-- page-import:1604:start -->
26.3 Quarz-Oszillatoren 1567

Grundton

3.Oberton

5.Oberton

**Abb. 26.70.**  
Resonanzen bei einem AT-Quarz  
(Dickenscherschwinger)

Schaltsymbol einer Kapazität abgeleitet. Beim Anlegen einer Wechselspannung wird das Kristallplättchen durch den Piezo-Effekt zu mechanischen Schwingungen angeregt. Beim AT-Schnitt schwingt das Plättchen *quer*, d.h. es wird geschert, und die Resonanzfrequenz hängt von der Dicke des Plättchens ab; deshalb werden AT-Quarze auch als Dickenscher-schwinger bezeichnet.

#### 26.3.1.1 Ersatzschaltbild

Die mechanische Schwingung wirkt wie bei allen elektromechanischen Wandlern auf die elektrische Seite zurück und wird durch entsprechende Elemente im Ersatzschaltbild beschrieben. Da ein Quarz-Resonator gemäß Abb. 26.70 mehrere Resonanzstellen besitzt, die als *Grundton* und *Obertöne* (3.Oberton, 5.$\sim$, 7.$\sim$, …) bezeichnet werden, enthält das in Abb. 26.69c gezeigte Ersatzschaltbild mehrere Serienschwingkreise mit den Elementen $L_n, C_n, R_n$; dabei gilt näherungsweise:

$$
L_n \approx L_1,\quad C_n \approx \frac{C_1}{n^2},\quad R_n \approx nR_1 \qquad \text{für } n = 3{,}5{,}7,\dots
$$

Alle Resonanzen haben etwa dieselbe Güte:

$$
Q = Q_1 = \frac{1}{R_1}\sqrt{\frac{L_1}{C_1}} \approx Q_n \qquad \text{für } n = 3{,}5{,}7,\dots
$$

Abbildung 26.71 zeigt typische Werte. Obwohl man jeden Quarz im Grundton oder einem der Obertöne betreiben kann, wird in der Praxis zwischen *Grundton-Quarzen* und *Oberton-Quarzen* unterschieden. Oberton-Quarze sind speziell für den Oberton-Betrieb optimiert und haben eine höhere Güte als Grundton-Quarze.

#### 26.3.1.2 Impedanz und Resonanzfrequenzen

Im Bereich des Grundtons kann man die Elemente zur Beschreibung der Oberton-Resonanzen vernachlässigen; dann gilt für die Impedanz des Resonators:

| Frequenz [MHz] | Ton n | $L_n$ [mH] | $C_n$ [fF] | $R_n$ [$\Omega$] | $C_0$ [pF] | Q | $\Delta f$ [kHz] |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | 1 | 3000 | 8,4 | 400 | 3,5 | 47.000 | 1,2 |
| 2 | 1 | 500 | 12,7 | 100 | 4 | 63.000 | 3,2 |
| 4 | 1 | 100 | 15,8 | 25 | 4,5 | 101.000 | 7 |
| 10 | 1 | 10 | 25,3 | 5 | 5,5 | 126.000 | 23 |
| 30 | 3 | 10 | 2,8 | 15 | 5,5 | 126.000 | 7,7 |
| 50 | 5 | 10 | 1 | 25 | 5,5 | 126.000 | 4,6 |
| 150 | 7 | 3 | 0,38 | 60 | 6 | 47.000 | 4,7 |

**Abb. 26.71.** Elektrische Daten von typischen AT-Quarzen ($\Delta f = f_P - f_S$)
<!-- page-import:1604:end -->

<!-- page-import:1605:start -->
1568 26. Oszillatoren

**Abb. 26.72.** Reaktanz $X$ eines 10 MHz-Quarz-Resonators ($f_S = 10\,\mathrm{MHz}$, $f_P = 10{,}023\,\mathrm{MHz}$)

$$
Z(s) = \left(R_1 + sL_1 + \frac{1}{sC_1}\right)\parallel \frac{1}{sC_0}
= \frac{1+sC_1R_1+s^2L_1C_1}{s\,(C_0+C_1)+s^2C_0C_1R_1+s^3L_1C_1C_0}
$$

Für die Reaktanz $X = \operatorname{Im}[Z(j\,2\pi f)]$ erhält man den in Abb. 26.72 gezeigten Verlauf mit einer Serienresonanz ($X = 0$) bei der Serienresonanzfrequenz $f_S$ und einer Parallelresonanz ($X \rightarrow \pm\infty$) bei der Parallelresonanzfrequenz $f_P$. Da die Güte des Resonators sehr hoch ist, kann man den Widerstand $R_1$ bei der Berechnung der Resonanzfrequenzen vernachlässigen; dann gilt

$$
Z(s) \approx \frac{1}{s\,(C_0+C_1)}\cdot
\frac{1+s^2L_1C_1}{1+s^2\frac{L_1C_1C_0}{C_0+C_1}}
$$

und:

$$
\omega_S = 2\pi f_S = \frac{1}{\sqrt{L_1C_1}},
\quad
\omega_P = 2\pi f_P = \sqrt{\frac{C_0+C_1}{L_1C_1C_0}}
\qquad (26.29)
$$

Die Parallelresonanzfrequenz liegt wegen

$$
f_P = f_S\sqrt{1+\frac{C_1}{C_0}}
\qquad (26.30)
$$

um einige Kilohertz über der Serienresonanzfrequenz. Typische Werte für den Abstand $\Delta f = f_P - f_S$ sind in Abb. 26.71 angegeben.

Unterhalb der Serienresonanzfrequenz $f_S$ und oberhalb der Parallelresonanzfrequenz $f_P$ ist die Reaktanz kleiner Null und damit kapazitiv. Für $f \ll f_S$ verhält sich der Quarz-Resonator wie eine Kapazität mit dem Wert $C_0$. Das gilt auch für $f \gg f_P$, bis man in den Bereich des 1.Obertons gerät, in dem sich dieselbe Folge aus einer Serien- und einer Parallelresonanz ergibt wie beim Grundton; für die weiteren Obertöne gilt dasselbe.
<!-- page-import:1605:end -->

<!-- page-import:1606:start -->
26.3 Quarz-Oszillatoren 1569

Für die praktische Anwendung ist der Bereich mit induktivem Verhalten $(X > 0)$ zwischen den Resonanzfrequenzen von Interesse. In diesem schmalen Bereich nimmt die Reaktanz jeden Wert zwischen Null und Unendlich an. Da die Frequenz dabei praktisch konstant bleibt, verhält sich der Quarz-Resonator wie eine beliebig große Induktivität:

$$
X = \omega L = 2\pi f\,L \Rightarrow L = \frac{X}{2\pi f} \overset{f \approx f_S}{\approx} \frac{X}{2\pi f_S} \overset{X=0\ldots\infty}{=} 0\ldots\infty
$$

Deshalb kann man bei jedem für den jeweiligen Frequenzbereich geeigneten LC-Oszillator anstelle der Induktivität einen Quarz-Resonator einsetzen und erhält damit ohne weiteren Abgleich einen Oszillator mit einer Frequenz, die zwischen $f_S$ und $f_P$ liegt und eine Toleranz von maximal

$$
\frac{\Delta f}{f_S} = \frac{f_P-f_S}{f_S} \qquad (26.30) \qquad = \sqrt{1+\frac{C_1}{C_0}}-1 \overset{C_1 \ll C_0}{\approx} \frac{C_1}{2C_0} \approx 3\cdot 10^{-5}\ldots 3\cdot 10^{-3}
$$

aufweist. Da diese Toleranz für viele praktische Anwendungen aber immer noch zu hoch ist, wird bei Quarz-Resonatoren die Lastkapazität $C_L$ angegeben, die parallel zum Quarz-Resonator anliegen muss, damit die angegebene Frequenz erzielt wird. Bei einem 10 MHz-Quarz-Resonator für eine bestimmte Lastkapazität $C_L$ nimmt die Reaktanz bei 10 MHz den Wert $X = 1/(2\pi \cdot 10\,\text{MHz}\cdot C_L)$ an und kompensiert damit die Reaktanz $X_{CL} = -X$ der Lastkapazität; die Oszillatorfrequenz beträgt dann exakt 10 MHz. Deshalb liegt die Serienresonanzfrequenz $f_S$ bei einem praktischen Quarz-Resonator einige Kilohertz unterhalb und die Parallelresonanzfrequenz $f_P$ einige Kilohertz oberhalb der angegebenen Resonator-Frequenz.

*Beispiel:* Wir vergleichen einen LC- und einen Quarz-Oszillator mit $f_R = 10\,\text{MHz}$. Typische Werte für den LC-Oszillator sind $L = 10\,\mu\text{H}$ und $C = 25{,}33\,\text{pF}$. Die Werte müssen sehr genau eingehalten werden. Aus

$$
\omega_R = \frac{1}{\sqrt{LC}} \Rightarrow
\begin{cases}
\frac{d\omega_R}{dL} = -\frac{1}{2L\sqrt{LC}} = -\frac{\omega_R}{2L}\\
\frac{d\omega_R}{dC} = -\frac{1}{2C\sqrt{LC}} = -\frac{\omega_R}{2C}
\end{cases}
$$

folgt für die relativen Abweichungen:

$$
\frac{d\omega_R}{\omega_R} = \frac{df_R}{f_R} = -\frac{1}{2}\frac{dL}{L} = -\frac{1}{2}\frac{dC}{C}
$$

Eine Zunahme von $L$ oder $C$ um $1\,\%$ führt demnach zu einer Abnahme der Resonanzfrequenz um $0{,}5\,\%$ bzw. $50\,\text{kHz}$.

Wir ersetzen nun die Induktivität $L$ durch einen 10 MHz-Quarz-Resonator, der für eine Lastkapazität $C_L = C \approx 25\,\text{pF}$ ausgelegt ist. Da die Lastkapazität parallel zur statischen Kapazität $C_0$ liegt, erhalten wir aus (26.30) die Bedingung:

$$
f_R = f_P\big|_{C_0\to C_0+C_L} = f_S\sqrt{1+\frac{C_1}{C_0+C_L}} \overset{C_L=25\,\text{pF}}{=} 10\,\text{MHz}
$$

Durch Auflösen nach $f_S$ und Einsetzen von $C_0$ und $C_1$ kann man $f_S$ berechnen. Uns interessieren hier aber nicht die absoluten Werte, sondern die relative Abweichung von $f_R$ bei einer relativen Abweichung von $C_L$ bzw. $C'_L = C_0 + C_L$:
<!-- page-import:1606:end -->

<!-- page-import:1607:start -->
1570  26. Oszillatoren

$$
f_R = f_S \sqrt{1 + \frac{C_1}{C'_L}}
\Rightarrow
\frac{d f_R}{d C'_L} = -\frac{f_R}{2}\,\frac{C_1}{C'_L(C'_L + C_1)}
\overset{C'_L \gg C_1}{\approx}
-\frac{f_R}{2}\,\frac{C_1}{C'^2_L}
$$

Daraus folgt:

$$
\frac{d f_R}{f_R} \approx -\frac{C_1}{2C'_L}\,\frac{d C'_L}{C'_L}
=
-\frac{C_1 C_L}{2\,(C_0 + C_L)^2}\,\frac{d C_L}{C_L}
$$

Mit den Werten $C_0 = 5{,}5\,\mathrm{pF}$ und $C_1 \approx 25\,\mathrm{fF}$ aus Abb. 26.71 und $C_L = 25\,\mathrm{pF}$ folgt:

$$
\frac{d f_R}{f_R}
\approx
-\frac{0{,}025 \cdot 25}{2\,(5{,}5 + 25)^2}\,\frac{d C_L}{C_L}
\approx
-3{,}4 \cdot 10^{-4}\,\frac{d C_L}{C_L}
$$

Eine Zunahme von $C_L$ um $1\,\%$ führt nun nur noch zu einer Abnahme der Frequenz um $0{,}00034\,\%$ bzw. $34\,\mathrm{Hz}$.

Da die relative Abweichung proportional zu $C_1$ ist und wir in diesem Beispiel den Quarz-Resonator mit dem höchsten Wert für $C_1$ verwendet haben, stellt das Ergebnis praktisch den *worst case* für Quarz-Oszillatoren dar. Bei Oberton-Betrieb mit $C_n \approx C_1/n^2$ nimmt die relative Abweichung weiter ab; deshalb kann man die Frequenzgenauigkeit eines 10 MHz-Referenzoszillators stark verbessern, indem man anstelle eines 10 MHz-Quarz-Resonators im Grundton einen 2 MHz-Quarz-Resonator im 5.Oberton betreibt. Da $C_1$ nach Abb. 26.71 etwa um den Faktor 2 geringer ist und durch den Betrieb im 5.Oberton noch einmal um den Faktor 25 abnimmt, ist die relative Abweichung um den Faktor 50 geringer. Damit gerät man aber in den Bereich, in dem die temperaturbedingten Änderungen dominieren, d.h. der Vorteil ist nur dann praktisch nutzbar, wenn man gleichzeitig eine sehr exakte Temperaturkompensation vornimmt oder eine Temperaturregelung einsetzt.

### 26.3.1.3 Frequenzabgleich

Bei freilaufenden Referenzoszillatoren wird in der Praxis ein Frequenzabgleich mit einem Trimmkondensator (*Trimmer*) vorgenommen. Man kann den Trimmer in Serie oder parallel zum Quarz-Resonator anschließen. Bei einem Parallel-Trimmer $C_p$ bleibt die Serienresonanzfrequenz $f_S$ unverändert, während die Parallelresonanzfrequenz von $C_p$ abhängt:

$$
f'_P = f_S \sqrt{1 + \frac{C_1}{C_0 + C_p}}
=
\left\{
\begin{array}{ll}
f_P & \text{für } C_p = 0 \\
f_S & \text{für } C_p \to \infty
\end{array}
\right.
$$

Dagegen bleibt bei einem Serien-Trimmer $C_s$ die Parallelresonanzfrequenz $f_P$ unverändert und für die Serienresonanzfrequenz gilt:

$$
f'_S = f_S \sqrt{1 + \frac{C_1}{C_0 + C_s}}
=
\left\{
\begin{array}{ll}
f_P & \text{für } C_s = 0 \\
f_S & \text{für } C_s \to \infty
\end{array}
\right.
$$

Bei einem Oszillator mit Parallelresonanz nach Abb. 26.73a kann man beide Varianten einsetzen, da die Oszillatorfrequenz $f_R$ in diesem Fall zwischen $f_S$ und $f_P$ liegt und von beiden Frequenzen abhängt. Bei einem Oszillator mit Serienresonanz nach Abb. 26.73b gilt $f_R = f_S$; in diesem Fall wird nur der Serien-Trimmer wirksam.

Abbildung 26.74a zeigt die Abgleichkennlinien für die drei Fälle aus Abb. 26.73a/b; dabei haben wir bei den Fällen mit Parallelresonanz die in Abb. 26.73c gezeigte Kapazität der $C_V$ des Verstärkers berücksichtigt. Bei Parallelresonanz erreicht man mit $C_p$
<!-- page-import:1607:end -->

<!-- page-import:1608:start -->
## 26.3 Quarz-Oszillatoren

a Frequenzabgleich bei Parallelresonanz

b Frequenzabgleich bei Serienresonanz

c Ersatzschaltbild bei Parallelresonanz

d Ersatzschaltbild bei Serienresonanz

**Abb. 26.73.** Frequenzabgleich bei einem Quarz-Resonator

einen großen Abgleichbereich, wenn $C_V$ klein ist; bei $C_S$ ist es umgekehrt. Den größten Abgleichbereich erhält man bei Serienresonanz.

In allen Fällen nimmt die Güte des Resonators durch den Abgleich nur minimal ab. Für den Betrieb als Oszillator ist jedoch die Schleifengüte entscheidend, d.h. wir müssen für alle drei Fälle den Verlustwiderstand des Resonators – $R_P$ bei Parallelresonanz und $R_S$ bei Serienresonanz – ermitteln und mit den Verlustwiderständen typischer Verstärker vergleichen, um festzustellen, wie stark die Güte durch den Verstärker abnimmt. Bei Parallelresonanz erhalten wir das Ersatzschaltbild in Abb. 26.73c mit dem Verlustwiderstand $R_P$ des Resonators und dem Verlustwiderstand $R_{PV}$ des Verstärkers. Damit die Güte erhalten bleibt, muss $R_{PV} \gg R_P$ gelten; ein kleiner Wert für $R_P$ erleichtert das

1: Parallelkreis, $C_p$, $C_V = 2\,\mathrm{pF}$  
2: Parallelkreis, $C_S$, $C_V = 20\,\mathrm{pF}$  
3: Serienkreis, $C_S$

a Abgleichkennlinie

1: Parallelkreis, $C_p$, $C_V = 2\,\mathrm{pF}$  
2: Parallelkreis, $C_S$, $C_V = 20\,\mathrm{pF}$  
3: Serienkreis, $C_S$

b Parallel- bzw. Serienwiderstand

**Abb. 26.74.** Kennlinien und Verlustwiderstände beim Frequenzabgleich eines 10 MHz-Quarz-Resonators

1571
<!-- page-import:1608:end -->

<!-- page-import:1609:start -->
1572  26. Oszillatoren

Einhalten dieser Bedingung. Abbildung 26.74b zeigt, dass $R_P$ bei einem Serien-Trimmer (Kurve 2) geringer ist als bei einem Parallel-Trimmer (Kurve 1); für typische Trimmer mit $3 \dots 10\,\mathrm{pF}$ erzielt man deshalb mit einem Serien-Trimmer in der Regel eine deutlich höhere Schleifengüte. Bei Serienresonanz erhalten wir das Ersatzschaltbild in Abb. 26.73d mit dem Verlustwiderstand $R_S$ des Resonators und den Verlustwiderständen $r_e$ und $r_a$ des Verstärkers. In diesem Fall muss $r_e + r_a \ll R_S$ gelten, damit die Güte erhalten bleibt; dabei ist ein großer Wert für $R_S$ vorteilhaft. Kurve 3 in Abb. 26.74b zeigt, dass man mit kleinen Werten für $C_S$ hohe Werte für $R_S$ und damit eine hohe Schleifengüte erzielt. Deshalb wird der Abgleich in der Praxis sowohl bei Parallel- als auch bei Serienresonanz mit einem Serien-Trimmer mit einem möglichst kleinen Wert durchgeführt.

#### 26.3.1.4 Verlustleistung

Die Verlustleistung $P_V$ eines Quarz-Resonators entspricht der am jeweiligen Widerstand $R_n$ des Ersatzschaltbilds umgesetzten Leistung ($R_1$ bei Grundton-Betrieb, $R_3$ bei Betrieb auf dem 3.Oberton, usw.). Damit der Resonator nicht mechanisch überlastet wird, darf die Verlustleistung einen von der Baugröße abhängigen Maximalwert $P_{V,max}$ nicht überschreiten; typische Werte liegen im Bereich $P_{V,max} = 0{,}1 \dots 1\,\mathrm{mW}$.

Da der durch den Widerstand $R_n$ fließende Strom $i$ aufgrund der hohen Güte sinusförmig ist, kann man die Verlustleistung aus der Amplitude $\hat{i}$ berechnen:

$$
P_V = i_{eff}^2 R_n = \frac{1}{2}\hat{i}^2 R_n
$$

Der Strom $i$ ist allerdings nur in einer Schaltungssimulation verfügbar. An einem aufgebauten Quarz-Oszillator kann man dagegen nur die Spannung $u$ am Resonator messen; in diesem Fall gilt:

$$
P_V = \frac{1}{2}\hat{i}^2 R_n = \frac{1}{2}\frac{\hat{u}^2}{|Z_n(\omega_R)|^2} R_n
\qquad \text{mit } Z_n(\omega_R) = R_n + j\left(\omega_R L_n - \frac{1}{\omega_R C_n}\right)
$$

Bei einem Oszillator mit Serienresonanz ($f_R = f_S$) kompensieren sich die Reaktanzen von $L_n$ und $C_n$; dann gilt:

$$
\omega_R = \omega_S
\quad\Rightarrow\quad
Z_n(\omega_S) = R_n
\quad\Rightarrow\quad
P_V = \frac{\hat{u}^2}{2R_n}
$$

In diesem Fall ist die zulässige Amplitude $\hat{u}$ sehr klein; bei einem hochwertigen 10 MHz-Quarz-Resonator mit $R_1 = 5\,\Omega$ und $P_{V,max} = 0{,}1\,\mathrm{mW}$ muss $\hat{u} < 32\,\mathrm{mV}$ gelten. Bei einem Oszillator mit Parallelresonanz gilt:

$$
f_R = f_S \sqrt{1 + \frac{C_n}{C_0 + C_L}}
= f_S \sqrt{1 + \frac{C_n}{C'_L}}
\overset{C_n \ll C'_L}{\approx}
f_S \left(1 + \frac{C_n}{2C'_L}\right)
$$

Dabei ist $C_L$ die Lastkapazität, die parallel zum Quarz-Resonator wirksam wird, und $C'_L = C_L + C_0$ die effektive Lastkapazität. Mit diesem Zusammenhang erhält man:

$$
|Z_n(\omega_R)|^2 \approx R_n^2 + \frac{1}{(\omega_S C'_L)^2}
\quad\Rightarrow\quad
P_V \approx \frac{\hat{u}^2}{2}\frac{(\omega_S C'_L)^2 R_n}{1 + (\omega_S C'_L R_n)^2}
\leq P_{V,max}
$$

Damit kann man die zulässige Amplitude ermitteln. Für einen 10 MHz-Quarz-Resonator mit $R_1 = 5\,\Omega$, $P_{V,max} = 0{,}1\,\mathrm{mW}$ und $C_0 = 5{,}5\,\mathrm{pF}$ erhält man bei einer typischen Lastkapazität $C_L \approx 20\,\mathrm{pF}$ die Forderung $\hat{u} < 4\,\mathrm{V}$.
<!-- page-import:1609:end -->

<!-- page-import:1610:start -->
26.3 Quarz-Oszillatoren 1573

**Abb. 26.75.**  
Temperaturgang der Re-
sonanzfrequenzen für ver-
schiedene Schnittwinkel

### 26.3.1.5 Temperaturverhalten

Der Temperaturgang der Resonanzfrequenzen eines Quarz-Resonators lässt sich durch den Schnittwinkel beeinflussen; Abb. 26.75 zeigt typische Verläufe. Damit die Frequenz eines freilaufenden Referenzoszillators möglichst unabhängig von der Temperatur wird, muss der Schnittwinkel so gewählt werden, dass der Quarz-Resonator den Temperaturgang der Reaktanz des Verstärkers und des Abgleich-Trimmers kompensiert. In der Praxis werden häufig zusätzliche keramische Serien- oder Parallelkondensatoren mit genormtem Temperaturgang (*Klasse-1-Kondensatoren*) eingesetzt, um die Frequenz über einen größeren Temperaturbereich konstant zu halten. Temperaturkompensierte Quarz-Oszillatoren (*TCXO*) beruhen auf diesem Prinzip.

## 26.3.2 Schaltungen

Quarz-Oszillatoren werden häufig als *Pierce-Oszillator* (= Colpitts-Oszillator in Emitterschaltung) oder *Butler-Oszillator* aufgebaut. Abbildung 26.76 zeigt im oberen Teil die Prinzipschaltbilder und darunter jeweils eine typische Ausführung in diskreter Schaltungstechnik. Man beachte, dass die Prinzipschaltbilder bei Verwendung eines allgemeinen Symbols für den Verstärker identisch sind. Beim Pierce-Oszillator ist der Verstärker invertierend und hochohmig, beim Butler-Oszillator nichtinvertierend und niederohmig. Während man einen relativ hochohmigen Verstärker mit *einem* Transistor realisieren kann – alle im Abschnitt 26.1.5 beschriebenen LC-Oszillatoren arbeiten auf diese Weise –, muss man einen niederohmigen Verstärker in der Regel zweistufig aufbauen. Der Butler-Oszillator entspricht dem zweistufigen Oszillator mit Serienschwingkreis, den wir im Abschnitt 26.1.4.2 beschrieben haben, siehe Abb. 26.21 auf Seite 1523.

Die Kapazitäten $C_2$ und $C_3$ bilden beim Pierce-Oszillator den für Colpitts-Oszillatoren typischen kapazitiven Spannungsteiler. Beim Butler-Oszillator bewirken die Kapazitäten zusammen mit der statischen Kapazität $C_0$ des Quarz-Resonators eine Abnahme der Schleifenverstärkung bei hohen Frequenzen; bei Verwendung von Transistoren mit relativ geringer Transitfrequenz kann man darauf verzichten. Man kann die Kapazitäten aber auch zur Impedanztransformation gemäß Abb. 26.8 auf Seite 1510 verwenden; in diesem Fall entsprechen $C_2$ und $C_3$ den in Abb. 26.8b gezeigten Kapazitäten $C_{P1}$ und $C_{P2}$ und haben bei $f_R = 10\,\mathrm{MHz}$ Werte von einigen Nanofarad. Die Phase der Schleifenverstär-
<!-- page-import:1610:end -->

<!-- page-import:1611:start -->
1574  26. Oszillatoren

$A < 0$  
$r_e \rightarrow \infty$  
$r_a \rightarrow \infty$

$A > 0$  
$r_e \rightarrow 0$  
$r_a \rightarrow 0$

a  Pierce-Oszillator (Parallelresonanz)

$U_b = 5\,\mathrm{V}$

$R_{B1}$  
47 k$\Omega$

$R_C$  
4,7 k$\Omega$

2,7 V

0,5 mA

1,6 V

$T_1$  
BC547B

$R_{B2}$  
22 k$\Omega$

$R_E$  
1,9 k$\Omega$

10 MHz

$C_2$  
47 pF

$C_3$  
22 pF

b  zweistufiger Butler-Oszillator (Serienresonanz)

$U_b = 5\,\mathrm{V}$

4,2 mA

$T_2$  
BC547B

4,2 V

$R_C$  
28 $\Omega$

4 mA

$T_1$  
BC547B

$R_{B1}$  
4,7 k$\Omega$

0,88 V

$R_{B2}$  
2,2 k$\Omega$

10 MHz

$C_2$  
(10 pF)

$C_3$  
(10 pF)

$R_{E2}$  
1 k$\Omega$

$R_{E1}$  
220 $\Omega$

$C_B$  
1 nF

**Abb. 26.76.** Prinzipschaltbilder und Beispiele für diskrete Quarz-Oszillatoren mit Parallel- und Serienresonanz (Dimensionierung für einen Quarz-Resonator mit $R_1 = 5\,\Omega$)

kung ändert sich dadurch jedoch grundlegend, so dass zusätzliche Phasenschieber benötigt werden.

### 26.3.2.1 Taktoszillatoren

#### 26.3.2.1.1 Taktoszillatoren für diskrete Schaltungen

Quarz-Oszillatoren zur Taktung digitaler Schaltungen, die keine besonderen Anforderungen an das Rauschen des Taktsignals stellen, kann man mit digitalen Gattern realisieren; Abb. 26.77 zeigt zwei häufig verwendete Schaltungen. Bei CMOS-Gattern verwendet man den Pierce-Oszillator mit einem einzelnen Inverter als invertierenden Verstärker, siehe Abb. 26.77a. Der Widerstand $R_1$ hält den Inverter im linearen Bereich. Da es sich um eine Spannungsgegenkopplung handelt, die den Eingangswiderstand reduziert, muss $R_1$ hochohmig sein, damit der Eingang hochohmig bleibt. Der Widerstand $R_2$ entkoppelt den Ausgang des Inverters von der Rückkopplung, erhöht den Ausgangswiderstand und bildet mit $C_2$ einen Tiefpass, der die Anregung von Obertönen verhindert. Bei Frequenzen oberhalb einigen Megahertz ersetzt man $R_2$ durch eine Kapazität 10...47 pF. Bei den vergleichsweise niederohmigen TTL-Gattern verwendet man den Butler-Oszillator mit zwei Invertern, bei denen der Ein- und der Ausgangswiderstand durch eine Spannungsgegenkopplung mit den niederohmigen Widerständen $R_1$ und $R_2$ reduziert wird, siehe Abb. 26.77b. Die Kapazität $C_1$ dient zur Entkopplung der Arbeitspunktspannungen am Ausgang des ersten und am Eingang des zweiten Gatters. Aufgrund der steilen Flanken der TTL-Inverter kann der Quarz-Resonator auf einem Oberton angeregt werden; in die-
<!-- page-import:1611:end -->

<!-- page-import:1612:start -->
26.3 Quarz-Oszillatoren 1575

z.B. 4049

z.B. 7404

**a** Pierce-Oszillator mit CMOS-Inverter (Parallelresonanz)

$R_1$  
$\geq 1\,\mathrm{M}\Omega$

$R_2$  
$1 \ldots 4{,}7\,\mathrm{k}\Omega$

$C_3$  
$10 \ldots 68\,\mathrm{pF}$

$C_2$  
$10 \ldots 68\,\mathrm{pF}$

**b** Butler-Oszillator mit TTL-Invertern (Serienresonanz)

$C_1$  
$10\,\mathrm{nF}$

$R_1$  
$1\,\mathrm{k}\Omega$

$R_2$  
$1\,\mathrm{k}\Omega$

$C_2$  
$0{,}1 \ldots 1\,\mathrm{nF}$

**Abb. 26.77.**  
Taktoszillatoren mit digitalen Gattern für  
$f_R = 1 \ldots 10\,\mathrm{MHz}$

sem Fall ergänzt man die Kapazität $C_2$, die dafür sorgt, dass die Schleifenverstärkung beim Grundton deutlich größer ist als bei den Obertönen.

Beide Taktoszillatoren kann man auch mit einem Quarz-Resonator im Oberton-Betrieb verwenden; dazu ersetzt man die Kapazität $C_2$ in Abb. 26.77a durch einen LC-Parallelschwingkreis bzw. die Kapazität $C_1$ in Abb. 26.77b durch einen LC-Serienschwingkreis und stimmt die Schwingkreise auf den gewünschten Oberton ab.

In digitalen Schaltungen werden häufig mehrere Taktsignale mit Teilerfaktoren $2^n$ benötigt. Dazu kann man CMOS-Taktbausteine mit integriertem Teiler verwenden, z.B. den Baustein CD4060B. Abbildung 26.78 zeigt eine Schaltung mit einem 1024 kHz-Quarz-Resonator, die häufig verwendet wird, wenn eine einfache und kostengünstige 1 kHz-Referenz benötigt wird. Mit dem Trimmer $C_3$ kann man die Frequenz abgleichen.

### 26.3.2.1.2 Taktoszillatoren für integrierte Schaltungen

Die meisten integrierten Quarz-Taktoszillatoren werden als Pierce-Oszillatoren realisiert; dabei wird das typische $\pi$-Glied mit dem Quarz-Resonator und den beiden Kapazitäten des Colpitts-Spannungsteilers extern angeschlossen. Die Kapazitäten werden nicht integriert, da sie zur Anpassung des Oszillators an Quarz-Resonatoren mit unterschiedlicher Frequenz und Güte benötigt werden. Abbildung 26.79 zeigt typische Ausführungen mit Bipolartransistoren und Mosfets, die für eine geringe Versorgungsspannung geeignet sind.

Bei der Ausführung mit Bipolartransistoren wählt man den Ruhestrom $I_0$ und den Emitterwiderstand $R_E$ so, dass $I_0 R_E \approx 0{,}3\,\mathrm{V}$ gilt und die Schleifenverstärkung den gewünschten Wert hat. Der Widerstand $R_B \gg R_E$ dient zur Arbeitspunkteinstellung und hat nur einen geringen Einfluss auf die Schleifenverstärkung. Typische Werte für den Betrieb

CD4060B

CLK 14-Bit-Zähler

$R_1$  
$1\,\mathrm{M}\Omega$

1024 kHz

$R_2$  
$2{,}2\,\mathrm{k}\Omega$

$C_3$  
$10 \ldots 40\,\mathrm{pF}$

$C_2$  
$22\,\mathrm{pF}$

1024 kHz

Pin | Teilerfaktor | Frequenz
--- | --- | ---
7 | 16 | 64 kHz
5 | 32 | 32 kHz
4 | 64 | 16 kHz
6 | 128 | 8 kHz
14 | 256 | 4 kHz
13 | 512 | 2 kHz
15 | 1024 | 1 kHz
1 | 4096 | 250 Hz
2 | 8192 | 125 Hz
3 | 16384 | 62,5 Hz

**Abb. 26.78.**  
CMOS-Taktoszillator mit  
$f_R = 1024\,\mathrm{kHz}$ und Teiler
<!-- page-import:1612:end -->

<!-- page-import:1613:start -->
1576  26. Oszillatoren

Abb. 26.79. Quarz-Taktoszillatoren für integrierte Schaltungen mit geringer Versorgungsspannung

mit einem 1 MHz-Quarz-Resonator sind $I_0 = 200\,\mu\mathrm{A}$, $R_E = 1{,}5\,\mathrm{k}\Omega$, $R_B = 30\,\mathrm{k}\Omega$ und – je nach Güte des Resonators – $C_1 = C_2 = 68\dots120\,\mathrm{pF}$. Die Kollektorschaltung mit dem Transistor $T_2$ dient als Puffer. Bei der Ausführung mit Mosfets muss man die Mosfets so skalieren, dass die gewünschte Schleifenverstärkung erreicht wird. Der Widerstand $R_B$ sollte möglichst hochohmig sein.

Ebenfalls geeignet ist der in Abb. 26.80 gezeigte Gegentakt-Butler-Oszillator mit Serienresonanz, der keine externen Kapazitäten benötigt. Da die Eingangswiderstände $r_e \approx 1/S = U_T/I_0$ der Transistoren $T_1$ und $T_2$ in Reihe zum Serienwiderstand des Resonators liegen, muss man den Ruhestrom $I_0$ aber deutlich höher wählen als bei einem Pierce-Oszillator, um eine vergleichbare Schleifengüte zu erzielen. Meist nimmt man eine deutliche Reduktion der Güte in Kauf und wählt $I_0 \approx 1\,\mathrm{mA}$. Dieser Nachteil wird zum Teil dadurch aufgewogen, dass die Kollektorwiderstände im Bereich $R_C \approx 50\dots100\,\Omega$ liegen und das Signal ohne Pufferverstärker niederohmig abgegriffen werden kann. Durch die statische Kapazität $C_0$ des Resonators nimmt die Schleifenverstärkung mit zunehmender Frequenz zu; deshalb muss man besonders darauf achten, dass die Schleifenverstärkung im gesamten Frequenzbereich oberhalb der Resonanzfrequenz kleiner Eins bleibt. Bei dem diskret aufgebauten Butler-Oszillator in Abb. 26.76 auf Seite 1574 wird dies durch die Kapazitäten $C_2$ und $C_3$ sichergestellt. Hier übernehmen die Kollektor-Substrat-Kapazitäten der Stromquellen-Transistoren $T_3$ und $T_4$ diese Funktion; deshalb werden diese Transistoren häufig größer dimensioniert, um ausreichend große Kapazitäten zu erhalten.

Abb. 26.80.
Gegentakt-Butler-Oszillator für integrierte Schaltungen
mit geringer Versorgungsspannung
<!-- page-import:1613:end -->

<!-- page-import:1614:start -->
26.3 Quarz-Oszillatoren 1577

a Clapp-Oszillator (Parallelresonanz)  
b Butler-Oszillator (Serienresonanz)

**Abb. 26.81.** Diskrete Quarz-Oszillatoren für $f_R \geq 10\,\mathrm{MHz}$

#### 26.3.2.1.3 Eigenschaften von Taktoszillatoren

Bei Taktoszillatoren möchte man preisgünstige Quarz-Resonatoren verwenden, die erhebliche fertigungsbedingte Schwankungen der Güte aufweisen können; dabei gilt die Regel, dass der Oszillator auch bei einer um den Faktor 3 reduzierten Güte noch sicher arbeiten soll. Da die Schleifenverstärkung proportional zur Güte ist, muss man den Oszillator für die minimale Güte auslegen. Bei der Nenngüte ist die Schleifenverstärkung dann um 10 dB höher, was zu einer starken Übersteuerung des Verstärkers und einer Reduktion der Schleifengüte im eingeschwungenen Zustand führt; deshalb weisen einfache Taktoszillatoren häufig ein relativ hohes Rauschen und einen hohen Takt-Jitter auf. Für viele digitale Schaltungen ist dies jedoch unerheblich. Wenn der Oszillator aber zur Taktung von A/D- oder D/A-Umsetzern mit hoher Auflösung oder als Referenz für eine phasenstarre Schleife eingesetzt werden soll, muss man einen der im nächsten Abschnitt beschriebenen Referenzoszillatoren verwenden.

### 26.3.2.2 Referenzoszillatoren

Bei diesen Oszillatoren sind niedriges Rauschen und geringer Takt-Jitter besonders wichtig; deshalb muss man die Schleifengüte maximieren und dafür sorgen, dass die Güte auch im eingeschwungenen Zustand erhalten bleibt. Eine wichtige Voraussetzung dafür ist die Verwendung von hochwertigen Quarz-Resonatoren mit hoher Güte und geringen Toleranzen.

#### 26.3.2.2.1 Grundschaltungen

Bei Frequenzen bis 10 MHz werden meist die in Abb. 26.76 gezeigten Oszillatoren verwendet. Oberhalb 10 MHz verwendet man entweder einen Clapp-Oszillator mit Parallelresonanz oder einen einstufigen Butler-Oszillator mit Serienresonanz.

**Clapp-Oszillator**

Den in Abb. 26.81a gezeigten Clapp-Oszillator erhält man, indem man die Induktivität des in Abb. 26.29d auf Seite 1531 gezeigten Clapp-Oszillators durch einen Quarz-Resonator ersetzt. Die Koppelkapazität $C_k$ ist in der Regel deutlich kleiner als die Kapazitäten $C_2, C_3$ des Colpitts-Spannungsteilers; typische Werte liegen im Bereich $C_k = 1 \dots 4{,}7\,\mathrm{pF}$ und $C_2, C_3 = 22 \dots 100\,\mathrm{pF}$. Die Widerstände kann man meist problemlos so hochohmig wählen, dass die Schleifengüte ausreichend hoch bleibt; nur bei sehr geringen Versorgungsspannungen muss der Widerstand $R_E$ durch eine Stromquelle ersetzt werden.
<!-- page-import:1614:end -->

<!-- page-import:1615:start -->
1578  26. Oszillatoren

**Butler-Oszillator**

Ab etwa 30 MHz muss man Oberton-Oszillatoren verwenden. Damit der Quarz-Resonator auf einem Oberton betrieben werden kann, muss man die Schleife um einen auf den gewünschten Oberton abgestimmten LC-Schwingkreis erweitern; dadurch wird Schleifenverstärkung unter- und oberhalb des gewünschten Obertons stark reduziert. Die am häufigsten verwendete Schaltung ist der in Abb. 26.81b gezeigte einstufige Butler-Oszillator. Man erhält ihn aus dem zweistufigen Butler-Oszillator aus Abb. 26.76b, indem man den Widerstand $R_C$ und die Kollektorschaltung mit dem Transistor $T_2$ durch einen LC-Parallelschwingkreis mit kapazitivem Spannungsteiler ersetzt. Die resultierende Schaltung entspricht dem in Abb. 26.27 auf Seite 1529 gezeigten Colpitts-Oszillator in Basisschaltung mit dem Unterschied, dass die Schleife nun über den Quarz-Resonator geschlossen wird und man deshalb nur bei den Serienresonanzfrequenzen des Resonators eine ausreichend starke Mitkopplung erhält.

Bei der Dimensionierung ersetzt man den Quarz-Resonator zunächst durch eine Parallelschaltung aus einem Widerstand entsprechend dem Serienwiderstand $R_n$ des Resonators beim gewünschten Oberton $n$ und einer Kapazität entsprechend der statischen Kapazität $C_0$ des Resonators. Dann dimensioniert man die Schaltung so, dass sie etwa auf dem gewünschten Oberton schwingt. Schließlich ersetzt man die Ersatzelemente wieder durch den Quarz-Resonator. Die Güte des LC-Schwingkreises darf nicht zu hoch sein, da sonst ein sehr exakter Abgleich des Kreises erforderlich ist. In der Praxis verwendet man Güten im Bereich von 10; dazu kann man eine Spule mit entsprechend geringer Güte verwenden oder die Güte mit dem in Abb. 26.81b gezeigten Widerstand $R_Q$ reduzieren.

Die Schaltung hat den Vorteil, dass man die Phase der Schleifenverstärkung durch eine Verstimmung des LC-Schwingkreises einstellen und damit das Rauschverhalten im eingeschwungenen Zustand optimieren kann. Ein weiterer Vorteil ist das günstige Begrenzungsverhalten. Im Gegensatz zu den Oszillatoren mit Parallelresonanz wird der Butler-Oszillator so dimensioniert, dass die Amplitude durch die Basis-Kollektor-Diode des Transistors begrenzt wird. Dadurch wird zwar die Güte des LC-Schwingkreises reduziert, das ist hier aber nicht relevant, da die Serienresonanz des Quarz-Resonators die Schleifengüte bestimmt. Die Begrenzung durch die Basis-Kollektor-Diode muss wirksam werden, bevor die Amplitude des Stroms am Eingang der Basisschaltung so groß wird, dass der Eingangswiderstand zunimmt. Abbildung 26.82 zeigt Schaltung mit den relevanten Größen und das zugehörige Ersatzschaltbild. Die Basis-Kollektor-Diode leitet, wenn die Basis-Kollektor-Spannung $U_{BC}$ größer als 0,6 V wird; mit $u_1(t)=\hat{u}_1 \cos \omega_R t$ folgt:

$$
U_{BC}=U_B+\hat{u}_1-U_b \stackrel{!}{>} 0{,}6\ \mathrm{V}
\quad\Rightarrow\quad
\hat{u}_1 > U_b-U_B+0{,}6\ \mathrm{V}
$$

Den Zusammenhang zwischen $u_1$ und dem Eingangsstrom $i_e$ der Basisschaltung erhalten wir aus dem Kleinsignalersatzschaltbild:

$$
\frac{i_e(s)}{u_1(s)}=\frac{sC_2}{1+s(C_2+C_3)(R_n+r_E)}
$$

Dabei ist $R_n$ der Serienwiderstand des Resonators und $r_E \approx 1/S$ der Eingangswiderstand des Transistors am Emitter; den Widerstand $R_E$ können wir wegen $R_E \gg r_E$ vernachlässigen. Für das Verhältnis der Amplituden bei der Resonanzfrequenz gilt:

$$
\frac{\hat{i}_e}{\hat{u}_1}
=
\left|\frac{i_e(s)}{u_1(s)}\right|_{s=j\omega_R}
=
\frac{\omega_R C_2}{\sqrt{1+\left[\omega_R(C_2+C_3)(R_n+r_E)\right]^2}}
\approx
\frac{C_2}{(C_2+C_3)(R_n+r_E)}
$$
<!-- page-import:1615:end -->

<!-- page-import:1616:start -->
26.3 Quarz-Oszillatoren 1579

Abb. 26.82. Ersatzschaltbild zur Berechnung des Begrenzungsverhaltens

Bei der Näherung machen wir davon Gebrauch, dass die Phase bei der Resonanzfrequenz etwa Null sein muss und deshalb der Term mit $s$ bzw. $\omega_R$ im Nenner größer sein muss als die Konstante Eins; bei korrekter Einstellung der Schleifenverstärkung ist diese Bedingung demnach automatisch erfüllt. Beim Eintritt der Begrenzung sollte die Amplitude $\hat{i}_e$ nicht mehr als $2/3$ des Ruhestroms betragen:

$$
\hat{u}_1 = U_b - U_B + 0{,}6\,\mathrm{V}
\quad\Rightarrow\quad
\hat{i}_e \le \frac{2}{3}\,I_{C,A}
$$

Damit erhält man die Bedingung:

$$
I_{C,A} \ge \frac{3}{2}\,\frac{C_2}{C_2 + C_3}\,\frac{U_b - U_B + 0{,}6\,\mathrm{V}}{R_n + r_E}
$$

(26.31)

Die Bedingung ist implizit, da $r_E \approx 1/S = U_T/I_{C,A}$ von $I_{C,A}$ abhängt; das stört aber nicht, da man bei der Dimensionierung zunächst $I_{C,A}$ vorgibt, dann die Schleifenverstärkung mit $C_2$ und $C_3$ einstellt und erst danach prüft, ob die Bedingung erfüllt ist.

*Beispiel:* Wir dimensionieren den einstufigen Butler-Oszillator aus Abb. 26.81b in diskreter Schaltungstechnik für $f_R = 30\,\mathrm{MHz}$. Da der Transistor in Basisschaltung betrieben wird, können wir bei dieser Frequenz noch einen gewöhnlichen NF-Kleinleistungstransistor des Typs BC547B verwenden. Als Resonator verwenden wir einen 10 MHz-Quarz-Resonator im 3.Oberton ($n = 3$) mit $R_n = R_3 = 3R_1 = 15\,\Omega$, $C_0 = 5{,}5\,\mathrm{pF}$ und $Q = 126000$. Den Ruhestrom $I_{C,A}$ des Transistors wählen wir so, dass der Eingangswiderstand $r_e$ der Basisschaltung kleiner wird als der Serienwiderstand $R_3$ des Resonators:

$$
I_{C,A} = 3\,\mathrm{mA}
\quad\Rightarrow\quad
r_e \approx r_E \approx \frac{1}{S} = \frac{U_T}{I_{C,A}} = \frac{26\,\mathrm{mV}}{3\,\mathrm{mA}} \approx 9\,\Omega
$$

Da der LC-Schwingkreis eine geringe Güte besitzt und der Teilerfaktor $n_C = 1 + C_3/C_2$ meist sehr hoch ist, beträgt der effektive Ausgangswiderstand $r_a$ der Basisschaltung am Ausgang des Teilers nur wenige Ohm; wir erwarten deshalb eine Schleifengüte von:

$$
Q_{LG} \overset{(26.6)}{=} \frac{R_3}{R_3 + r_e + r_a}\,Q
\overset{r_a \to 0}{\approx}
\frac{15}{15 + 9}\cdot 126000 \approx 79000
$$

Für den LC-Schwingkreis geben wir $L = 1\,\mu\mathrm{H}$ vor und erhalten damit für $f_R = 30\,\mathrm{MHz}$ eine effektive Schwingkreiskapazität:

$$
\omega_R^2LC = 1
\quad\Rightarrow\quad
C \stackrel{!}{=} \frac{1}{\omega_R^2L}
= \frac{1}{(2\pi \cdot 30\,\mathrm{MHz})^2 \cdot 1\,\mu\mathrm{H}}
\approx 28\,\mathrm{pF}
$$
<!-- page-import:1616:end -->

<!-- page-import:1617:start -->
1580  26. Oszillatoren

a Arbeitspunkt

b Abstimmung des LC-Schwingkreises

**Abb. 26.83.** Beispiel: Dimensionierung eines Butler-Oszillators für $f_R = 30\,\text{MHz}$

Sie setzt sich näherungsweise aus der Kollektor-Basis-Kapazität $C_C \approx 3{,}5\,\text{pF}$ des Transistors und den Kapazitäten $C_2$ und $C_3$ zusammen:

$$
C \approx C_C + \frac{C_2 C_3}{C_2 + C_3}
$$

Wir erwarten einen hohen Teilerfaktor mit $C_3 \gg C_2$; daraus folgt:

$$
C \overset{C_3 \gg C_2}{\approx} C_C + C_2 \;\Rightarrow\; C_2 \approx C - C_C \approx 24{,}5\,\text{pF} \;,\; C_3 > 250\,\text{pF}
$$

Den Widerstand $R_Q$ erhalten wir aus der Forderung, dass der LC-Schwingkreis etwa eine Güte von 10 haben soll:

$$
\text{(26.3)}\qquad Q = R_Q \sqrt{\frac{C}{L}} \approx 10 \;\Rightarrow\; R_Q \approx 10 \cdot \sqrt{\frac{1\,\mu\text{H}}{28\,\text{pF}}} \approx 1{,}9\,\text{k}\Omega
$$

Da wir die Verluste der Spule vernachlässigt haben, wählen wir mit $R_Q = 2{,}2\,\text{k}\Omega$ den nächstgrößeren Normwert.

Abbildung 26.83a zeigt den Arbeitspunkt der Schaltung. Die Widerstände $R_{B1}$, $R_{B2}$ und $R_E$ haben wir so gewählt, dass der Ruhestrom etwa $3\,\text{mA}$ beträgt. Damit die Basis des Transistors bei $f_R = 30\,\text{MHz}$ kleinsignalmäßig möglichst gut mit Masse verbunden ist, haben wir für $C_B$ einen Kondensator gewählt, dessen Resonanzfrequenz etwa bei $30\,\text{MHz}$ liegt ($C_B = 10\,\text{nF},\ L_{CB} \approx 3\,\text{nH} \Rightarrow f_{res} \approx 29\,\text{MHz}$).

Zunächst ersetzen wir den Quarz-Resonator durch eine RC-Parallelschaltung $R_3, C_0$ und dimensionieren den Teiler $C_2, C_3$ mit Hilfe einer Schaltungssimulation so, dass wir bei $f_R = 30\,\text{MHz}$ eine Schleifenverstärkung von etwa $3\,\text{dB}$ erhalten. Abbildung 26.83b zeigt die Schaltung mit den optimierten Werten $C_2 = 24\,\text{pF}$ und $C_3 = 1\,\text{nF}$. Die Schleifengüte beträgt $Q_{LG} \approx 8$. Wenn wir nun die RC-Parallelschaltung durch den Quarz-Resonator ersetzen, erhalten wir eine Schleifengüte $Q_{LG} \approx 72500$. Die Bedingung (26.31) für eine Begrenzung durch die Kollektor-Basis-Diode ist erfüllt:

$$
I_{C,A} \ge \frac{3}{2}\,\frac{C_2}{C_2 + C_3}\,\frac{U_b - U_B + 0{,}6\,\text{V}}{R_n + r_E}
$$

$$
= \frac{3}{2}\,\frac{24}{24 + 1000}\,\frac{5\,\text{V} - 3{,}76\,\text{V} + 0{,}6\,\text{V}}{15\,\Omega + 9\,\Omega} \approx 2{,}7\,\text{mA}
$$
<!-- page-import:1617:end -->

<!-- page-import:1618:start -->
26.3 Quarz-Oszillatoren 1581

**Abb. 26.84.**  
Typischer Aufbau eines diskreten Quarz-Oszillators für hohe Anforderungen

#### 26.3.2.2 Schaltungen für hohe Anforderungen

**Diskrete Ausführung**

Die im letzten Abschnitt behandelten Oszillatoren sind einfach zu realisieren, haben aber den Nachteil, dass die Rauschzahlen der Kollektorschaltung des Clapp-Oszillators und der Basisschaltung des Butler-Oszillators relativ hoch sind und die Begrenzung der Amplitude durch die Basis-Kollektor-Dioden das Rauschverhalten zusätzlich verschlechtert. Bei hohen Anforderungen wird deshalb bevorzugt eine Emitterschaltung mit Kaskode-Stufe und einer rauscharmen Begrenzung durch Schottky-Dioden verwendet. Als weitere Maßnahme wird der bei Serienresonanz störende Einfluss der statischen Kapazität $C_0$ durch eine Parallelinduktivität kompensiert.

Abbildung 26.84 zeigt den typischen Aufbau eines derartigen Oszillators. Die Transistoren werden mit einem Ruhestrom von etwa $10 \dots 20\,\mathrm{mA}$ betrieben. Die Induktivität $L_0$ bildet zusammen mit der statischen Kapazität $C_0$ des Quarz-Resonators einen Parallelschwingkreis, der auf die Resonanzfrequenz abgeglichen wird; für $f_R = 10 \dots 100\,\mathrm{MHz}$ und $C_0 \approx 5 \dots 6\,\mathrm{pF}$ erhält man $L_0 \approx 0{,}47 \dots 47\,\mu\mathrm{H}$. Die Güte dieses Kreises wird mit dem Widerstand $R_0$ eingestellt. Da $R_0$ auch als Gegenkopplungswiderstand für die Arbeitspunkteinstellung dient, ist der Wertebereich eingeschränkt; typische Werte liegen im Bereich $R_0 = 100 \dots 330\,\Omega$. Daraus folgt für die Güte des Parallelschwingkreises:

$$
Q_0 = \frac{\omega_R L_0}{R_0} = \frac{1}{\omega_R C_0 R_0} \approx 1 \dots 30
$$

Man wählt $R_0$ so, dass $Q_0 \approx 5 \dots 10$ gilt.

Die Mitkopplung erfolgt über den Parallelschwingkreis aus $L_1$, $L_2$, $C_1$. Die Güte dieses Kreises wird mit $R_Q$ eingestellt und nimmt bei einsetzender Begrenzung durch die Schottky-Dioden ab; dadurch wird die Schleifenverstärkung reduziert. Die gezeigte Ausführung des Kreises hat den Vorteil, dass man die Induktivität $L_2$ zur Zuführung des Basisstroms des Transistors $T_1$ verwenden kann; dadurch kann man das $1/f$-Rauschen des Transistors und das Rauschen des Basisspannungsteilers sehr stark reduzieren, wenn man gleichzeitig zwei Abblockkondensatoren verwendet, von denen der eine bei der Resonanzfrequenz $f_R$ und der andere bei Frequenzen unter $10\,\mathrm{kHz}$ eine besonders niedrige
<!-- page-import:1618:end -->

<!-- page-import:1619:start -->
1582  26. Oszillatoren

$U_b \geq 2\,\mathrm{V}$

$R_1$  
$20\,\Omega$

$R_2$  
$100\,\Omega$

$R_3$  
$200\,\Omega$

$R_4$  
$200\,\Omega$

$R_5$  
$780\,\Omega$

$I_0$  
$1\,\mathrm{mA}$

$1\,\mathrm{mA}$

$10\,\mathrm{MHz}$

$10\,\mathrm{mA}$

$1\,\mathrm{mA}$

$2\,\mathrm{mA}$

$1\,\mathrm{mA}$

$1\,\mathrm{mA}$

$R_{LG}$  
$270\,\Omega$

$C_{LG}$  
$120\,\mathrm{pF}$

$T_1,\ T_2,\ T_3,\ T_4,\ T_5,\ T_6,\ T_7,\ T_8,\ T_9,\ T_{10},\ T_{11}$

**Abb. 26.85.** Integrierter Quarz-Oszillator für hohe Anforderungen

Impedanz besitzt. Bei $T_2$ ist dies nicht notwendig, da die Kaskode praktisch keinen Einfluss auf das Rauschverhalten hat; hier muss man statt dessen einen Basisvorwiderstand $R_{BV} \approx 22\dots100\,\Omega$ einfügen, um parasitäre Schwingungen der Kaskode-Stufe zu verhindern. Die besten Ergebnisse erzielt man mit rauscharmen HF-Transistoren, z.B. dem Typ BFP181. Da diese Transistoren eine für diese Anwendung viel zu hohe Transitfrequenz besitzen, muss der praktische Aufbau äußerst sorgfältig erfolgen, damit keine parasitären Schwingungen im oberen MHz- oder im GHz-Bereich auftreten; dazu sind häufig weitere Filtermaßnahmen im Bereich des Basisspannungsteilers und/oder das Einfügen eines Dämpfungswiderstands in der Emitterleitung von $T_2$ erforderlich.

**Integrierte Ausführung**

Dasselbe Prinzip kann man auch in einem integrierten Quarz-Oszillator verwenden; Abb. 26.85 zeigt eine typische Ausführung. Die Emitterschaltung mit dem Transistor $T_1$ wird mit einem Ruhestrom von etwa $10\,\mathrm{mA}$ betrieben, damit der Emitterwiderstand $r_E$ klein bleibt. Die Verstärkung dieser Stufe liegt bei einem hochwertigen $10\,\mathrm{MHz}$-Quarz-Resonator etwa bei $2\dots2{,}5$. Der nachfolgende Differenzverstärker $T_2, T_3$ begrenzt die Amplitude auf etwa $50\,\mathrm{mV}$ ($100\,\mathrm{mV}$ Spitze-Spitze); die Verstärkung im linearen Bereich liegt etwa bei Eins. Das Ausgangssignal des Differenzverstärkers wird mit einer weiteren Emitterschaltung mit dem Transistor $T_4$ nach Betrag und Phase angepasst – dazu dienen die externen Elemente $R_{LG}$ und $C_{LG}$ – und über die Kollektorschaltung mit dem Transistor $T_5$ auf die Basis von $T_1$ zurückgekoppelt. Die anderen Transistoren bilden eine Stromquellenbank zur Einstellung der Ruheströme.

Bei Transistoren mit großen Kollektor-Substrat-Kapazitäten kann die Ausgangskapazität des Stromquellen-Transistors $T_6$ so groß werden, dass die Schleifenverstärkung oberhalb der Resonanzfrequenz größer Eins wird; in diesem Fall muss man einen Widerstand mit $10\dots50\,\Omega$ in die Kollektorleitung von $T_6$ einfügen und die Wirkung mit einer Simulation der Schleifenverstärkung bis zur Transitfrequenz der Transistoren verifizieren.

Die Schaltung hat den Vorteil, dass keine Induktivitäten benötigt werden und die Schleifenverstärkung vergleichsweise einfach mit $R_{LG}$ und $C_{LG}$ eingestellt werden kann. Mit einem hochwertigen $10\,\mathrm{MHz}$-Quarz-Resonator mit einer Güte $Q \approx 126.000$ erzielt man mit der in Abb. 26.85 angegebenen Dimensionierung eine Schleifengüte $Q_{LG} > 80.000$.
<!-- page-import:1619:end -->

<!-- page-import:1620:start -->
26.3 Quarz-Oszillatoren 1583

a Gehäuse

b Schaltbild

**Abb. 26.86.**  
Keramischer Resonator mit Colpitts-Kapazitäten für den Betrieb mit einem Inverter

Durch eine nachträgliche Variation von $R_{LG}$ und $C_{LG}$ kann man das Rauschen im eingeschwungenen Zustand optimieren. Aufgrund des mehrstufigen Aufbaus ist das Rauschen aber deutlich höher als bei der diskreten Ausführung in Abb. 26.84.

## 26.3.3 Alternative Resonatoren

### 26.3.3.1 Keramische Resonatoren

Für Taktoszillatoren wird die hohe Güte von Quarz-Resonatoren in der Regel nicht benötigt. Als einfache und preisgünstige Alternative werden Keramik-Resonatoren verwendet, die wie Quarz-Resonatoren aufgebaut sind, aber anstelle eines Quarz-Plättchens ein Plättchen aus Zirkonium-Titanat-Keramik verwenden. Um die Anwendung weiter zu vereinfachen, sind die Kapazitäten für einen Colpitts-Oszillator mit Inverter gemäß Abb. 26.79 auf Seite 1576 bereits mit integriert, so dass der Resonator ohne weitere Beschaltung direkt an die Taktoszillator-Anschlüsse gängiger Mikrocontroller, Interface-Bausteine (z.B. USB-Controller) oder Audio-D/A-Umsetzer (z.B. in MP3-Playern) angeschlossen werden kann. Abbildung 26.86 zeigt eine typische Ausführung im Standardgehäuse. In modernen Geräten werden miniaturisierte Ausführungen in SMD-Technik eingesetzt.

Keramische Resonatoren gibt es für den Frequenzbereich $f_R = 0{,}4 \dots 50\,\mathrm{MHz}$. Das Ersatzschaltbild entspricht dem eines Quarz-Resonators; die Güte $Q \approx 500 \dots 4000$ ist jedoch deutlich geringer. Abbildung 26.89 auf Seite 1584 zeigt typische Werte.

### 26.3.3.2 Oberflächenwellen-Resonatoren

Quarz-Resonatoren kann man im Oberton-Betrieb bis etwa 200 MHz einsetzen; der höhere Schaltungsaufwand für Oberton-Oszillatoren ist dabei aber bereits störend. Höherfrequente Referenzsignale mit hohen Genauigkeitsanforderungen wurden in der Vergangenheit in der Regel mit phasenstarren Schleifen (PLL) aus niederfrequenten Quarz-Oszillatorsignalen abgeleitet; für die in sehr großen Stückzahlen gefertigten drahtlosen Fernbedienungen mit Frequenzen im Bereich von $433 \dots 434\,\mathrm{MHz}$ ist dies aber zu aufwendig und zu teuer. Für diese Anwendungen werden heute Oberflächenwellen-Resonatoren (surface-acoustic wave resonator, SAW resonator) – kurz SAW-Resonatoren genannt – verwendet.

Abbildung 26.87 zeigt den Aufbau eines SAW-Resonators, der weitgehend dem Aufbau eines SAW-Filters entspricht, siehe Abb. 23.16 auf Seite 1298. Ein SAW-Resonator besitzt in der Regel nur einen aktiven Wandler. Die Resonanz wird durch die Reflexion der erzeugten Oberflächenwellen an den beiden Reflektoren verursacht. Man kann aber auch ein schmalbandiges SAW-Filter als Resonator verwenden; dabei wird das Filter anstelle eines Serienschwingkreises im Rückkopplungszweig eines Verstärkers eingesetzt. SAW-Filter, die für diesen Einsatz gedacht sind, werden als Vierpol-SAW-Resonatoren bezeichnet, im Gegensatz zu dem in Abb. 26.87 gezeigten Zweipol-SAW-Resonator. Abbildung 26.88 zeigt die Schaltsymbole und Ersatzschaltbilder der beiden Ausführungen.
<!-- page-import:1620:end -->
