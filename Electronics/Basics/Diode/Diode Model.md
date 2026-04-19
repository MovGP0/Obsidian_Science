# Diode Model

<!-- page-import:0043:start -->
6 1. Diode

$$
I_D = I_S \left(e^{\frac{U_D}{nU_T}} - 1\right)
$$

(1.1)

Dabei ist $I_S \approx 10^{-12}\ldots10^{-6}\,\mathrm{A}$ der Sättigungssperrstrom, $n \approx 1\ldots2$ der Emissionskoeffizient und $U_T = kT/q \approx 26\,\mathrm{mV}$ die Temperaturspannung bei Raumtemperatur.

Obwohl die Gleichung (1.1) streng genommen nur für $U_D \geq 0$ gilt, wird sie gelegentlich auch für $U_D < 0$ verwendet. Man erhält für $U_D \ll -nU_T$ einen konstanten Strom $I_D = -I_S$, der im allgemeinen viel kleiner ist als der tatsächlich fließende Strom. Richtig ist demnach nur die qualitative Aussage, dass im Sperrbereich ein kleiner negativer Strom fließt; der Verlauf nach Abb. 1.3 lässt sich aber nur mit zusätzlichen Gleichungen beschreiben, siehe Abschnitt 1.3.

Im Durchlassbereich gilt $U_D \gg nU_T \approx 26\ldots52\,\mathrm{mV}$ und man kann die Näherung

$$
I_D = I_S\,e^{\frac{U_D}{nU_T}}
$$

(1.2)

verwenden; daraus folgt für die Spannung:

$$
U_D = nU_T \ln \frac{I_D}{I_S} = nU_T \ln 10 \cdot \log \frac{I_D}{I_S} \approx 60\ldots120\,\mathrm{mV}\cdot \log \frac{I_D}{I_S}
$$

Demnach nimmt die Spannung bei einer Zunahme des Stroms um den Faktor 10 um $60\ldots120\,\mathrm{mV}$ zu. Bei großen Strömen muss der Spannungsabfall $I_D R_B$ am Bahnwiderstand $R_B$ berücksichtigt werden, der zusätzlich zur Spannung am pn-Übergang auftritt:

$$
U_D = nU_T \ln \frac{I_D}{I_S} + I_D R_B
$$

Eine Darstellung in der Form $I_D = I_D(U_D)$ ist in diesem Fall nicht möglich.

Für einfache Berechnungen kann die Diode als Schalter betrachtet werden, der im Sperrbereich geöffnet und im Durchlassbereich geschlossen ist. Nimmt man an, dass im Durchlassbereich die Spannung näherungsweise konstant ist und im Sperrbereich kein Strom fließt, kann man die Diode durch einen idealen spannungsgesteuerten Schalter und eine Spannungsquelle mit der Flussspannung $U_F$ ersetzen, siehe Abb. 1.5a. Abbildung 1.5b zeigt die Kennlinie dieser Ersatzschaltung, die aus zwei Halbgeraden besteht:

$$
I_D = 0 \qquad \text{für } U_D < U_F \quad \to \text{Schalter offen (a)}
$$

$$
U_D = U_F \qquad \text{für } I_D > 0 \quad \to \text{Schalter geschlossen (b)}
$$

Berücksichtigt man zusätzlich den Bahnwiderstand $R_B$, erhält man:

$$
I_D =
\begin{cases}
0 & \text{für } U_D < U_F \quad \to \text{Schalter offen (a)} \\
\frac{U_D-U_F}{R_B} & \text{für } U_D \geq U_F \quad \to \text{Schalter geschlossen (b)}
\end{cases}
$$

Bei Silizium-pn-Dioden gilt $U_F \approx 0{,}6\,\mathrm{V}$ und bei Schottky-Dioden $U_F \approx 0{,}3\,\mathrm{V}$. Die zugehörige Schaltung und die Kennlinie sind in Abb. 1.5 gestrichelt dargestellt. Bei beiden Varianten ist eine Fallunterscheidung nötig, d.h. man muss mit offenem und geschlossenem Schalter rechnen und den Fall ermitteln, der nicht zu einem Widerspruch führt. Der Vorteil liegt darin, dass beide Fälle auf lineare Gleichungen führen, die leicht zu lösen sind; im Gegensatz dazu erhält man bei Verwendung der e-Funktion nach (1.1) implizite nichtlineare Gleichungen, die nur numerisch gelöst werden können.
<!-- page-import:0043:end -->

<!-- page-import:0052:start -->
1.3 Modell für eine Diode 15

**Abb. 1.13.** Ersatzschaltbild und Aufbau einer integrierten pn-Diode mit Nutzdiode (1) und parasitärer Substrat-Diode (2)

einer sehr dünnen Schicht an der Oberfläche. Die Tiefe des Plättchens wird *Substrat* (*substrate, S*) genannt und stellt einen gemeinsamen Anschluss für alle Bauteile der integrierten Schaltung dar.

## 1.2.2.1 Innerer Aufbau

Abb. 1.13 zeigt den Aufbau einer integrierten pn-Diode. Der Strom fließt von der *p*-Zone über den pn-Übergang in die *n*<sup>−</sup>-Zone und von dort über die *n*<sup>+</sup>-Zone zur Kathode; dabei wird durch die stark dotierte *n*<sup>+</sup>-Zone ein geringer Bahnwiderstand erreicht.

## 1.2.2.2 Substrat-Diode

Das Ersatzschaltbild in Abb. 1.13 enthält zusätzlich eine Substrat-Diode, die zwischen der Kathode und dem Substrat liegt. Das Substrat wird an die negative Versorgungsspannung angeschlossen, so dass diese Diode immer gesperrt ist und eine Isolation gegenüber anderen Bauteilen und dem Substrat bewirkt.

## 1.2.2.3 Unterschiede zwischen integrierten pn- und Schottky-Dioden

Prinzipiell kann man eine integrierte Schottky-Diode wie eine integrierte pn-Diode aufbauen, wenn man die *p*-Zone am Anoden-Anschluss weglässt. In der Praxis ist dies jedoch nicht so einfach möglich, da für Schottky-Kontakte ein anderes Metall verwendet werden muss als zur Verdrahtung der Bauteile und bei den meisten Prozessen zur Herstellung integrierter Schaltungen die entsprechenden Schritte nicht vorgesehen sind.

# 1.3 Modell für eine Diode

Im Abschnitt 1.1.2 wurde das *statische* Verhalten der Diode durch eine Exponentialfunktion beschrieben; dabei wurden sekundäre Effekte im Durchlassbereich und der Durchbruch vernachlässigt. Für den rechnergestützten Schaltungsentwurf wird ein Modell benötigt, das alle Effekte berücksichtigt und darüber hinaus auch das *dynamische* Verhalten richtig wiedergibt. Aus diesem *Großsignalmodell* erhält man durch Linearisierung das *dynamische Kleinsignalmodell*.

## 1.3.1 Statisches Verhalten

Die Beschreibung geht von der idealen Diodengleichung (1.1) aus und berücksichtigt weitere Effekte. Ein standardisiertes Diodenmodell entsprechend dem Gummel-Poon-Modell beim Bipolartransistor existiert nicht; deshalb müssen bei einigen CAD-Programmen mehrere Diodenmodelle verwendet werden, um eine reale Diode mit allen Stromanteilen zu
<!-- page-import:0052:end -->

<!-- page-import:0053:start -->
16 1. Diode

beschreiben. Beim Entwurf integrierter Schaltungen wird das Diodenmodell praktisch nicht benötigt, da hier im allgemeinen die Basis-Emitter-Diode eines Bipolartransistors als Diode verwendet wird.

## 1.3.1.1 Bereich mittlerer Durchlassströme

Im Bereich mittlerer Durchlassströme dominiert bei pn-Dioden der *Diffusionsstrom* $I_{DD}$; er folgt aus der Theorie der idealen Diode und kann entsprechend (1.1) beschrieben werden:

$$
I_{DD} = I_S \left(e^{\frac{U_D}{nU_T}} - 1\right)
\qquad (1.6)
$$

Als Modellparameter treten der *Sättigungssperrstrom* $I_S$ und der *Emissionskoeffizient* $n$ auf. Für die ideale Diode gilt $n = 1$, für reale Dioden erhält man $n \approx 1 \ldots 2$. Dieser Bereich wird im folgenden *Diffusionsbereich* genannt.

Bei Schottky-Dioden tritt der Emissionsstrom an die Stelle des Diffusionsstroms. Da jedoch beide Stromleitungsmechanismen auf denselben Kennlinienverlauf führen, kann man (1.6) auch bei Schottky-Dioden verwenden [1.1],[1.3].

## 1.3.1.2 Weitere Effekte

Bei sehr kleinen und sehr großen Durchlassströmen sowie im Sperrbereich treten Abweichungen vom *idealen* Verhalten nach (1.6) auf:

- Bei großen Durchlassströmen tritt der *Hochstromeffekt* auf, der durch eine stark angestiegene Ladungsträgerkonzentration am Rand der Sperrschicht verursacht wird [1.1]; man spricht in diesem Zusammenhang auch von *starker Injektion*. Dieser Effekt wirkt sich auf den Diffusionsstrom aus und wird durch einen Zusatz in (1.6) beschrieben.
- Durch Ladungsträgerrekombination in der Sperrschicht tritt zusätzlich zum Diffusionsstrom ein Leck- bzw. *Rekombinationsstrom* $I_{DR}$ auf, der durch eine zusätzliche Gleichung beschrieben wird [1.1].
- Bei großen Sperrspannungen bricht die Diode durch. Der *Durchbruchstrom* $I_{DBR}$ wird ebenfalls durch eine zusätzliche Gleichung beschrieben.

Der Strom $I_D$ setzt sich demnach aus drei Teilströmen zusammen:

$$
I_D = I_{DD} + I_{DR} + I_{DBR}
\qquad (1.7)
$$

### 1.3.1.2.1 Hochstromeffekt

Der Hochstromeffekt bewirkt eine Zunahme des Emissionskoeffizienten von $n$ im Bereich mittlerer Ströme auf $2n$ für $I_D \rightarrow \infty$; er kann durch eine Erweiterung von (1.6) beschrieben werden [1.4]:

$$
I_{DD} =
\frac{
I_S \left(e^{\frac{U_D}{nU_T}} - 1\right)
}{
\sqrt{
1 + \frac{I_S}{I_K}\left(e^{\frac{U_D}{nU_T}} - 1\right)
}
}
\approx
\begin{cases}
I_S e^{\frac{U_D}{nU_T}} & \text{für } I_S e^{\frac{U_D}{nU_T}} < I_K \\
\sqrt{I_S I_K}\; e^{\frac{U_D}{2nU_T}} & \text{für } I_S e^{\frac{U_D}{nU_T}} > I_K
\end{cases}
\qquad (1.8)
$$

Als zusätzlicher Parameter tritt der *Kniestrom* $I_K$ auf, der die Grenze zum *Hochstrombereich* angibt.
<!-- page-import:0053:end -->

<!-- page-import:0054:start -->
1.3 Modell für eine Diode 17

### 1.3.1.2.2 Leckstrom

Für den Leckstrom folgt aus der Theorie der idealen Diode [1.1]:

$$
I_{DR} = I_{S,R}\left(e^{\frac{U_D}{n_R U_T}} - 1\right)
$$

Diese Gleichung beschreibt den Rekombinationsstrom jedoch nur im Durchlaßbereich ausreichend genau. Im Sperrbereich erhält man durch Einsetzen von $U_D \to -\infty$ einen konstanten Strom $I_{DR} = -I_{S,R}$, während bei einer realen Diode der Rekombinationsstrom mit steigender Sperrspannung betragsmäßig zunimmt. Eine bessere Beschreibung erhält man, wenn man die Spannungsabhängigkeit der Sperrschichtweite berücksichtigt [1.4]:

$$
I_{DR} = I_{S,R}\left(e^{\frac{U_D}{n_R U_T}} - 1\right)\left(\left(1 - \frac{U_D}{U_{Diff}}\right)^2 + 0.005\right)^{\frac{m_S}{2}}
\qquad (1.9)
$$

Als weitere Parameter treten der Leck-Sättigungssperrstrom $I_{S,R}$, der Emissionskoeffizient $n_R \geq 2$, die Diffusionsspannung $U_{Diff} \approx 0{,}5 \dots 1\ \mathrm{V}$ und der Kapazitätskoeffizient $m_S \approx 1/3 \dots 1/2$ auf 3. Aus (1.9) folgt:

$$
I_{DR} \approx -I_{S,R}\left(\frac{|U_D|}{U_{Diff}}\right)^{m_S}
\qquad \text{für } U_D < -U_{Diff}
$$

Der Strom nimmt mit steigender Sperrspannung betragsmäßig zu; dabei hängt der Verlauf vom Kapazitätskoeffizienten $m_S$ ab. Im Durchlassbereich wirkt sich der zusätzliche Faktor in (1.9) praktisch nicht aus, weil dort die exponentielle Abhängigkeit von $U_D$ dominiert.

Wegen $I_{S,R} \gg I_S$ ist der Rekombinationsstrom bei kleinen positiven Spannungen größer als der Diffusionsstrom; dieser Bereich wird Rekombinationsbereich genannt. Für

$$
U_{D,RD} = U_T \frac{n n_R}{n_R - n} \ln \frac{I_{S,R}}{I_S}
$$

sind beide Ströme gleich groß. Bei größeren Spannungen dominiert der Diffusionsstrom und die Diode arbeitet im Diffusionsbereich.

Abbildung 1.14 zeigt den Verlauf von $I_D$ im Durchlassbereich in halblogarithmischer Darstellung und verdeutlicht die Bedeutung der Parameter $I_S$, $I_{S,R}$ und $I_K$. Bei einigen Dioden sind die Emissionskoeffizienten $n$ und $n_R$ nahezu gleich. In diesem Fall hat die halblogarithmisch dargestellte Kennlinie im Rekombinations- und im Diffusionsbereich dieselbe Steigung und man kann beide Bereiche mit einer Exponentialfunktion beschreiben 4.

### 1.3.1.2.3 Durchbruch

Für $U_D < -U_{BR}$ bricht die Diode durch; der dabei fließende Strom kann näherungsweise durch eine Exponentialfunktion beschrieben werden [1.5]:

$$
I_{DBR} = -I_{BR}\, e^{-\frac{U_D + U_{BR}}{n_{BR} U_T}}
\qquad (1.10)
$$

3 $U_{Diff}$ und $m_S$ werden primär zur Beschreibung der Sperrschichtkapazität der Diode verwendet, siehe Abschnitt 1.3.2.  
4 In Abb. 1.4 ist die Kennlinie einer derartigen Diode dargestellt.
<!-- page-import:0054:end -->

<!-- page-import:0055:start -->
18 1. Diode

**Abb. 1.14.**  
Halblogaritmische Darstellung von  
$I_D$ im Durchlassbereich:  
(I) Rekombinationsbereich  
(II) Diffusionsbereich  
(III) Hochstrombereich

Dazu werden die *Durchbruchspannung* $U_{BR} \approx 50 \dots 1000\,\mathrm{V}$, der *Durchbruch-Kniestrom* $I_{BR}$ und der *Durchbruch-Emissionskoeffizient* $n_{BR} \approx 1$ benötigt. Mit $n_{BR} = 1$ und $U_T \approx 26\,\mathrm{mV}$ gilt ⁵:

$$
I_D \approx I_{DBR} =
\begin{cases}
-\,I_{BR} & \text{für } U_D = -\,U_{BR} \\
-\,10I_{BR} & \text{für } U_D = -\,U_{BR} - 60\,\mathrm{mV} \\
\vdots & \\
-\,10^n I_{BR} & \text{für } U_D = -\,U_{BR} - n \cdot 60\,\mathrm{mV}
\end{cases}
$$

Die Angabe von $I_{BR}$ und $U_{BR}$ ist nicht eindeutig, da man dieselbe Kurve mit unterschiedlichen Wertepaaren $(U_{BR}, I_{BR})$ beschreiben kann; deshalb kann das Modell einer bestimmten Diode unterschiedliche Parameter haben.

## 1.3.1.3 Bahnwiderstand

Zur vollständigen Beschreibung des statischen Verhaltens wird der Bahnwiderstand $R_B$ benötigt; er setzt sich nach Abb. 1.15 aus den Widerständen der einzelnen Schichten zusammen und wird im Modell durch einen Serienwiderstand berücksichtigt. Man muss nun zwischen der *inneren Diodenspannung* $U'_D$ und der *äußeren Diodenspannung*

$$
U_D = U'_D + I_D R_B
\qquad\qquad (1.11)
$$

unterscheiden; in die Formeln für $I_{DD}$, $I_{DR}$ und $I_{DBR}$ muss $U'_D$ anstelle von $U_D$ eingesetzt werden. Der Bahnwiderstand liegt zwischen $0{,}01\,\Omega$ bei Leistungsdioden und $10\,\Omega$ bei Kleinsignaldioden.

## 1.3.2 Dynamisches Verhalten

Das Verhalten bei Ansteuerung mit puls- oder sinusförmigen Signalen wird als *dynamisches Verhalten* bezeichnet und kann nicht aus den Kennlinien ermittelt werden. Ursache hierfür sind die nichtlineare *Sperrschichtkapazität* des pn- oder Metall-Halbleiter-Übergangs und die im pn-Übergang gespeicherte *Diffusionsladung*, die über die ebenfalls nichtlineare *Diffusionskapazität* beschrieben wird.

⁵ Es gilt: $U_T \ln 10 \approx 60\,\mathrm{mV}$.
<!-- page-import:0055:end -->

<!-- page-import:0056:start -->
1.3 Modell für eine Diode 19

a in der Diode

b im Modell

**Abb. 1.15.**  
Bahnwiderstand einer Diode

## 1.3.2.1 Sperrschichtkapazität

Ein pn- oder Metall-Halbleiter-Übergang besitzt eine spannungsabhängige *Sperrschichtkapazität* $C_S$, die von der Dotierung der aneinander grenzenden Gebiete, dem Dotierungsprofil, der Fläche des Übergangs und der anliegenden Spannung $U'_D$ abhängt. Man kann sich den Übergang wie einen Plattenkondensator mit der Kapazität $C = \epsilon A/d$ vorstellen; dabei entspricht $A$ der Fläche des Übergangs und $d$ der Sperrschichtweite. Eine vereinfachte Betrachtung eines pn-Übergangs liefert $d(U) \sim (1 - U/U_{Diff})^{m_S}$ [1.1] und damit:

$$
C_S(U'_D) = \frac{C_{S0}}{\left(1 - \frac{U'_D}{U_{Diff}}\right)^{m_S}}
\qquad \text{für } U'_D < U_{Diff}
\eqno{(1.12)}
$$

Als Parameter treten die *Null-Kapazität* $C_{S0} = C_S(U'_D = 0)$, die *Diffusionsspannung* $U_{Diff} \approx 0{,}5 \dots 1\ \text{V}$ und der *Kapazitätskoeffizient* $m_S \approx 1/3 \dots 1/2$ auf [1.2].

Für $U'_D \to U_{Diff}$ sind die Annahmen, die auf (1.12) führen, nicht mehr erfüllt. Man ersetzt deshalb den Verlauf für $U'_D > f_S U_{Diff}$ durch eine Gerade [1.5]:

$$
C_S(U'_D) = C_{S0}
\begin{cases}
\displaystyle \frac{1}{\left(1 - \frac{U'_D}{U_{Diff}}\right)^{m_S}} & \text{für } U'_D \leq f_S U_{Diff} \\[1.2em]
\displaystyle \frac{1 - f_S(1 + m_S) + \frac{m_S U'_D}{U_{Diff}}}{(1 - f_S)^{(1 + m_S)}} & \text{für } U'_D > f_S U_{Diff}
\end{cases}
\eqno{(1.13)}
$$

Dabei gilt $f_S \approx 0{,}4 \dots 0{,}7$. Abbildung 2.32 auf Seite 72 zeigt den Verlauf von $C_S$ für $m_S = 1/2$ und $m_S = 1/3$.

## 1.3.2.2 Diffusionskapazität

In einem pn-Übergang ist im Durchlassbetrieb eine Diffusionsladung $Q_D$ gespeichert, die proportional zum Diffusionsstrom durch den pn-Übergang ist [1.2]:

$$
Q_D = \tau_T I_{DD}
$$
<!-- page-import:0056:end -->

<!-- page-import:0057:start -->
20  1. Diode

Abb. 1.16.  
Vollständiges Modell einer Diode

Der Parameter $\tau_T$ wird *Transitzeit* genannt. Durch Differentiation von (1.8) erhält man die *Diffusionskapazität*:

$$
C_{D,D}(U_D') \;=\; \frac{d\,Q_D}{dU_D'} \;=\; \frac{\tau_T I_{DD}}{nU_T}\,
\frac{1+\dfrac{I_S}{2I_K}\,e^{\frac{U_D'}{nU_T}}}{1+\dfrac{I_S}{I_K}\,e^{\frac{U_D'}{nU_T}}}
$$

(1.14)

Im Diffusionsbereich gilt $I_{DD} \gg I_{DR}$ und damit $I_D \approx I_{DD}$; daraus folgt für die Diffusionskapazität die Näherung:

$$
C_{D,D} \;\approx\; \frac{\tau_T I_D}{nU_T}\,
\frac{1+I_D/(2I_K)}{1+I_D/I_K}
\;\overset{I_D \ll I_K}{\approx}\;
\frac{\tau_T I_D}{nU_T}
$$

(1.15)

Bei Silizium-pn-Dioden gilt $\tau_T \approx 1 \dots 100\,\mathrm{ns}$; bei Schottky-Dioden ist die Diffusionsladung wegen $\tau_T \approx 10 \dots 100\,\mathrm{ps}$ vernachlässigbar klein.

## 1.3.3 Vollständiges Modell einer Diode

Abbildung 1.16 zeigt das vollständige Modell einer Diode; es wird in CAD-Programmen zur Schaltungssimulation verwendet. Die Diodensymbole im Modell stehen für den Diffusionsstrom $I_{DD}$ und den Rekombinationsstrom $I_{DR}$; der Durchbruchstrom $I_{DBR}$ ist durch eine gesteuerte Stromquelle dargestellt. Abbildung 1.17 gibt einen Überblick über die Größen und die Gleichungen. Die Parameter sind in Abb. 1.18 aufgelistet; zusätzlich sind die Bezeichnungen der Parameter im Schaltungssimulator *PSpice* ${}^6$ angegeben. Abbildung 1.19 zeigt die Parameterwerte einiger ausgewählter Dioden, die der Bauteile-Bibliothek von *PSpice* entnommen wurden. Nicht angegebene Parameter werden von *PSpice* unterschiedlich behandelt:

- es wird ein Standardwert verwendet:  
  $I_S = 10^{-14}\,\mathrm{A}$ , $n = 1$ , $n_R = 2$ , $I_{BR} = 10^{-10}\,\mathrm{A}$ , $n_{BR} = 1$ , $x_{T,I} = 3$ , $f_S = 0{,}5$ , $U_{Diff} = 1\,\mathrm{V}$ , $m_S = 0{,}5$
- der Parameter wird zu Null gesetzt: $I_{S,R}$ , $R_B$ , $C_{S0}$ , $\tau_T$
- der Parameter wird zu Unendlich gesetzt: $I_K$ , $U_{BR}$

Die Werte Null und Unendlich bewirken, dass der jeweilige Effekt nicht modelliert wird [1.4].

${}^6$ *PSpice* ist ein Produkt der Firma *MicroSim*.
<!-- page-import:0057:end -->

<!-- page-import:0058:start -->
1.3 Modell für eine Diode 21

| Größe | Bezeichnung | Gleichung |
|---|---|---|
| $I_{DD}$ | Diffusionsstrom | (1.8) |
| $I_{DR}$ | Rekombinationsstrom | (1.9) |
| $I_{DBR}$ | Durchbruchstrom | (1.10) |
| $R_B$ | Bahnwiderstand |  |
| $C_S$ | Sperrschichtkapazität | (1.13) |
| $C_{D,D}$ | Diffusionskapazität | (1.14) |

**Abb. 1.17.**  
Größen des Dioden-Modells

## 1.3.4 Kleinsignalmodell

Durch Linearisierung in einem Arbeitspunkt erhält man aus dem nichtlinearen Modell ein lineares *Kleinsignalmodell*. Das *statische Kleinsignalmodell* beschreibt das Kleinsignalverhalten bei niedrigen Frequenzen und wird deshalb auch *Gleichstrom-Kleinsignalersatzschaltbild* genannt. Das *dynamische Kleinsignalmodell* beschreibt zusätzlich das dynamische Kleinsignalverhalten und wird zur Berechnung des Frequenzgangs von Schaltungen benötigt; es wird auch *Wechselstrom-Kleinsignalersatzschaltbild* genannt.

### 1.3.4.1 Statisches Kleinsignalmodell

Die Linearisierung der statischen Kennlinie (1.11) liefert den Kleinsignalwiderstand:

$$
\left.\frac{dU_D}{dI_D}\right|_A = \left.\frac{dU_D^\prime}{I_D}\right|_A + R_B = r_D + R_B
$$

| Parameter | PSpice | Bezeichnung |
|---|---|---|
| *Statisches Verhalten* |  |  |
| $I_S$ | IS | Sättigungssperrstrom |
| $n$ | N | Emissionskoeffizient |
| $I_{S,R}$ | ISR | Leck-Sättigungssperrstrom |
| $n_R$ | NR | Emissionskoeffizient |
| $I_K$ | IK | Kniestrom zur starken Injektion |
| $I_{BR}$ | IBV | Durchbruch-Kniestrom |
| $n_{BR}$ | NBV | Emissionskoeffizient |
| $U_{BR}$ | BV | Durchbruchspannung |
| $R_B$ | RS | Bahnwiderstand |
| *Dynamisches Verhalten* |  |  |
| $C_{S0}$ | CJO | Null-Kapazität der Sperrschicht |
| $U_{Diff}$ | VJ | Diffusionsspannung |
| $m_S$ | M | Kapazitätskoeffizient |
| $f_S$ | FC | Koeffizient für den Verlauf der Kapazität |
| $\tau_T$ | TT | Transit-Zeit |
| *Thermisches Verhalten* |  |  |
| $x_{T,I}$ | XTI | Temperaturkoeffizient der Sperrströme nach (1.4) |

**Abb. 1.18.** Parameter des Dioden-Modells
<!-- page-import:0058:end -->

<!-- page-import:0059:start -->
22  1. Diode

| Parameter | PSpice | 1N4148 | 1N4001 | BAS40 | Einheit |
|---|---|---:|---:|---:|---|
| $I_S$ | IS | 2,68 | 14,1 | 0 | nA |
| $n$ | N | 1,84 | 1,98 | 1 |  |
| $I_{S,R}$ | ISR | 1,57 | 0 | 254 | fA |
| $n_R$ | NR | 2 | 2 | 2 |  |
| $I_K$ | IK | 0,041 | 94,8 | 0,01 | A |
| $I_{BR}$ | IBV | 100 | 10 | 10 | $\mu$A |
| $n_{BR}$ | NBV | 1 | 1 | 1 |  |
| $U_{BR}$ | BV | 100 | 75 | 40 | V |
| $R_B$ | RS | 0,6 | 0,034 | 0,1 | $\Omega$ |
| $C_{S0}$ | CJO | 4 | 25,9 | 4 | pF |
| $U_{Diff}$ | VJ | 0,5 | 0,325 | 0,5 | V |
| $m_S$ | M | 0,333 | 0,44 | 0,333 |  |
| $f_S$ | FC | 0,5 | 0,5 | 0,5 |  |
| $\tau_T$ | TT | 11,5 | 5700 | 0,025 | ns |
| $x_{T,I}$ | XTI | 3 | 3 | 2 |  |

1N4148: Kleinsignaldiode  
1N4001: Gleichrichterdiode  
BAS40: Schottky-Diode

**Abb. 1.19.** Parameter einiger Dioden

Er setzt sich aus dem Bahnwiderstand $R_B$ und dem differentiellen Widerstand $r_D$ der inneren Diode zusammen, siehe Abb. 1.10 auf Seite 10. Für $r_D$ erhält man drei Anteile entsprechend den drei Teilströmen $I_{DD}$, $I_{DR}$ und $I_{DBR}$:

$$
\frac{1}{r_D}
=
\left.\frac{d\,I_D}{dU_D'}\right|_A
=
\left.\frac{d\,I_{DD}}{dU_D'}\right|_A
+
\left.\frac{d\,I_{DR}}{dU_D'}\right|_A
+
\left.\frac{d\,I_{DBR}}{dU_D'}\right|_A
$$

Eine Berechnung durch Differentiation von (1.6), (1.9) und (1.10) liefert umfangreiche Ausdrücke; in der Praxis kann man folgende Näherungen verwenden:

$$
\frac{1}{r_{DD}}
=
\left.\frac{d\,I_{DD}}{dU_D'}\right|_A
\approx
\frac{I_{DD,A}+I_S}{n\,U_T}
\frac{1+\dfrac{I_{DD,A}}{2I_K}}{1+\dfrac{I_{DD,A}}{I_K}}
\qquad
I_S \ll I_{DD,A} \ll I_K
\qquad
\approx
\frac{I_{DD,A}}{n\,U_T}
$$

$$
\frac{1}{r_{DR}}
=
\left.\frac{d\,I_{DR}}{dU_D'}\right|_A
\approx
\begin{cases}
\dfrac{I_{DR,A}+I_{S,R}}{n_R\,U_T} & \text{für } I_{DR,A} > 0 \\
\dfrac{I_{S,R}}{m_S\,U_{Diff}^{m_S}\,|U_{D,A}'|^{1-m_S}} & \text{für } I_{DR,A} < 0
\end{cases}
$$

$$
\frac{1}{r_{DBR}}
=
\left.\frac{d\,I_{DBR}}{dU_D'}\right|_A
=
-
\frac{I_{DBR,A}}{n_{BR}\,U_T}
$$

Für den differentiellen Widerstand $r_D$ folgt dann:

$$
r_D = r_{DD} \parallel r_{DR} \parallel r_{DBR}
$$
<!-- page-import:0059:end -->

<!-- page-import:0060:start -->
1.3 Modell für eine Diode                     23

a  Niederfrequenzdiode                 b  Hochfrequenzdiode

**Abb. 1.20.** Dynamisches Kleinsignalmodell

Für Arbeitspunkte im Diffusionsbereich und unterhalb des Hochstrombereichs gilt
$I_{D,A} \approx I_{DD,A}$ und $I_{D,A} < I_K$ 7; man kann dann die Näherung

$$
r_D = r_{DD} \approx \frac{nU_T}{I_{D,A}}
$$

verwenden. Diese Gleichung entspricht der bereits im Abschnitt 1.1.4 angegebenen Gleichung (1.3). Sie kann näherungsweise für alle Arbeitspunkte im Durchlassbereich verwendet werden; im Hochstrom- und im Rekombinationsbereich liefert sie Werte, die um den Faktor $1 \dots 2$ zu klein sind. Mit $n = 1 \dots 2$ erhält man:

$$
I_{D,A} = 1 \left\{
\begin{array}{c}
\mu\mathrm{A} \\
\mathrm{mA} \\
\mathrm{A}
\end{array}
\right\}
\qquad
U_T = 26\,\mathrm{mV}
\qquad \Rightarrow \qquad
r_D = 26 \dots 52 \left\{
\begin{array}{c}
\mathrm{k}\Omega \\
\Omega \\
\mathrm{m}\Omega
\end{array}
\right.
$$

(1.16)

Im Sperrbereich gilt für Kleinsignaldioden $r_D \approx 10^6 \dots 10^9\ \Omega$; bei Gleichrichterdioden für den Ampere-Bereich sind die Werte um den Faktor $10 \dots 100$ geringer.

Der Kleinsignalwiderstand im Durchbruchbereich wird nur bei Z-Dioden benötigt, da nur bei diesen ein Arbeitspunkt im Durchbruch zulässig ist; er wird deshalb mit $r_Z$ bezeichnet. Mit $I_{D,A} \approx I_{DBR,A}$ gilt:

$$
r_Z = r_{DBR} = \frac{n_{BR}U_T}{|I_{D,A}|}
$$

(1.17)

## 1.3.4.2 Dynamisches Kleinsignalmodell

### 1.3.4.2.1 Vollständiges Modell

Durch Ergänzen der Sperrschicht- und der Diffusionskapazität erhält man aus dem statischen Kleinsignalmodell nach Abb. 1.10 das in Abb. 1.20a gezeigte dynamische Kleinsignalmodell; dabei gilt mit Bezug auf Abschnitt 1.3.2:

$$
C_D = C_S(U_D') + C_{D,D}(U_D')
$$

Bei Hochfrequenzdioden muss man zusätzlich die parasitären Einflüsse des Gehäuses berücksichtigen; Abb. 1.20b zeigt das erweiterte Modell mit einer Gehäuseinduktivität $L_G \approx 1 \dots 10\,\mathrm{nH}$ und einer Gehäusekapazität $C_G \approx 0{,}1 \dots 1\,\mathrm{pF}$ [1.6].

### 1.3.4.2.2 Vereinfachtes Modell

Für praktische Berechnungen werden der Bahnwiderstand $R_B$ vernachlässigt und Näherungen für $r_D$ und $C_D$ verwendet. Im Durchlassbereich erhält man aus (1.15), (1.16) und der Abschätzung $C_S(U_D') \approx 2C_{S0}$:

7 Dieser Bereich wird an anderer Stelle als *Bereich mittlerer Durchlassströme* bezeichnet.
<!-- page-import:0060:end -->
