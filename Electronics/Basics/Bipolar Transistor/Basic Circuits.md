# Basic Circuits

<!-- page-import:0138:start -->
2.4 Grundschaltungen 101

## 2.3.4.6 Bestimmung des Basisbahnwiderstands

Man kann den Basisbahnwiderstand $R_B$ aus der optimalen Rauschzahl $F_{opt}$ bestimmen, indem man mit Hilfe von (2.70) den Wert für $R_B$ ermittelt, für den man die im Bereich $f < f_T/\sqrt{\beta}$ gemessene Rauschzahl $F_{opt}$ erhält. Davon wird in der Praxis oft Gebrauch gemacht, da eine direkte Messung von $R_B$ sehr aufwendig ist. So erhält man beispielsweise für den Hochfrequenztransistor BFR92P aus $F_{opt} = 1{,}41 = 1{,}5\,\mathrm{dB}$ bei $f = 10\,\mathrm{MHz} < f_T/\sqrt{\beta} = 300\,\mathrm{MHz}$, $\beta \approx 100$ und $I_{C,A} = 5\,\mathrm{mA}$ den Wert $R_B \approx 29\,\Omega$.

## 2.4 Grundschaltungen

Es gibt drei Grundschaltungen, in denen ein Bipolartransistor betrieben werden kann: die *Emitterschaltung* (*common emitter configuration*), die *Kollektorschaltung* (*common collector configuration*) und die *Basisschaltung* (*common base configuration*). Die Bezeichnung erfolgt entsprechend dem Anschluss des Transistors, der als gemeinsamer Bezugsknoten für den Eingang *und* den Ausgang der Schaltung dient; Abb. 2.57 verdeutlicht diesen Zusammenhang.

In vielen Schaltungen ist dieser Zusammenhang nicht streng erfüllt, so dass ein schwächeres Kriterium angewendet werden muss:

*Die Bezeichnung erfolgt entsprechend dem Anschluss des Transistors, der weder als Eingang noch als Ausgang der Schaltung dient.*

*Beispiel:* Abbildung 2.58 zeigt einen dreistufigen Verstärker mit Gegenkopplung. Die erste Stufe besteht aus dem npn-Transistor $T_1$. Der Basisanschluss dient als Eingang der Stufe, an dem über $R_1$ die Eingangsspannung $U_e$ und über $R_2$ die gegengekoppelte Ausgangsspannung $U_a$ anliegt, und der Kollektor bildet den Ausgang; $T_1$ wird demnach in Emitterschaltung betrieben. Der Unterschied zum strengen Kriterium liegt darin, dass trotz der Bezeichnung Emitterschaltung nicht der Emitter, sondern der Masseanschluss als gemeinsamer Bezugsknoten für den Eingang und den Ausgang der Stufe dient. Der Ausgang der ersten Stufe ist mit dem Eingang der zweiten Stufe verbunden, die aus dem pnp-Transistor $T_2$ besteht. Hier dient der Emitter als Eingang und der Kollektor als Ausgang; $T_2$ wird demnach in Basisschaltung betrieben. Auch hier wird die Basis nicht als Bezugsknoten verwendet. Die dritte Stufe besteht aus dem npn-Transistor $T_5$. Die Basis dient als Eingang, der Emitter bildet den Ausgang der Stufe und gleichzeitig den Ausgang der ganzen Schaltung; $T_5$ wird demnach in Kollektorschaltung betrieben. Die Transistoren $T_3$ und $T_4$ arbeiten als Stromquellen und dienen zur Einstellung der Arbeitspunktströme von $T_2$ und $T_5$.

Emitterschaltung

Kollektorschaltung

Basisschaltung

**Abb. 2.57.** Grundschaltungen eines Bipolartransistors
<!-- page-import:0138:end -->

<!-- page-import:0139:start -->
102  2. Bipolartransistor

**Abb. 2.58.** Beispiel zu den Grundschaltungen des Bipolartransistors

Es gibt mehrere Schaltungen mit zwei und mehr Transistoren, die so häufig auftreten, dass sie ebenfalls als Grundschaltungen anzusehen sind, z.B. Differenzverstärker und Stromspiegel; diese Schaltungen werden im Kapitel 4.1 beschrieben. Eine Sonderstellung nimmt die *Darlington-Schaltung* ein, bei der zwei Transistoren so verschaltet sind, dass sie wie *ein* Transistor behandelt werden können, siehe Abschnitt 2.4.4.

In allen Schaltungen werden bevorzugt npn-Transistoren eingesetzt, da sie bessere elektrische Kenndaten besitzen; dies gilt besonders für integrierte Schaltungen. Prinzipiell können in allen Schaltungen npn- gegen pnp- und pnp- gegen npn-Transistoren ausgetauscht werden, wenn man die Versorgungsspannungen, gepolte Elektrolytkondensatoren und Dioden umpolt.

## 2.4.1 Emitterschaltung

Abbildung 2.59a zeigt die Emitterschaltung bestehend aus dem Transistor, dem Kollektorwiderstand $R_C$, der Versorgungsspannungsquelle $U_b$ und der Signalspannungsquelle $U_g$ mit dem Innenwiderstand $R_g$. Für die folgende Untersuchung wird $U_b = 5\ \mathrm{V}$ und $R_C = R_g = 1\ \mathrm{k}\Omega$ angenommen, um zusätzlich zu den formelmäßigen Ergebnissen auch typische Zahlenwerte angeben zu können.

### 2.4.1.1 Übertragungskennlinie der Emitterschaltung

Misst man die Ausgangsspannung $U_a$ als Funktion der Signalspannung $U_g$, erhält man die in Abb. 2.60 gezeigte Übertragungskennlinie. Für $U_g < 0{,}5\ \mathrm{V}$ ist der Kollektorstrom vernachlässigbar klein und man erhält $U_a = U_b = 5\ \mathrm{V}$. Für $0{,}5\ \mathrm{V} \leq U_g \leq 0{,}72\ \mathrm{V}$ fließt ein mit $U_g$ zunehmender Kollektorstrom $I_C$, und die Ausgangsspannung nimmt gemäß $U_a = U_b - I_C\,R_C$ ab. Bis hier arbeitet der Transistor im Normalbetrieb. Für $U_g > 0{,}72\ \mathrm{V}$ gerät der Transistor in die Sättigung und man erhält $U_a = U_{CE,sat}$.

#### 2.4.1.1.1 Normalbetrieb

Abbildung 2.59b zeigt das Ersatzschaltbild für den Normalbetrieb, bei dem für den Transistor das vereinfachte Transportmodell nach Abb. 2.27 eingesetzt ist; es gilt:
<!-- page-import:0139:end -->

<!-- page-import:0140:start -->
2.4 Grundschaltungen 103

a Schaltung  
b Ersatzschaltbild für Normalbetrieb

**Abb. 2.59.** Emitterschaltung

$$
I_C = B\,I_B = I_S\,e^{\frac{U_{BE}}{U_T}}
$$

Diese Gleichung folgt aus den Grundgleichungen (2.5) und (2.6), indem man den Early-Effekt vernachlässigt und die Großsignalstromverstärkung $B$ als konstant annimmt; letzteres führt auf $B = B_0^\circ = \beta$.

Für die Spannungen erhält man:

$$
U_a = U_{CE} = U_b + (I_a - I_C)\,R_C \underset{I_a=0}{=} U_b - I_C\,R_C
\qquad\qquad (2.71)
$$

$$
U_e = U_{BE} = U_g - I_B\,R_g = U_g - \frac{I_C\,R_g}{B} \approx U_g
\qquad\qquad (2.72)
$$

In (2.72) wird angenommen, dass der Spannungsabfall an $R_g$ vernachlässigt werden kann, wenn $B$ ausreichend groß und $R_g$ ausreichend klein ist.

Als Arbeitspunkt wird ein Punkt etwa in der Mitte des abfallenden Bereichs der Übertragungskennlinie gewählt; dadurch wird die Aussteuerbarkeit maximal. Nimmt man

**Abb. 2.60.** Kennlinien der Emitterschaltung
<!-- page-import:0140:end -->

<!-- page-import:0141:start -->
104  2. Bipolartransistor

$B = \beta = 400$ und $I_S = 7\,\mathrm{fA}$ $^{13}$ an, erhält man für den in Abb. 2.60 beispielhaft eingezeichneten Arbeitspunkt mit $U_b = 5\,\mathrm{V}$ und $R_C = R_g = 1\,\mathrm{k}\Omega$:

$$
U_a = 3\,\mathrm{V}\ \Rightarrow\ I_C = \frac{U_b-U_a}{R_C} = 2\,\mathrm{mA}\ \Rightarrow\ I_B = \frac{I_C}{B} = 5\,\mu\mathrm{A}
$$

$$
\Rightarrow\ U_e = U_{BE} = U_T\,\ln\frac{I_C}{I_S} = 685\,\mathrm{mV}\ \Rightarrow\ U_g = U_e + I_B R_g = 690\,\mathrm{mV}
$$

Der Spannungsabfall an $R_g$ beträgt in diesem Fall nur $5\,\mathrm{mV}$ und kann vernachlässigt werden; in Abb. 2.60 gilt deshalb bei Normalbetrieb $U_e \approx U_g$.

Bei der Berechnung der Größen wurde rückwärts vorgegangen, d.h. es wurde $U_g = U_g(U_a)$ bestimmt; in diesem Fall lassen sich alle Größen ohne Näherungen sukzessive bestimmen. Die Berechnung von $U_a = U_a(U_g)$ kann dagegen nicht direkt erfolgen, da wegen $I_B = I_B(U_{BE})$ durch (2.72) nur eine implizite Gleichung für $U_{BE}$ gegeben ist, die nicht nach $U_{BE}$ aufgelöst werden kann; hier kann man nur mit Hilfe der Näherung $U_{BE} \approx U_g$ sukzessive weiterrechnen.

#### 2.4.1.1.2 Sättigungsbetrieb

Der Transistor erreicht die Grenze zum Sättigungsbetrieb, wenn $U_{CE}$ die Sättigungsspannung $U_{CE,sat}$ erreicht; mit $U_{CE,sat} \approx 0{,}1\,\mathrm{V}$ erhält man:

$$
I_C = \frac{U_b-U_{CE,sat}}{R_C} = 4{,}9\,\mathrm{mA}\ \Rightarrow\ I_B = \frac{I_C}{B} = 12{,}25\,\mu\mathrm{A}
$$

$$
\Rightarrow\ U_e = U_{BE} = U_T\,\ln\frac{I_C}{I_S} = 709\,\mathrm{mV}\ \Rightarrow\ U_g = U_e + I_B R_g = 721\,\mathrm{mV}
$$

Für $U_g > 0{,}72\,\mathrm{V}$ gerät der Transistor in Sättigung, d.h. die Kollektor-Diode leitet. In diesem Bereich sind alle Größen mit Ausnahme des Basisstroms etwa konstant:

$$
I_C \approx 4{,}9\,\mathrm{mA}\quad,\quad U_e = U_{BE} \approx 0{,}72\,\mathrm{V}\quad,\quad U_a = U_{CE,sat} \approx 0{,}1\,\mathrm{V}
$$

Der Basisstrom beträgt

$$
I_B = \frac{U_g-U_{BE}}{R_g} \approx \frac{U_g-0{,}72\,\mathrm{V}}{R_g}
$$

und verteilt sich auf die Emitter- und die Kollektor-Diode. Der Innenwiderstand $R_g$ muss in diesem Fall eine Begrenzung des Basisstroms auf zulässige Werte bewirken. In Abb. 2.60 wurde $U_{g,max} = 2\,\mathrm{V}$ gewählt; mit $R_g = 1\,\mathrm{k}\Omega$ folgt daraus $I_{B,max} \approx 1{,}28\,\mathrm{mA}$, ein für Kleinleistungstransistoren zulässiger Wert.

### 2.4.1.2 Kleinsignalverhalten der Emitterschaltung

Das Verhalten bei Aussteuerung um einen Arbeitspunkt A wird als Kleinsignalverhalten bezeichnet. Der Arbeitspunkt ist durch die Arbeitpunktgrößen $U_{e,A} = U_{BE,A}$, $U_{a,A} = U_{CE,A}$, $I_{e,A} = I_{B,A}$ und $I_{C,A}$ gegeben; als Beispiel wird der oben ermittelte Arbeitspunkt mit $U_{BE,A} = 685\,\mathrm{mV}$, $U_{CE,A} = 3\,\mathrm{V}$, $I_{B,A} = 5\,\mu\mathrm{A}$ und $I_{C,A} = 2\,\mathrm{mA}$ verwendet.

Zur Verdeutlichung des Zusammenhangs zwischen den nichtlinearen Kennlinien und dem Kleinsignalersatzschaltbild wird das Kleinsignalverhalten zunächst aus den Kennlinien und anschließend unter Verwendung des Kleinsignalersatzschaltbilds berechnet.

$^{13}$ Typische Werte für einen npn-Kleinleistungstransistor BC547B.
<!-- page-import:0141:end -->

<!-- page-import:0142:start -->
2.4 Grundschaltungen 105

a Übertragungskennlinie

b Verstärkung = Steigung der Übertragungskennlinie

**Abb. 2.61.** Verstärkung der Emitterschaltung

#### 2.4.1.2.1 Berechnung aus den Kennlinien

Die *Spannungsverstärkung* entspricht der Steigung der Übertragungskennlinie, siehe Abb. 2.61; durch Differentiation von (2.71) erhält man:

$$
A = \left.\frac{\partial U_a}{\partial U_e}\right|_A
= -\left.\frac{\partial I_C}{\partial U_{BE}}\right|_A R_C
= -\frac{I_{C,A} R_C}{U_T}
= -S R_C
$$

Mit $S = I_{C,A}/U_T = 77\,\mathrm{mS}$ und $R_C = 1\,\mathrm{k}\Omega$ folgt $A = -77$. Diese Verstärkung wird auch *Leerlaufverstärkung* genannt, da sie für den Betrieb ohne Last ($I_a = 0$) gilt. Man erkennt ferner, dass die Kleinsignal-Spannungsverstärkung proportional zum Spannungsabfall $I_{C,A} R_C$ am Kollektorwiderstand $R_C$ ist. Wegen $I_{C,A} R_C < U_b$ ist die mit einem ohmschen Kollektorwiderstand $R_C$ maximal mögliche Verstärkung proportional zur Versorgungsspannung $U_b$.

Der *Eingangswiderstand* ergibt sich aus der Eingangskennlinie:

$$
r_e = \left.\frac{\partial U_e}{\partial I_e}\right|_A
= \left.\frac{\partial U_{BE}}{\partial I_B}\right|_A
= r_{BE}
$$

Mit $r_{BE} = \beta/S$ und $\beta = 400$ folgt $r_e = 5{,}2\,\mathrm{k}\Omega$.

Der *Ausgangswiderstand* kann aus (2.71) ermittelt werden:

$$
r_a = \left.\frac{\partial U_a}{\partial I_a}\right|_A = R_C
$$

Hier ist $r_a = 1\,\mathrm{k}\Omega$.

Die Berechnung aus den Kennlinien führt auf die Kleinsignalparameter $S$ und $r_{BE}$ des Transistors, siehe Abschnitt 2.1.4.2 $^{14}$. Deshalb wird in der Praxis ohne den Umweg über die Kennlinien sofort mit dem Kleinsignalersatzschaltbild des Transistors gerechnet.

---

$^{14}$ Der Ausgangswiderstand $r_{CE}$ des Transistors tritt hier nicht auf, da bei der Herleitung der Kennlinien der Early-Effekt vernachlässigt, d.h. $r_{CE} \to \infty$ angenommen wurde.
<!-- page-import:0142:end -->

<!-- page-import:0143:start -->
106  2. Bipolartransistor

Abb. 2.62. Kleinsignalersatzschaltbild der Emitterschaltung

#### 2.4.1.2.2 Berechnung aus dem Kleinsignalersatzschaltbild

Abbildung 2.62 zeigt das Kleinsignalersatzschaltbild der Emitterschaltung, das man durch Einsetzen des Kleinsignalersatzschaltbilds des Transistors nach Abb. 2.12 bzw. Abb. 2.39a, Kurzschließen von Gleichspannungsquellen, Weglassen von Gleichstromquellen und Übergang zu den Kleinsignalgrößen erhält $^{15}$.

$$
u_e = U_e - U_{e,A} \qquad i_e = I_e - I_{e,A}
$$

$$
u_a = U_a - U_{a,A} \qquad i_a = I_a - I_{a,A}
$$

$$
u_g = U_g - U_{g,A} \qquad i_C = I_C - I_{C,A}
$$

Ohne Lastwiderstand $R_L$ folgt aus Abb. 2.62 für die Emitterschaltung:

*Emitterschaltung*

$$
A = \left.\frac{u_a}{u_e}\right|_{i_a=0} = -S\,(R_C \parallel r_{CE}) \qquad \stackrel{r_{CE} \gg R_C}{\approx} \qquad -S\,R_C
\qquad\qquad (2.73)
$$

$$
r_e = \frac{u_e}{i_e} = r_{BE}
\qquad\qquad (2.74)
$$

$$
r_a = \frac{u_a}{i_a} = R_C \parallel r_{CE} \qquad \stackrel{r_{CE} \gg R_C}{\approx} \qquad R_C
\qquad\qquad (2.75)
$$

Man erhält dieselben Ergebnisse wie bei der Berechnung aus den Kennlinien, wenn man berücksichtigt, dass dort der Early-Effekt vernachlässigt, d.h. $r_{CE} \rightarrow \infty$ angenommen wurde. Mit $r_{CE} = U_A/I_{C,A}$ und $U_A \approx 100\,\mathrm{V}$ erhält man $A = -75$, $r_e = 5{,}2\,\mathrm{k}\Omega$ und $r_a = 980\,\Omega$.

Die Größen $A$, $r_e$ und $r_a$ beschreiben die Emitterschaltung vollständig; Abb. 2.63 zeigt das zugehörige Ersatzschaltbild. Der Lastwiderstand $R_L$ kann ein ohmscher Widerstand oder ein Ersatzelement für den Eingangswiderstand einer am Ausgang angeschlossenen Schaltung sein. Wichtig ist dabei, dass der Arbeitspunkt durch $R_L$ nicht verschoben wird, d.h. es darf kein oder nur ein vernachlässigbar kleiner Gleichstrom durch $R_L$ fließen; darauf wird im Zusammenhang mit der Arbeitspunkteinstellung noch näher eingegangen.

Mit Hilfe von Abb. 2.63 kann man die Betriebsverstärkung berechnen:

$$
A_B = \frac{u_a}{u_g} = \frac{r_e}{r_e + R_g}\,A\,\frac{R_L}{R_L + r_a}
\qquad\qquad (2.76)
$$

Sie setzt sich aus der Verstärkung $A$ der Schaltung und den Spannungsteilerfaktoren am Eingang und am Ausgang zusammen. Nimmt man an, dass eine Emitterschaltung mit

$^{15}$ Der Übergang zu den Kleinsignalgrößen durch Abziehen der Arbeitspunktwerte entspricht dem Kurzschließen von Gleichspannungsquellen bzw. Weglassen von Gleichstromquellen, da die Arbeitspunktwerte Gleichspannungen bzw. Gleichströme sind.
<!-- page-import:0143:end -->

<!-- page-import:0144:start -->
2.4 Grundschaltungen 107

**Abb. 2.63.** Ersatzschaltbild mit den Ersatzgrößen $A$, $r_e$ und $r_a$

denselben Werten als Last am Ausgang angeschlossen ist, d.h. $R_L = r_e = 5{,}2\,\mathrm{k}\Omega$, erhält man $A_B \approx 0{,}7 \cdot A = -53$.

#### 2.4.1.2.3 Maximale Verstärkung und $\beta$-$U_A$-Produkt

Die Verstärkung der Emitterschaltung wird für $R_C \to \infty$ maximal; aus (2.73) folgt die maximale Verstärkung:

$$
\mu = \lim_{R_C \to \infty} |A| = S\,r_{CE} = \frac{I_{C,A}}{U_T}\,\frac{U_A}{I_{C,A}} = \frac{U_A}{U_T}
$$

Dieser Grenzfall kann mit einem ohmschen Kollektorwiderstand $R_C$ nur schwer erreicht werden, da aus $R_C \to \infty$ auch $R_C \gg r_{CE}$ folgt und demnach der Spannungsabfall an $R_C$ wegen $I_{C,A}R_C \gg I_{C,A}r_{CE} = U_A$ viel größer als die Early-Spannung $U_A \approx 100\,\mathrm{V}$ sein müsste. Man erreicht den Grenzfall, wenn man den Kollektorwiderstand durch eine Konstantstromquelle mit dem Strom $I_K = I_{C,A}$ ersetzt; damit erhält man auch bei niedrigen Spannungen sehr große Kleinsignalwiderstände.

In der Praxis wird $\mu$ nur selten angegeben, da es sich nur um eine Ersatzgröße für die Early-Spannung $U_A$ handelt. Man kann also festhalten, dass die maximal mögliche Verstärkung eines Bipolartransistors proportional zu $U_A$ ist. Bei npn-Transistoren gilt $U_A \approx 30\dots150\,\mathrm{V}$ und damit $\mu \approx 1000\dots6000$, bei pnp-Transistoren folgt aus $U_A \approx 30\dots75\,\mathrm{V}$ $\mu \approx 1000\dots3000$.

Die maximale Verstärkung $\mu$ wird nur im Leerlauf, d.h. ohne Last erreicht. In vielen Schaltungen, speziell in integrierten Schaltungen, ist als Last der Eingangswiderstand einer nachfolgenden Stufe wirksam, der bei der Emitterschaltung und bei der Kollektorschaltung proportional zur Stromverstärkung $\beta$ ist. Die in der Praxis zu erreichende Verstärkung hängt also von $U_A$ und $\beta$ ab; deshalb wird oft das $\beta$-$U_A$-Produkt ($\beta\,V_A$-product) als Gütekriterium für einen Bipolartransistor angegeben. Typische Werte liegen im Bereich $1000\dots60000$.

#### 2.4.1.3 Nichtlinearität

Im Abschnitt 2.1.4 wird ein Zusammenhang zwischen der Amplitude einer sinusförmigen Kleinsignalaussteuerung $\hat{u}_e = \hat{u}_{BE}$ und dem Klirrfaktor $k$ des Kollektorstroms, der bei der Emitterschaltung gleich dem Klirrfaktor der Ausgangsspannung $u_a$ ist, hergestellt, siehe (2.15) auf Seite 47. Es gilt $\hat{u}_e < k \cdot 0{,}1\,\mathrm{V}$, d.h. für $k < 1\%$ muss $\hat{u}_e < 1\,\mathrm{mV}$ sein. Die zugehörige Ausgangsamplitude ist wegen $\hat{u}_a = |A|\hat{u}_e$ von der Verstärkung $A$ abhängig; für das Zahlenbeispiel mit $A = -75$ gilt demnach $\hat{u}_a < k \cdot 7{,}5\,\mathrm{V}$.

#### 2.4.1.4 Temperaturabhängigkeit

Zur Betrachtung der Temperaturabhängigkeit eignet sich Gl. (2.21); sie besagt, dass die Basis-Emitter-Spannung $U_{BE}$ bei konstantem Kollektorstrom $I_C$ mit $1{,}7\,\mathrm{mV}/\mathrm{K}$ abnimmt. Man muss demnach die Eingangsspannung um $1{,}7\,\mathrm{mV}/\mathrm{K}$ verringern, um den Arbeitspunkt
<!-- page-import:0144:end -->

<!-- page-import:0145:start -->
108  2. Bipolartransistor

a Schaltung

b Ersatzschaltbild für Normalbetrieb

**Abb. 2.64.** Emitterschaltung mit Stromgegenkopplung

$ I_C = I_{C,A} $ der Schaltung konstant zu halten. Hält man dagegen die Eingangsspannung konstant, wirkt sich eine Temperaturerhöhung wie eine Zunahme der Eingangsspannung mit $dU_e/dT = 1{,}7\,\mathrm{mV/K}$ aus; man kann deshalb die *Temperaturdrift* der Ausgangsspannung mit Hilfe der Verstärkung berechnen:

$$
\left.\frac{dU_a}{dT}\right|_A
=
\left.\frac{\partial U_a}{\partial U_e}\right|_A \frac{dU_e}{dT}
\approx A \cdot 1{,}7\,\mathrm{mV/K}
\qquad (2.77)
$$

Für das Zahlenbeispiel erhält man $(dU_a/dT)|_A \approx -127\,\mathrm{mV/K}$.

Man erkennt, dass bereits eine Temperaturänderung um wenige Kelvin eine deutliche Verschiebung des Arbeitspunkts zur Folge hat; dabei ändern sich $A$, $r_e$ und $r_a$ aufgrund des veränderten Arbeitspunkts, $A$ und $r_e$ *zusätzlich* aufgrund der Temperaturabhängigkeit von $S$ bzw. $U_T$ und $\beta$. Da in der Praxis oft Temperaturänderungen von 50 K und mehr auftreten, ist eine Stabilisierung des Arbeitspunkts erforderlich; dies kann z.B. durch eine *Gegenkopplung* geschehen.

## 2.4.1.5 Emitterschaltung mit Stromgegenkopplung

Die Nichtlinearität und die Temperaturabhängigkeit der Emitterschaltung kann durch eine *Stromgegenkopplung* verringert werden; dazu wird ein *Emitterwiderstand* $R_E$ eingefügt, siehe Abb. 2.64a. Abbildung 2.65 zeigt die Übertragungskennlinie $U_a(U_g)$ und die Kennlinien für $U_e$ und $U_E$ für $R_C = R_g = 1\,\mathrm{k}\Omega$ und $R_E = 500\,\Omega$. Für $U_g < 0{,}5\,\mathrm{V}$ ist der Kollektorstrom vernachlässigbar klein und man erhält $U_a = U_b = 5\,\mathrm{V}$. Für $0{,}5\,\mathrm{V} \leq U_g \leq 2{,}3\,\mathrm{V}$ fließt ein mit $U_g$ zunehmender Kollektorstrom $I_C$, und die Ausgangsspannung nimmt gemäß $U_a = U_b - I_C R_C$ ab; in diesem Bereich verläuft die Kennlinie aufgrund der Gegenkopplung nahezu linear. Bis hier arbeitet der Transistor im Normalbetrieb. Für $U_g > 2{,}3\,\mathrm{V}$ gerät der Transistor in die Sättigung.

### 2.4.1.5.1 Normalbetrieb

Abbildung 2.64b zeigt das Ersatzschaltbild für den Normalbetrieb. Für die Spannungen erhält man:

$$
U_a = U_b + (I_a - I_C)\,R_C \overset{I_a=0}{=} U_b - I_C R_C
\qquad (2.78)
$$

$$
U_e = U_{BE} + U_E = U_{BE} + (I_C + I_B)\,R_E \approx U_{BE} + I_C R_E
\qquad (2.79)
$$
<!-- page-import:0145:end -->

<!-- page-import:0146:start -->
## 2.4 Grundschaltungen

109

Abb. 2.65. Kennlinien der Emitterschaltung mit Stromgegenkopplung

$$
U_e = U_g - I_B R_g \approx U_g
\qquad\qquad (2.80)
$$

In (2.79) wird der Basisstrom $I_B$ wegen $B \gg 1$ gegen den Kollektorstrom $I_C$ vernachlässigt. In (2.80) wird angenommen, dass der Spannungsabfall an $R_g$ vernachlässigt werden kann. Die Stromgegenkopplung zeigt sich in (2.79) darin, dass durch den Kollektorstrom $I_C$ die Spannung $U_{BE}$ von $U_{BE} = U_e$ für die Emitterschaltung ohne Gegenkopplung, siehe (2.72), auf $U_{BE} \approx U_e - I_C R_E$ verringert wird.

Für $0{,}8\,\mathrm{V} < U_g < 2{,}2\,\mathrm{V}$ gilt $U_{BE} \approx 0{,}7\,\mathrm{V}$; damit erhält man aus (2.79) und (2.80)

$$
I_C \approx \frac{U_g - 0{,}7\,\mathrm{V}}{R_E}
$$

und durch Einsetzen in (2.78):

$$
U_a \approx U_b - \frac{R_C}{R_E}\,(U_g - 0{,}7\,\mathrm{V})
\qquad\qquad (2.81)
$$

Dieser lineare Zusammenhang ist in Abb. 2.65 strichpunktiert eingezeichnet und stimmt für $0{,}8\,\mathrm{V} < U_g < 2{,}2\,\mathrm{V}$ sehr gut mit der Übertragungskennlinie überein; letztere hängt also in diesem Bereich nur noch von $R_C$ und $R_E$ ab. Die Gegenkopplung bewirkt demnach, dass das Verhalten der Schaltung in erster Näherung nicht mehr von den nichtlinearen Eigenschaften des Transistors, sondern nur von linearen Widerständen abhängt; auch Exemplarstreuungen bei den Transistorparametern wirken sich aus diesem Grund praktisch nicht aus.

Als Arbeitspunkt wird ein Punkt etwa in der Mitte des abfallenden Bereichs der Übertragungskennlinie gewählt; dadurch wird die Aussteuerbarkeit maximal. Für den in Abb. 2.65 beispielhaft eingezeichneten Arbeitspunkt erhält man mit $U_b = 5\,\mathrm{V}$, $I_S = 7\,\mathrm{fA}$, $B = \beta = 400$, $R_C = R_g = 1\,\mathrm{k}\Omega$ und $R_E = 500\,\Omega$:

$$
U_a = 3{,}5\,\mathrm{V}
\;\Rightarrow\;
I_C = \frac{U_b - U_a}{R_C} = 1{,}5\,\mathrm{mA}
\;\Rightarrow\;
I_B = \frac{I_C}{B} = 3{,}75\,\mathrm{\mu A}
$$

$$
\Rightarrow\;
U_E = (I_C + I_B)\,R_E = 752\,\mathrm{mV}
$$
<!-- page-import:0146:end -->

<!-- page-import:0147:start -->
110  2. Bipolartransistor

a Übertragungskennlinie

b Verstärkung = Steigung der Übertragungskennlinie

**Abb. 2.66.** Verstärkung der Emitterschaltung mit Stromgegenkopplung

$$\Rightarrow\ U_e = U_{BE} + U_E = U_T \ln \frac{I_C}{I_S} + U_E = 1430\,\mathrm{mV}$$

$$\Rightarrow\ U_g = U_e + I_B R_g = 1434\,\mathrm{mV}$$

Aus (2.81) erhält man mit $U_a = 3{,}5\,\mathrm{V}$ die Näherung $U_g \approx 1{,}45\,\mathrm{V}$.

#### 2.4.1.5.2 Sättigungsbetrieb

Der Transistor erreicht die Grenze zum Sättigungsbetrieb, wenn $U_{CE}$ die Sättigungsspannung $U_{CE,sat}$ erreicht; aus (2.81) folgt mit $U_E \approx U_g - 0{,}7\,\mathrm{V}$:

$$U_{CE} \approx U_a - U_E = U_b - \left(1 + \frac{R_C}{R_E}\right)(U_g - 0{,}7\,\mathrm{V})$$

Einsetzen von $U_{CE} = U_{CE,sat} \approx 0{,}1\,\mathrm{V}$ und Auflösen nach $U_g$ liefert $U_g \approx 2{,}3\,\mathrm{V}$. Für $U_g > 2{,}3\,\mathrm{V}$ leitet die Kollektor-Diode und es fließt ein mit $U_g$ zunehmender Basisstrom, der sich auf die Emitter- und die Kollektor-Diode verteilt und durch $R_g$ begrenzt wird, siehe Abb. 2.65. Da der Basisstrom über $R_E$ fließt, sind die Spannungen $U_e$, $U_a$ und $U_E$ nicht näherungsweise konstant wie bei der Emitterschaltung ohne Gegenkopplung, sondern nehmen mit $U_g$ zu.

#### 2.4.1.5.3 Kleinsignalverhalten

Die Spannungsverstärkung $A$ entspricht der Steigung der Übertragungskennlinie, siehe Abb. 2.66; sie ist in dem Bereich, für den die lineare Näherung nach (2.81) gilt, näherungsweise konstant. Die Berechnung von $A$ erfolgt mit Hilfe des in Abb. 2.67 gezeigten Kleinsignalersatzschaltbilds. Aus den Knotengleichungen

$$\frac{u_e-u_E}{r_{BE}} + S u_{BE} + \frac{u_a-u_E}{r_{CE}} = \frac{u_E}{R_E}$$

$$S u_{BE} + \frac{u_a-u_E}{r_{CE}} + \frac{u_a}{R_C} = i_a$$
<!-- page-import:0147:end -->

<!-- page-import:0148:start -->
2.4 Grundschaltungen 111

**Abb. 2.67.** Kleinsignalersatzschaltbild der Emitterschaltung mit Stromgegenkopplung

erhält man mit $u_{BE} = u_e - u_E$:

$$
A = \left.\frac{u_a}{u_e}\right|_{i_a=0}
= - \frac{S R_C \left(1 - \frac{R_E}{\beta\, r_{CE}}\right)}
{1 + R_E \left(S\left(1 + \frac{1}{\beta} + \frac{R_C}{\beta\, r_{CE}}\right) + \frac{1}{r_{CE}}\right) + \frac{R_C}{r_{CE}}}
$$

$$
\overset{r_{CE} \gg R_C, R_E}{\underset{\beta \gg 1}{\approx}}
- \frac{S R_C}{1 + S R_E}
\overset{S R_E \gg 1}{\approx}
- \frac{R_C}{R_E}
$$

Für $S R_E \gg 1$ hängt die Verstärkung nur noch von $R_C$ und $R_E$ ab. Bei Betrieb mit einem Lastwiderstand $R_L$ kann man die zugehörige Betriebsverstärkung $A_B$ berechnen, indem man für $R_C$ die Parallelschaltung von $R_C$ und $R_L$ einsetzt, siehe Abb. 2.67. In dem beispielhaft gewählten Arbeitspunkt erhält man mit $S = 57{,}7\,\mathrm{mS}$, $r_{BE} = 6{,}9\,\mathrm{k}\Omega$, $r_{CE} = 67\,\mathrm{k}\Omega$, $R_C = R_g = 1\,\mathrm{k}\Omega$ und $R_E = 500\,\Omega$ exakt $A = -1{,}927$; die erste Näherung liefert $A = -1{,}933$, die zweite $A = -2$.

Für den Eingangswiderstand erhält man:

$$
r_e = \left.\frac{u_e}{i_e}\right|_{i_a=0}
= r_{BE} + \frac{(1 + \beta)\, r_{CE} + R_C}{r_{CE} + R_E + R_C}\, R_E
$$

$$
\overset{r_{CE} \gg R_C, R_E}{\underset{\beta \gg 1}{\approx}}
r_{BE} + \beta R_E
$$

Er hängt vom Lastwiderstand ab, wobei hier wegen $i_a = 0$ ($R_L \to \infty$) der Leerlaufeingangswiderstand gegeben ist. Der Eingangswiderstand für andere Werte von $R_L$ wird berechnet, indem man für $R_C$ die Parallelschaltung von $R_C$ und $R_L$ einsetzt; durch Einsetzen von $R_L = R_C = 0$ erhält man den Kurzschlusseingangswiderstand. Die Abhängigkeit von $R_L$ ist jedoch so gering, dass sie durch die Näherung aufgehoben wird. Im beispielhaft gewählten Arbeitspunkt ist $r_{e,L} = 202{,}1\,\mathrm{k}\Omega$ der exakte Leerlaufeingangswiderstand und $r_{e,K} = 205\,\mathrm{k}\Omega$ der exakte Kurzschlusseingangswiderstand; die Näherung liefert $r_e = 206{,}9\,\mathrm{k}\Omega$.

Der Ausgangswiderstand hängt vom Innenwiderstand $R_g$ ab; hier werden nur die Grenzfälle betrachtet. Der Kurzschlussausgangswiderstand gilt für Kurzschluss am Eingang, d.h. $u_e = 0$ bzw. $R_g = 0$:
<!-- page-import:0148:end -->

<!-- page-import:0149:start -->
112 2. Bipolartransistor

$$
r_{a,K}=\left.\frac{u_a}{i_a}\right|_{u_e=0}
=
R_C \parallel r_{CE}
\left(
1+\frac{\beta+\dfrac{r_{BE}}{r_{CE}}}{1+\dfrac{r_{BE}}{R_E}}
\right)
$$

$$
\overset{r_{CE}\gg r_{BE}}{\beta\gg 1}
\approx
R_C \parallel r_{CE}\,
\frac{\beta R_E+r_{BE}}{R_E+r_{BE}}
\overset{r_{CE}\gg R_C}{\approx}
R_C
$$

Mit $i_e=0$ bzw. $R_g \to \infty$ erhält man den Leerlaufausgangswiderstand:

$$
r_{a,L}
=
\left.\frac{u_a}{i_a}\right|_{i_e=0}
=
R_C \parallel (R_E+r_{CE})
\overset{r_{CE}\gg R_C}{\approx}
R_C
$$

Auch hier ist die Abhängigkeit von $R_g$ so gering, dass sie in der Praxis vernachlässigt werden kann. Im Beispiel ist $r_a=R_C=1\,\mathrm{k}\Omega$.

Mit $r_{CE}\gg R_C, R_E$, $\beta\gg 1$ und ohne Lastwiderstand $R_L$ erhält man für die Emitterschaltung mit Stromgegenkopplung:

*Emitterschaltung mit Stromgegenkopplung*

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
\approx
-\frac{S R_C}{1+S R_E}
\overset{S R_E\gg 1}{\approx}
-\frac{R_C}{R_E}
\qquad (2.82)
$$

$$
r_e=\frac{u_e}{i_e}
\approx
r_{BE}+\beta R_E
=
r_{BE}(1+S R_E)
\qquad (2.83)
$$

$$
r_a=\frac{u_a}{i_a}
\approx
R_C
\qquad (2.84)
$$

## 2.4.1.5.4 Vergleich mit der Emitterschaltung ohne Gegenkopplung

Ein Vergleich von (2.82) mit (2.73) zeigt, dass durch die Stromgegenkopplung die Verstärkung näherungsweise um den Gegenkopplungsfaktor $(1+S R_E)$ reduziert wird; gleichzeitig nimmt der Eingangswiderstand um denselben Faktor zu, wie ein Vergleich von (2.83) und (2.74) zeigt.

Die Wirkung der Stromgegenkopplung lässt sich besonders einfach mit Hilfe der reduzierten Steilheit

$$
S_{red}=\frac{S}{1+S R_E}
\qquad (2.85)
$$

beschreiben. Durch den Emitterwiderstand $R_E$ wird die effektive Steilheit des Transistors auf den Wert $S_{red}$ reduziert: für die Emitterschaltung ohne Gegenkopplung gilt $A\approx -S R_C$ und $r_e=r_{BE}=\beta/S$, für die Emitterschaltung mit Gegenkopplung $A\approx -S_{red} R_C$ und $r_e\approx \beta/S_{red}$.

## 2.4.1.5.5 Nichtlinearität

Die Nichtlinearität der Übertragungskennlinie wird durch die Stromgegenkopplung stark reduziert. Der Klirrfaktor der Schaltung kann durch eine Reihenentwicklung der Kennlinie im Arbeitspunkt näherungsweise bestimmt werden. Aus (2.79) folgt:
<!-- page-import:0149:end -->

<!-- page-import:0150:start -->
2.4 Grundschaltungen 113

$$
U_e = I_C R_E + U_T \ln \frac{I_C}{I_S}
$$

Durch Einsetzen des Arbeitspunkts, Übergang zu den Kleinsignalgrößen und Reihenentwicklung erhält man

$$
u_e = i_C R_E + U_T \ln \left( 1 + \frac{i_C}{I_{C,A}} \right)
$$

$$
= i_C R_E + U_T \frac{i_C}{I_{C,A}} - \frac{U_T}{2} \left( \frac{i_C}{I_{C,A}} \right)^2 + \frac{U_T}{3} \left( \frac{i_C}{I_{C,A}} \right)^3 - \ldots
$$

und daraus die Umkehrfunktion 16:

$$
\frac{i_C}{I_{C,A}} = \frac{1}{1 + S R_E} \left[ \frac{u_e}{U_T} + \frac{1}{2(1 + S R_E)^2} \left( \frac{u_e}{U_T} \right)^2 + \ldots \right]
$$

(2.86)

Bei Aussteuerung mit $u_e = \hat{u}_e \cos \omega_0 t$ erhält man aus dem Verhältnis der ersten Oberwelle mit $2\omega_0$ zur Grundwelle mit $\omega_0$ bei kleiner Aussteuerung, d.h. bei Vernachlässigung höherer Potenzen, näherungsweise den Klirrfaktor $k$:

$$
k \approx \frac{u_{a,2\omega_0}}{u_{a,\omega_0}} \approx \frac{i_{C,2\omega_0}}{i_{C,\omega_0}} \approx \frac{\hat{u}_e}{4U_T (1 + S R_E)^2}
$$

(2.87)

Ist ein Maximalwert für $k$ vorgegeben, muss $\hat{u}_e < 4kU_T (1 + S R_E)^2$ gelten. Mit $\hat{u}_a = |A|\hat{u}_e$ erhält man daraus die maximale Ausgangsamplitude. Für das Zahlenbeispiel gilt $\hat{u}_e < k \cdot 93\,\mathrm{V}$ und, mit $A \approx -1{,}93$, $\hat{u}_a < k \cdot 179\,\mathrm{V}$.

Ein Vergleich mit (2.15) zeigt, dass die zulässige Eingangsamplitude $\hat{u}_e$ durch die Gegenkopplung um das Quadrat des Gegenkopplungsfaktors $(1 + S R_E)$ größer wird. Da gleichzeitig die Verstärkung um den Gegenkopplungsfaktor geringer ist, ist die zulässige Ausgangsamplitude bei gleichem Klirrfaktor um den Gegenkopplungsfaktor größer, solange dadurch keine Übersteuerung oder Sättigung des Transistors auftritt, d.h. solange der Gültigkeitsbereich der Reihenentwicklung nicht verlassen wird. Bei gleicher Ausgangsamplitude ist der Klirrfaktor um den Gegenkopplungsfaktor geringer.

#### 2.4.1.5.6 Temperaturabhängigkeit

Da die Basis-Emitter-Spannung nach (2.21) mit $1{,}7\,\mathrm{mV/K}$ abnimmt, wirkt sich eine Temperaturerhöhung bei konstanter Eingangsspannung wie eine Zunahme der Eingangsspannung um $1{,}7\,\mathrm{mV/K}$ bei konstanter Temperatur aus. Man kann deshalb die Temperaturdrift der Ausgangsspannung mit Hilfe von (2.77) berechnen. Für das Zahlenbeispiel erhält man $(dU_a/dT)|_A \approx -3{,}3\,\mathrm{mV/K}$. Dieser Wert ist für die meisten Anwendungsfälle ausreichend gering, so dass auf weitere Maßnahmen zur Stabilisierung des Arbeitspunkts verzichtet werden kann.

16 Für eine Reihe $y = f(x) = \sum_{n=1}^{\infty} a_n x^n$ mit den Koeffizienten $a_n$ berechnet man die Koeffizienten $b_n$ der Umkehrfunktion $x = g(y) = \sum_{n=1}^{\infty} b_n y^n$, indem man die Ableitungen der Bedingung $x = g(f(x))$ mit Hilfe der Kettenregel an der Stelle $(x = 0, y = 0)$ auswertet und die Werte $f^{(n)}(0) = n! a_n$ und $g^{(n)}(0) = n! b_n$ einsetzt. Die erste Ableitung der Bedingung ergibt $1 = g^{(1)}(0) f^{(1)}(0)$; daraus erhält man $1 = b_1 a_1$ bzw. $b_1 = 1/a_1$. Die zweite Ableitung ergibt $0 = g^{(2)}(0) f^{(1)}(0) f^{(1)}(0) + g^{(1)}(0) f^{(2)}(0)$; daraus erhält man $0 = (2b_2)\, a_1^2 + b_1 (2a_2)$ bzw. $b_2 = - b_1 a_2 / a_1^2 = - a_2 / a_1^3$. Die weiteren Ableitungen werden zwar immer umfangreicher, bleiben aber linear bezüglich des nächsten zu bestimmenden Koeffizienten $b_n$ und können deshalb problemlos nach $b_n$ aufgelöst werden.
<!-- page-import:0150:end -->

<!-- page-import:0151:start -->
114  2. Bipolartransistor

a Schaltung  
b Ersatzschaltbild für Normalbetrieb

**Abb. 2.68.** Emitterschaltung mit Spannungsgegenkopplung

#### 2.4.1.6 Emitterschaltung mit Spannungsgegenkopplung

Eine weitere Art der Gegenkopplung ist die *Spannungsgegenkopplung*; dabei wird über die Widerstände $R_1$ und $R_2$ ein Teil der Ausgangsspannung auf die Basis des Transistors zurückgeführt, siehe Abb. 2.68a. Wird die Schaltung mit einer Spannungsquelle $U_e$ angesteuert$^{17}$, erhält man mit $R_C = R_1 = 1\,\mathrm{k}\Omega$ und $R_2 = 2\,\mathrm{k}\Omega$ die in Abb. 2.69 gezeigten Kennlinien. Für $U_e < -0{,}8\,\mathrm{V}$ ist der Kollektorstrom vernachlässigbar gering und man erhält $U_a$ durch Spannungsteilung an den Widerständen. Für $-0{,}8\,\mathrm{V} \leq U_e \leq 1\,\mathrm{V}$ fließt ein mit $U_e$ zunehmender Kollektorstrom und die Ausgangsspannung nimmt entsprechend ab; in diesem Bereich verläuft die Kennlinie aufgrund der Gegenkopplung nahezu linear. Bis hier arbeitet der Transistor im Normalbetrieb. Für $U_e > 1\,\mathrm{V}$ gerät der Transistor in die Sättigung und man erhält $U_a = U_{CE,sat}$.

##### 2.4.1.6.1 Normalbetrieb

Abbildung 2.68b zeigt das Ersatzschaltbild für den Normalbetrieb. Aus den Knotengleichungen

$$
\frac{U_e-U_{BE}}{R_1}+\frac{U_a-U_{BE}}{R_2}=I_B=\frac{I_C}{B}
$$

$$
\frac{U_b-U_a}{R_C}+I_a=\frac{U_a-U_{BE}}{R_2}+I_C
$$

folgt für den Betrieb ohne Last, d.h. $I_a=0$:

$$
U_a=\frac{U_bR_2-I_CR_CR_2+U_{BE}R_C}{R_2+R_C}
\qquad\qquad (2.88)
$$

$$
U_e=\frac{I_CR_1}{B}+U_{BE}\left(1+\frac{R_1}{R_2}\right)-U_a\frac{R_1}{R_2}
\qquad\qquad (2.89)
$$

$^{17}$ Bei der Emitterschaltung ohne Gegenkopplung nach Abb. 2.59a wird der Innenwiderstand $R_g$ der Signalspannungsquelle zur Begrenzung des Basisstroms bei Sättigungsbetrieb benötigt; hier wird der Basisstrom durch $R_1$ begrenzt, d.h. man kann $R_g=0$ setzen und eine Spannungsquelle $U_e=U_g$ zur Ansteuerung verwenden. Diese Vorgehensweise wird gewählt, damit die Kennlinien für den Normalbetrieb nicht von $R_g$ abhängen.
<!-- page-import:0151:end -->

<!-- page-import:0152:start -->
## 2.4 Grundschaltungen

115

**Abb. 2.69.** Kennlinien der Emitterschaltung mit Spannungsgegenkopplung

Löst man (2.88) nach $I_C$ auf und setzt in (2.89) ein, erhält man unter Verwendung von $B \gg 1$ und $B\,R_C \gg R_2$:

$$
U_a \approx \frac{U_b R_2}{B\,R_C} + \left(1 + \frac{R_2}{R_1}\right) U_{BE} - \frac{R_2}{R_1}\,U_e
$$

(2.90)

Für $-0{,}6\,\mathrm{V} \leq U_e \leq 0{,}9\,\mathrm{V}$ gilt $U_{BE} \approx 0{,}7\,\mathrm{V}$; damit folgt aus (2.90) ein linearer Zusammenhang zwischen $U_a$ und $U_e$, der in Abb. 2.69 strichpunktiert eingezeichnet ist und sehr gut mit der Übertragungskennlinie übereinstimmt. Die Spannungsgegenkopplung bewirkt also, dass die Übertragungskennlinie in diesem Bereich in erster Näherung nur noch von $R_1$ und $R_2$ abhängt.

Als Arbeitspunkt wird $U_{e,A} = 0\,\mathrm{V}$ gewählt; dieser Punkt liegt etwa in der Mitte des linearen Bereichs. Eine sukzessive Berechnung der Arbeitspunktgrößen ist hier nicht möglich, da man aus (2.88) und (2.89) nur implizite Gleichungen erhält. Mit Hilfe von Näherungen und einem iterativen Vorgehen kann man den Arbeitspunkt dennoch sehr genau bestimmen; dabei geht man von Schätzwerten aus, die im Verlauf der Rechnung präzisiert werden. Mit $R_1 = 1\,\mathrm{k}\Omega$, $R_2 = 2\,\mathrm{k}\Omega$, $B = \beta = 400$, $U_e = 0$ und dem Schätzwert $U_{BE} \approx 0{,}7\,\mathrm{V}$ folgt aus (2.89)

$$
U_a = 3\,U_{BE} + I_C \cdot 5\,\Omega \approx 3\,U_{BE} \approx 2{,}1\,\mathrm{V}
$$

Aus der Knotengleichung am Ausgang folgt mit $U_b = 5\,\mathrm{V}$ und $R_C = 1\,\mathrm{k}\Omega$:

$$
I_C = \frac{U_b - U_a}{R_C} - \frac{U_a - U_{BE}}{R_2} \approx 2{,}2\,\mathrm{mA}
$$

Mit diesem Schätzwert für $I_C$ und $I_S = 7\,\mathrm{fA}$ kann man $U_{BE}$ präzisieren:

$$
U_{BE} = U_T \ln \frac{I_C}{I_S} \approx 688\,\mathrm{mV}
$$
<!-- page-import:0152:end -->

<!-- page-import:0153:start -->
116 2. Bipolartransistor

a Übertragungskennlinie

b Verstärkung = Steigung der Übertragungskennlinie

**Abb. 2.70.** Verstärkung der Emitterschaltung mit Spannungsgegenkopplung

Wiederholt man damit die Berechnung, erhält man:

$$U_{BE} \approx 688\,\mathrm{mV}\ \Rightarrow\ U_a \approx 2{,}07\,\mathrm{V}\ \Rightarrow\ I_C \approx 2{,}24\,\mathrm{mA}$$

$$\Rightarrow\ I_B=\frac{I_C}{B}\approx 5{,}6\,\mu\mathrm{A}\ \Rightarrow\ U_e\approx 2{,}6\,\mathrm{mV}\approx 0 \qquad (2.89)$$

Mit diesen Werten hat man eine sehr genaue Lösung von (2.88) und (2.89) für den Fall $U_e = 0$.

#### 2.4.1.6.2 Sättigungsbetrieb

Der Transistor erreicht die Grenze zum Sättigungsbetrieb, wenn $U_a$ die Sättigungsspannung $U_{CE,sat}$ erreicht; Einsetzen von $U_a = U_{CE,sat} \approx 0{,}1\,\mathrm{V}$ und $U_{BE} \approx 0{,}7\,\mathrm{V}$ in (2.90) liefert $U_e \approx 1\,\mathrm{V}$. Für $U_e > 1\,\mathrm{V}$ leitet die Kollektor-Diode.

#### 2.4.1.6.3 Kleinsignalverhalten

Die Spannungsverstärkung $A$ entspricht der Steigung der Übertragungskennlinie, siehe Abb. 2.70; sie ist in dem Bereich, für den die lineare Näherung nach (2.90) gilt, näherungsweise konstant. Die Berechnung von $A$ erfolgt mit Hilfe des in Abb. 2.71 gezeigten Kleinsignalersatzschaltbilds. Aus den Knotengleichungen

$$\frac{u_e-u_{BE}}{R_1}+\frac{u_a-u_{BE}}{R_2}=\frac{u_{BE}}{r_{BE}}$$

$$Su_{BE}+\frac{u_a-u_{BE}}{R_2}+\frac{u_a}{r_{CE}}+\frac{u_a}{R_C}=i_a$$

erhält man mit $R_C' = R_C \parallel r_{CE}$:

$$A=\left.\frac{u_a}{u_e}\right|_{i_a=0}=\frac{-SR_2+1}{1+R_1\left(S\left(1+\frac{1}{\beta}\right)+\frac{1}{R_C'}\right)+\frac{R_2}{R_C'}\left(1+\frac{R_1}{r_{BE}}\right)}$$
<!-- page-import:0153:end -->

<!-- page-import:0154:start -->
## 2.4 Grundschaltungen

117

**Abb. 2.71.** Kleinsignalersatzschaltbild der Emitterschaltung mit Spannungsgegenkopplung

$$
\begin{array}{c}
r_{CE} \gg R_C \\
\beta \gg 1
\end{array}
\qquad \approx \qquad
\frac{-S\,R_2 + 1}{1 + S\,R_1 + \dfrac{R_1}{R_C} + \dfrac{R_2}{R_C}\left(1 + \dfrac{R_1}{r_{BE}}\right)}
$$

$$
\begin{array}{c}
r_{BE} \gg R_1 \\
R_1 \cdot R_2 \gg 1/S
\end{array}
\qquad \approx \qquad
-\frac{R_2}{R_1 + R_2 + \dfrac{R_1 + R_2}{S\,R_C}}
\qquad
\begin{array}{c}
S\,R_C \gg 1 + R_2/R_1
\end{array}
\qquad \approx \qquad
-\frac{R_2}{R_1}
$$

Wenn alle Bedingungen erfüllt sind, hängt $A$ nur noch von $R_1$ und $R_2$ ab; dabei besagt die letzte Bedingung, dass die Verstärkung ohne Gegenkopplung, i.e. $-S\,R_C$, viel größer sein muss als die *ideale* Verstärkung mit Gegenkopplung, i.e. $-R_2/R_1$. Wird die Schaltung mit einem Lastwiderstand $R_L$ betrieben, kann man die zugehörige Betriebsverstärkung $A_B$ berechnen, indem man für $R_C$ die Parallelschaltung von $R_C$ und $R_L$ einsetzt, siehe Abb. 2.71. In dem beispielhaft gewählten Arbeitspunkt erhält man mit $S = 86{,}2\,\mathrm{mS}$, $r_{BE} = 4{,}6\,\mathrm{k}\Omega$, $r_{CE} = 45\,\mathrm{k}\Omega$, $R_C = R_1 = 1\,\mathrm{k}\Omega$ und $R_2 = 2\,\mathrm{k}\Omega$ exakt $A = -1{,}885$; die erste Näherung liefert $A = -1{,}912$, die zweite $A = -1{,}933$ und die dritte $A = -2$.

Für den Leerlaufeingangswiderstand erhält man mit $R_C' = R_C \parallel r_{CE}$:

$$
r_{e,L} = \left.\frac{u_e}{i_e}\right|_{i_a=0}
= R_1 + \frac{r_{BE}\,(R_C' + R_2)}{r_{BE} + (1 + \beta)\,R_C' + R_2}
$$

$$
\begin{array}{c}
r_{CE} \gg R_C \\
\beta \gg 1
\end{array}
\qquad \approx \qquad
R_1 + \frac{r_{BE}\,(R_C + R_2)}{r_{BE} + \beta\,R_C + R_2}
$$

$$
\begin{array}{c}
\beta\,R_C \gg r_{BE}, R_2
\end{array}
\qquad \approx \qquad
R_1 + \frac{1}{S}\left(1 + \frac{R_2}{R_C}\right)
$$

$$
\begin{array}{c}
S\,R_C \gg R_2/R_1
\end{array}
\qquad \approx \qquad
R_1 + \frac{1}{S}
\qquad
\begin{array}{c}
S\,R_1 \gg 1
\end{array}
\qquad \approx \qquad
R_1
$$

Er gilt für $i_a = 0$, d.h. $R_L \to \infty$. Der Eingangswiderstand für andere Werte von $R_L$ wird berechnet, indem man für $R_C$ die Parallelschaltung von $R_C$ und $R_L$ einsetzt. Durch Einsetzen von $R_L = R_C = 0$ erhält man den Kurzschlusseingangswiderstand:

$$
r_{e,K} = \left.\frac{u_e}{i_e}\right|_{u_a=0} = R_1 + r_{BE} \parallel R_2
$$

In dem beispielhaft gewählten Arbeitspunkt erhält man für den Leerlaufeingangswiderstand exakt $r_{e,L} = 1034\,\Omega$; die erste Näherung liefert ebenfalls $r_{e,L} = 1034\,\Omega$, die zweite $r_{e,L} = 1035\,\Omega$, die dritte $r_{e,L} = 1012\,\Omega$ und die vierte $r_{e,L} = 1\,\mathrm{k}\Omega$. Der Kurzschlusseingangswiderstand beträgt $r_{e,K} = 2{,}4\,\mathrm{k}\Omega$.
<!-- page-import:0154:end -->

<!-- page-import:0155:start -->
118  2. Bipolartransistor

Für den Kurzschlussausgangswiderstand erhält man mit $R_C' = R_C \parallel r_{CE}$:

$$
r_{a,K}=\left.\frac{u_a}{i_a}\right|_{u_e=0}
= R_C' \parallel \frac{r_{BE}(R_1+R_2)+R_1R_2}{r_{BE}+R_1(1+\beta)}
$$

$$
\overset{\substack{r_{CE}\gg R_C\\ \beta\gg 1}}{\approx}
R_C \parallel \frac{r_{BE}(R_1+R_2)+R_1R_2}{r_{BE}+\beta R_1}
$$

$$
\overset{\beta R_1\gg r_{BE}}{\approx}
R_C \parallel \left(\frac{1}{S}\left(1+\frac{R_2}{R_1}\right)+\frac{R_2}{\beta}\right)
$$

Daraus folgt mit $R_1 \rightarrow \infty$ der Leerlaufausgangswiderstand:

$$
r_{a,L}=\left.\frac{u_a}{i_a}\right|_{i_e=0}
= R_C' \parallel \frac{r_{BE}+R_2}{1+\beta}
\overset{\substack{r_{CE}\gg R_C\\ \beta\gg 1}}{\approx}
R_C \parallel \left(\frac{1}{S}+\frac{R_2}{\beta}\right)
$$

In dem beispielhaft gewählten Arbeitspunkt erhält man für den Kurzschlussausgangswiderstand exakt $r_{a,K}=37{,}5\,\Omega$; die erste Näherung liefert ebenfalls $r_{a,K}=37{,}5\,\Omega$, die zweite $r_{a,K}=38{,}3\,\Omega$. Der Leerlaufausgangswiderstand beträgt exakt $r_{a,L}=16{,}2\,\Omega$; die Näherung liefert $r_{a,L}=16{,}3\,\Omega$.

In erster Näherung gilt für die Emitterschaltung mit Spannungsgegenkopplung:

*Emitterschaltung mit Spannungsgegenkopplung*

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
\approx
-\frac{R_2}{R_1+\dfrac{R_1+R_2}{SR_C}}
\overset{SR_C\gg 1+R_2/R_1}{\approx}
-\frac{R_2}{R_1}
\qquad\qquad (2.91)
$$

$$
r_e=\frac{u_e}{i_e}\approx R_1
\qquad\qquad (2.92)
$$

$$
r_a=\frac{u_a}{i_a}\approx R_C \parallel \left(\frac{1}{S}\left(1+\frac{R_2}{R_1}\right)+\frac{R_2}{\beta}\right)
\qquad\qquad (2.93)
$$

## 2.4.1.6.4 Nichtlinearität

Die Nichtlinearität der Übertragungskennlinie wird durch die Spannungsgegenkopplung stark reduziert. Der Klirrfaktor der Schaltung kann durch eine Reihenentwicklung der Kennlinie im Arbeitspunkt näherungsweise bestimmt werden. Einsetzen des Arbeitspunkts in (2.88) und (2.89) liefert:

$$
u_a=\frac{R_C}{R_2+R_C}\left(-R_2 i_C + U_T \ln\left(1+\frac{i_C}{I_{C,A}}\right)\right)
$$

$$
u_e=\frac{R_1}{\beta}i_C+\left(1+\frac{R_1}{R_2}\right)U_T\ln\left(1+\frac{i_C}{I_{C,A}}\right)-\frac{R_1}{R_2}u_a
$$

Durch Reihenentwicklung und Eliminieren von $i_C$ erhält man daraus mit $\beta \gg 1$ und $SR_2 \gg 1$:

$$
u_a \approx -\frac{R_2}{R_1}\left(u_e+\left(\frac{1}{R_2}+\frac{1}{R_C}\right)^2\left(1+\frac{R_2}{R_1}\right)\frac{U_T R_2}{2I_{C,A}^2R_1}u_e^2+\cdots\right)
$$
<!-- page-import:0155:end -->

<!-- page-import:0156:start -->
2.4 Grundschaltungen 119

**Abb. 2.72.** Kleinsignalersatzschaltbild zur Berechnung der Temperaturdrift der Emitterschaltung mit Spannungsgegenkopplung: mit Spannungsquelle $u_{TD}$ (oben) und nach Verschieben der Quelle (unten)

Bei Aussteuerung mit $u_e = \hat{u}_e \cos \omega_0 t$ erhält man aus dem Verhältnis der ersten Oberwelle mit $2\omega_0$ zur Grundwelle mit $\omega_0$ bei kleiner Aussteuerung, d.h. bei Vernachlässigung höherer Potenzen, näherungsweise den Klirrfaktor $k$:

$$
k \approx \frac{u_{a,2\omega_0}}{u_{a,\omega_0}} \approx \frac{\hat{u}_e}{4U_T}\,\frac{\frac{R_2}{R_1}\left(1+\frac{R_2}{R_1}\right)}{S^2\left(R_2 \parallel R_C\right)^2}
$$

Ist ein Maximalwert für $k$ vorgegeben, muss

$$
\hat{u}_e < 4kU_T\,\frac{S^2\left(R_2 \parallel R_C\right)^2}{\frac{R_2}{R_1}\left(1+\frac{R_2}{R_1}\right)}
$$

gelten. Mit $\hat{u}_a = |A|\hat{u}_e$ erhält man daraus die maximale Ausgangsamplitude. Für das Zahlenbeispiel folgt $\hat{u}_e < k \cdot 57\,\mathrm{V}$ und, mit $A \approx -1{,}89$, $\hat{u}_a < k \cdot 108\,\mathrm{V}$.

#### 2.4.1.6.5 Temperaturabhängigkeit

Die Basis-Emitter-Spannung $U_{BE}$ nimmt nach (2.21) mit $1{,}7\ \mathrm{mV/K}$ ab. Die dadurch verursachte *Temperaturdrift* der Ausgangsspannung kann man durch eine Kleinsignalrechnung ermitteln, indem man eine Spannungsquelle $u_{TD}$ mit $du_{TD}/dT = -\,1{,}7\ \mathrm{mV/K}$ in Reihe zu $r_{BE}$ ergänzt, siehe Abb. 2.72 oben, und ihre Auswirkung auf die Ausgangsspannung berechnet. Die Rechnung lässt sich stark vereinfachen, wenn man die Spannungsquelle geeignet verschiebt: wird sie durch zwei Spannungsquellen in Reihe mit $R_1$ und $R_2$ ersetzt, letztere in zwei Stromquellen $u_{TD}/R_2$ am Basis- und am Kollektorknoten umgewandelt und davon die am Basisknoten wieder in eine Spannungsquelle $u_{TD}R_1/R_2$ umgewandelt, erhält man das in Abb. 2.72 unten gezeigte äquivalente Kleinsignalersatzschaltbild; unter Verwendung der bereits definierten Größen $A$ und $r_{a,K}$ folgt:

$$
\left.\frac{dU_a}{dT}\right|_A
=
\left(
-\left(1+\frac{R_1}{R_2}\right)A + \frac{r_{a,K}}{R_2}
\right)\frac{du_{TD}}{dT}
\approx
\left(1+\frac{R_1}{R_2}\right)A \cdot 1{,}7\,\frac{\mathrm{mV}}{\mathrm{K}}
$$

Für den beispielhaft gewählten Arbeitspunkt erhält man mit $A = -1{,}885$ und $r_a = r_{a,K} = 37{,}5\ \Omega$ eine Temperaturdrift von $\left.(dU_a/dT)\right|_A \approx -4{,}8\ \mathrm{mV/K}$.
<!-- page-import:0156:end -->

<!-- page-import:0157:start -->
120  2. Bipolartransistor

Abb. 2.73. Strom-Spannungs-Wandler

## 2.4.1.6.6 Betrieb als Strom-Spannungs-Wandler

Schließt man bei der Emitterschaltung mit Spannungsgegenkopplung den Widerstand $R_1$ kurz und steuert mit einer Stromquelle $I_e$ an, erhält man die Schaltung nach Abb. 2.73a, die als *Strom-Spannungs-Wandler* arbeitet; sie wird auch *Transimpedanzverstärker* ${}^{18}$ genannt. Abbildung 2.73b zeigt die Kennlinien $U_a(I_e)$ und $U_e(I_e)$ für $U_b = 5\ \mathrm{V},\ R_C = 1\ \mathrm{k}\Omega$ und $R_2 = 2\ \mathrm{k}\Omega$.

Aus den Knotengleichungen für den Ein- und den Ausgang folgt für den Normalbetrieb, d.h. $-1{,}3\ \mathrm{mA} < I_e < 0{,}2\ \mathrm{mA}$:

$$
U_a
=
\frac{U_b R_2 - I_e B R_2 R_C + U_e (1 + B)\, R_C}{R_2 + (1 + B)\, R_C}
$$

$$
\underset{\substack{\beta R_C \gg R_2 \\ B \gg 1}}{\approx}
\frac{R_2}{B R_C}\, U_b - R_2 I_e + U_e
$$

Mit $U_e = U_{BE} \approx 0{,}7\ \mathrm{V}$ erhält man die Näherung $U_a \approx 0{,}72\ \mathrm{V} - 2\ \mathrm{k}\Omega \cdot I_e$.

Das Kleinsignalverhalten des Strom-Spannungs-Wandlers kann aus den Gleichungen für die Emitterschaltung mit Spannungsgegenkopplung abgeleitet werden. Der *Übertragungswiderstand* (*Transimpedanz*) tritt an die Stelle der Verstärkung; mit (2.91) erhält man:

$$
R_T
=
\left.\frac{u_a}{i_e}\right|_{i_a=0}
=
\lim_{R_1 \to \infty} R_1 \left.\frac{u_a}{u_e}\right|_{i_a=0}
=
\lim_{R_1 \to \infty} R_1 A
$$

$$
=
\frac{-S R_2 + 1}{S\left(1 + \frac{1}{\beta}\right) + \frac{1}{R_C'}\left(1 + \frac{R_2}{r_{BE}}\right)}
$$

$$
\underset{\substack{r_{CE} \gg R_C \\ \beta \gg 1}}{\approx}
\frac{-S R_2 + 1}{S + \frac{1}{R_C}\left(1 + \frac{R_2}{r_{BE}}\right)}
\qquad
\underset{\substack{\beta R_C \gg R_2 \\ S R_2 \gg 1}}{\approx}
- R_2
$$

${}^{18}$ Die Bezeichnung *Transimpedanzverstärker* wird auch für Operationsverstärker mit Stromeingang und Spannungsausgang verwendet (CV-OPV).
<!-- page-import:0157:end -->

<!-- page-import:0158:start -->
2.4 Grundschaltungen 121

Der *Eingangswiderstand* kann aus den Gleichungen für die Emitterschaltung mit Spannungsgegenkopplung berechnet werden, indem man $R_1 = 0$ setzt. Der *Ausgangswiderstand* entspricht dem Leerlaufausgangswiderstand der Emitterschaltung mit Spannungsgegenkopplung. Zusammengefasst erhält man für den Strom-Spannungs-Wandler in Emitterschaltung:

*Strom-Spannungs-Wandler*

$$
R_T = \left.\frac{u_a}{i_e}\right|_{i_a=0} \approx -R_2
$$

(2.94)

$$
r_e = \frac{u_e}{i_e} \approx \frac{1}{S}\left(1 + \frac{R_2}{R_C}\right)
$$

(2.95)

$$
r_a = \frac{u_a}{i_a} \approx R_C \parallel \left(\frac{1}{S} + \frac{R_2}{\beta}\right)
$$

(2.96)

## 2.4.1.7 Arbeitspunkteinstellung

Der Betrieb als Kleinsignalverstärker erfordert eine stabile Einstellung des Arbeitspunkts des Transistors. Der Arbeitspunkt sollte möglichst wenig von den Parametern des Transistors abhängen, da diese temperaturabhängig und fertigungsbedingten Streuungen unterworfen sind; wichtig sind in diesem Zusammenhang die Stromverstärkung $B$ und der Sättigungssperrstrom $I_S$:

|  | $B$ | $I_S$ |
|---|---:|---:|
| Temperaturkoeffizient | $+0{,}5\,\%/\mathrm{K}$ | $+15\,\%/\mathrm{K}$ |
| Streuung | $-30/+50\,\%$ | $-70/+200\,\%$ |

Es gibt zwei grundsätzlich verschiedene Verfahren zur Arbeitspunkteinstellung: die *Wechselspannungskopplung* und die *Gleichspannungskopplung*.

### 2.4.1.7.1 Arbeitspunkteinstellung bei Wechselspannungskopplung

Bei Wechselspannungskopplung wird der Verstärker oder die Verstärkerstufe über Koppelkondensatoren mit der Signalquelle und mit der Last verbunden, siehe Abb. 2.74. Damit kann man die Arbeitspunktspannungen unabhängig von den Gleichspannungen der Signalquelle und der Last wählen; die Koppelkondensatoren werden dabei auf die Spannungsdifferenz aufgeladen. Da über die Koppelkondensatoren kein Gleichstrom fließen kann, kann man eine beliebige Signalquelle oder Last anschließen, ohne dass sich der Arbeitspunkt verschiebt. Bei mehrstufigen Verstärkern lässt sich der Arbeitspunkt für jede Stufe getrennt einstellen.

Jeder Koppelkondensator bildet zusammen mit dem Ein- bzw. Ausgangswiderstand der gekoppelten Stufen, der Signalquelle oder der Last einen Hochpass. Abbildung 2.75 zeigt einen Ausschnitt des Kleinsignalersatzschaltbilds eines mehrstufigen Verstärkers; dabei wurde für jede Stufe das Kleinsignalersatzschaltbild nach Abb. 2.63 mit den Kenngrößen $A$, $r_e$ und $r_a$ eingesetzt. Aus dem Kleinsignalersatzschaltbild kann man die Grenzfrequenzen der Hochpässe berechnen. Die Dimensionierung der Koppelkondensatoren muss so erfolgen, dass die kleinste interessierende Signalfrequenz noch voll übertragen wird. Gleichspannungen können nicht übertragen werden.
<!-- page-import:0158:end -->

<!-- page-import:0159:start -->
122  2. Bipolartransistor

a Spannungseinstellung

b Stromeinstellung

**Abb. 2.74.** Arbeitspunkteinstellung bei Wechselspannungskopplung

Die Arbeitspunkteinstellung für die Emitterschaltung kann durch Spannungs- oder Stromeinstellung erfolgen; dabei wird $U_{BE,A}$ oder $I_{B,A}$ so vorgegeben, dass sich der gewünschte Kollektorstrom $I_{C,A}$ und damit die gewünschte Ausgangsspannung $U_{a,A}$ einstellt. Wegen

$$
U_{BE,A}(T,E)=U_T(T)\ln\frac{I_{C,A}}{I_S(T,E)}, \qquad I_{B,A}(T,E)=\frac{I_{C,A}}{B(T,E)}
$$

hängen $U_{BE,A}$ und $I_{B,A}$ von der Temperatur $T$ und vom Exemplar $E$ ab.

### 2.4.1.7.2 Spannungseinstellung

Bei der Spannungseinstellung nach Abb. 2.74a wird mit den Widerständen $R_1$ und $R_2$ die Spannung $U_{BE,A}$ eingestellt. Wählt man dabei den Querstrom durch die Widerstände deutlich größer als $I_{B,A}$, wirkt sich eine Änderung von $I_{B,A}$ nicht mehr auf den Arbeitspunkt aus. Die Abhängigkeit vom Exemplar kann durch Einsatz eines Potentiometers für $R_2$ und Abgleich des Arbeitspunkts behoben werden. Zur Berechnung der durch $U_{BE}$ verursachten Temperaturdrift der Ausgangsspannung fügt man eine Spannungsquelle $u_{TD}$ mit $du_{TD}/dT=-1{,}7\,\mathrm{mV/K}$ in das Kleinsignalersatzschaltbild ein, siehe Abb. 2.76. Sie wirkt, wie ein Vergleich mit Abb. 2.62 zeigt, wie eine Signalspannungsquelle $u_g=-u_{TD}$ mit dem Innenwiderstand $R_g=R_1 \parallel R_2$; daraus folgt:

$$
\left.\frac{dU_a}{dT}\right|_A
=
-\frac{r_e}{r_e+R_g}\,A\,\frac{du_{TD}}{dT}
=
\frac{r_{BE}}{r_{BE}+(R_1 \parallel R_2)}\,A\cdot 1{,}7\,\frac{\mathrm{mV}}{\mathrm{K}}
\qquad (2.97)
$$

**Abb. 2.75.** Kleinsignalersatzschaltbild eines mehrstufigen Verstärkers zur Berechnung der Hochpässe bei Wechselspannungskopplung
<!-- page-import:0159:end -->

<!-- page-import:0160:start -->
2.4 Grundschaltungen 123

**Abb. 2.76.** Berechnung der Temperaturdrift bei Spannungseinstellung

*Beispiel:* Mit $A = -75$ und $R_1 \parallel R_2 = r_{BE}$ folgt $(dU_a/dT)\vert_A \approx -64\,\mathrm{mV/K}$. Wegen der hohen Temperaturdrift wird diese Art der Arbeitspunkteinstellung in der Praxis nicht eingesetzt.

### 2.4.1.7.3 Stromeinstellung

Bei der Stromeinstellung nach Abb. 2.74b wird über den Widerstand $R_1$ der Basisstrom $I_{B,A}$ eingestellt:

$$
R_1 = \frac{U_b - U_{BE,A}}{I_{B,A}} \approx \frac{U_b - 0{,}7\,\mathrm{V}}{I_{B,A}}
$$

Für $U_b \gg U_{BE,A}$ wirkt sich eine Änderung von $U_{BE,A}$ praktisch nicht auf $I_{B,A}$ aus; ausgehend von $U_a = U_b - I_C R_C$ erhält man:

$$
\left.\frac{dU_a}{dT}\right|_A \approx -R_C \left.\frac{dI_C}{dT}\right|_{I_B=\mathrm{const}.}
= -I_B R_C \frac{dB}{dT}
= -\frac{I_{C,A} R_C}{U_T}\,\frac{U_T}{B}\,\frac{dB}{dT}
$$

$$
\approx A\,\frac{U_T}{B}\,\frac{dB}{dT}\qquad \overset{(2.23)}{\approx}\qquad A \cdot 0{,}13\,\frac{\mathrm{mV}}{\mathrm{K}}
\qquad\qquad (2.98)
$$

*Beispiel:* Mit $A = -75$ folgt $(dU_a/dT)\vert_A \approx -9{,}8\,\mathrm{mV/K}$. Die Temperaturdrift ist zwar geringer als bei der Spannungseinstellung, für die Praxis aber dennoch zu groß. Aufgrund der großen Streuung von $\beta$ muss für $R_1$ ein Potentiometer zum Abgleich des Arbeitspunkts eingesetzt werden. Deshalb wird diese Art der Arbeitspunkteinstellung in der Praxis nicht eingesetzt.

### 2.4.1.7.4 Arbeitspunkteinstellung mit Gleichstromgegenkopplung

Die Temperaturdrift ist proportional zur Verstärkung, siehe (2.97) und (2.98); deshalb kann man die Stabilität des Arbeitspunkts durch eine Reduktion der Verstärkung verbessern. Da die Temperaturdrift ein langsam ablaufender Vorgang ist, muss nur die *Gleichspannungsverstärkung* $A_G$ reduziert werden; die *Wechselspannungsverstärkung* $A_W$ kann unverändert bleiben. Man erreicht dies mit einer frequenzabhängigen Gegenkopplung, die nur für Gleichgrößen und Frequenzen unterhalb der kleinsten interessierenden Signalfrequenz wirkt und für höhere Frequenzen ganz oder teilweise unwirksam ist. Auf diesem Prinzip beruht die Arbeitspunkteinstellung mit *Gleichstromgegenkopplung* nach Abb. 2.77a; dabei wird die Spannungseinstellung mit einer Stromgegenkopplung über den Widerstand $R_E$ kombiniert. Der Kondensator $C_E$ bewirkt mit zunehmender Frequenz einen Kurzschluss von $R_E$ und hebt damit die Gegenkopplung für höhere Frequenzen auf.

Die im Arbeitspunkt an der Basis des Transistors erforderliche Spannung

$$
U_{B,A} = (I_{C,A} + I_{B,A})\,R_E + U_{BE,A} \approx I_{C,A}\,R_E + 0{,}7\,\mathrm{V}
$$

wird mit $R_1$ und $R_2$ eingestellt; dabei wird der Querstrom durch die Widerstände deutlich größer als $I_{B,A}$ gewählt, damit der Arbeitspunkt nicht von $I_{B,A}$ abhängt. Wenn die Signalquelle einen geeigneten Gleichspannungsanteil aufweist und den benötigten Basisstrom
<!-- page-import:0160:end -->

<!-- page-import:0161:start -->
124 2. Bipolartransistor

a mit Spannungseinstellung

b mit direkter Kopplung

**Abb. 2.77.** Arbeitspunkteinstellung mit Gleichstromgegenkopplung

$I_{B,A}$ liefern kann, kann man auf die Widerstände und den Koppelkondensator $C_e$ verzichten und eine direkte Kopplung vornehmen; dabei kann $U_{B,A}$ durch Variation von $R_E$ an die vorliegende Eingangsgleichspannung angepasst werden. $R_E$ darf aber nicht zu klein gewählt werden, da sonst die Gegenkopplung unwirksam und die Arbeitspunktstabilität herabgesetzt wird. Für kleine positive und negative Eingangsgleichspannungen kann man durch eine zusätzliche negative Versorgungsspannung eine direkte Kopplung ermöglichen, siehe Abb. 2.77b.

Die Temperaturdrift der Ausgangsspannung folgt aus (2.97), indem man für $A$ und $r_e$ die Werte der Emitterschaltung mit Stromgegenkopplung nach (2.82) und (2.83) einsetzt; dabei gilt $A = A_G$. Mit $r_e \gg R_1 \parallel R_2$ erhält man den ungünstigsten Fall:

$$
\left.\frac{dU_a}{dT}\right|_A \approx A_G \cdot 1{,}7\,\frac{\mathrm{mV}}{\mathrm{K}} \overset{sR_E \gg 1}{\approx} -\frac{R_C}{R_E} \cdot 1{,}7\,\frac{\mathrm{mV}}{\mathrm{K}}
$$

Man muss also $R_E$ möglichst groß machen, um eine geringe Gleichspannungsverstärkung $A_G$ und damit eine geringe Temperaturdrift zu erhalten. In der Praxis wählt man $R_C / R_E \approx 1 \dots 10$.

Der Frequenzgang der Verstärkung kann mit Hilfe des in Abb. 2.78 gezeigten Kleinsignalersatzschaltbilds oder aus (2.82) durch Einsetzen von $R_E \parallel (1/sC_E)$ anstelle von $R_E$ ermittelt werden:

$$
A(s) \approx -\frac{sR_C\,(1 + sC_E R_E)}{1 + sR_E + sC_E R_E} \overset{sR_E \gg 1}{\approx} -\frac{R_C}{R_E}\,\frac{1 + sC_E R_E}{1 + s\,\frac{C_E}{S}}
$$

**Abb. 2.78.** Kleinsignalersatzschaltbild zu Abb. 2.77a
<!-- page-import:0161:end -->

<!-- page-import:0162:start -->
2.4 Grundschaltungen 125

Abb. 2.79. Betragsfrequenzgang $A = |\underline{A}(j\,2\pi f)|$

Abbildung 2.79 zeigt den Betragsfrequenzgang $A = |\underline{A}(j\,2\pi f)|$ mit den Knickfrequenzen $f_1$ und $f_2$; dabei gilt:

$$
\omega_1 = 2\pi f_1 = \frac{1}{C_E\,R_E}, \quad \omega_2 = 2\pi f_2 \approx \frac{S}{C_E}
$$

Für $f < f_1$ ist die Gegenkopplung voll wirksam; hier gilt $A \approx A_G \approx -R_C/R_E$. Für $f > f_2$ ist die Gegenkopplung unwirksam und man erhält $A \approx A_W \approx -SR_C$. Dazwischen liegt ein Übergangsbereich. Der Kondensator $C_E$ muss so dimensioniert werden, dass $f_2$ kleiner als die kleinste interessierende Signalfrequenz ist.

Das Kleinsignalersatzschaltbild nach Abb. 2.78 zeigt ferner, dass am Eingang die Parallelschaltung von $R_1$ und $R_2$ auftritt, die bei der Berechnung des Eingangswiderstands $r_e$ zu berücksichtigen ist; für $f > f_2$ gilt:

$$
r_e = r_{BE} \parallel R_1 \parallel R_2
$$

Man darf $R_1$ und $R_2$ nicht zu klein wählen, da sonst der Eingangswiderstand stark abnimmt.

Möchte man auch für Wechselspannungen, d.h. für $f > f_2$, eine Stromgegenkopplung haben, z.B. zur Verringerung der nichtlinearen Verzerrungen, und soll dabei die Wechselspannungsverstärkung größer sein als die Gleichspannungsverstärkung, kann man eine der in Abb. 2.80 gezeigten Varianten verwenden. Abbildung 2.81 fasst die Kenngrößen zusammen.

Bei der Schaltung nach Abb. 2.80c wird eine Konstantstromquelle mit dem Strom $I_K$ und dem Innenwiderstand $r_K$ zur Arbeitspunkteinstellung verwendet; damit gilt $I_{C,A} \approx I_K$. Wegen $r_K \gg R_C$ ist die Gleichspannungsverstärkung $A_G$ und damit die durch den Transistor verursachte Temperaturdrift sehr klein; die Temperaturdrift der Schaltung hängt in diesem Fall von der Temperaturdrift der Konstantstromquelle ab:

$$
\left.\frac{dU_a}{dT}\right|_A \approx -\frac{R_C}{r_K}\cdot 1{,}7\,\frac{\mathrm{mV}}{\mathrm{K}} - R_C\,\frac{dI_K}{dT}
\overset{r_K \gg R_C}{\approx} -R_C\,\frac{dI_K}{dT}
$$

*Beispiel:* Ein Signal mit einer Amplitude $\hat{u}_g = 10\,\mathrm{mV}$, das von einer Quelle mit einem Innenwiderstand $R_g = 10\,\mathrm{k}\Omega$ geliefert wird, soll auf $\hat{u}_a = 200\,\mathrm{mV}$ verstärkt und an eine Last $R_L = 10\,\mathrm{k}\Omega$ abgegeben werden. Es wird eine untere Grenzfrequenz $f_U = 20\,\mathrm{Hz}$ und ein Klirrfaktor $k < 1\%$ gefordert. Die Versorgungsspannung beträgt $U_b = 12\,\mathrm{V}$. Aus (2.87) folgt, dass mit $\hat{u}_e \approx \hat{u}_g = 10\,\mathrm{mV}$ und $k < 0{,}01$ eine Stromgegenkopplung mit
<!-- page-import:0162:end -->

<!-- page-import:0163:start -->
126  2. Bipolartransistor

Abb. 2.80. Arbeitspunkteinstellung mit Gleich- und Wechselstromgegenkopplung

$S R_E > 2{,}2$ erforderlich ist; es muss also eine Emitterschaltung mit Wechselstromgegenkopplung verwendet werden. Die Betriebsverstärkung $A_B$ erhält man aus (2.76), indem man für $A$ und $r_a$ die Werte der Emitterschaltung mit Stromgegenkopplung nach (2.82) und (2.84) einsetzt:

$$
A_B = \frac{r_e}{r_e + R_g}\, A\, \frac{R_L}{R_L + r_a}
\approx - \frac{r_e}{r_e + R_g}\, \frac{S\,(R_C \parallel R_L)}{1 + S R_E}
$$

Es wird $A_B = \hat{u}_a/\hat{u}_g = 20$ gefordert. Die durch den Eingangswiderstand $r_e$ verursachte Abschwächung kann noch nicht berücksichtigt werden, da $r_e$ noch nicht bekannt ist; es wird deshalb zunächst $r_e \to \infty$ angenommen. Um die Abschwächung durch den Ausgangswiderstand $r_a \approx R_C$ klein zu halten, wird $R_C = 5\,\mathrm{k}\Omega < R_L$ gewählt. Unter Berücksichtigung von $S R_E > 2{,}2$ erhält man $R_E = 115\,\Omega \to 120\,\Omega$ 19), $S = 21{,}3\,\mathrm{mS}$ und $I_{C,A} = S\,U_T \approx 0{,}55\,\mathrm{mA}$. Nimmt man für den Transistor $B \approx \beta \approx 400$ und $I_S \approx 7\,\mathrm{fA}$ an, folgt $U_{BE,A} \approx 0{,}65\,\mathrm{V}$, $I_{B,A} \approx 1{,}4\,\mu\mathrm{A}$ und $r_{BE} \approx 19\,\mathrm{k}\Omega$. Um einen

|  | Abb. 2.77 | Abb. 2.80a | Abb. 2.80b und Abb. 2.80c ($R_{E1} = r_K$) |
|---|---|---|---|
| $A_W$ | $-S R_C$ | $-\dfrac{S R_C}{1 + S R_{E1}}$ | $-\dfrac{S R_C}{1 + S\,(R_{E1} \parallel R_{E2})}$ |
| $A_G$ | $-\dfrac{R_C}{R_E}$ | $-\dfrac{R_C}{R_{E1} + R_{E2}}$ | $-\dfrac{R_C}{R_{E1}}$ |
| $\omega_1$ | $\dfrac{1}{C_E R_E}$ | $\dfrac{1}{C_E R_{E2}}$ | $\dfrac{1}{C_E\,(R_{E1} + R_{E2})}$ |
| $\omega_2$ | $\dfrac{S}{C_E}$ | $\dfrac{1}{C_E\,((1/S + R_{E1}) \parallel R_{E2})}$ | $\dfrac{S}{C_E\,(1 + S R_{E2})}$ |
| Annahme | $S R_E \gg 1$ | $S\,(R_{E1} + R_{E2}) \gg 1$ | $S R_{E1} \gg 1$ |

Abb. 2.81. Kenngrößen der Emitterschaltung mit Gleichstromgegenkopplung
<!-- page-import:0163:end -->

<!-- page-import:0164:start -->
2.4 Grundschaltungen 127

**Abb. 2.82.** Dimensioniertes Beispiel einer Emitterschaltung mit Gleich- und Wechselstromgegenkopplung

stabilen Arbeitspunkt zu erhalten, wird eine zusätzliche Gleichstromgegenkopplung nach Abb. 2.80a mit $R_{E1} = R_E$ und $R_{E2} = 4{,}7\,\mathrm{k}\Omega \approx R_C$ verwendet, siehe Abb. 2.82; damit liegt die Gleichstromverstärkung etwa bei Eins und die Temperaturdrift ist entsprechend gering. Für die Spannung an der Basis folgt $U_{B,A} \approx I_{C,A}\,(R_{E1}+R_{E2}) + U_{BE,A} \approx 3{,}3\,\mathrm{V}$. Durch den Basisspannungsteiler soll ein Querstrom $I_Q = 10I_{B,A}$ fließen; daraus folgt $R_2 = U_{B,A}/I_Q \approx 240\,\mathrm{k}\Omega$ und $R_1 = (U_b - U_{B,A})/(I_Q + I_{B,A}) \approx 560\,\mathrm{k}\Omega$. Jetzt kann man den Eingangswiderstand bestimmen: $r_e = R_1 \parallel R_2 \parallel (r_{BE} + \beta R_{E1}) \approx 48\,\mathrm{k}\Omega$. Mit $R_g = 10\,\mathrm{k}\Omega$ erhält man durch $r_e$ eine Abnahme der Verstärkung um den Faktor $1 + R_g/r_e \approx 1{,}2$. Diese Abnahme lässt sich ausgleichen, indem man den Wert für $(R_C \parallel R_L)$ durch nachträgliches Ändern von $R_C$ um diesen Faktor vergrößert; man erhält $R_C = 6{,}8\,\mathrm{k}\Omega$. Damit sind alle Widerstände dimensioniert, siehe Abb. 2.82. Abschließend sind die durch die Kondensatoren $C_e$, $C_a$ und $C_E$ verursachten Hochpässe so auszulegen, dass $f_U = 20\,\mathrm{Hz}$ gilt. Nimmt man vereinfachend an, dass sich die Hochpässe nicht gegenseitig beeinflussen und deshalb ein Filter der Ordnung $N = 3$ mit kritischer Dämpfung bilden, ist jeder Hochpass gemäß Abschnitt 12.1 auf eine Grenzfrequenz von

$$
f_U' = f_U \sqrt{\sqrt[N]{2} - 1}\Big|_{N=3} = f_U \sqrt{\sqrt[3]{2} - 1} \approx 10\,\mathrm{Hz}
$$

auszulegen:

$$
C_e = \frac{1}{2\pi f_U'(R_g + r_e)} = 274\,\mathrm{nF} \rightarrow 270\,\mathrm{nF}
$$

$$
C_a = \frac{1}{2\pi f_U'(R_C + R_L)} = 947\,\mathrm{nF} \rightarrow 1\,\mu\mathrm{F}
$$

$$
C_E = \frac{1}{2\pi f_U'\,((1/S + R_{E1}) \parallel R_{E2})} = 99\,\mu\mathrm{F} \rightarrow 100\,\mu\mathrm{F}
$$

##### 2.4.1.7.5 Einsatz der Wechselspannungskopplung

Die Wechselspannungskopplung kann nur eingesetzt werden, wenn keine Gleichspannungen zu übertragen sind, d.h. wenn der Verstärker Hochpassverhalten aufweisen darf. Eine Ausnahme bilden Wechselspannungsverstärker mit sehr niedriger unterer Grenz-
<!-- page-import:0164:end -->

<!-- page-import:0165:start -->
128  2. Bipolartransistor

frequenz, bei denen die Koppelkondensatoren sehr große Werte annehmen können; man muss deshalb in der Praxis oft auch dann eine direkte Kopplung vornehmen, wenn keine Gleichspannungen verstärkt werden müssen.

Der wesentliche Vorteil der Wechselspannungskopplung liegt in der Unabhängigkeit von den Gleichspannungen an der Signalquelle und der Last. Das Hochpassverhalten hat zur Folge, dass sich die Temperaturdrift nur innerhalb der jeweiligen Stufe als Arbeitspunktverschiebung bemerkbar macht und nicht, wie bei direkter Kopplung, auf nachfolgende Stufen übertragen wird.

Trotz der Vorteile, die die Wechselspannungskopplung bei reinen Wechselspannungsverstärkern bietet, wird sie in der Praxis wegen der zusätzlich benötigten Kondensatoren und Widerstände nach Möglichkeit vermieden. Dies gilt besonders für Niederfrequenzverstärker, da dort wegen der großen Kapazitätswerte Elektrolytkondensatoren eingesetzt werden müssen, die groß und teuer sind und eine hohe Ausfallrate aufweisen. Bei Hochfrequenzverstärkern ist die Wechselspannungskopplung weit verbreitet; man kann dort keramische Kondensatoren im Pikofarad-Bereich einsetzen, die klein und vergleichsweise billig sind. In integrierten Schaltungen wird die Wechselspannungskopplung wegen der schlechten Integrierbarkeit von Kondensatoren nur in Ausnahmefällen eingesetzt. Werden dennoch Kondensatoren benötigt, müssen sie oft extern angeschlossen werden.

####### 2.4.1.7.6 Arbeitspunkteinstellung bei Gleichspannungskopplung

Bei Gleichspannungskopplung, auch als *direkte* oder *galvanische* Kopplung bezeichnet, wird der Verstärker oder die Verstärkerstufe direkt mit der Signalquelle und mit der Last verbunden. Dabei müssen die im Arbeitspunkt vorliegenden Gleichspannungen am Eingang und am Ausgang, i.e. $U_{e,A}$ und $U_{a,A}$, an die Gleichspannungen der Signalquelle und der Last angepasst werden. Bei mehrstufigen Verstärkern kann der Arbeitspunkt der einzelnen Stufen nicht mehr getrennt eingestellt werden.

Die Gleichspannungskopplung wird bei mehrstufigen Verstärkern fast immer in Verbindung mit einer Gegenkopplung über alle Stufen eingesetzt; dabei sind die einzelnen Stufen direkt gekoppelt und der Arbeitspunkt wird durch die Gegenkopplung eingestellt. Oft wird $U_{e,A} = U_{a,A}$ gefordert, d.h. der Verstärker soll den Gleichspannungsanteil im Signal nicht verändern.

*Beispiel:* Abbildung 2.83 zeigt einen gleichspannungsgekoppelten Verstärker mit zwei Stufen in Emitterschaltung und einer Gegenkopplung über beide Stufen. Die erste Stufe besteht aus dem npn-Transistor $T_1$ und dem Widerstand $R_1$, die zweite aus dem pnp-Transistor $T_2$ und dem Widerstand $R_2$; die Widerstände $R_3$, $R_4$ und $R_5$ bilden die Gegenkopplung zur Arbeitspunkt- und Verstärkungseinstellung. Der Verstärker ist für $U_{e,A} = U_{a,A} = 2{,}5\,\mathrm{V}$ und $A = 10$ ausgelegt. Bei einer Emitterschaltung mit npn-Transistor ist im Arbeitspunkt die Ausgangsspannung größer als die Eingangsspannung, bei einer Emitterschaltung mit pnp-Transistor dagegen kleiner. Deshalb ist es wegen der Forderung $U_{e,A} = U_{a,A}$ zweckmäßig, in der zweiten Stufe einen pnp-Transistor zu verwenden.

Zur Berechnung des Arbeitspunkts geht man von $U_{a,A} = 2{,}5\,\mathrm{V}$ aus. Vernachlässigt man den Strom durch $R_3$, erhält man $I_{C2,A} \approx -\,U_{a,A}/R_2 \approx -1{,}4\,\mathrm{mA}$. Mit $I_{S2} = 1\,\mathrm{fA}$ und $\beta_2 = 300$ $^{19}$ folgt $U_{EB2,A} = U_T \ln(-\,I_{C2,A}/I_{S2}) \approx 0{,}73\,\mathrm{V}$ und $I_{B2,A} \approx -4{,}7\,\mathrm{\mu A}$. Daraus folgt $I_{C1,A} = U_{EB2,A}/R_1 - I_{B2,A} \approx 78\,\mathrm{\mu A}$. Aus der Knotengleichung

$$
\frac{U_{E,A}}{R_4} = \frac{U_{a,A} - U_{E,A}}{R_3} + \frac{U_b - U_{E,A}}{R_5} + I_{C1,A}
$$

$^{19}$ Typische Werte für einen pnp-Kleinleistungstransistor BC557B.
<!-- page-import:0165:end -->

<!-- page-import:0166:start -->
2.4 Grundschaltungen 129

**Abb. 2.83.** Beispiel für einen gleichspannungsgekoppelten Verstärker mit zwei Stufen in Emitterschaltung und Gegenkopplung

am Emitteranschluss von $T_1$ erhält man $U_{E,A} = 1{,}9\,\mathrm{V}$. Mit $I_{S1} = 7\,\mathrm{fA}$ folgt $U_{BE1,A} = U_T \ln (I_{C1,A}/I_{S2}) \approx 0{,}6\,\mathrm{V}$ und daraus $U_{e,A} = U_{BE1,A} + U_{E,A} \approx 2{,}5\,\mathrm{V}$. Abschließend muss noch geprüft werden, ob die Vernachlässigung des Stroms durch $R_3$ bei der Berechnung von $I_{C2,A}$ zulässig ist: $I_{R3} = (U_{a,A} - U_{E,A})/R_3 \approx 18\,\mu\mathrm{A} \ll |I_{C2,A}|$.

Diese Berechnung verdeutlicht noch einmal die Vorgehensweise bei der Berechnung von Arbeitspunkten. Sie bildet auch die Grundlage für die Dimensionierung der Schaltung, die nicht direkt, sondern nur durch eine iterative Berechnung erfolgen kann; dabei muss man die Werte der Widerstände nach jeder Iteration geeignet anpassen.

### 2.4.1.7 Einsatz der Gleichspannungskopplung

Eine Gleichspannungskopplung ist unumgänglich, wenn Gleichspannungen verstärkt werden müssen$^{20}$. Aber auch bei mehrstufigen Wechselspannungsverstärkern werden die einzelnen Stufen nach Möglichkeit direkt gekoppelt, um die Koppelkondensatoren und die zusätzlichen Widerstände einzusparen.

Nachteilig ist, dass bei der Gleichspannungskopplung eine durch Temperaturdrift verursachte Arbeitspunktverschiebung in einer Verstärkerstufe auf die Last übertragen wird; folgen weitere Stufen, wird die Drift von diesen weiter verstärkt. Man muss deshalb bei der Gleichspannungskopplung besondere Maßnahmen zur Driftunterdrückung vorsehen oder Schaltungsvarianten mit geringer Drift, z.B. Differenzverstärker, einsetzen.

### 2.4.1.8 Frequenzgang und obere Grenzfrequenz

Die Kleinsignalverstärkung $A$ und die Betriebsverstärkung $A_B$ gelten in der bisher berechneten Form nur für niedrige Signalfrequenzen; bei höheren Frequenzen nehmen beide aufgrund der Transistorkapazitäten ab. Um eine Aussage über den Frequenzgang und die obere Grenzfrequenz zu bekommen, muss man bei der Berechnung das dynamische Kleinsignalmodell des Transistors nach Abb. 2.41 auf Seite 81 verwenden; dabei wird neben der Emitterkapazität $C_E$ und der Kollektorkapazität $C_C$ der Basisbahnwiderstand $R_B$ berücksichtigt.

20 Eine Ausnahme bilden spezielle Schaltungskonzepte wie der *Chopper-Verstärker* oder Verstärker mit geschalteten Kapazitäten, bei denen der Gleichanteil des Signals über einen getrennten Pfad übertragen wird.
<!-- page-import:0166:end -->

<!-- page-import:0167:start -->
130  2. Bipolartransistor

**Abb. 2.84.** Dynamisches Kleinsignalersatzschaltbild der Emitterschaltung ohne Gegenkopplung

#### 2.4.1.8.1 Emitterschaltung ohne Gegenkopplung

Abbildung 2.84 zeigt das dynamische Kleinsignalersatzschaltbild der Emitterschaltung ohne Gegenkopplung. Für die Betriebsverstärkung $A_B(s)=u_a(s)/u_g(s)$ erhält man mit $R'_g=R_g+R_B$ und $R'_C=R_L \parallel R_C \parallel r_{CE}$:

$$
A_B(s)=-\frac{(S-sC_C)\,R'_C}{1+\frac{R'_g}{r_{BE}}+s\left(C_E R'_g + C_C\left(R'_g+R'_C+SR'_C R'_g\right)\right)+s^2 C_E C_C R'_g R'_C}
$$

(2.99)

Abbildung 2.85 zeigt den Betragsfrequenzgang mit den Knickfrequenzen $f_{P1}$ und $f_{P2}$ der beiden Pole und der Knickfrequenz $f_N$ der Nullstelle. Die Nullstelle kann aufgrund der kleinen Zeitkonstante $C_C S^{-1}=(2\pi f_N)^{-1}$ vernachlässigt werden. Die beiden Pole sind reell und liegen weit auseinander. Man kann den Frequenzgang deshalb näherungsweise durch einen Tiefpass 1. Grades beschreiben, indem man den $s^2$-Term im Nenner streicht $^{21}$. Mit der Niederfrequenzverstärkung

$$
A_0=A_B(0)=-\frac{r_{BE}}{r_{BE}+R'_g}\,SR'_C
$$

(2.100)

folgt:

$$
A_B(s)\approx \frac{A_0}{1+s\left(C_E+C_C\left(1+SR'_C+\frac{R'_C}{R'_g}\right)\right)\left(r_{BE}\parallel R'_g\right)}
$$

(2.101)

Abbildung 2.85 zeigt die Betragsfrequenzgänge der Näherung (2.101) und des vollständigen Ausdrucks (2.99).

Aus (2.101) erhält man eine Näherung für die $-3dB$-Grenzfrequenz $f_{-3dB}$, bei der der Betrag der Verstärkung um $3\,\mathrm{dB}$ abgenommen hat:

$$
\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{\left(C_E+C_C\left(1+SR'_C+\frac{R'_C}{R'_g}\right)\right)\left(r_{BE}\parallel R'_g\right)}
$$

(2.102)

---

$^{21}$ Diese Vorgehensweise entspricht dem aus der Regelungstechnik bekannten Verfahren der Summenzeitkonstante, bei dem mehrere Pole zu einem Pol mit der Summe der Zeitkonstanten zusammengefasst werden: $(1+sT_1)(1+sT_2)\cdots(1+sT_n)\approx 1+s\,(T_1+T_2+\cdots+T_n)$. Der Koeffizient von $s$ ist die Summenzeitkonstante. Die Zusammenfassung erfolgt demnach durch Weglassen der höheren Potenzen von $s$.
<!-- page-import:0167:end -->

<!-- page-import:0168:start -->
2.4 Grundschaltungen 131

Abb. 2.85. Betragsfrequenzgang $|\underline{A}_B|$ der Emitterschaltung: (a) vollständig nach (2.99) und (b) Näherung (2.101)

In den meisten Fällen gilt $R_C', R_g' \gg 1/S$; damit erhält man:

$$
\omega_{-3dB} = 2\pi f_{-3dB} \approx \frac{1}{(C_E + C_C S R_C')(r_{BE} \parallel R_g')}
$$

(2.103)

Die obere Grenzfrequenz hängt von der Niederfrequenzverstärkung $A_0$ ab. Geht man davon aus, dass eine Änderung von $A_0$ durch eine Änderung von $R_C'$ erfolgt und alle anderen Größen konstant bleiben, erhält man durch Auflösen von (2.100) nach $R_C'$ und Einsetzen in (2.102) eine Darstellung mit zwei von $A_0$ unabhängigen Zeitkonstanten:

$$
\omega_{-3dB}(A_0) \approx \frac{1}{T_1 + T_2 |A_0|}
$$

(2.104)

$$
T_1 = (C_E + C_C)\,(r_{BE} \parallel R_g')
$$

(2.105)

$$
T_2 = C_C \left(R_g' + \frac{1}{S}\right)
$$

(2.106)

Zwei Bereiche lassen sich unterscheiden:

- Für $|A_0| \ll T_1/T_2$ gilt $\omega_{-3dB} \approx T_1^{-1}$, d.h. die obere Grenzfrequenz ist nicht von der Verstärkung abhängig. Die maximale obere Grenzfrequenz erhält man für den Grenzfall $A_0 \to 0$ und $R_g = 0$:

$$
\omega_{-3dB,max} \approx \frac{1}{(C_E + C_C)\,(r_{BE} \parallel R_B)} \qquad \overset{r_{BE} \gg R_B}{\approx} \qquad \frac{1}{(C_E + C_C)\,R_B}
$$

Sie entspricht der Steilheitsgrenzfrequenz $\omega_{Y21e}$, siehe (2.48).

- Für $|A_0| \gg T_1/T_2$ gilt $\omega_{-3dB} \approx (T_2 |A_0|)^{-1}$, d.h. die obere Grenzfrequenz ist proportional zum Kehrwert der Verstärkung und man erhält ein konstantes Verstärkungs-Bandbreite-Produkt (gain-bandwidth-product, GBW):

$$
GBW = f_{-3dB}\,|A_0| \approx \frac{1}{2\pi\,T_2}
$$

(2.107)
<!-- page-import:0168:end -->

<!-- page-import:0169:start -->
132  2. Bipolartransistor

**Abb. 2.86.** Kleinsignalersatzschaltbild der Emitterschaltung mit kapazitiver Last $C_L$

Das Verstärkungs-Bandbreite-Produkt $GBW$ ist eine wichtige Kenngröße, da es eine absolute Obergrenze für das Produkt aus dem Betrag der Verstärkung bei niedrigen Frequenzen und der oberen Grenzfrequenz darstellt, d.h. für alle Werte von $|A_0|$ gilt $GBW \geq f_{-3dB}|A_0|$.

Für $1/S \ll R'_g \ll r_{BE}$ kann man (2.102) näherungsweise in der Form

$$
\omega_{-3dB} \approx \frac{1}{R'_g \left(C_E + C_C \left(1 + |A_0|\right)\right)}
$$

schreiben. Diese Darstellung zeigt, dass $C_C$ im Vergleich zu $C_E$ mit dem Faktor $(1 + |A_0|)$ in die Grenzfrequenz eingeht. Dieser Effekt wird Miller-Effekt genannt und beruht darauf, dass bei niedrigen Frequenzen an $C_C$ die verstärkte Spannung

$$
u_{BE} - u_a \approx u_g - u_a = u_g (1 - A_0) = u_g (1 + |A_0|)
$$

auftritt, während an $C_E$ nur die Spannung $u_{BE} \approx u_g$ anliegt; die Näherung $u_g \approx u_{BE}$ folgt aus der Voraussetzung $r_{BE} \gg R'_g$. Die Kapazität $C_C$ wird auch als Miller-Kapazität $C_M$ bezeichnet.

Oft besitzt die Last neben dem ohmschen auch einen kapazitiven Anteil, d.h. parallel zum Lastwiderstand $R_L$ tritt eine Lastkapazität $C_L$ auf. Man kann den Einfluss von $C_L$ ermitteln, indem man den Widerstand $R'_C = r_{CE} \parallel R_C \parallel R_L$ durch eine Impedanz

$$
Z_C(s) = R'_C \parallel \frac{1}{s C_L} = \frac{R'_C}{1 + s C_L R'_C}
$$

ersetzt, siehe Abb. 2.86. Setzt man $Z_C(s)$ in (2.99) ein, führt die Vernachlässigungen entsprechend (2.101) durch und bestimmt die Zeitkonstanten $T_1$ und $T_2$, stellt man fest, dass sich $T_1$ nicht ändert; für $T_2$ erhält man: (2.108)

$$
T_2 = \left(C_C + \frac{C_L}{\beta}\right) R'_g + \frac{C_C + C_L}{S}
$$

(2.109)

Durch die Lastkapazität $C_L$ wird das Verstärkungs-Bandbreite-Produkt $GBW$ entsprechend der Zunahme von $T_2$ verringert, siehe (2.107).

#### 2.4.1.8.2 Ersatzschaltbild

Man kann die Emitterschaltung näherungsweise durch das Ersatzschaltbild nach Abb. 2.87 beschreiben. Es folgt aus Abb. 2.63 durch Ergänzen der Eingangskapazität $C_e$ und der Ausgangskapazität $C_a$ und eignet sich nur zur näherungsweisen Berechnung der Verstärkung $A_B(s)$ und der oberen Grenzfrequenz $f_{-3dB}$. Man erhält $C_e$ und $C_a$ aus der Bedingung, dass eine Berechnung von $A_B(s)$ auf der Basis der Ersatzgrößen nach Streichen des $s^2$-Terms im Nenner auf die Gleichung (2.101) führen muss:
<!-- page-import:0169:end -->

<!-- page-import:0170:start -->
2.4 Grundschaltungen

133

**Abb. 2.87.** Ersatzschaltbild mit den Ersatzgrößen $A$, $r_e$, $r_a$, $C_e$ und $C_a$

$$
C_e \approx C_E + C_C (1 + |A_0|)
\qquad\qquad (2.110)
$$

$$
C_a \approx C_C \frac{r_{BE}}{r_{BE} + R_g'}
\qquad\qquad (2.111)
$$

Beide hängen von der Beschaltung am Eingang und am Ausgang ab, da $A_0$ und $R_g'$ von $R_g$ und $R_L$ abhängen; man kann sie also erst dann angeben, wenn $R_g$ und $R_L$ bekannt sind. $A$, $r_e$ und $r_a$ sind durch (2.73)–(2.75) gegeben und hängen nicht von der Beschaltung ab. Der Basisbahnwiderstand $R_B$ wird als Bestandteil des Innenwiderstands des Signalgenerators angesehen: $R_g' = R_g + R_B$.

Wenn eine weitere Verstärkerstufe folgt, sind $R_L$ und $C_L$ durch $r_e$ und $C_e$ dieser Stufe gegeben. Das Ersatzschaltbild nach Abb. 2.87 ist leicht kaskadierbar, wenn man $R_g'$ mit $r_a$, $r_e$ mit $R_L$ und $C_e$ mit $C_L + C_a$ identifiziert; dabei wird der Basisbahnwiderstand $R_B$ der folgenden Stufe, der in Abb. 2.87 zwischen $C_a$ und $C_L$ zu liegen käme, ohne merklichen Fehler auf die linke Seite von $C_a$ verschoben und mit $r_a$ zusammengefasst.

*Beispiel:* Für das Zahlenbeispiel zur Emitterschaltung ohne Gegenkopplung nach Abb. 2.59a wurde $I_{C,A} = 2\,\mathrm{mA}$ gewählt. Mit $\beta = 400$, $U_A = 100\,\mathrm{V}$, $C_{obo} = 3{,}5\,\mathrm{pF}$ und $f_T = 160\,\mathrm{MHz}$ erhält man aus Abb. 2.45 auf Seite 86 die Kleinsignalparameter $S = 77\,\mathrm{mS}$, $r_{BE} = 5{,}2\,\mathrm{k}\Omega$, $r_{CE} = 50\,\mathrm{k}\Omega$, $C_C = 3{,}5\,\mathrm{pF}$ und $C_E = 73\,\mathrm{pF}$. Mit $R_g = R_C = 1\,\mathrm{k}\Omega$, $R_L \to \infty$ und $R_g' \approx R_g$ folgt aus (2.100) $A_0 \approx -63$, aus (2.102) $f_{-3dB} \approx 543\,\mathrm{kHz}$ und aus (2.103) $f_{-3dB} \approx 554\,\mathrm{kHz}$. Aus (2.105) folgt $T_1 \approx 64\,\mathrm{ns}$, aus (2.106) $T_2 \approx 3{,}55\,\mathrm{ns}$ und aus (2.107) $GBW \approx 45\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L = 1\,\mathrm{nF}$ erhält man aus (2.109) $T_2 \approx 19\,\mathrm{ns}$, aus (2.104) $f_{-3dB} \approx 126\,\mathrm{kHz}$ und aus (2.107) $GBW \approx 8{,}4\,\mathrm{MHz}$.

#### 2.4.1.8.3 Emitterschaltung mit Stromgegenkopplung

Der Frequenzgang und die obere Grenzfrequenz der Emitterschaltung mit Stromgegenkopplung nach Abb. 2.64a lassen sich aus den entsprechenden Größen der Emitterschaltung ohne Gegenkopplung ableiten. Abbildung 2.88a zeigt einen Teil des Kleinsignalersatzschaltbilds aus Abb. 2.84 mit dem zusätzlichen Widerstand $R_E$ der Stromgegenkopplung; der Widerstand $r_{CE}$ wird dabei vernachlässigt. Dieser Teil lässt sich in die in Abb. 2.88b gezeigte Darstellung umwandeln 22, die wieder auf das ursprüngliche Kleinsignalersatzschaltbild nach Abb. 2.84 zurückführt; dabei gilt:

$$
r_{BE}' = r_{BE} (1 + S R_E)
\qquad\qquad (2.112)
$$

$$
S' = \frac{S}{1 + S R_E}
\qquad\qquad (2.113)
$$

22 Diese Umwandlung ist keine Äquivalenzumwandlung, da sie auf der Vernachlässigung eines Pols in der Y-Matrix beruht. Die Grenzfrequenz dieses Pols liegt jedoch für jeden beliebigen Wert von $R_E$ oberhalb der Transitfrequenz $f_T$ des Transistors und damit in einem Bereich, in dem das Kleinsignalmodell des Transistors ohnehin nicht mehr gilt; die Umwandlung ist deshalb *praktisch* äquivalent [2.11].
<!-- page-import:0170:end -->

<!-- page-import:0171:start -->
134 2. Bipolartransistor

a vor der Umwandlung

b nach der Umwandlung

**Abb. 2.88.** Umwandlung des Kleinsignalersatzschaltbilds der Emitterschaltung mit Stromgegenkopplung

$$
C_E' = \frac{C_E}{1 + S R_E}
$$

(2.114)

Man kann demnach einen Transistor mit einem Widerstand $R_E$ zur Stromgegenkopplung in einen äquivalenten Transistor ohne Stromgegenkopplung umwandeln, indem man $r_{BE}$, $S$ und $C_E$ durch $r'_{BE}$, $S'$ und $C'_E$ ersetzt; dabei entspricht $S'$ der bereits in (2.85) eingeführten reduzierten Steilheit $S_{red}$.

Man kann nun die äquivalenten Werte in die Gleichungen (2.104)–(2.107) für die Emitterschaltung ohne Gegenkopplung einsetzen. Dabei fällt auf, dass sich $T_2$ und das Verstärkungs-Bandbreite-Produkt $GBW$ bei hohen Innenwiderständen der Signalquelle, d.h. $R'_g \gg 1/S'$, durch die Stromgegenkopplung nicht ändern, da sie in diesem Fall nur von $R'_g$ und $C_C$ abhängen. Daraus folgt für den Bereich $|A_0| > T_1/T_2$ mit konstantem $GBW$, dass die obere Grenzfrequenz durch die Stromgegenkopplung genau in dem Maße zunimmt, wie die Verstärkung abnimmt. Man kann demnach mit einer Stromgegenkopplung die obere Grenzfrequenz auf Kosten der Verstärkung erhöhen, das Produkt aus beiden aber nicht steigern.

Den Einfluss einer Lastkapazität $C_L$ kann man mit (2.109) durch Einsetzen der äquivalenten Werte, hier $S'$ anstelle von $S$, ermitteln. Bei starker Stromgegenkopplung wirken sich bereits kleine Werte für $C_L$ vergleichsweise stark aus, da $T_2$ wegen $S' \ll S$ vergleichsweise stark zunimmt; das Verstärkungs-Bandbreite-Produkt $GBW$ nimmt entsprechend stark ab.

Die Emitterschaltung mit Stromgegenkopplung kann näherungsweise durch das Ersatzschaltbild nach Abb. 2.87 beschrieben werden. Die Eingangskapazität $C_e$ und die Ausgangskapazität $C_a$ erhält man aus (2.110) und (2.111), indem man für $r_{BE}$ und $C_E$ die äquivalenten Werte $r'_{BE}$ und $C'_E$ einsetzt; $A$, $r_e$ und $r_a$ sind durch (2.82)–(2.84) gegeben.

*Beispiel:* Für das Zahlenbeispiel zur Emitterschaltung mit Stromgegenkopplung nach Abb. 2.64a wurde $I_{C,A} = 1{,}5\,\mathrm{mA}$ gewählt. Mit $\beta = 400$, $C_{obo} = 3{,}5\,\mathrm{pF}$ und $f_T = 150\,\mathrm{MHz}$ erhält man aus Abb. 2.45 auf Seite 86 die Kleinsignalparameter $S = 58\,\mathrm{mS}$, $r_{BE} = 6{,}9\,\mathrm{k\Omega}$, $C_C = 3{,}5\,\mathrm{pF}$ und $C_E = 58\,\mathrm{pF}$; $r_{CE}$ wird vernachlässigt. Die Umwandlung nach (2.112)–(2.114) liefert mit $R_E = 500\,\Omega$ die äquivalenten Werte $r'_{BE} = 207\,\mathrm{k\Omega}$, $S' = 1{,}93\,\mathrm{mS}$ und $C'_E = 1{,}93\,\mathrm{pF}$. Mit $R_g = R_C = 1\,\mathrm{k\Omega}$, $R_L \to \infty$ und $R'_g \approx R_g$ erhält man aus (2.100) $A_0 \approx -1{,}93$, aus (2.105) $T_1 \approx 5{,}4\,\mathrm{ns}$, aus (2.106) $T_2 \approx 5{,}3\,\mathrm{ns}$, aus (2.104) $f_{-3dB} \approx 10\,\mathrm{MHz}$ und aus (2.107) $GBW \approx 30\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L = 1\,\mathrm{nF}$ folgt aus (2.109) $T_2 \approx 526\,\mathrm{ns}$, aus (2.104) $f_{-3dB} \approx 156\,\mathrm{kHz}$ und aus (2.107) $GBW \approx 303\,\mathrm{kHz}$.
<!-- page-import:0171:end -->

<!-- page-import:0172:start -->
135

## 2.4 Grundschaltungen

Ein Vergleich mit dem Beispiel zur Emitterschaltung ohne Gegenkopplung auf Seite 133 zeigt, dass das Verstärkungs-Bandbreite-Produkt $GBW$ ohne Lastkapazität gleich ist; deshalb ist dort die obere Grenzfrequenz wegen der 30-fach größeren Verstärkung etwa um den Faktor 30 geringer. Für $C_L = 1\,\mathrm{nF}$ ist die obere Grenzfrequenz trotz der unterschiedlichen Verstärkung etwa gleich; in diesem Fall überwiegt der Einfluss von $T_2$ und man erhält für beide Schaltungen $(\omega_{-3dB})^{-1} \approx T_2|A_0| \approx C_L R_C' \approx 1\,\mu s$.

#### 2.4.1.8.4 Emitterschaltung mit Spannungsgegenkopplung

Abbildung 2.89 zeigt das Kleinsignalersatzschaltbild der Emitterschaltung mit Spannungsgegenkopplung; dabei gilt wie bisher $R_C' = r_{CE} \parallel R_C \parallel R_L$. Die Berechnung von $A_B(s)$ ist aufwendig. Man kann jedoch die Ergebnisse der Emitterschaltung verwenden, wenn man, wie in Abb. 2.89 gezeigt, den Basisbahnwiderstand $R_B$ vernachlässigt, d.h. kurzschließt, und in (2.99) für $C_C$ die Parallelschaltung aus $C_C$ und $R_2$ und für $R_g'$ den Widerstand $R_1' = R_1 + R_g$ einsetzt. Mit $R_1', R_2, R_C' \gg 1/S$ und $r_{BE} \gg R_1'$ erhält man eine für die Praxis ausreichend genaue Näherung:

$$
A_0 \approx - \frac{R_2}{R_1' + \frac{R_2}{S R_C'}} \;\;\overset{S R_C' R_1' \gg R_2}{\approx}\;\; -\frac{R_2}{R_1'}
$$

(2.115)

$$
A_B(s) \approx \frac{A_0}{1 + s\left(\frac{C_E}{S}\left(1 + \frac{R_2}{R_C'}\right) + C_C R_2\right) + s^2 \frac{C_E C_C R_2}{S}}
$$

(2.116)

Obwohl die beiden Pole nicht so weit auseinanderliegen wie bei der Emitterschaltung ohne Gegenkopplung und der Emitterschaltung mit Stromgegenkopplung, kann man die obere Grenzfrequenz durch Vernachlässigen des $s^2$-Terms im Nenner von $A_B(s)$ ausreichend genau abschätzen:

$$
\omega_{-3dB} = 2\pi f_{-3dB} \approx \frac{1}{\frac{C_E}{S}\left(1 + \frac{R_2}{R_C'}\right) + C_C R_2}
$$

(2.117)

Sie hängt von $A_0$ ab. Geht man von $A_0 \approx -R_2/R_1'$ aus und nimmt an, dass eine Änderung von $A_0$ durch eine Änderung von $R_2$ erfolgt und $R_1'$ konstant bleibt, erhält man eine einfache explizite Darstellung mit zwei von $A_0$ unabhängigen Zeitkonstanten:

$$
\omega_{-3dB}(A_0) \approx \frac{1}{T_1 + T_2 |A_0|}
$$

(2.118)

$$
T_1 = \frac{C_E}{S}
$$

(2.119)

$$
T_2 = \left(\frac{C_E}{S R_C'} + C_C\right) R_1'
$$

(2.120)

Den Einfluss einer Lastkapazität kann man entsprechend der Vorgehensweise bei der Emitterschaltung ohne Gegenkopplung durch den Übergang $R_C' \rightarrow Z_C(s)$ nach (2.108) ermitteln; es folgt:

$$
T_1 = \frac{C_E + C_L}{S}
$$

(2.121)
<!-- page-import:0172:end -->

<!-- page-import:0173:start -->
136 2. Bipolartransistor

**Abb. 2.89.** Dynamisches Kleinsignalersatzschaltbild der Emitterschaltung mit Spannungsgegenkopplung

$$
T_2=\left(\frac{C_E}{S R_C'}+C_C\right)R_1'+\frac{C_L}{S}
$$

(2.122)

Bei starker Spannungsgegenkopplung können die Pole von $A_B(s)$ auch konjugiert komplex sein; in diesem Fall kann die obere Grenzfrequenz durch (2.118)–(2.122) nur sehr grob abgeschätzt werden.

Auch die Emitterschaltung mit Spannungsgegenkopplung kann näherungsweise durch das Ersatzschaltbild nach Abb. 2.87 beschrieben werden. Die Kapazitäten $C_e$ und $C_a$ erhält man aus der Bedingung, dass eine Berechnung von $A_B(s)$ auf (2.116) führen muss, wenn man die $s^2$-Terme im Nenner streicht:

$$
C_e=0
$$

$$
C_a \approx \left(C_E\left(\frac{1}{R_2}+\frac{1}{R_C'}\right)+C_C S\right)\left(R_1' \parallel R_2 \parallel r_{BE}\right)
$$

Die Eingangsimpedanz ist demnach rein ohmsch $^{23}$. $A$, $r_e$ und $r_a$ sind durch (2.91)–(2.93) gegeben.

*Beispiel:* Für das Zahlenbeispiel zur Emitterschaltung mit Spannungsgegenkopplung nach Abb. 2.68a wurde $I_{C,A}=2{,}24\,\mathrm{mA}$ gewählt. Mit $\beta=400$, $C_{obo}=3{,}5\,\mathrm{pF}$ und $f_T=160\,\mathrm{MHz}$ erhält man aus Abb. 2.45 auf Seite 86 die Kleinsignalparameter $S=86\,\mathrm{mS}$, $r_{BE}=4{,}6\,\mathrm{k}\Omega$, $C_C=3{,}5\,\mathrm{pF}$ und $C_E=82\,\mathrm{pF}$; $r_{CE}$ wird vernachlässigt. Mit $R_C=R_1=1\,\mathrm{k}\Omega$, $R_2=2\,\mathrm{k}\Omega$, $R_L \to \infty$ und $R_g=0$ erhält man aus (2.115) $A_0 \approx -1{,}96$, aus (2.119) $T_1 \approx 0{,}95\,\mathrm{ns}$, aus (2.120) $T_2 \approx 4{,}45\,\mathrm{ns}$, aus (2.118) $f_{-3dB} \approx 16\,\mathrm{MHz}$ und aus (2.107) $GBW \approx 36\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L=1\,\mathrm{nF}$ folgt aus (2.121) $T_1 \approx 12{,}6\,\mathrm{ns}$, aus (2.122) $T_2 \approx 16{,}1\,\mathrm{ns}$, aus (2.118) $f_{-3dB} \approx 3{,}6\,\mathrm{MHz}$ und aus (2.107) $GBW \approx 9{,}9\,\mathrm{MHz}$.

Ein Vergleich mit dem Beispiel zur Emitterschaltung mit Stromgegenkopplung auf Seite 134 zeigt, dass man ohne Lastkapazität für beide Schaltungen etwa dieselbe obere Grenzfrequenz erhält. Mit einer Lastkapazität $C_L=1\,\mathrm{nF}$ erreicht die Emitterschaltung mit Spannungsgegenkopplung eine etwa 20fach höhere obere Grenzfrequenz; Ursache hierfür ist der wesentlich niedrigere Ausgangswiderstand $r_a$. Deshalb ist die Spannungsgegenkopplung bei großen Lastkapazitäten der Stromgegenkopplung vorzuziehen.

## 2.4.1.9 Zusammenfassung

Die Emitterschaltung kann ohne Gegenkopplung, mit Stromgegenkopplung oder mit Spannungsgegenkopplung betrieben werden. Abbildung 2.90 zeigt die drei Varianten; Abb. 2.91 fasst die wichtigsten Kenngrößen zusammen.

$^{23}$ In praktisch ausgeführten Schaltungen tritt eine durch den Aufbau bedingte parasitäre Streukapazität von einigen pF auf.
<!-- page-import:0173:end -->

<!-- page-import:0174:start -->
2.4 Grundschaltungen 137

a ohne Gegenkopplung

b mit Stromgegenkopplung

c mit Spannungsgegenkopplung

**Abb. 2.90.** Varianten der Emitterschaltung

Die Verstärkung der Emitterschaltung ohne Gegenkopplung ist stark vom Arbeitspunkt abhängig; deshalb ist eine genaue und temperaturstabile Einstellung des Arbeitspunkts besonders wichtig. Die starke Arbeitspunktabhängigkeit hat darüber hinaus starke nichtlineare Verzerrungen zur Folge, da die Schaltung bereits durch eine sehr kleine Aussteuerung um den Arbeitspunkt in Bereiche mit abweichender Verstärkung gerät. Bei den

| Parameter | ohne Gegenkopplung Abb. 2.90a | mit Stromgegenkopplung Abb. 2.90b | mit Spannungsgegenkopplung Abb. 2.90c |
|---|---|---|---|
| $A$ | $-SR_C$ | $-\dfrac{R_C}{R_E}$ | $-\dfrac{R_2}{R_1}$ |
| $r_e$ | $r_{BE}$ | $r_{BE}+\beta R_E$ | $R_1$ |
| $r_a$ | $R_C$ | $R_C$ | $R_C\parallel\left(\dfrac{1}{S}\left(1+\dfrac{R_2}{R_1}\right)+\dfrac{R_2}{\beta}\right)$ |
| $k$ | $\dfrac{\hat{u}_e}{4U_T}$ | $\dfrac{\hat{u}_e}{4U_T\left(1+SR_E\right)^2}$ | $\dfrac{\hat{u}_eR_2\left(R_1+R_2\right)}{4U_T\left(SR_1\left(R_2\parallel R_C\right)\right)^2}$ |
| $GBW$ | $\dfrac{1}{2\pi C_C\left(R_g'+\dfrac{1}{S}\right)}$ | $\dfrac{1}{2\pi C_C\left(R_g'+\dfrac{1}{S'}\right)}$ | $\dfrac{1}{2\pi\left(\dfrac{C_E}{SR_C'}+C_C\right)R_1'}$ |

mit $R_g' = R_g + R_B$

mit $R_g' = R_g + R_B$  
und $S'$ nach (2.113)

mit $R_1' = R_1 + R_g$  
und $R_C' = R_C\parallel R_L$

$A$ : Kleinsignal-Spannungsverstärkung im Leerlauf  
$r_e$ : Kleinsignal-Eingangswiderstand  
$r_a$ : Kleinsignal-Ausgangswiderstand  
$k$ : Klirrfaktor bei kleiner Aussteuerung  
$GBW$ : Verstärkungs-Bandbreite-Produkt ohne Lastkapazität

**Abb. 2.91.** Kenngrößen der Emitterschaltung
<!-- page-import:0174:end -->

<!-- page-import:0175:start -->
138  2. Bipolartransistor

a Schaltung,  
b Ersatzschaltbild

**Abb. 2.92.** Kollektorschaltung

Varianten mit Gegenkopplung wird die Verstärkung in erster Näherung durch zwei Widerstände bestimmt und hängt deshalb praktisch nicht vom Arbeitspunkt des Transistors ab; die Arbeitspunkteinstellung ist weniger aufwendig und die Verzerrungen sind bei gleicher Aussteuerung geringer. Allerdings kann man beim Einsatz einer wirksamen Gegenkopplung nur eine deutlich geringere Verstärkung erzielen.

Bei gleichem Kollektorstrom hat die Emitterschaltung mit Stromgegenkopplung den größten Eingangswiderstand, belastet also die Signalquelle am wenigsten; es folgen die Emitterschaltung ohne Gegenkopplung und die Emitterschaltung mit Spannungsgegenkopplung. Der Ausgangswiderstand ist bei der Emitterschaltung mit Spannungsgegenkopplung wesentlich geringer als bei den anderen Varianten; bei niederohmigen und kapazitiven Lasten ist dies vorteilhaft.

Das Verstärkungs-Bandbreite-Produkt ist bei allen Varianten etwa gleich, wenn man $R_g' \gg 1/S$, $C_E \ll SR_C'C_C$ und $R_g' \approx R_i'$ annimmt. Es hängt aufgrund des Miller-Effekts maßgeblich von der Kollektor-Kapazität $C_C$ ab.

## 2.4.2 Kollektorschaltung

Abbildung 2.92a zeigt die Kollektorschaltung bestehend aus dem Transistor, dem Emitterwiderstand $R_E$, der Versorgungsspannungsquelle $U_b$ und der Signalspannungsquelle $U_g$ mit dem Innenwiderstand $R_g$. Für die folgende Untersuchung wird $U_b = 5\ \mathrm{V}$ und $R_E = R_g = 1\ \mathrm{k}\Omega$ angenommen.

### 2.4.2.1 Übertragungskennlinie der Kollektorschaltung

Misst man die Ausgangsspannung $U_a$ als Funktion der Signalspannung $U_g$, erhält man die in Abb. 2.93 gezeigte Übertragungskennlinie. Für $U_g < 0{,}5\ \mathrm{V}$ ist der Kollektorstrom vernachlässigbar klein und man erhält $U_a = 0\ \mathrm{V}$. Für $U_g \geq 0{,}5\ \mathrm{V}$ fließt ein mit $U_g$ zunehmender Kollektorstrom $I_C$, und die Ausgangsspannung folgt der Eingangsspannung im Abstand $U_{BE}$; deshalb wird die Kollektorschaltung auch als Emitterfolger bezeichnet. Der Transistor arbeitet dabei immer im Normalbetrieb.

Abbildung 2.92b zeigt das Ersatzschaltbild der Kollektorschaltung, bei dem für den Transistor das vereinfachte Transportmodell nach Abb. 2.27 mit

$$
I_C = B I_B = I_S e^{\frac{U_{BE}}{U_T}}
$$

angenommen wird.
<!-- page-import:0175:end -->

<!-- page-import:0176:start -->
2.4 Grundschaltungen 139

**Abb. 2.93.** Kennlinien der Kollektorschaltung

eingesetzt ist. Aus Abb. 2.92b folgt:

$$
U_a = (I_C + I_B + I_a)\,R_E \approx (I_C + I_a)\,R_E \overset{I_a=0}{=} I_C R_E
\qquad (2.123)
$$

$$
U_e = U_a + U_{BE}
\qquad (2.124)
$$

$$
U_e = U_g - I_B R_g = U_g - \frac{I_C R_g}{B} \approx U_g
\qquad (2.125)
$$

In (2.125) wird angenommen, dass der Spannungsabfall an $R_g$ vernachlässigt werden kann, wenn $B$ ausreichend groß und $R_g$ ausreichend klein ist; in (2.123) wird der Basisstrom $I_B$ vernachlässigt.

Für $U_e > 1\,\mathrm{V}$ erhält man aus (2.124) mit $U_{BE} \approx 0{,}7\,\mathrm{V}$ die Näherung:

$$
U_a \approx U_e - 0{,}7\,\mathrm{V}
\qquad (2.126)
$$

Wegen der nahezu linearen Kennlinie kann der Arbeitspunkt in einem weiten Bereich gewählt werden. Nimmt man $B = \beta = 400$ und $I_S = 7\,\mathrm{fA}$ $^{24}$ an, erhält man für den in Abb. 2.93 beispielhaft eingezeichneten Arbeitspunkt mit $U_b = 5\,\mathrm{V}$, $R_E = R_g = 1\,\mathrm{k}\Omega$ und $I_a = 0$:

$$
U_a = 2\,\mathrm{V}
\Rightarrow
I_C \approx \frac{U_a}{R_E} = 2\,\mathrm{mA}
\Rightarrow
I_B = \frac{I_C}{B} = 5\,\mu\mathrm{A}
$$

$$
\Rightarrow\ 
U_e = U_a + U_{BE} = U_a + U_T \ln \frac{I_C}{I_S} = 2{,}685\,\mathrm{V}
$$

$$
\Rightarrow\ 
U_g = U_e + I_B R_g = 2{,}69\,\mathrm{V}
$$

Der Spannungsabfall an $R_g$ beträgt in diesem Fall nur $5\,\mathrm{mV}$ und kann vernachlässigt werden; in Abb. 2.93 gilt deshalb $U_e \approx U_g$.

Betreibt man die Kollektorschaltung mit einer zusätzlichen negativen Versorgungsspannung $-U_b$ und einer vom Ausgang nach Masse angeschlossenen Last $R_L$, siehe

---

$^{24}$ Typische Werte für einen npn-Kleinleistungstransistor BC547B.
<!-- page-import:0176:end -->

<!-- page-import:0177:start -->
140 2. Bipolartransistor

**Abb. 2.94.** Kennlinien der Kollektorschaltung mit zusätzlicher negativer Versorgungsspannung und Last $R_L$

Abb. 2.94. kann man auch negative Ausgangsspannungen erzeugen. Die Übertragungskennlinie hängt in diesem Fall vom Verhältnis der Widerstände $R_E$ und $R_L$ ab, da die minimale Ausgangsspannung $U_{a,min}$ durch den Spannungsteiler aus $R_L$ und $R_E$ vorgegeben ist:

$$
U_{a,min}=-\frac{U_bR_L}{R_E+R_L}
$$

Einen großen Aussteuerungsbereich erhält man demnach nur dann, wenn $|U_{a,min}|$ groß ist; dazu muss man $R_L > R_E$ wählen. Für $U_g < U_{a,min}$ arbeitet der Transistor wegen $U_{BE} < 0$ im Sperrbetrieb und es gilt $U_a = U_{a,min}$. Für $U_g \geq U_{a,min}$ liegt Normalbetrieb vor und die Kennlinie verläuft entsprechend Abb. 2.93. Die Versorgungsspannungen sind hier symmetrisch, d.h. die positive und die negative Versorgungsspannung sind betragsmäßig gleich. Dieser Fall ist typisch für die Praxis, im allgemeinen kann die negative Versorgungsspannung jedoch unabhängig von der positiven gewählt werden.

### 2.4.2.2 Kleinsignalverhalten der Kollektorschaltung

Das Verhalten bei Aussteuerung um einen Arbeitspunkt $A$ wird als *Kleinsignalverhalten* bezeichnet. Der Arbeitspunkt ist durch die Arbeitspunktgrößen $U_{e,A}$, $U_{a,A}$, $I_{e,A}=I_{B,A}$ und $I_{C,A}$ gegeben; als Beispiel wird der oben ermittelte Arbeitspunkt mit $U_{e,A}=2{,}69\,\mathrm{V}$, $U_{a,A}=2\,\mathrm{V}$, $I_{B,A}=5\,\mu\mathrm{A}$ und $I_{C,A}=2\,\mathrm{mA}$ verwendet.

Die *Spannungsverstärkung* entspricht der Steigung der Übertragungskennlinie. Da die Ausgangsspannung der Eingangsspannung folgt, erhält man durch Differentiation von (2.126) erwartungsgemäß die Näherung:
<!-- page-import:0177:end -->

<!-- page-import:0178:start -->
## 2.4 Grundschaltungen

141

**Abb. 2.95.** Kleinsignalersatzschaltbild der Kollektorschaltung

$$
A \;=\; \left.\frac{\partial U_a}{\partial U_e}\right|_{A} \approx 1
$$

Die genauere Berechnung von $A$ erfolgt mit Hilfe des in Abb. 2.95 gezeigten Kleinsignalersatzschaltbilds. Aus der Knotengleichung

$$
\frac{u_e-u_a}{r_{BE}} + Su_{BE} \;=\; \left(\frac{1}{R_E}+\frac{1}{r_{CE}}\right)u_a
$$

erhält man mit $u_{BE}=u_e-u_a$ und $R'_E = R_E \parallel r_{CE}$:

$$
A \;=\; \left.\frac{u_a}{u_e}\right|_{i_a=0}
\;=\;
\frac{\left(1+\frac{1}{\beta}\right)SR'_E}{\left(1+\frac{1}{\beta}\right)SR'_E+1}
$$

$$
\overset{r_{CE}\gg R_E}{\underset{\beta\gg 1}{\approx}}
\frac{SR_E}{SR_E+1}
\overset{SR_E\gg 1}{\approx} 1
$$

Mit $S = I_{C,A}/U_T = 77\,\mathrm{mS}$, $\beta = 400$, $R_E = 1\,\mathrm{k}\Omega$ und $r_{CE} = U_A/I_{C,A} = 50\,\mathrm{k}\Omega$ folgt für den beispielhaft gewählten Arbeitspunkt exakt und in erster Näherung $A = 0{,}987$.

Für den *Eingangswiderstand* erhält man:

$$
r_e \;=\; \left.\frac{u_e}{i_e}\right|_{i_a=0}
\;=\;
r_{BE} + (1+\beta)\,R'_E
\overset{r_{CE}\gg R_E}{\underset{\beta\gg 1}{\approx}}
r_{BE} + \beta R_E
\overset{SR_E\gg 1}{\approx}
\beta R_E
$$

Er hängt vom Lastwiderstand ab, wobei hier wegen $i_a = 0$ ($R_L \to \infty$) der Leerlaufeingangswiderstand gegeben ist. Der Eingangswiderstand für andere Werte von $R_L$ wird berechnet, indem man für $R_E$ die Parallelschaltung von $R_E$ und $R_L$ einsetzt, siehe Abb. 2.95; er hängt demnach für den in der Praxis häufigen Fall $R_L < R_E$ maßgeblich von $R_L$ ab. Mit $r_{BE} = \beta/S$ und $R_L \to \infty$ folgt für den beispielhaft gewählten Arbeitspunkt exakt $r_e = 398\,\mathrm{k}\Omega$; die erste Näherung liefert $r_e = 405\,\mathrm{k}\Omega$, die zweite $r_e = 400\,\mathrm{k}\Omega$.

Für den *Ausgangswiderstand* erhält man:

$$
r_a \;=\; \frac{u_a}{i_a}
\;=\;
R'_E \parallel \frac{R_g + r_{BE}}{1+\beta}
\overset{r_{CE}\gg R_E}{\underset{\beta\gg 1}{\approx}}
R_E \parallel \left(\frac{R_g}{\beta} + \frac{1}{S}\right)
$$

Er hängt vom Innenwiderstand $R_g$ des Signalgenerators ab; drei Bereiche lassen sich unterscheiden:
<!-- page-import:0178:end -->

<!-- page-import:0179:start -->
142  2. Bipolartransistor

Abb. 2.96. Verlauf des Kleinsignal-Ausgangswiderstands $r_a$ der Kollektorschaltung in Abhängigkeit vom Innenwiderstand $R_g$ des Signalgenerators

$$
r_a \approx
\begin{cases}
\frac{1}{S} & \text{für } R_g < r_{BE} = \frac{\beta}{S} \\
\frac{R_g}{\beta} & \text{für } r_{BE} < R_g < \beta R_E \\
R_E & \text{für } R_g > \beta R_E
\end{cases}
$$

Abbildung 2.96 zeigt den Verlauf von $r_a$ in Abhängigkeit von $R_g$. Für $R_g < r_{BE}$ und $R_g > \beta R_E$ ist der Ausgangswiderstand konstant, d.h. nicht von $R_g$ abhängig. Dazwischen liegt ein Bereich, in dem eine Transformation des Innenwiderstands $R_g$ auf $r_a \approx R_g/\beta$ stattfindet. Wegen dieser Eigenschaft wird die Kollektorschaltung auch als Impedanzwandler bezeichnet. Man kann eine Signalquelle mit einer nachfolgenden, im Transformationsbereich arbeitenden Kollektorschaltung durch eine äquivalente Signalquelle beschreiben, siehe Abb. 2.97; dabei gilt für die Arbeitspunktspannung der äquivalenten Signalquelle nach (2.126) $U'_{g,A} \approx U_{g,A} - 0{,}7\,\mathrm{V}$, die Kleinsignalspannung $u_g$ bleibt wegen $A \approx 1$ praktisch unverändert und der Innenwiderstand wird auf $R_g/\beta$ herabgesetzt. Für den beispielhaft gewählten Arbeitspunkt erhält man exakt $r_a = 15{,}2\,\Omega$; die Näherung liefert $r_a = 15{,}3\,\Omega$. Aus der bereichsweisen Darstellung folgt mit $R_g = 1\,\mathrm{k}\Omega < r_{BE} = 5{,}2\,\mathrm{k}\Omega$ die Näherung $r_a \approx 1/S = 13\,\Omega$, d.h die Schaltung arbeitet nicht im Transformationsbereich.

Mit $r_{CE} \gg R_E$, $\beta \gg 1$ und ohne Lastwiderstand $R_L$ erhält man für die Kollektorschaltung:

*Kollektorschaltung*

$$
A = \left.\frac{u_a}{u_e}\right|_{i_a=0} \approx \frac{S R_E}{1 + S R_E} \approx_{S R_E \gg 1} 1
\qquad (2.127)
$$

$$
r_e = \left.\frac{u_e}{i_e}\right|_{i_a=0} \approx r_{BE} + \beta R_E \approx_{S R_E \gg 1} \beta R_E
\qquad (2.128)
$$

$$
r_a = \frac{u_a}{i_a} \approx R_E \parallel \left(\frac{R_g}{\beta} + \frac{1}{S}\right)
\qquad (2.129)
$$
<!-- page-import:0179:end -->

<!-- page-import:0180:start -->
2.4 Grundschaltungen 143

a Schaltung mit Signalquelle

b äquivalente Signalquelle

**Abb. 2.97.** Kollektorschaltung als Impedanzwandler

Um den Einfluss eines Lastwiderstands $R_L$ zu berücksichtigen, muss man in (2.127) und (2.128) anstelle von $R_E$ die Parallelschaltung von $R_E$ und $R_L$ einsetzen, siehe Abb. 2.95. Mit $R_g < \beta (R_E \parallel R_L)$ und $S(R_E \parallel R_L) \gg 1$ erhält man:

$$
A \approx 1 \, , \quad r_e \approx \beta (R_E \parallel R_L) \, , \quad r_a \approx \frac{R_g}{\beta} + \frac{1}{S}
$$

(2.130)

Abbildung 2.98 zeigt das zugehörige Ersatzschaltbild mit Signalgenerator und Last. Man erkennt, dass bei der Kollektorschaltung eine starke Verkoppelung zwischen Eingang und Ausgang vorliegt, da hier, im Gegensatz zur Emitterschaltung, der Eingangswiderstand $r_e$ von der Last $R_L$ am Ausgang und der Ausgangswiderstand $r_a$ vom Innenwiderstand $R_g$ des Signalgenerators am Eingang abhängt.

Mit Hilfe von Abb. 2.98 kann man die Betriebsverstärkung berechnen:

$$
A_B = \frac{u_a}{u_g} = \frac{r_e}{r_e + R_g}\,\frac{R_L}{R_L + r_a}
$$

In den meisten Fällen gilt $r_e \gg R_g$ und $R_L \gg r_a$; daraus folgt $A_B \approx 1$.

### 2.4.2.3 Nichtlinearität

Der Klirrfaktor der Kollektorschaltung kann durch eine Reihenentwicklung der Kennlinie im Arbeitspunkt näherungsweise bestimmt werden. Aus (2.123) und (2.124) folgt mit $I_a = 0$, d.h. $R_L \to \infty$:

$$
U_e = U_a + U_{BE} = I_C R_E + U_T \ln \frac{I_C}{I_S}
$$

**Abb. 2.98.** Ersatzschaltbild mit den Ersatzgrößen $r_e$ und $r_a$
<!-- page-import:0180:end -->

<!-- page-import:0181:start -->
144  2. Bipolartransistor

Für die Emitterschaltung mit Stromgegenkopplung erhält man dieselbe Gleichung; deshalb gilt (2.87) auch für die Kollektorschaltung. Mit einem parallel zu $R_E$ liegenden Lastwiderstand $R_L$ folgt aus (2.87):

$$
k \approx \frac{u_{a,2\omega t}}{u_{a,\omega t}} \approx \frac{\hat{u}_e}{4U_T\left(1 + S\,(R_E \parallel R_L)\right)^2}
$$

(2.131)

Ist ein Maximalwert für $k$ vorgegeben, muss $\hat{u}_e < 4kU_T\left(1 + S\,(R_E \parallel R_L)\right)^2$ gelten. In den meisten Anwendungsfällen gilt $1/S \ll R_L \ll R_E$; man kann dann die Näherung

$$
k \approx \frac{\hat{u}_e}{4U_T S^2 R_L^2}
$$

(2.132)

verwenden. Der Klirrfaktor ist in diesem Fall umgekehrt proportional zum Quadrat des Lastwiderstands, nimmt also mit abnehmendem $R_L$ stark zu. Er kann nur durch eine größere Steilheit $S$ kleiner gemacht werden; dazu muss der Arbeitspunktstrom $I_{C,A} = S\,U_T$ entsprechend erhöht werden. Mit $R_L \rightarrow \infty$ folgt für das Zahlenbeispiel $\hat{u}_e < k \cdot 631$ V. Nimmt man dagegen $R_L = 100\,\Omega$ an, erhält man die wesentlich strengere Forderung $\hat{u}_e < k \cdot 6{,}7$ V; aus (2.132) folgt in diesem Fall $\hat{u}_e < k \cdot 6{,}2$ V.

## 2.4.2.4 Temperaturabhängigkeit

Nach Gl. (2.21) nimmt die Basis-Emitter-Spannung $U_{BE}$ bei konstantem Kollektorstrom $I_C$ mit $1{,}7\,\mathrm{mV/K}$ ab. Da bei der Kollektorschaltung die Differenz zwischen Ein- und Ausgangsspannung gerade $U_{BE}$ ist, siehe (2.124), folgt für die Temperaturdrift der Ausgangsspannung bei konstanter Eingangsspannung:

$$
\frac{dU_a}{dT} = -\frac{dU_{BE}}{dT} \approx 1{,}7\,\mathrm{mV/K}
$$

Dasselbe Ergebnis erhält man mit Hilfe der für die Emitterschaltung gültigen Gl. (2.77), wenn man berücksichtigt, dass für die Kollektorschaltung $A \approx 1$ gilt.

## 2.4.2.5 Arbeitspunkteinstellung

Bei der Kollektorschaltung ist die Einstellung eines stabilen Arbeitspunkts für den Kleinsignalbetrieb einfacher als bei der Emitterschaltung, weil die Kennlinie über einen wesentlich größeren Bereich linear ist und deshalb kleine Abweichungen vom gewünschten Arbeitspunkt praktisch keine Auswirkung auf das Kleinsignalverhalten haben$^{25}$. Die Temperaturabhängigkeit und die fertigungsbedingten Streuungen der Stromverstärkung $B$ und des Sättigungssperrstroms $I_S$ des Transistors$^{26}$ wirken sich nur wenig aus, da bei vorgegebenem Kollektorstrom $I_{C,A}$ im Arbeitspunkt der von $B$ abhängige Basisstrom $I_{B,A}$ meist vernachlässigbar klein ist und die Basis-Emitter-Spannung $U_{BE,A}$ nur logarithmisch von $I_S$ abhängt.

Bei der Arbeitspunkteinstellung unterscheidet man zwischen *Wechselspannungskopplung* und *Gleichspannungskopplung*. Zusätzlich zur reinen Wechsel- bzw. Gleichspannungskopplung wird bei der Kollektorschaltung in vielen Fällen eine Gleichspannungskopplung am Eingang mit einer Wechselspannungskopplung am Ausgang kombiniert.

25 Man vergleiche hierzu Abb. 2.93 auf Seite 139 und Abb. 2.60 auf Seite 103.  
26 Werte für die Temperaturabhängigkeit und die Streuung sind auf Seite 121 angegeben.
<!-- page-import:0181:end -->

<!-- page-import:0182:start -->
2.4 Grundschaltungen 145

a Wechselspannungskopplung

b Gleichspannungskopplung am Eingang

**Abb. 2.99.** Arbeitspunkteinstellung

##### 2.4.2.5.1 Arbeitspunkteinstellung bei Wechselspannungskopplung

Abbildung 2.99a zeigt die Wechselspannungskopplung. Die Signalquelle und die Last werden über Koppelkondensatoren angeschlossen und man kann die Arbeitspunktspannungen unabhängig von den Gleichspannungen der Signalquelle und der Last wählen; die weiteren Eigenschaften werden auf Seite 121 beschrieben. Die im Arbeitspunkt an der Basis des Transistors erforderliche Spannung

$$
U_{B,A} = (I_{C,A} + I_{B,A})\,R_E + U_{BE,A} \approx I_{C,A}R_E + 0{,}7\,\mathrm{V}
$$

wird mit $R_1$ und $R_2$ eingestellt; dabei wird der Querstrom durch die Widerstände deutlich größer als der Basisstrom $I_{B,A}$ gewählt, damit der Arbeitspunkt nicht von $I_{B,A}$ abhängt.

In der Praxis wird die reine Wechselspannungskopplung nur selten verwendet, da in den meisten Fällen mindestens am Eingang eine Gleichspannungskopplung möglich ist; dadurch können die Widerstände $R_1$ und $R_2$ und der Koppelkondensator $C_e$ entfallen.

##### 2.4.2.5.2 Arbeitspunkteinstellung bei Gleichspannungskopplung am Eingang

Abbildung 2.99b zeigt die Kollektorschaltung mit Gleichspannungskopplung am Eingang und Gleich- oder Wechselspannungskopplung am Ausgang. Die Eingangsspannung $U_{e,A}$ an der Basis des Transistors ist durch die Ausgangsspannung der Signalquelle vorgegeben, wenn man davon ausgeht, dass der durch den Basisstrom $I_{B,A}$ am Innenwiderstand der Signalquelle erzeugte Spannungsabfall $I_{B,A}R_g$ vernachlässigt werden kann. Der Kollektorstrom im Arbeitspunkt kann bei Wechselspannungskopplung am Ausgang mit einem Widerstand $R_E$ gemäß

$$
I_{C,A} \approx \frac{U_{e,A} - U_{BE,A}}{R_E} \approx \frac{U_{e,A} - 0{,}7\,\mathrm{V}}{R_E}
$$

(2.133)

oder mit einer Stromquelle eingestellt werden; Abb. 2.99b zeigt beide Möglichkeiten. Bei Verwendung einer Stromquelle gilt $I_{C,A} \approx I_K$; ferner muss bei der Kleinsignalrechnung anstelle des Widerstands $R_E$ der Innenwiderstand $r_K$ der Stromquelle eingesetzt werden. Bei Gleichspannungskopplung am Ausgang muss zusätzlich der durch die Last fließende Ausgangsstrom $I_{a,A}$ berücksichtigt werden.

*Beispiel:* In dem Beispiel auf Seite 125 wird eine Emitterschaltung für eine Last $R_L = 10\,\mathrm{k}\Omega$ dimensioniert, siehe Abb. 2.82 auf Seite 127. Die Schaltung soll nun mit einer Last $R_L = 1\,\mathrm{k}\Omega$ betrieben werden. Da der Ausgangswiderstand $r_a \approx R_C = 6{,}8\,\mathrm{k}\Omega$ größer
<!-- page-import:0182:end -->

<!-- page-import:0183:start -->
146 2. Bipolartransistor

**Abb. 2.100.** Dimensioniertes Beispiel einer Kollektorschaltung ($T_2$) als Impedanzwandler für eine Emitterschaltung ($T_1$)

ist als $R_L$, führt ein Anschließen von $R_L$ direkt am Ausgang der Emitterschaltung zu einer erheblichen Reduktion der Betriebsverstärkung $A_B$. Deshalb soll am Ausgang eine Kollektorschaltung ergänzt werden, die aufgrund ihrer Wirkung als Impedanzwandler den Ausgangswiderstand und damit die Reduktion von $A_B$ stark verringert, siehe Abb. 2.100. Die Amplitude am Eingang der Kollektorschaltung beträgt $\hat{u}_e = 200\,\mathrm{mV}$ entsprechend der Amplitude am Ausgang der Emitterschaltung. Letztere ist auf einen Klirrfaktor $k < 1\%$ ausgelegt. Damit der Klirrfaktor durch die zusätzliche Kollektorschaltung nur wenig zunimmt, wird für diese $k < 0{,}2\%$ gefordert: Damit folgt aus (2.132) $S > 31\,\mathrm{mS}$ bzw. $I_{C,A} > 0{,}81\,\mathrm{mA}$; gewählt wird $I_{C,A} = 1\,\mathrm{mA}$. Nimmt man für den Transistor $T_2$ $B \approx \beta \approx 400$ und $I_S \approx 7\,\mathrm{fA}$ an, folgt $U_{BE,A} \approx 0{,}67\,\mathrm{V}$, $I_{B,A} = 2{,}5\,\mu\mathrm{A}$, $S \approx 38{,}5\,\mathrm{mS}$ und $r_{BE} \approx 10{,}4\,\mathrm{k}\Omega$. Die Eingangsgleichspannung $U_{e,A}$ kann aus dem Spannungsabfall an $R_C$ bestimmt werden, siehe Abb. 2.100:

$$
U_{e,A} = U_b - (I_{C,A(T1)} + I_{B,A})\,R_C \approx U_b - I_{C,A(T1)}R_C \approx 8{,}26\,\mathrm{V}
$$

Damit folgt aus (2.133) $R_E \approx 7{,}59\,\mathrm{k}\Omega \rightarrow 7{,}5\,\mathrm{k}\Omega$ $^{27}$. Durch $I_{B,A}$ wird am Innenwiderstand $R_g \approx R_C$ der Signalquelle nur ein vernachlässigbar kleiner Spannungsabfall $I_{B,A}R_C \approx 17\,\mathrm{mV}$ erzeugt. Für die Elemente des Ersatzschaltbilds nach Abb. 2.98 erhält man mit $R_g \approx R_C$ aus (2.130) $r_e \approx 353\,\mathrm{k}\Omega$ und $r_a \approx 43\,\Omega$. Abschließend ist der durch den Kondensator $C_a$ am Ausgang verursachte Hochpass auf $f'_U = 11\,\mathrm{Hz}$ auszulegen:

$$
C_a = \frac{1}{2\pi f'_U\,(r_a + R_L)} = 13{,}9\,\mu\mathrm{F} \rightarrow 15\,\mu\mathrm{F}
$$

Eine Gleichspannungskopplung am Ausgang durch Kurzschließen von $C_a$ hat zur Folge, dass an $R_L$ eine Gleichspannung $U_{a,A} = U_{e,A} - U_{BE,A} \approx 7{,}5\,\mathrm{V}$ auftritt und ein Ausgangsstrom $I_{a,A} = -U_{a,A}/R_L \approx -7{,}5\,\mathrm{mA}$ fließt; $R_E$ kann in diesem Fall entfallen. Die Wahl des Arbeitspunkts ist wegen

$$
I_{C,A} = \frac{U_{a,A}}{R_E \parallel R_L} \approx \frac{U_{e,A} - 0{,}7\,\mathrm{V}}{R_E \parallel R_L} \geq 7{,}5\,\mathrm{mA}
$$

stark eingeschränkt.

27 Es wird auf Normwerte gerundet.
<!-- page-import:0183:end -->

<!-- page-import:0184:start -->
## 2.4 Grundschaltungen

147

*Abb. 2.101.* Dynamisches Kleinsignalersatzschaltbild der Kollektorschaltung

### 2.4.2.5.3 Einsatz von Wechsel- und Gleichspannungskopplung

Die wichtigsten Gesichtspunkte, die beim Einsatz der Wechsel- bzw. Gleichspannungskopplung zu berücksichtigen sind, werden auf Seite 127 bzw. 129 beschrieben. Ein Einsatz der Gleichspannungskopplung am Ausgang wird im allgemeinen dadurch erschwert, dass bei niederohmigen Lasten bereits bei kleinen Gleichspannungen am Ausgang relativ große Ausgangsgleichströme fließen.

### 2.4.2.6 Frequenzgang und obere Grenzfrequenz

Die Kleinsignalverstärkung $A$ und die Betriebsverstärkung $A_B$ nehmen bei höheren Frequenzen aufgrund der Transistorkapazitäten ab. Um eine Aussage über den Frequenzgang und die obere Grenzfrequenz zu bekommen, muss man bei der Berechnung das dynamische Kleinsignalmodell des Transistors verwenden; Abb. 2.101 zeigt das resultierende dynamische Kleinsignalersatzschaltbild der Kollektorschaltung. Für die *Betriebsverstärkung* $\underline{A}_B(s)=\underline{u}_a(s)/\underline{u}_g(s)$ erhält man mit $R'_g = R_g + R_B$ und $R'_L = R_L \parallel R_E \parallel r_{CE}$:

$$
\underline{A}_B(s)=\frac{1+\beta+sC_Er_{BE}}{1+\beta+\frac{r_{BE}+R'_g}{R'_L}+sc_1+s^2C_EC_CR'_gr_{BE}}
$$

$$
c_1=C_Er_{BE}+(C_E+C_C)\frac{r_{BE}R'_g}{R'_L}+C_CR'_g(1+\beta)
$$

Mit $\beta \gg 1$ folgt für die Niederfrequenzverstärkung

$$
A_0=\underline{A}_B(0)\approx \frac{1}{1+\frac{r_{BE}+R'_g}{\beta R'_L}}
\qquad\qquad (2.134)
$$

und daraus mit den zusätzlichen Näherungen $R'_L \gg 1/S$ und $R'_L \gg R'_g/\beta$ für den Frequenzgang:

$$
\underline{A}_B(s)\approx
\frac{A_0\left(1+s\frac{C_E}{S}\right)}
{1+s\left(\frac{C_E}{S}\left(1+\frac{R'_g}{R'_L}\right)+C_CR'_g\right)+s^2\frac{C_EC_CR'_g}{S}}
\qquad\qquad (2.135)
$$

Die beiden Pole sind reell und die Knickfrequenz der Nullstelle liegt wegen

$$
f_N=\frac{S}{2\pi C_E}>f_T
$$

oberhalb der Transitfrequenz $f_T$ des Transistors, wie ein Vergleich mit (2.45) zeigt.
<!-- page-import:0184:end -->

<!-- page-import:0185:start -->
148  2. Bipolartransistor

#### 2.4.2.6.1 Grenzfrequenz

Man kann den Frequenzgang näherungsweise durch einen Tiefpass 1. Grades beschreiben, indem man den $s^2$-Term im Nenner streicht und die Differenz der linearen Terme bildet:

$$
A_B(s)\approx \frac{A_0}{1+s\left(\frac{C_E}{S R'_L}+C_C\right)R'_g}
$$

Damit erhält man eine Näherung für die obere -3dB-Grenzfrequenz $f_{-3dB}$, bei der der Betrag der Verstärkung um 3 dB abgenommen hat:

$$
\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{\left(\frac{C_E}{S R'_L}+C_C\right)R'_g}
$$

(2.136)

Sie ist wegen $R'_g = R_g + R_B \approx R_g$ proportional zum Innenwiderstand $R_g$ des Signalgenerators. Die maximale obere Grenzfrequenz erhält man mit $R_g \to 0$ und $R'_L \to \infty$:

$$
\omega_{-3dB,max}\approx \frac{1}{C_C R_B}
$$

Sie ist im allgemeinen größer als die Transitfrequenz $f_T$ des Transistors.

Besitzt die Last neben dem ohmschen auch einen kapazitiven Anteil, d.h. tritt parallel zum Lastwiderstand $R_L$ eine Lastkapazität $C_L$ auf, erhält man durch Einsetzen von

$$
Z_L(s)=R'_L \parallel \frac{1}{s C_L}=\frac{R'_L}{1+s C_L R'_L}
$$

anstelle von $R'_L$:

$$
A_B(s)\approx \frac{A_0\left(1+s\frac{C_E}{S}\right)}{1+s c_1+s^2 c_2}
$$

(2.137)

$$
c_1=\frac{C_E}{S}\left(1+\frac{R'_g}{R'_L}\right)+C_C R'_g+C_L\left(\frac{1}{S}+\frac{R'_g}{\beta}\right)
$$

$$
c_2=\left(C_C C_E+C_L(C_C+C_E)\right)\frac{R'_g}{S}
$$

Die Pole können in diesem Fall reell oder konjugiert komplex sein. Die Näherung durch einen Tiefpass 1. Grades liefert nur bei reellen Polen eine brauchbare Abschätzung für die obere Grenzfrequenz:

$$
\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{\left(\frac{C_E}{S R'_L}+C_C+\frac{C_L}{\beta}\right)R'_g+\frac{C_L}{S}}
$$

(2.138)

Bei konjugiert komplexen Polen muss man die Abschätzung

$$
\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{\sqrt{c_2}}
$$

(2.139)
<!-- page-import:0185:end -->

<!-- page-import:0186:start -->
2.4 Grundschaltungen 149

**Abb. 2.102.** Kleinsignalersatzschaltbild zur Berechnung des Bereichs konjugiert komplexer Pole: vollständig (oben) und nach Vereinfachung (unten)

verwenden.

Aus (2.137) folgt, dass die Kollektorschaltung immer stabil ist $^{28}$, d.h. bei konjugiert komplexen Polen tritt zwar eine Schwingung in der Sprungantwort auf, diese klingt jedoch ab. In der Praxis kann die Schaltung jedoch instabil werden; in diesem Fall tritt eine Dauerschwingung auf, die sich aufgrund von Übersteuerungseffekten auf einer bestimmten Amplitude stabilisiert und in ungünstigen Fällen zur Zerstörung des Transistors führen kann. Diese Instabilität wird durch Effekte 2. Ordnung verursacht, die durch das hier verwendete Kleinsignalersatzschaltbild des Transistors nicht erfasst werden $^{29}$.

#### 2.4.2.6.2 Bereich konjugiert komplexer Pole

Für die praktische Anwendung der Kollektorschaltung möchte man wissen, für welche Lastkapazitäten konjugiert komplexe Pole auftreten und durch welche schaltungstechnischen Maßnahmen dies verhindert werden kann. Betrachtet wird dazu das Kleinsignalersatzschaltbild nach Abb. 2.102, das aus Abb. 2.95 durch Ergänzen der Ausgangskapazität $C_g$ des Signalgenerators und der Lastkapazität $C_L$ hervorgeht; dabei kann man die RC-Glieder $R_g$-$C_g$ und $R_B$-$C_C$ wegen $R_g \gg R_B$ zu einem Glied mit $R_g' = R_g + R_B$ und $C_g' = C_g + C_C$ zusammenfassen. Führt man die Zeitkonstanten

$$
T_g = C_g' R_g' \;,\qquad T_L = C_L R_L' \;,\qquad T_E = \frac{C_E}{S} \approx \frac{1}{\omega_T}
\qquad (2.140)
$$

und die Widerstandsverhältnisse

$$
k_g = \frac{R_g'}{R_L'} \;,\qquad k_S = \frac{1}{S R_L'}
\qquad (2.141)
$$

ein und ersetzt $C_C$ durch $C_g'$, folgt aus (2.137):

---
$^{28}$ Eine Übertragungsfunktion 2. Grades mit positiven Koeffizienten im Nenner ist stabil.

$^{29}$ Aufgrund von Laufzeiten in der Basiszone des Transistors tritt eine zusätzliche Zeitkonstante auf; dieser Effekt kann im Kleinsignalersatzschaltbild des Transistors durch eine Induktivität in Reihe zum Basisbahnwiderstand $R_B$ nachgebildet werden. Man erhält dann eine Übertragungsfunktion 3. Grades, die bei kapazitiver Last instabil sein kann.
<!-- page-import:0186:end -->

<!-- page-import:0187:start -->
150  2. Bipolartransistor

Abb. 2.103. Bereich konjugiert komplexer Pole für $\beta = 50$ und $\beta = 500$

$$
c_1 = T_E(1 + k_g) + T_g + T_L \left(k_S + \frac{k_g}{\beta}\right)
\qquad\qquad (2.142)
$$

$$
c_2 = T_g T_E + T_g T_L k_S + T_L T_E k_g
$$

Damit kann man die Güte

$$
Q = \frac{\sqrt{c_2}}{c_1}
\qquad\qquad (2.143)
$$

angeben und über die Bedingung $Q > 0{,}5$ den Bereich konjugiert komplexer Pole bestimmen. Dieser Bereich ist in Abb. 2.103 für $\beta = 50$ und $\beta = 500$ als Funktion der normierten
<!-- page-import:0187:end -->

<!-- page-import:0188:start -->
2.4 Grundschaltungen 151

**Abb. 2.104.** Möglichkeiten zum Verlassen des Bereichs konjugiert komplexer Pole

*Signalquellen-Zeitkonstante* $T_g/T_E$ *und der normierten Last-Zeitkonstante* $T_L/T_E$ für verschiedene Werte von $k_g$ dargestellt; dabei wird $k_S = 0{,}01$ verwendet.

Abbildung 2.103 zeigt, dass bei sehr kleinen und sehr großen Lastkapazitäten $C_L$ ($T_L/T_E$ klein bzw. groß) und bei ausreichend großer Ausgangskapazität $C_g$ des Signalgenerators ($T_g/T_E$ groß) keine konjugiert komplexen Pole auftreten. Der Bereich konjugiert komplexer Pole hängt stark von $k_g$ ab. Die Bereiche für $k_g < 1$ liegen innerhalb des Bereichs für $k_g = 1$; für $k_g > \beta$ treten keine konjugiert komplexen Pole auf. Die Abhängigkeit von $k_S$ macht sich nur bei großen Lastkapazitäten ($T_L/T_E$ groß), hoher Stromverstärkung $\beta$ und kleinem Innenwiderstand $R_g$ des Signalgenerators bemerkbar; sie führt in Abb. 2.103 zu der Einbuchtung am rechten Rand des Bereichs für $\beta = 500$ und $k_g = 1$.

Sind $R_g$, $C_g$, $R_L$ und $C_L$ vorgegeben und liegen konjugiert komplexe Pole vor, gibt es vier verschiedene Möglichkeiten, aus diesem Bereich herauszukommen, siehe Abb. 2.104:

1. Man kann $T_g$ vergrößern und damit den Bereich konjugiert komplexer Pole *nach oben* verlassen. Dazu muss man einen zusätzlichen Kondensator vom Eingang der Kollektorschaltung nach Masse oder zu einer Versorgungsspannung einfügen; dieser liegt im Kleinsignalersatzschaltbild parallel zu $C_g$ und führt zu einer Zunahme von $T_g$. Von dieser Möglichkeit kann immer Gebrauch gemacht werden; sie wird deshalb in der Praxis häufig angewendet.

2. Liegt man in der Nähe des linken Rands des Bereichs, kann man $T_E$ vergrößern und damit den Bereich *nach links unten* verlassen. Dazu muss man einen *langsameren* Transistor mit größerer Zeitkonstante $T_E$, d.h. kleinerer Transitfrequenz $f_T$, einsetzen.

3. Liegt man in der Nähe des rechten Rands des Bereichs, kann man $T_E$ verkleinern und damit den Bereich *nach rechts oben* verlassen. Dazu muss man einen *schnelleren* Transistor mit kleinerer Zeitkonstante $T_E$, d.h. größerer Transitfrequenz $f_T$, einsetzen. Von dieser Möglichkeit wird z.B. bei Netzgeräten mit Längsregler Gebrauch gemacht, da dort aufgrund des Speicherkondensators am Ausgang eine hohe Lastkapazität vorliegt, die auf einen Punkt in der Nähe des rechten Rands führt; der Einsatz eines schnelleren Transistors führt in diesem Fall zu einer Verbesserung des Einschwingverhaltens.
<!-- page-import:0188:end -->

<!-- page-import:0189:start -->
152  2. Bipolartransistor

**Abb. 2.105.** Ersatzschaltbild mit den Ersatzgrößen $r_e$, $r_a$, $C_e$, $C_a$ und $L_a$

4. Liegt man in der Nähe des rechten Rands des Bereichs, kann man $T_L$ vergrößern und damit den Bereich *nach rechts* verlassen. Dazu muss man die Lastkapazität $C_L$ durch Parallelschalten eines zusätzlichen Kondensators vergrößern. Von dieser Möglichkeit wird ebenfalls bei Netzgeräten mit Längsregler Gebrauch gemacht; dabei wird der Speicherkondensator am Ausgang entsprechend vergrößert.

Eine fünfte Möglichkeit, das Verkleinern von $T_L$, wird in der Praxis nur selten angewendet, da dies bei vorgegebenen Werten für $R_L$ und $C_L$ nur durch Parallelschalten eines Widerstands erreicht werden kann, der den Ausgang zusätzlich belastet. Alle Möglichkeiten haben eine Abnahme der obere Grenzfrequenz zur Folge. Um diese Abnahme gering zu halten, muss man den Bereich konjugiert komplexer Pole *auf dem kürzesten Weg* verlassen.

#### 2.4.2.6.3 Ersatzschaltbild

Man kann die Kollektorschaltung näherungsweise durch das Ersatzschaltbild nach Abb. 2.105 beschreiben. Es folgt aus Abb. 2.98 durch Ergänzen der *Eingangskapazität* $C_e$, der *Ausgangskapazität* $C_a$ und der *Ausgangsinduktivität* $L_a$. Man erhält $C_e$, $C_a$ und $L_a$ aus der Bedingung, dass eine Berechnung von $A_B(s)$ auf (2.137) führen muss, wenn man beide Ausdrücke durch einen Tiefpass 1. Grades annähert. Zusammengefasst gilt für die Elemente des Ersatzschaltbilds:

$$
r_e = \beta R_L' + r_{BE} \quad,\qquad
C_e = \frac{C_E r_{BE} + C_L R_L'}{\beta R_L' + r_{BE}}
$$

$$
r_a = \frac{R_g'}{\beta} + \frac{1}{S} \quad,\qquad
C_a = \frac{\beta C_g' R_g'}{R_g' + r_{BE}}
$$

$$
L_a = \frac{C_E R_g'}{S}
$$

Man erkennt, dass neben den Widerständen $r_e$ und $r_a$ auch die Kapazitäten $C_e$ und $C_a$ und die Induktivität $L_a$ maßgeblich von der Signalquelle und der Last abhängen; Eingang und Ausgang sind demnach stark verkoppelt.

*Beispiel:* Für das Zahlenbeispiel nach Abb. 2.92a wurde $I_{C,A} = 2\,\mathrm{mA}$ gewählt. Mit $\beta = 400$, $U_A = 100\,\mathrm{V}$, $C_{obo} = 3{,}5\,\mathrm{pF}$ und $f_T = 160\,\mathrm{MHz}$ erhält man aus Abb. 2.45 auf Seite 86 die Kleinsignalparameter $S = 77\,\mathrm{mS}$, $r_{BE} = 5{,}2\,\mathrm{k}\Omega$, $r_{CE} = 50\,\mathrm{k}\Omega$, $C_C = 3{,}5\,\mathrm{pF}$ und $C_E = 73\,\mathrm{pF}$. Mit $R_g = R_E = 1\,\mathrm{k}\Omega$, $R_L \rightarrow \infty$ und $R_g' \approx R_g$ folgt mit $R_L' = R_L \parallel R_E \parallel r_{CE} = 980\,\Omega$ aus (2.134) $A_0 = 0{,}984 \approx 1$ und aus (2.136) $f_{-3dB} \approx 36\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L = 1\,\mathrm{nF}$ folgt aus (2.138) $f_{-3dB} \approx 8\,\mathrm{MHz}$ und aus (2.139) $f_{-3dB} \approx 5\,\mathrm{MHz}$. Aus (2.140) und (2.141) erhält man $T_g = 3{,}5\,\mathrm{ns}$, $T_L = 980\,\mathrm{ns}$, $T_E = 0{,}95\,\mathrm{ns}$, $r_g = 0{,}98$ und $r_S = 0{,}013$ und damit aus (2.142) $c_1 = 20{,}6\,\mathrm{ns}$ und $c_2 = 979\,(\mathrm{ns})^2$. Aus (2.143) folgt $Q = 1{,}52$, d.h. es liegen konjugiert komplexe Pole vor. Zu diesem Ergebnis
<!-- page-import:0189:end -->

<!-- page-import:0190:start -->
2.4 Grundschaltungen 153

a Vereinfachtes Kleinsignalersatzschaltbild

b andere Darstellung  
für den Transistor

**Abb. 2.106.** Ersatzschaltbild zur Impedanztransformation

gelangt man auch mit Hilfe von Abb. 2.103, da der Punkt $T_L/T_E \approx 1000$, $T_g/T_E \approx 4$,
$k_g \approx 1$ im Bereich konjugiert komplexer Pole liegt; dabei wird wegen $\beta = 400$ der Bereich
für $\beta = 500$ verwendet. Ein Verlassen des Bereichs konjugiert komplexer Pole kann hier
nur durch eine Vergrößerung von $T_g$ auf $T_g/T_E \approx 75$ erreicht werden; dazu muss man
$C'_g \approx 71\,\mathrm{pF}$ wählen, d.h. einen Kondensator mit $C_g = C'_g - C_C \approx 68\,\mathrm{pF}$ zwischen der
Basis des Transistors und Masse anschließen. Durch diese Maßnahme nimmt die obere
Grenzfrequenz ab; man erhält aus (2.138) $f_{-3dB} \approx 1{,}8\,\mathrm{MHz}$, wenn man $C'_g = 71\,\mathrm{pF}$
anstelle von $C_C$ einsetzt. Man kann $C_g$ kleiner wählen, wenn man schwach konjugiert
komplexe Pole und ein daraus resultierendes Überschwingen bei Ansteuerung mit einem
Rechtecksignal zulässt; die obere Grenzfrequenz nimmt dann weniger stark ab.

## 2.4.2.7 Impedanztransformation mit der Kollektorschaltung

Die Kollektorschaltung bewirkt eine Impedanztransformation. Im statischen Fall ist der
Eingangswiderstand $r_e$ im wesentlichen von der Last abhängig und der Ausgangswider-
stand $r_a$ hängt vom Innenwiderstand des Signalgenerators ab; mit $R_E \gg R_L$ und $R_g \gg r_{BE}$
folgt aus (2.130) $r_e \approx \beta R_L$ und $r_a \approx R_g/\beta$. Diese Eigenschaft lässt sich verallgemeinern.
Dazu wird das in Abb. 2.106a gezeigte Kleinsignalersatzschaltbild betrachtet, dass man
aus Abb. 2.101 durch Vernachlässigen von $R_B$, $R_E$ und $C_C$, Zusammenfassen von $r_{BE}$ und
$C_E$ zu

$$
\underline{Z}_{BE}(s) = r_{BE} \parallel \frac{1}{s\,C_E} = \frac{r_{BE}}{1 + s\,C_E\,r_{BE}}
$$

und Annahme allgemeiner Generator- und Lastimpedanzen $\underline{Z}_g(s)$ bzw. $\underline{Z}_L(s)$ erhält. Für
den Transistor kann man auch die in Abb. 2.106b gezeigte Darstellung mit der frequenz-
abhängigen Kleinsignalstromverstärkung

$$
\underline{\beta}(s) = S\,\underline{Z}_{BE}(s) = \frac{\beta_0}{1 + \dfrac{s}{\omega_\beta}}
$$

mit den Parametern

$$
\beta_0 = S\,r_{BE}\;,\quad \omega_\beta = \frac{1}{C_E\,r_{BE}}
$$

verwenden$^{30}$. Eine Berechnung der Eingangsimpedanz $\underline{Z}_e(s)$ und der Ausgangsimpedanz
$\underline{Z}_a(s)$ aus Abb. 2.106 liefert:

$^{30}$ Mit $C_C = 0$ gilt $\omega_\beta^{-1} = C_E r_{BE}$, siehe (2.44); ferner gilt $\beta_0 = |\underline{\beta}(j0)| = S r_{BE}$.
<!-- page-import:0190:end -->

<!-- page-import:0191:start -->
154 2. Bipolartransistor

a ausgangsseitig  b eingangsseitig

**Abb. 2.107.** Impedanztransformation mit der Kollektorschaltung

$$\underline{Z}_e(s) = \underline{Z}_{BE}(s) + \bigl(1 + \underline{\beta}(s)\bigr)\,\underline{Z}_L(s) \;\approx\; \underline{Z}_{BE}(s) + \underline{\beta}(s)\,\underline{Z}_L(s)$$

$$\underline{Z}_a(s) = \frac{\underline{Z}_{BE}(s) + \underline{Z}_g(s)}{1 + \underline{\beta}(s)} \;\approx\; \frac{\underline{Z}_{BE}(s) + \underline{Z}_g(s)}{\underline{\beta}(s)}$$

Abbildung 2.107 verdeutlicht diesen Zusammenhang.  
Oft kann man $\underline{Z}_{BE}(s)$ vernachlässigen und die einfachen Transformationsgleichungen

$$\underline{Z}_e(s) \approx \underline{\beta}(s)\,\underline{Z}_L(s) \quad,\quad \underline{Z}_a(s) \approx \frac{\underline{Z}_g(s)}{\underline{\beta}(s)}$$

verwenden; Abb. 2.108 zeigt einige ausgewählte Beispiele. Besonders auffällig sind die Fälle $\underline{Z}_g(s)=sL$ und $\underline{Z}_L(s)=1/(sC)$, bei denen durch die Transformation ein fre-

| $\underline{Z}_g$ | $\underline{Z}_a$ | $\underline{Z}_L$ | $\underline{Z}_e$ |
|---|---|---|---|
| $C$ | $\beta_0 C$ in Serie mit $\frac{1}{\omega_T C}$ | $L$ | $\beta_0 L$ parallel $\omega_T L$ |
| $R$ | $\frac{R}{\beta_0}$ in Serie mit $\frac{R}{\omega_T}$ | $R$ | $\beta_0 R$ parallel $\frac{1}{\omega_T R}$ |
| $L$ | $\frac{L}{\beta_0}$ in Serie mit $-\frac{\omega^2 L}{\omega_T}$ | $C$ | $\frac{C}{\beta_0}$ parallel $-\frac{\omega_T}{\omega^2 R}$ |
| $R$ parallel $C$ | $\frac{R}{\beta_0}$ | $R$ in Serie mit $L$ | $\beta_0 R$ |

$\omega_\beta C R = 1$  $\omega_\beta L = R$

**Abb. 2.108.** Einige ausgewählte Impedanztransformationen
<!-- page-import:0191:end -->

<!-- page-import:0192:start -->
2.4 Grundschaltungen 155

a Schaltung

b Ersatzschaltbild für Normalbetrieb

**Abb. 2.109. Basisschaltung**

quenzabhängiger, negativer Widerstand entsteht; $Z_a(s)$ bzw. $Z_e(s)$ sind in diesem Fall nicht mehr passiv und die Schaltung kann bei entsprechender Beschaltung instabil werden. Für die Praxis folgt daraus, dass Induktivitäten im Basiskreis und/oder Kapazitäten im Emitterkreis eines Transistors eine unerwünschte Schwingung zur Folge haben können; ein Beispiel hierfür ist die Kollektorschaltung mit kapazitiver Last. Die in Abb. 2.108 links unten gezeigte RC-Parallelschaltung mit der Nebenbedingung $\omega_\beta RC = 1$ führt auf eine rein ohmsche Ausgangsimpedanz; in diesem Fall führt eine zusätzliche Kapazität am Ausgang nicht zu konjugiert komplexen Polen, d.h. es kann keine Schwingung auftreten.

## 2.4.3 Basisschaltung

Abbildung 2.109a zeigt die Basisschaltung bestehend aus dem Transistor, dem Kollektorwiderstand $R_C$, der Versorgungsspannungsquelle $U_b$ und der Signalspannungsquelle $U_e$ 31. Der Widerstand $R_{BV}$ dient zur Begrenzung des Basisstroms bei Übersteuerung; im Normalbetrieb hat er praktisch keinen Einfluss. Für die folgende Untersuchung wird $U_b = 5\,\mathrm{V}$ und $R_C = R_{BV} = 1\,\mathrm{k}\Omega$ angenommen.

### 2.4.3.1 Übertragungskennlinie der Basisschaltung

Misst man die Ausgangsspannung $U_a$ als Funktion der Signalspannung $U_e$, erhält man die in Abb. 2.110 gezeigte Übertragungskennlinie. Für $U_e > -0{,}5\,\mathrm{V}$ ist der Kollektorstrom vernachlässigbar klein und man erhält $U_a = U_b = 5\,\mathrm{V}$. Für $-0{,}72\,\mathrm{V} \leq U_e \leq -0{,}5\,\mathrm{V}$ fließt ein mit abnehmender Spannung $U_e$ zunehmender Kollektorstrom $I_C$, und die Ausgangsspannung nimmt gemäß $U_a = U_b - I_C R_C$ ab. Bis hier arbeitet der Transistor im Normalbetrieb. Für $U_e < -0{,}72\,\mathrm{V}$ gerät der Transistor in die Sättigung und man erhält $U_a = U_e + U_{CE,sat}$.

#### 2.4.3.1.1 Normalbetrieb

Abb. 2.109b zeigt das Ersatzschaltbild für den Normalbetrieb, bei dem für den Transistor das vereinfachte Transportmodell nach Abb. 2.27 mit

$$
I_C = B\,I_B = I_S\,e^{\frac{U_{BE}}{U_T}}
$$

31 Im Gegensatz zur Vorgehensweise bei der Emitter- und der Kollektorschaltung wird hier eine Spannungsquelle ohne Innenwiderstand zur Ansteuerung verwendet; mit $R_g = 0$ folgt $U_e = U_g$, wie ein Vergleich mit Abb. 2.59b bzw. Abb. 2.92b zeigt. Diese Vorgehensweise wird gewählt, damit die Kennlinien für den Normalbetrieb nicht von $R_g$ abhängen.
<!-- page-import:0192:end -->

<!-- page-import:0193:start -->
156  2. Bipolartransistor

![Abb. 2.110. Kennlinien der Basisschaltung](image)

**Abb. 2.110.** Kennlinien der Basisschaltung

eingesetzt ist. Aus Abb. 2.109b folgt:

$$
U_a = U_b + (I_a - I_C)\,R_C \;\overset{I_a=0}{=}\; U_b - I_C\,R_C
\qquad (2.144)
$$

$$
U_e = -U_{BE} - I_B\,R_{BV} = -U_{BE} - \frac{I_C\,R_{BV}}{B} \;\approx\; -U_{BE}
\qquad (2.145)
$$

In (2.145) wird angenommen, dass der Spannungsabfall an $R_{BV}$ vernachlässigt werden kann, wenn $B$ ausreichend groß und $R_{BV}$ ausreichend klein ist.

Als Arbeitspunkt wird ein Punkt etwa in der Mitte des abfallenden Bereichs der Übertragungskennlinie gewählt; dadurch wird die Aussteuerbarkeit maximal. Nimmt man $B=\beta=400$ und $I_S=7\,\mathrm{fA}$ $^{32}$ an, erhält man für den in Abb. 2.110 beispielhaft eingezeichneten Arbeitspunkt mit $U_b=5\,\mathrm{V}$ und $R_C=R_{BV}=1\,\mathrm{k}\Omega$:

$$
U_a = 2{,}5\,\mathrm{V}
\;\Rightarrow\;
I_C = \frac{U_b-U_a}{R_C} = 2{,}5\,\mathrm{mA}
\;\Rightarrow\;
I_B = \frac{I_C}{B} = 6{,}25\,\mu\mathrm{A}
$$

$$
\Rightarrow\;
U_{BE} = U_T \ln \frac{I_C}{I_S} = 692\,\mathrm{mV}
\;\Rightarrow\;
U_e = -U_{BE} - I_B\,R_{BV} = -698\,\mathrm{mV}
$$

Der Spannungsabfall an $R_{BV}$ beträgt in diesem Fall nur $6{,}25\,\mathrm{mV}$ und kann vernachlässigt werden, d.h. für die Spannung an der Basis des Transistors gilt $U_B \approx 0$.

#### 2.4.3.1.2 Sättigungsbetrieb

Für $U_e < -0{,}72\,\mathrm{V}$ gerät der Transistor in die Sättigung, d.h. die Kollektor-Diode leitet. In diesem Bereich gilt $U_{CE}=U_{CE,sat}$ und $U_a = U_e + U_{CE,sat}$, und es fließt ein Basisstrom, der durch den Widerstand $R_{BV}$ auf zulässige Werte begrenzt werden muss:

32 Typische Werte für einen npn-Kleinleistungstransistor BC547B.
<!-- page-import:0193:end -->

<!-- page-import:0194:start -->
2.4 Grundschaltungen 157

**Abb. 2.111.** Schaltung und Kennlinien der Basisschaltung bei Ansteuerung mit einer Stromquelle

$$
I_B=-\frac{U_e+U_{BE}}{R_{BV}}\approx-\frac{U_e+0{,}72\,\mathrm{V}}{R_{BV}}
$$

### 2.4.3.1.3 Übertragungskennlinie bei Ansteuerung mit einer Stromquelle

Man kann zur Ansteuerung auch eine Stromquelle $I_e$ verwenden, siehe Abb. 2.111; die Schaltung arbeitet dann mit $U_b=5\,\mathrm{V}$ und $R_C=R_{BV}=1\,\mathrm{k}\Omega$ für $-5{,}5\,\mathrm{mA}\leq I_e\leq 0$ als *Strom-Spannungs-Wandler* bzw. *Transimpedanzverstärker* $^{33}$:

$$
U_a=U_b-I_CR_C=U_b+\frac{B}{1+B}\,I_eR_C\approx U_b+I_eR_C
\qquad (2.146)
$$

$$
U_e=-U_{BE}-I_BR_{BV}\approx-U_{BE}\approx-U_T\ln\left(\frac{-I_e}{I_S}\right)
\qquad (2.147)
$$

Dabei wird $I_e=I_E\approx-I_C$ verwendet. In diesem Bereich arbeitet der Transistor im Normalbetrieb und die Übertragungskennlinie ist nahezu linear. Für $I_e>0$ sperrt der Transistor und für $I_e<-5{,}5\,\mathrm{mA}$ gerät er in die Sättigung.

In der Praxis wird zur Stromansteuerung in den meisten Fällen eine Emitterschaltung mit offenem Kollektor oder ein Stromspiegel verwendet; darauf wird im Zusammenhang mit der Arbeitspunkteinstellung näher eingegangen.

### 2.4.3.2 Kleinsignalverhalten der Basisschaltung

Das Verhalten bei Aussteuerung um einen Arbeitspunkt $A$ wird als *Kleinsignalverhalten* bezeichnet. Der Arbeitspunkt ist durch die Arbeitspunktgrößen $U_{e,A}$, $U_{a,A}$, $I_{e,A}=I_{B,A}$ und $I_{C,A}$ gegeben; als Beispiel wird der oben ermittelte Arbeitspunkt mit $U_{e,A}=-0{,}7\,\mathrm{V}$, $U_{a,A}=2{,}5\,\mathrm{V}$, $I_{B,A}=6{,}25\,\mu\mathrm{A}$ und $I_{C,A}=2{,}5\,\mathrm{mA}$ verwendet.

$^{33}$ Die Bezeichnung *Transimpedanzverstärker* wird auch für Operationsverstärker mit Stromeingang und Spannungsausgang verwendet (CV-OPV).
<!-- page-import:0194:end -->

<!-- page-import:0195:start -->
158  2. Bipolartransistor

**Abb. 2.112.** Kleinsignalersatzschaltbild der Basisschaltung

Die *Spannungsverstärkung* $A$ entspricht der Steigung der Übertragungskennlinie. Die Berechnung erfolgt mit Hilfe des in Abb. 2.112 gezeigten Kleinsignalersatzschaltbilds. Aus der Knotengleichung

$$
\frac{u_a}{R_C} + \frac{u_a-u_e}{r_{CE}} + S u_{BE} = 0
$$

und der Spannungsteilung

$$
u_{BE}=-\frac{r_{BE}}{r_{BE}+R_{BV}}\,u_e
$$

folgt

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
=
\left(\frac{\beta}{r_{BE}+R_{BV}}+\frac{1}{r_{CE}}\right)(R_C \parallel r_{CE})
$$

$$
\overset{r_{CE}\gg R_C}{\underset{\beta\,r_{CE}\gg r_{BE}+R_{BV}}{\approx}}
\frac{\beta R_C}{r_{BE}+R_{BV}}
\overset{r_{BE}\gg R_{BV}}{\approx}
S R_C
$$

Maximale Verstärkung erhält man mit $R_{BV}=0$; dazu muss man die Basis des Transistors direkt oder über einen Kondensator mit Masse verbinden. Im folgenden Abschnitt über die Arbeitspunkteinstellung wird darauf näher eingegangen. Bei Betrieb mit einem Lastwiderstand $R_L$ kann man die zugehörige Betriebsverstärkung $A_B$ berechnen, indem man für $R_C$ die Parallelschaltung von $R_L$ und $R_C$ einsetzt, siehe Abb. 2.112. Mit $S=I_{C,A}/U_T=96\,\mathrm{mS}$, $\beta=400$, $r_{BE}=4160\,\Omega$, $r_{CE}=U_A/I_{C,A}=40\,\mathrm{k}\Omega$ und $R_{BV}=1\,\mathrm{k}\Omega$ erhält man *exakt* und in erster Näherung $A=76$; die zweite Näherung liefert mit $A=96$ einen sehr ungenauen Wert, weil die Voraussetzung $r_{BE}\gg R_{BV}$ nur unzureichend erfüllt ist.

Für den *Eingangswiderstand* erhält man:

$$
r_e=\left.\frac{u_e}{i_e}\right|_{i_a=0}
=
(r_{BE}+R_{BV}) \parallel
\frac{R_C+r_{CE}}{1+\dfrac{\beta\,r_{CE}}{r_{BE}+R_{BV}}}
$$

$$
\overset{\beta\gg 1}{\underset{r_{CE}\gg R_C}{\beta\,r_{CE}\gg r_{BE}+R_{BV}}{\approx}}
\frac{1}{S}+\frac{R_{BV}}{\beta}
\overset{r_{BE}\gg R_{BV}}{\approx}
\frac{1}{S}
$$
<!-- page-import:0195:end -->

<!-- page-import:0196:start -->
2.4 Grundschaltungen 159

Er hängt vom Lastwiderstand ab, wobei hier wegen $i_a = 0$ ($R_L \to \infty$) der Leerlaufeingangswiderstand gegeben ist. Der Eingangswiderstand für andere Werte von $R_L$ wird berechnet, indem man für $R_C$ die Parallelschaltung von $R_C$ und $R_L$ einsetzt; durch Einsetzen von $R_L = R_C = 0$ erhält man den Kurzschlusseingangswiderstand. Die Abhängigkeit von $R_L$ ist jedoch so gering, dass sie durch die Näherung aufgehoben wird. Für den beispielhaft gewählten Arbeitspunkt erhält man exakt $r_e = 13{,}2\,\Omega$; die Näherung liefert $r_e = 12{,}9\,\Omega$.

Für den Ausgangswiderstand erhält man:

$$
r_a = \frac{u_a}{i_a}
= R_C \parallel r_{CE} \left( 1 + \frac{R_g}{r_{CE}} \frac{\beta\, r_{CE} + r_{BE} + R_{BV}}{r_{BE} + R_{BV} + R_g} \right)
$$

$$
\underset{\beta\, r_{CE} \gg r_{BE} + R_{BV}}{\approx}
R_C \parallel r_{CE} \left( 1 + \frac{\beta\, R_g}{r_{BE} + R_{BV} + R_g} \right)
$$

$$
\underset{r_{CE} \gg R_C}{\approx}
R_C
$$

Er hängt vom Innenwiderstand $R_g$ des Signalgenerators ab. Mit $R_g = 0$ erhält man den Kurzschlussausgangswiderstand

$$
r_{a,K} = R_C \parallel r_{CE}
$$

und mit $R_g \to \infty$ den Leerlaufausgangswiderstand:

$$
r_{a,L} = R_C \parallel r_{CE}\,(1 + \beta) \approx R_C \parallel \beta\, r_{CE}
$$

In der Praxis gilt in den meisten Fällen $r_{CE} \gg R_C$, und man kann die Abhängigkeit von $R_g$ vernachlässigen. Für das Beispiel erhält man $r_{a,K} = 976\,\Omega$ und $r_{a,L} = 999{,}94\,\Omega$; die Näherung liefert $r_a = R_C = 1\,\mathrm{k}\Omega$.

Mit $r_{CE} \gg R_C$, $\beta\, r_{CE} \gg r_{BE} + R_{BV}$, $\beta \gg 1$ und ohne Lastwiderstand $R_L$ erhält man für die Basisschaltung:

*Basisschaltung*

$$
A = \left.\frac{u_a}{u_e}\right|_{i_a=0}
\approx \frac{\beta\, R_C}{r_{BE} + R_{BV}}
\underset{r_{BE} \gg R_{BV}}{\approx}
S\,R_C
\qquad\qquad (2.148)
$$

$$
r_e = \frac{u_e}{i_e}
\approx \frac{1}{S} + \frac{R_{BV}}{\beta}
\underset{r_{BE} \gg R_{BV}}{\approx}
\frac{1}{S}
\qquad\qquad (2.149)
$$

$$
r_a = \frac{u_a}{i_a}
\approx R_C
\qquad\qquad (2.150)
$$

Ein Vergleich von (2.148)–(2.150) mit (2.73)–(2.75) zeigt, dass das Kleinsignalverhalten der Basisschaltung und der Emitterschaltung ohne Gegenkopplung ähnlich ist. Diese Ähnlichkeit beruht auf der Tatsache, dass der Signalgenerator bei beiden Schaltungen zwischen Basis und Emitter des Transistors angeschlossen ist und das Ausgangssignal am Kollektor abgegriffen wird. Der Eingangskreis ist identisch, wenn man $U_g$ und $R_g$ in Abb. 2.59a auf Seite 103 mit $U_e$ und $R_{BV}$ in Abb. 2.109a identifiziert und die geänderte Polarität des Signalgenerators berücksichtigt. Daraus folgt, dass die Verstärkung dem
<!-- page-import:0196:end -->

<!-- page-import:0197:start -->
160  2. Bipolartransistor

Betrag nach etwa gleich, aufgrund der geänderten Polarität des Signalgenerators jedoch mit anderem Vorzeichen versehen ist. Der Ausgangswiderstand ist bis auf den etwas anderen Einfluss von $r_{CE}$ ebenfalls gleich. Der Eingangswiderstand ist bei der Basisschaltung etwa um den Faktor $\beta$ kleiner, weil hier der Emitterstrom $i_E = -(1 + \beta)i_B \approx -\beta\, i_B$ anstelle des Basisstroms $i_B$ als Eingangsstrom auftritt. Aufgrund der Ähnlichkeit kann das in Abb. 2.63 auf Seite 107 gezeigte Ersatzschaltbild der Emitterschaltung mit den Ersatzgrößen $A$, $r_e$ und $r_a$ auch für die Basisschaltung verwendet werden.

Bei Ansteuerung mit einer Stromquelle tritt der Übertragungswiderstand $R_T$ (Transimpedanz) an die Stelle der Verstärkung:

$$
R_T = \left.\frac{u_a}{i_e}\right|_{i_a=0}
= \left.\frac{u_a}{u_e}\right|_{i_a=0}\left.\frac{u_e}{i_e}\right|_{i_a=0}
$$

$$
= A r_e = \frac{(\beta\, r_{CE} + r_{BE} + R_{BV})\, R_C}{(1 + \beta)\, r_{CE} + r_{BE} + R_{BV} + R_C}
$$

Mit $\beta \gg 1$, $r_{CE} \gg R_C$, und $\beta\, r_{CE} \gg r_{BE} + R_{BV}$ folgt für den Strom-Spannungs-Wandler in Basisschaltung:

*Strom-Spannungs-Wandler in Basisschaltung*

$$
R_T = \left.\frac{u_a}{i_e}\right|_{i_a=0} \approx R_C
$$

(2.151)

Ein- und Ausgangswiderstand sind durch (2.149) und (2.150) gegeben.

### 2.4.3.3 Nichtlinearität

Bei ausreichend kleinem Widerstand $R_{BV}$ und Aussteuerung mit einer Spannungsquelle gilt $U_e \approx -U_{BE}$, siehe (2.145). Daraus folgt $\hat{u}_{BE} \approx \hat{u}_e$ und man kann Gl. (2.15) auf Seite 47 verwenden, die einen Zusammenhang zwischen der Amplitude $\hat{u}_{BE}$ einer sinusförmigen Kleinsignalaussteuerung und dem Klirrfaktor $k$ des Kollektorstroms, der bei der Basisschaltung gleich dem Klirrfaktor der Ausgangsspannung ist, herstellt. Es gilt also $\hat{u}_e < k \cdot 0{,}1\ \mathrm{V}$, d.h. für $k < 1\%$ muss $\hat{u}_e < 1\ \mathrm{mV}$ sein. Die zugehörige Ausgangsamplitude ist wegen $\hat{u}_a = |A| \hat{u}_e$ von der Verstärkung $A$ abhängig; für das Zahlenbeispiel mit $A = 76$ gilt demnach $\hat{u}_a < k \cdot 7{,}6\ \mathrm{V}$. Bei Aussteuerung mit einer Stromquelle ist der Klirrfaktor aufgrund des nahezu linearen Zusammenhangs zwischen $I_e = I_E$ und $I_C$ sehr klein.

### 2.4.3.4 Temperaturabhängigkeit

Nach Gl. (2.21) auf Seite 56 nimmt die Basis-Emitter-Spannung $U_{BE}$ bei konstantem Kollektorstrom $I_C$ mit $1{,}7\ \mathrm{mV}/\mathrm{K}$ ab. Da bei ausreichend kleinem Widerstand $R_{BV}$ und Ansteuerung mit einer Spannungsquelle $U_e \approx -U_{BE}$ gilt, siehe (2.145), muss die Eingangsspannung um $1{,}7\ \mathrm{mV}/\mathrm{K}$ zunehmen, damit der Arbeitspunkt $I_C = I_{C,A}$ der Schaltung konstant bleibt. Hält man dagegen die Eingangsspannung konstant, wirkt sich eine Temperaturerhöhung wie eine Abnahme der Eingangsspannung mit $dU_e/dT = -1{,}7\ \mathrm{mV}/\mathrm{K}$ aus; man kann deshalb die Temperaturdrift der Ausgangsspannung mit Hilfe der Verstärkung berechnen:

$$
\left.\frac{dU_a}{dT}\right|_A
=
\left.\frac{\partial U_a}{\partial U_e}\right|_A
\frac{dU_e}{dT}
\approx -A \cdot 1{,}7\ \mathrm{mV}/\mathrm{K}
$$
<!-- page-import:0197:end -->

<!-- page-import:0198:start -->
2.4 Grundschaltungen 161

a mit Basisspannungsteiler

b mit Basis an Masse

**Abb. 2.113.** Arbeitspunkteinstellung bei Wechselspannungskopplung

Für das Zahlenbeispiel erhält man $(dU_a/dT)|_A \approx -129\ \mathrm{mV/K}$.

Bei Ansteuerung mit einer Stromquelle folgt aus (2.146):
$$
\left.\frac{dU_a}{dT}\right|_A = -R_C \left.\frac{dI_C}{dT}\right|_A
= -R_C \left(\frac{I_{C,A}}{(1+B)\,B}\frac{dB}{dT} + \frac{B}{1+B}\frac{dI_{e,A}}{dT}\right)
$$

Für das Zahlenbeispiel folgt mit (2.23) bei temperaturunabhängigem Eingangsstrom eine Temperaturdrift von $(dU_a/dT)|_A \approx -31\ \mu \mathrm{V/K}$; in diesem Fall wirkt sich nur die Temperaturabhängigkeit der Stromverstärkung $B$ aus.

### 2.4.3.5 Arbeitspunkteinstellung

Der Betrieb als Kleinsignalverstärker erfordert eine stabile Einstellung des Arbeitspunkts; dabei unterscheidet man zwischen Wechselspannungskopplung und Gleichspannungskopplung.

#### 2.4.3.5.1 Arbeitspunkteinstellung bei Wechselspannungskopplung

Abbildung 2.113 zeigt zwei Varianten der Wechselspannungskopplung, bei der die Signalquelle und die Last über Koppelkondensatoren angeschlossen werden; die weiteren Eigenschaften werden auf Seite 121 beschrieben. Bei beiden Varianten handelt es sich um eine Arbeitspunkteinstellung mit Gleichstromgegenkopplung, die in gleicher Weise bei der Emitterschaltung verwendet wird, siehe Abb. 2.77 auf Seite 124.

Bei der Schaltung nach Abb. 2.113a wird die im Arbeitspunkt an der Basis des Transistors erforderliche Spannung
$$
U_{B,A} = (I_{C,A} + I_{B,A})\,R_E + U_{BE,A} \approx I_{C,A}R_E + 0{,}7\,\mathrm{V}
$$
mit $R_1$ und $R_2$ eingestellt; dabei wird der Querstrom durch die Widerstände deutlich größer als $I_{B,A}$ gewählt, damit der Arbeitspunkt nicht von $I_{B,A}$ abhängt. Die Temperaturstabilität des Arbeitspunkts hängt maßgeblich vom Verhältnis der Widerstände $R_C$ und $R_E$ ab; es gilt:
$$
\left.\frac{dU_a}{dT}\right|_A \approx -\frac{R_C}{R_E}\cdot 1{,}7\ \frac{\mathrm{mV}}{\mathrm{K}}
$$
<!-- page-import:0198:end -->

<!-- page-import:0199:start -->
162  2. Bipolartransistor

Zur Minimierung der Temperaturdrift muss man $R_E$ möglichst groß wählen; in der Praxis wählt man $R_C/R_E \approx 1 \dots 10$. Im Kleinsignalersatzschaltbild liegt $R_E$ parallel zum Eingangswiderstand $r_e$, kann aber wegen $R_E \gg r_e \approx 1/S$ vernachlässigt werden. Die Parallelschaltung von $R_1$ und $R_2$ tritt an die Stelle des Widerstands $R_{BV}$ aus Abb. 2.109a$^{34}$:

$$
R_{BV} = R_1 \parallel R_2
$$

Die maximale Verstärkung wird nur erreicht, wenn der Basiskreis niederohmig ist; aus (2.148) erhält man die Forderung $R_{BV} \ll r_{BE}$. In der Praxis kann man $R_1$ und $R_2$ im allgemeinen nicht so klein wählen, dass diese Forderung erfüllt ist, weil sonst der Querstrom durch $R_1$ und $R_2$ zu groß wird.

*Beispiel:* Mit $I_{C,A} = 1\,\mathrm{mA}$ und $\beta = 400$ folgt $R_{BV} \ll r_{BE} = 10{,}4\,\mathrm{k}\Omega$; wählt man $R_1 = 3\,\mathrm{k}\Omega$ und $R_2 = 1{,}5\,\mathrm{k}\Omega$, d.h. $R_{BV} = 1\,\mathrm{k}\Omega$, erhält man für $U_b = 5\,\mathrm{V}$ einen Querstrom, der größer ist als $I_{C,A}$: $I_Q = U_b/(R_1 + R_2) \approx 1{,}1\,\mathrm{mA}$. Dagegen kann die Forderung, dass der Querstrom deutlich größer sein soll als der Basisstrom, wegen $I_{B,A} = I_{C,A}/\beta = 2{,}5\,\mu\mathrm{A}$ bereits mit $I_Q \approx 25\,\mu\mathrm{A}$ erfüllt werden.

Man wählt deshalb den Querstrom *nur* deutlich größer als den Basisstrom und erfüllt die Forderung nach einem niederohmigen Basiskreis nur für Wechselspannungen, indem man den Basisanschluss über einen Kondensator $C_b$ mit Masse verbindet, siehe Abb. 2.113a$^{35}$; dabei muss man $C_b$ so wählen, dass bei der kleinsten interessierenden Signalfrequenz $f_U$ noch $1/(2\pi f_U C_b) \ll r_{BE}$ gilt.

Hat man zusätzlich eine negative Versorgungsspannung, kann man den Basisanschluss des Transistors auch direkt mit Masse verbinden, siehe Abb. 2.113b, und den Arbeitspunktstrom mit $R_E$ einstellen:

$$
I_{C,A} \approx -I_{E,A} = \frac{U_b - U_{BE,A}}{R_E} \approx \frac{U_b - 0{,}7\,\mathrm{V}}{R_E}
$$

Bei beiden Varianten kann man den Widerstand $R_E$ durch eine Stromquelle mit dem Strom $I_K$ ersetzen; es gilt dann $I_{C,A} \approx I_K$. Die Temperaturdrift ist in diesem Fall durch die Temperaturdrift der Stromquelle gegeben.

#### 2.4.3.5.2 Arbeitspunkteinstellung bei Gleichspannungskopplung

Abbildung 2.114 zeigt zwei Varianten der Gleichspannungskopplung. In Abb. 2.114a wird die Basisschaltung ($T_2$) mit einer Kollektorschaltung ($T_1$) angesteuert; da die Kollektorschaltung einen kleinen Ausgangswiderstand hat, liegt Spannungsansteuerung vor. Der Arbeitspunktstrom $I_{C,A}$ ist bei beiden Transistoren gleich und wird, wie gezeigt, mit dem Widerstand $R_E$ oder mit einer Stromquelle eingestellt. Die Schaltung kann als unsymmetrisch betriebener Differenzverstärker aufgefasst werden, wie ein Vergleich mit Abb. 4.54c auf Seite 343 zeigt.

Abbildung 2.114b zeigt die Kaskodeschaltung, bei der ein Transistor in Basisschaltung ($T_2$) mit einer Emitterschaltung ($T_1$) angesteuert wird; in diesem Fall liegt Stromansteuerung vor. Der Arbeitspunkt der Basisschaltung wird durch die Widerstände $R_1$ und $R_2$ und durch den Arbeitspunktstrom der Emitterschaltung festgelegt. Die Emitterschaltung ist in

34 In Abb. 2.109a ist der Basisanschluss des Transistors über den Widerstand $R_{BV}$ mit Masse verbunden; $R_{BV}$ kann dabei als Innenwiderstand einer Spannungsquelle mit $U = 0$ aufgefasst werden. Die Ersatzspannungsquelle für den Basisspannungsteiler in Abb. 2.113a hat im Vergleich dazu den Innenwiderstand $R_1 \parallel R_2$ und die Leerlaufspannung $U = U_b\,R_2/(R_1 + R_2)$.

35 In Abb. 2.113a ist *zusätzlich* ein Widerstand $R_{BV}$ zur Vermeidung hochfrequenter Schwingungen eingezeichnet; darauf wird später noch näher eingegangen.
<!-- page-import:0199:end -->

<!-- page-import:0200:start -->
2.4 Grundschaltungen 163

**Abb. 2.114.** Arbeitspunkteinstellung bei Gleichspannungskopplung

Abb. 2.114b nur symbolisch, d.h. ohne die zur Arbeitspunkteinstellung nötige Beschaltung dargestellt. Die Kaskodeschaltung wird im Abschnitt 4.1.3 näher beschrieben.

#### 2.4.3.5.3 Vermeidung hochfrequenter Schwingungen

Aufgrund der hohen oberen Grenzfrequenz kann eine hochfrequente Schwingung im Arbeitspunkt auftreten; die Schaltung arbeitet in diesem Fall als Oszillator. Dieses Phänomen tritt besonders dann auf, wenn die Basis des Transistors direkt oder über einen Kondensator $C_b$ mit Masse verbunden ist. Ursache ist eine parasitäre Induktivität im Basiskreis, die durch Laufzeiteffekte in der Basiszone des Transistors und durch Zuleitungsinduktivitäten verursacht wird. Diese Induktivität bildet zusammen mit der Eingangskapazität des Transistors und/oder dem Kondensator $C_b$ einen Serienschwingkreis, der bei ausreichend hoher Güte zu einer Selbsterregung der Schaltung führen kann. Um dies zu verhindern, muss man die Güte des Schwingkreises durch Einfügen eines Dämpfungswiderstands verringern. Dazu dient der Widerstand $R_{BV}$, der in Abb. 2.113 und Abb. 2.114 gestrichelt eingezeichnet ist. Die in der Praxis verwendeten Widerstände liegen im Bereich $10 \dots 100\,\Omega$, in Ausnahmefällen auch darüber. Sie sind möglichst kurz mit Masse zu verbinden, damit die Zuleitungsinduktivität klein bleibt.

#### 2.4.3.6 Frequenzgang und obere Grenzfrequenz

Die Kleinsignalverstärkung $A$ und die Betriebsverstärkung $A_B$ nehmen bei höheren Frequenzen aufgrund der Transistorkapazitäten ab. Um eine Aussage über den Frequenzgang und die obere Grenzfrequenz zu bekommen, muss man bei der Berechnung das dynamische Kleinsignalmodell des Transistors verwenden.

##### 2.4.3.6.1 Ansteuerung mit einer Spannungsquelle

Abbildung 2.115 zeigt das dynamische Kleinsignalersatzschaltbild der Basisschaltung bei Ansteuerung mit einer Signalspannungsquelle mit dem Innenwiderstand $R_g$. Die exakte Berechnung der Betriebsverstärkung $A_B(s)=u_a(s)/u_g(s)$ ist aufwendig und führt auf umfangreiche Ausdrücke. Eine ausreichend genaue Näherung erhält man, wenn man den Widerstand $r_{CE}$ vernachlässigt und $\beta \gg 1$ annimmt; mit $R'_{BV}=R_{BV}+R_B$, $R'_C=R_C \parallel R_L$ und der Niederfrequenzverstärkung
<!-- page-import:0200:end -->

<!-- page-import:0201:start -->
164  2. Bipolartransistor

**Abb. 2.115.** Dynamisches Kleinsignalersatzschaltbild der Basisschaltung

$$
A_0 \;=\; \underline{A_B(0)} \;\approx\; \frac{\beta R_C'}{\beta R_g + R_{BV}' + r_{BE}}
\qquad (2.152)
$$

folgt:

$$
\underline{A_B(s)} \;\approx\; A_0\,
\frac{1 + s\,C_C R_{BV}' + s^2 \dfrac{C_E C_C R_{BV}'}{S}}
{1 + s\,c_1 + s^2 c_2}
$$

$$
c_1 \;=\;
\frac{
C_E r_{BE}(R_g + R_{BV}')
+
C_C\bigl(R_{BV}'(\beta (R_g + R_C') + r_{BE}) + R_C'(\beta R_g + r_{BE})\bigr)
}
{\beta R_g + R_{BV}' + r_{BE}}
$$

$$
c_2 \;=\;
\frac{
C_E C_C \bigl(R_{BV}'(R_g + R_C') + R_g R_C'\bigr)
}
{\beta R_g + R_{BV}' + r_{BE}}
$$

Die Übertragungsfunktion hat zwei reelle Pole und zwei Nullstellen; letztere sind in den meisten Fällen konjugiert komplex. Man kann den Frequenzgang näherungsweise durch einen Tiefpass 1. Grades beschreiben, indem man die $s^2$-Terme streicht und die Differenz der linearen Terme bildet:

$$
\underline{A_B(s)} \;\approx\;
\frac{A_0}
{1 + s\;
\frac{
C_E r_{BE}(R_g + R_{BV}')
+
C_C R_C'\bigl(\beta (R_g + R_{BV}') + r_{BE}\bigr)
}
{\beta R_g + R_{BV}' + r_{BE}}
}
\qquad (2.153)
$$

Damit erhält man eine Näherung für die obere -3dB-Grenzfrequenz $f_{-3\mathrm{dB}}$, bei der der Betrag der Verstärkung um 3 dB abgenommen hat:

$$
\omega_{-3dB} \;\approx\;
\frac{\beta R_g + R_{BV}' + r_{BE}}
{C_E r_{BE}(R_g + R_{BV}') + C_C R_C'\bigl(\beta (R_g + R_{BV}') + r_{BE}\bigr)}
\qquad (2.154)
$$

Die obere Grenzfrequenz hängt von der Niederfrequenzverstärkung $A_0$ ab; aus (2.152) und (2.154) erhält man eine Darstellung mit zwei von $A_0$ unabhängigen Zeitkonstanten:

$$
\omega_{-3dB}(A_0) \;\approx\; \frac{1}{T_1 + T_2 A_0}
\qquad (2.155)
$$

$$
T_1 \;=\; C_E\,
\frac{r_{BE}(R_g + R_{BV}')}{\beta R_g + R_{BV}' + r_{BE}}
\qquad (2.156)
$$
<!-- page-import:0201:end -->

<!-- page-import:0202:start -->
2.4 Grundschaltungen 165

$$
T_2 = C_C \left( R_g + R'_{BV} + \frac{1}{S} \right)
$$

(2.157)

Auch hier besteht eine enge Verwandtschaft mit der Emitterschaltung, wie ein Vergleich von (2.155)–(2.157) mit (2.104)–(2.106) zeigt. Die Ausführungen zum Verstärkungs-Bandbreite-Produkt $GBW$ einschließlich Gl. (2.107) auf Seite 131 gelten in gleicher Weise.

Besitzt die Last neben dem ohmschen auch einen kapazitiven Anteil, d.h. tritt parallel zum Lastwiderstand $R_L$ eine Lastkapazität $C_L$ auf, erhält man

$$
T_2 = (C_C + C_L)\left( R_g + \frac{1}{S} \right) + \left( C_C + \frac{C_L}{\beta} \right) R'_{BV}
$$

(2.158)

Die Zeitkonstante $T_1$ hängt nicht von $C_L$ ab. Die obere Grenzfrequenz nimmt entsprechend der Zunahme von $T_2$ ab.

Man kann die Basisschaltung näherungsweise durch das Ersatzschaltbild nach Abb. 2.87 auf Seite 133 beschreiben. Die Eingangskapazität $C_e$ und die Ausgangskapazität $C_a$ erhält man aus der Bedingung, dass eine Berechnung von $A_B(s)$ nach Streichen des $s^2$-Terms auf (2.153) führen muss:

$$
C_e \approx C_E \frac{r_{BE}(R_g + R'_{BV})}{R_g(r_{BE} + R'_{BV})}
\qquad
\overset{R'_{BV} \ll R_g,r_{BE}}{\approx}
\qquad
C_E
$$

$$
C_a \approx C_C \frac{\beta(R_g + R'_{BV}) + r_{BE}}{\beta R_g + R'_{BV} + r_{BE}}
\qquad
\overset{R'_{BV} \ll R_g,r_{BE}}{\approx}
\qquad
C_C
$$

$A$, $r_e$ und $r_a$ sind durch (2.148)–(2.150) gegeben; dabei wird $R'_{BV} = R_{BV} + R_B$ anstelle von $R_{BV}$ eingesetzt.

## 2.4.3.6.2 Ansteuerung mit einer Stromquelle

Bei Ansteuerung mit einer Stromquelle interessiert der Frequenzgang der Transimpedanz $Z_T(s)$; ausgehend von (2.153) kann man eine Näherung durch einen Tiefpass 1. Grades angeben:

$$
Z_T(s) = \frac{u_a(s)}{i_e(s)} = \lim_{R_g \to \infty} R_g A_B(s) \approx \frac{R'_C}{1 + s\left(\frac{C_E}{S} + C_C R'_C\right)}
$$

(2.159)

Für die obere Grenzfrequenz gilt in diesem Fall:

$$
\omega_{-3dB} = 2\pi f_{-3dB} \approx \frac{1}{\frac{C_E}{S} + C_C R'_C}
$$

(2.160)

Dieses Ergebnis erhält man auch aus (2.154), wenn man $R_g \to \infty$ einsetzt. Bei kapazitiver Last muss man $C_L + C_C$ anstelle von $C_C$ einsetzen.

## 2.4.3.6.3 Vergleich mit der Emitterschaltung

Ein Vergleich der Basis- und der Emitterschaltung lässt sich am einfachsten anhand der in Abb. 2.116 gezeigten Ersatzschaltbilder durchführen; sie folgen aus Abb. 2.87, wenn man die vereinfachten Ausdrücke für $A_0$, $r_e$, $C_e$, $r_a$ und $C_a$ einsetzt. Ausgangsseitig sind beide Schaltungen identisch; auch die Leerlaufverstärkung ist bis auf das Vorzeichen gleich.
<!-- page-import:0202:end -->

<!-- page-import:0203:start -->
166 2. Bipolartransistor

Abb. 2.116. Ersatzschaltbild der Basisschaltung (oben) und der Emitterschaltung (unten)

Große Unterschiede bestehen dagegen im Eingangskreis. Bei der Basisschaltung ist sowohl der Eingangswiderstand als auch die Eingangskapazität kleiner und letztere hängt auch nicht von der Verstärkung ab. Daraus folgt, dass die Basisschaltung eine sehr viel kleinere eingangsseitige Zeitkonstante $T_e = C_e r_e$ besitzt, während die ausgangsseitige Zeitkonstante $T_a = C_a r_a = C_C R_C$ bei beiden Schaltungen gleich ist. Deshalb ist die obere Grenzfrequenz bei der Basisschaltung größer, vor allem dann, wenn die ausgangsseitige Zeitkonstante klein ist und die Grenzfrequenz in erster Linie von der eingangsseitigen Zeitkonstante abhängt.

*Beispiel:* Für das Zahlenbeispiel zur Basisschaltung nach Abb. 2.109a wurde $I_{C,A} = 2{,}5\,\mathrm{mA}$ gewählt. Mit $\beta = 400$, $C_{obo} = 3{,}5\,\mathrm{pF}$ und $f_T = 160\,\mathrm{MHz}$ erhält man aus Abb. 2.45 auf Seite 86 die Kleinsignalparameter $S = 96\,\mathrm{mS}$, $r_{BE} = 4160\,\Omega$, $C_C = 3{,}5\,\mathrm{pF}$ und $C_E = 92\,\mathrm{pF}$. Mit $R_{BV} = R_C = 1\,\mathrm{k}\Omega$, $R'_{BV} \approx R_{BV}$, $R_L \to \infty$ und $R_g = 0$ folgt aus (2.152) $A_0 \approx 77{,}5$ und aus (2.154) $f_{-3dB} \approx 457\,\mathrm{kHz}$. Die vergleichsweise niedrige obere Grenzfrequenz wird durch den Widerstand $R_{BV}$ verursacht. Man erzielt eine wesentlich höhere obere Grenzfrequenz, wenn man $R_{BV}$ kleiner wählt oder entfernt, sofern dadurch keine hochfrequente Schwingung auftritt; letzteres führt auf $R'_{BV} \approx R_B$. Mit $R_B = R_g = 10\,\Omega$ erhält man aus (2.152) $A_0 \approx 49$ und aus (2.154) $f_{-3dB} \approx 25{,}9\,\mathrm{MHz}$. Aus (2.156) folgt $T_1 \approx 0{,}94\,\mathrm{ns}$, aus (2.157) $T_2 \approx 107\,\mathrm{ps}$ und aus (2.107) $GBW \approx 1{,}5\,\mathrm{GHz}$. Die Werte hängen stark von $R_B$ ab; mit $R_B = 100\,\Omega$ folgt $A_0 \approx 48$, $f_{-3dB} \approx 6{,}2\,\mathrm{MHz}$, $T_1 \approx 5{,}1\,\mathrm{ns}$, $T_2 \approx 421\,\mathrm{ps}$ und $GBW = 378\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L = 1\,\mathrm{nF}$ und $R_B = 10\,\Omega$ erhält man aus (2.158) $T_2 \approx 20{,}5\,\mathrm{ns}$, aus (2.155) $f_{-3dB} \approx 158\,\mathrm{kHz}$ und aus (2.107) $GBW \approx 7{,}74\,\mathrm{MHz}$.

Bei Ansteuerung mit einer Stromquelle und $R_L \to \infty$ folgt aus (2.159) $R_T = Z_T(0) \approx R_C = 1\,\mathrm{k}\Omega$ und aus (2.160) $f_{-3dB} = 35{,}7\,\mathrm{MHz}$. Der Widerstand $R_{BV}$ wirkt sich in diesem Fall nicht aus. Mit einer Lastkapazität $C_L = 1\,\mathrm{nF}$ erhält man aus (2.160) $f_{-3dB} \approx 159\,\mathrm{kHz}$, wenn man anstelle von $C_C$ die Kapazität $C_C + C_L$ einsetzt.

## 2.4.4 Darlington-Schaltung

Bei einigen Anwendungen reicht die Stromverstärkung eines einzelnen Transistors nicht aus; man kann dann eine Darlington-Schaltung einsetzen, die aus zwei Transistoren aufgebaut ist und deren Stromverstärkung in erster Näherung gleich dem Produkt der Stromverstärkungen der Einzeltransistoren ist:
<!-- page-import:0203:end -->

<!-- page-import:0204:start -->
## 2.4 Grundschaltungen

167

**Abb. 2.117.** Schaltung und Schaltsymbol eines npn-Darlington-Transistors

$$
B \approx B_1 B_2
$$

(2.161)

Die Darlington-Schaltung ist unter der Bezeichnung *Darlington-Transistor* als Bauelement mit eigenem Gehäuse für Leiterplattenmontage verfügbar; dabei werden die Anschlüsse wie bei einem Einzeltransistor mit Basis, Emitter und Kollektor bezeichnet. Darüber hinaus kann man die Darlington-Schaltung auch aus einzelnen Elementen aufbauen. Der Darlington-Transistor ist in diesem Zusammenhang eine integrierte Schaltung, die nur eine Darlington-Schaltung enthält.

Abbildung 2.117 zeigt die Schaltung und das Schaltsymbol eines *npn-Darlington-Transistors*, der aus zwei npn-Transistoren und einem Widerstand zur Verbesserung des Schaltverhaltens besteht. Er kann im wesentlichen wie ein npn-Transistor eingesetzt werden. Beim *pnp-Darlington-Transistor*, der im wesentlichen wie ein pnp-Transistor eingesetzt werden kann, sind zwei Varianten gängig, siehe Abb. 2.118:

- Der *normale* pnp-Darlington besteht aus zwei pnp-Transistoren und ist unmittelbar komplementär zum npn-Darlington. Er wird in der Praxis als *pnp-Darlington* bezeichnet, d.h. ohne den Zusatz *normal*.

a normal

b komplementär

**Abb. 2.118.** Schaltung eines pnp-Darlington-Transistors
<!-- page-import:0204:end -->

<!-- page-import:0205:start -->
168 2. Bipolartransistor

**Abb. 2.119.** Ausgangskennlinienfeld eines npn-Darlington-Transistors

– Der *komplementäre* pnp-Darlington besteht aus einem pnp- und einem npn-Transistor und ist mittelbar komplementär zum npn-Darlington, da der pnp-Transistor $T_1$ die Polarität festlegt; der npn-Transistor $T_2$ ist nur für die weitere Stromverstärkung zuständig.

Die Stromverstärkung eines pnp-Darlingtons ist oft wesentlich kleiner als die eines vergleichbaren npn-Darlingtons, da die Stromverstärkung eines pnp-Transistors im allgemeinen kleiner ist als die eines npn-Transistors, was sich beim Darlington aufgrund der Produktbildung doppelt, d.h. quadratisch auswirkt. Abhilfe bietet hier der komplementäre pnp-Darlington, bei dem der zweite pnp-Transistor durch einen npn-Transistor ersetzt wird; damit wirkt sich die kleinere Stromverstärkung von pnp-Transistoren nur einfach aus.

Im folgenden wird der npn-Darlington beschrieben, der in der Praxis die größere Bedeutung hat. Die Ausführungen gelten in gleicher Weise für den pnp-Darlington, wenn man alle Ströme und Spannungen mit umgekehrten Vorzeichen versieht. Eine Ausnahme bildet der komplementäre pnp-Darlington, der getrennt behandelt werden muss.

#### 2.4.4.1 Kennlinien eines Darlington-Transistors

Abbildung 2.119 zeigt das Ausgangskennlinienfeld eines npn-Darlington-Transistors. Es ist dem eines npn-Transistors sehr ähnlich, lediglich die Kollektor-Emitter-Sättigungsspannung $U_{CE,sat}$, bei der die Kennlinien abknicken, ist mit $0{,}7 \ldots 1$ V deutlich größer. Für $U_{CE} > U_{CE,sat}$ arbeiten $T_1$ und $T_2$ und damit auch der Darlington im Normalbetrieb. Für $U_{CE} \leq U_{CE,sat}$ gerät $T_1$ in die Sättigung, während $T_2$ weiterhin im Normalbetrieb arbeitet; man nennt diesen Betrieb auch beim Darlington Sättigungsbetrieb.

Abbildung 2.120 zeigt den Bereich kleiner Kollektorströme und kleiner Kollektor-Emitter-Spannungen. Bei sehr kleinen Kollektorströmen ist die Spannung am Widerstand $R$ des Darlingtons so klein, dass $T_2$ sperrt (unterste Kennlinie in Abb. 2.120); die Stromverstärkung entspricht in diesem Bereich der Stromverstärkung von $T_1$. Mit zunehmendem Kollektorstrom beginnt $T_2$ zu leiten und die Stromverstärkung nimmt stark zu; man erkennt dies in Abb. 2.120 daran, dass eine gleichmäßige Zunahme von $I_B$ eine immer stärkere Zunahme von $I_C$ bewirkt.

Das Ausgangskennlinienfeld eines pnp-Darlingtons erhält man durch Umkehr der Vorzeichen. Das gilt für den komplementären pnp-Darlington in gleicher Weise, da sich die
<!-- page-import:0205:end -->

<!-- page-import:0206:start -->
2.4 Grundschaltungen 169

Abb. 2.120. Ausgangskennlinienfeld bei kleinen Kollektorströmen

beiden pnp-Varianten im Ausgangskennlinienfeld praktisch nicht unterscheiden. Unterschiede bestehen jedoch im Eingangskennlinienfeld, da die Basis-Emitter-Strecke beim npn- und beim pnp-Darlington aus zwei, beim komplementären pnp-Darlington dagegen nur aus einer Transistor-Basis-Emitter-Strecke besteht; deshalb ist die Basis-Emitter-Spannung beim komplementären pnp-Darlington bei gleichem Strom nur etwa halb so groß wie beim normalen pnp-Darlington.

#### 2.4.4.2 Beschreibung durch Gleichungen

Abbildung 2.121 zeigt das Ersatzschaltbild eines npn-Darlington-Transistors im Normalbetrieb, das sich aus den Ersatzschaltbildern für die beiden Transistoren und dem Widerstand $R$ zusammensetzt. Für die Ströme gilt

Abb. 2.121. Ersatzschaltbild eines npn-Darlington-Transistors im Normalbetrieb
<!-- page-import:0206:end -->

<!-- page-import:0207:start -->
170  2. Bipolartransistor

![Abb. 2.122. Verlauf der Stromverstärkung eines Darlington-Transistors]

**Abb. 2.122.** Verlauf der Stromverstärkung eines Darlington-Transistors

$$
I_C = I_{C1} + I_{C2}
$$

$$
I_{C1} = B_1 I_{B1} = B_1 I_B
$$

$$
I_{C2} = B_2 I_{B2} = B_2 (I_{C1} + I_B - I_R)
\qquad (2.162)
$$

und für die Basis-Emitter-Spannung:

$$
U_{BE} = U_{BE1} + U_{BE2} = U_T \left(\ln \frac{I_{C1}}{I_{S1}} + \ln \frac{I_{C2}}{I_{S2}}\right) = U_T \ln \frac{I_{C1} I_{C2}}{I_{S1} I_{S2}}
$$

Dabei sind $I_{S1}$ und $I_{S2}$ die Sättigungssperrströme von $T_1$ und $T_2$; es gilt in den meisten Fällen $I_{S2} \approx 2 \dots 3\, I_{S1}$. Bei mittleren Kollektorströmen erhält man $U_{BE} \approx 1{,}2 \dots 1{,}5\ \mathrm{V}$.

### 2.4.4.3 Verlauf der Stromverstärkung

Abbildung 2.122 zeigt die Stromverstärkung $B$ in Abhängigkeit vom Kollektorstrom $I_C$; man unterscheidet vier Bereiche [2.8]:

– Bei kleinen Kollektorströmen sperrt $T_2$ und man erhält $^{36}$:

$$
B = \frac{I_C}{I_B} = \frac{I_{C1}}{I_{B1}} = B_1 \approx B_{0,1}
$$

Die Stromverstärkung des Darlingtons entspricht in diesem Bereich der Stromverstärkung von $T_1$. Man kann die Grenze dieses Bereichs einfach angeben, wenn man davon ausgeht, dass $U_{BE2} \approx 0{,}7\,\mathrm{V}$ gilt, wenn $T_2$ leitet; durch den Widerstand $R$ fließt dann der Strom:

$$
I_{R,max} \approx \frac{0{,}7\ \mathrm{V}}{R}
$$

Daraus folgt, dass $T_2$ für $I_C < I_{R,max}$ sperrt.

---

$^{36}$ Die Stromverstärkungen $B_1$ und $B_2$ sind von $I_{C1}$ bzw. $I_{C2}$ und damit von $I_C$ abhängig; diese Abhängigkeit ist in Abb. 2.122 berücksichtigt, wird jedoch in Berechnungen durch die Annahme $B_1 \approx B_{0,1}$ bzw. $B_2 \approx B_{0,2}$ vernachlässigt, d.h. $B_1$ und $B_2$ werden als konstant angenommen. Dies gilt nicht für den Hochstrombereich, der getrennt betrachtet wird.
<!-- page-import:0207:end -->

<!-- page-import:0208:start -->
2.4 Grundschaltungen 171

– Für $I_C > I_{R,max}$ leiten beide Transistoren; aus (2.162) folgt mit $I_R = I_{R,max}$

$$
I_B = \frac{I_C + B_2 I_{R,max}}{(1 + B_1)\,B_2 + B_1}
$$

und daraus

$$
B(I_C) = \frac{I_C}{I_B} = \frac{(1 + B_1)\,B_2 + B_1}{1 + \frac{B_2 I_{R,max}}{I_C}}
$$

$$
\overset{B_1,B_2 \gg 1}{\approx} \frac{B_1 B_2}{1 + \frac{B_2 I_{R,max}}{I_C}}
\qquad\qquad (2.163)
$$

Diese Gleichung beschreibt zwei Bereiche. Für $I_{R,max} < I_C < B_2 I_{R,max}$ erhält man:

$$
B \approx \frac{B_1 I_C}{I_{R,max}} \approx \frac{B_{0,1} I_C}{I_{R,max}}
$$

In diesem Bereich ist die Stromverstärkung näherungsweise proportional zum Kollektorstrom. Diese Eigenschaft wird durch den Widerstand $R$ verursacht, da in diesem Bereich der überwiegende Teil des Kollektorstroms $I_{C1}$ durch den Widerstand $R$ fließt und nur ein kleiner Anteil als Basisstrom $I_{B2}$ für $T_2$ zur Verfügung steht. Eine Zunahme von $I_{C1}$ bewirkt jedoch eine entsprechende Zunahme von $I_{B2}$, da der Strom durch den Widerstand $R$ wegen $I_R \approx I_{R,max}$ näherungsweise konstant bleibt.

– Für $I_C > B_2 I_{R,max}$ erhält man aus (2.163)

$$
B \approx B_1 B_2 \approx B_{0,1} B_{0,2}
$$

in Übereinstimmung mit der bereits genannten Gleichung (2.161). Dieser Bereich ist der bevorzugte Arbeitsbereich eines Darlington-Transistors.

– Mit weiter zunehmendem Kollektorstrom gerät zunächst $T_2$ und dann $T_1$ in den Hochstrombereich. Mit

$$
B_1 = \frac{B_{0,1}}{1 + \frac{I_{C1}}{I_{K,N1}}}
,\qquad
B_2 = \frac{B_{0,2}}{1 + \frac{I_{C2}}{I_{K,N2}}}
$$

folgt

$$
B(I_C) = \frac{B_{0,1} B_{0,2}}{1 + \frac{I_C}{I_{K,N2}} + \frac{I_C}{I_{K,N1} B_{0,2}}\left(1 + \frac{I_C}{I_{K,N2}}\right)^2}
$$

Dabei sind $I_{K,N1}$ und $I_{K,N2}$ die Knieströme zur starken Injektion von $T_1$ und $T_2$; es gilt in den meisten Fällen $I_{K,N2} \approx 2 \dots 3\, I_{K,N1}$. Die Stromverstärkung nimmt im Hochstrombereich sehr schnell ab; besonders deutlich erkennt man dies durch eine Grenzwertbetrachtung [2.8]:

$$
\lim_{I_C \to \infty} B(I_C) = \frac{B_{0,1} I_{K,N1} B_{0,2}^2 I_{K,N2}^2}{I_C^3}
$$
<!-- page-import:0208:end -->

<!-- page-import:0209:start -->
172 2. Bipolartransistor

**Abb. 2.123.** Kleinsignalersatzschaltbild eines Darlington-Transistors: vollständig (oben) und nach Vereinfachung (unten)

Die Stromverstärkung nimmt beim Darlington bei großen Strömen mit $1/I_C^3$, beim Einzeltransistor dagegen nur mit $1/I_C$ ab.

## 2.4.4.4 Kleinsignalverhalten

Zur Bestimmung des Kleinsignalverhaltens des Darlington-Transistors in einem Arbeitspunkt A werden zusätzlich zu den Arbeitspunktströmen $I_{B,A}$ und $I_{C,A}$ die inneren Ströme $I_{C1,A}$ und $I_{C2,A}$ benötigt, d.h. die Aufteilung des Kollektorstroms muss bekannt sein; damit erhält man zunächst die Kleinsignalparameter der beiden Transistoren:

$$
S_{1/2}=\frac{I_{C\,1/2,A}}{U_T}, \quad r_{BE\,1/2}=\frac{\beta_{1/2}}{S_{1/2}}, \quad r_{CE\,1/2}=\frac{U_{A\,1/2}}{I_{C\,1/2,A}}
$$

Die Early-Spannungen sind meist etwa gleich groß; man kann dann mit einer Early-Spannung rechnen: $U_A \approx U_{A1} \approx U_{A2}$. Der Arbeitspunkt wird im Bereich großer Stromverstärkung gewählt; dort gilt $I_{C2,A} \gg I_{C1,A}$ und man kann die Näherung $I_{C2,A} \approx I_{C,A}$ verwenden, d.h. der Kollektorstrom des Darlingtons fließt praktisch vollständig durch $T_2$.

Abbildung 2.123 zeigt im oberen Teil das vollständige Kleinsignalersatzschaltbild eines Darlington-Transistors; es gilt für den npn- und für den pnp-, jedoch nicht für den komplementären pnp-Darlington. Dieses umfangreiche Ersatzschaltbild wird jedoch nur selten verwendet, da man den Darlington aufgrund seiner Ähnlichkeit mit einem Einzeltransistor ausreichend genau durch das Ersatzschaltbild eines Einzeltransistors beschreiben kann, siehe Abb. 2.123; dabei kann man die Parameter $S$, $r_{BE}$ und $r_{CE}$ entweder aus den Kennlinien oder durch eine Umrechnung aus dem vollständigen Ersatzschaltbild bestimmen $^{37}$. Die Umrechnung der Parameter liefert mit $\beta_1,\beta_2 \gg 1$:

$$
S \approx S_1\,\frac{1+S_2\,(r_{BE2}\parallel R)}{1+S_1\,(r_{BE2}\parallel R)}
\qquad \overset{R \gg r_{BE2}}{\approx} \qquad \frac{S_2}{2}
$$

37 Es handelt sich hierbei nicht um eine Äquivalenztransformation, da die Umrechnung zusätzlich einen Widerstand zwischen Basis und Kollektor liefert, der jedoch vernachlässigt werden kann.
<!-- page-import:0209:end -->

<!-- page-import:0210:start -->
173

## 2.4 Grundschaltungen

$$
r_{BE} \approx r_{BE1} + \beta_1\,(r_{BE2}\parallel R)
\qquad \overset{R\gg r_{BE2}}{\approx} \qquad 2\,r_{BE1}
$$

$$
r_{CE} \approx r_{CE2}\parallel r_{CE1}\,\frac{1 + S_1\,(r_{BE2}\parallel R)}{1 + S_2\,(r_{BE2}\parallel R)}
\qquad \overset{R\gg r_{BE2}}{\approx} \qquad \frac{2}{3}\,r_{CE2}
$$

Für die Kleinsignalstromverstärkung folgt:

$$
\beta \;=\; S\,r_{BE} \;\approx\; \beta_1\beta_2\,\frac{R}{r_{BE2}+R}
\qquad \overset{R\gg r_{BE2}}{\approx} \qquad \beta_1\beta_2
\tag{2.164}
$$

Die Bedingung $R \gg r_{BE2}$ ist genau dann erfüllt, wenn der Strom durch den Widerstand $R$ wegen $I_{B2} \gg I_R$ vernachlässigt werden kann; es gilt dann:

$$
I_{C2,A} \approx I_{C,A}\;,\qquad I_{C1,A} \approx \frac{I_{C,A}}{B_2}
$$

Dazu muss der Darlington im Bereich maximaler Stromverstärkung $B$ betrieben werden, d.h. es muss $I_{C,A} \gg B_2 I_{R,max}$ gelten, siehe Abb. 2.122. Damit erhält man im Bereich maximaler Stromverstärkung für den Darlington-Transistor:

*Darlington-Transistor*

$$
S \approx \frac{S_2}{2} \approx \frac{1}{2}\,\frac{I_{C,A}}{U_T}
\tag{2.165}
$$

$$
r_{BE} = \frac{\beta}{S} \approx 2\,\frac{\beta_1\beta_2 U_T}{I_{C,A}}
\tag{2.166}
$$

$$
r_{CE} \approx \frac{2}{3}\,r_{CE2} \approx \frac{2}{3}\,\frac{U_A}{I_{C,A}}
\tag{2.167}
$$

Für den komplementären pnp-Darlington folgt in gleicher Weise zunächst:

$$
S \approx S_1\,(1 + S_2\,(r_{BE2}\parallel R))
\qquad \overset{R\gg r_{BE2}}{\approx} \qquad S_2
$$

$$
r_{BE} = r_{BE1}
$$

$$
r_{CE} = r_{CE2}\parallel \frac{r_{CE1}}{1 + S_2\,(r_{BE2}\parallel R)}
\qquad \overset{R\gg r_{BE2}}{\approx} \qquad \frac{1}{2}\,r_{CE2}
$$

Gl. (2.164) gilt in gleicher Weise. Man erhält im Bereich maximaler Stromverstärkung für den komplementären Darlington-Transistor:
<!-- page-import:0210:end -->

<!-- page-import:0211:start -->
174 2. Bipolartransistor

**Abb. 2.124.** Schaltverhalten eines Darlington-Transistors

*komplementärer Darlington-Transistor*

$$
S \approx S_2 \approx \frac{I_{C,A}}{U_T}
\qquad\qquad\qquad\qquad\qquad\qquad (2.168)
$$

$$
r_{BE}=\frac{\beta}{S}\approx \frac{\beta_1\beta_2U_T}{I_{C,A}}
\qquad\qquad\qquad\qquad\qquad (2.169)
$$

$$
r_{CE}\approx \frac{1}{2}\,r_{CE2}\approx \frac{1}{2}\,\frac{U_A}{I_{C,A}}
\qquad\qquad\qquad\qquad\qquad (2.170)
$$

## 2.4.4.5 Schaltverhalten

Der Darlington-Transistor wird häufig als Schalter eingesetzt; dabei kann man aufgrund der großen Stromverstärkung große Lastströme mit vergleichsweise kleinen Steuerströmen schalten. Besonders kritisch ist dabei das Abschalten der Last: der Transistor $T_1$ sperrt verhältnismäßig schnell, der Transistor $T_2$ jedoch erst dann, wenn die in der Basis gespeicherte Ladung über den Widerstand $R$ abgeflossen ist. Eine kurze Abschaltdauer wird folglich nur mit ausreichend kleinem Widerstand $R$ erreicht, siehe Abb. 2.124. Andererseits verringert sich durch einen kleinen Widerstand $R$ die Stromverstärkung. Man

**Abb. 2.125.**  
Aufbau eines npn-Darlington für Schaltanwendungen
<!-- page-import:0211:end -->

<!-- page-import:0212:start -->
2.4 Grundschaltungen

175

muss also einen Kompromiss finden; dabei werden bei Darlingtons für Schaltanwendungen kleinere Widerstände verwendet als bei Darlingtons für allgemeine Anwendungen.

Darlington-Transistoren für Schaltanwendungen enthalten neben den beiden Transistoren und dem Widerstand $R$ zusätzlich drei Dioden; Abb. 2.125 zeigt das vollständige Schaltbild eines entsprechenden npn-Darlingtons. Beim Abschalten kann man zur Verkürzung der Abschaltdauer den Basisstrom invertieren; in diesem Fall begrenzen die Dioden $D_1$ und $D_2$ die Sperrspannung an den Basis-Emitter-Übergängen. Die Diode $D_3$ dient als Freilaufdiode bei induktiven Lasten.
<!-- page-import:0212:end -->

<!-- page-import:0213:start -->
[unclear]
<!-- page-import:0213:end -->

<!-- page-import:0395:start -->
358  4. Verstärker

a Differenzaussteuerung

b Gleichtaktaussteuerung

**Abb. 4.69.** Aussteuerung eines npn-Differenzverstärkers im Arbeitspunkt

um die halbe ursprüngliche Stromquelle; Abb. 4.70 verdeutlicht den Übergang von einer idealen zu einer realen Stromquelle und deren Aufteilung in zwei Stromquellen. Im Kleinsignalersatzschaltbild entfallen die Stromquellen und die negative Versorgungsspannung fällt mit der Kleinsignalmasse zusammen.

Damit ist der npn-Differenzverstärker auf die Emitterschaltung zurückgeführt und man kann die Ergebnisse aus Abschnitt 2.4.1 verwenden. Dasselbe gilt für den n-Kanal-Differenzverstärker; er zerfällt in äquivalente Sourceschaltungen und man kann die Ergebnisse aus Abschnitt 3.4.1 verwenden.

Die Aufteilung in getrennte Ersatzschaltbilder für Differenz- und Gleichtaktaussteuerung ist eine Anwendung des Bartlett’schen Symmetrietheorems, das allerdings nur für lineare Schaltungen gilt. Deshalb müsste man beim Differenzverstärker streng genommen zunächst zum Kleinsignalersatzschaltbild übergehen, um das Theorem anwenden zu können. Die Beschränkung auf lineare Schaltungen ist allerdings nur bei Differenzaussteuerung erforderlich, weil hier die Kennlinien der Bauteile ausgehend vom Arbeitspunkt schiefsymmetrisch ausgesteuert werden, was nur bei linearen Kennlinien schiefsymmetri-
<!-- page-import:0395:end -->

<!-- page-import:0399:start -->
362  4. Verstärker

Differenz- und Gleichtaktgrößen definiert sind, muss man die Nebenbedingungen $u_{a1} = -u_{a2}$ und $u_{a1} = u_{a2}$ zur Kennzeichnung von Differenz- und Gleichtaktaussteuerung verwenden. Das hat zur Folge, dass sich die Definitionen des Differenz- und Gleichtakt-Ausgangswiderstands nur in den Nebenbedingungen und nicht in den Kleinsignalgrößen unterscheiden. Bei beiden Ausgangswiderständen wird $u_{a1}/i_{a1}$ gebildet; der Unterschied kommt durch die andere Ansteuerung des zweiten Ausgangs zustande.

Die Ausgangswiderstände hängen beim npn-Differenzverstärker wie bei der Emitterschaltung vom Innenwiderstand $R_g$ der Signalquelle ab. Da dieser im allgemeinen kleiner ist als die Eingangswiderstände, kann man sich ohne größeren Fehler auf die Kurzschlussausgangswiderstände beschränken; deshalb sind $r_{a,D}$ und $r_{a,Gl}$ mit der Nebenbedingung $u_D = u_{Gl} = 0$ angegeben. Beim n-Kanal-Differenzverstärker tritt diese Abhängigkeit wegen der isolierten Gate-Anschlüsse der Mosfets nicht auf; hier ist $R_g$ am Ausgang nicht sichtbar.

Mit den Ergebnissen für die Emitterschaltung aus Abschnitt 2.4.1 und für die Sourceschaltung aus Abschnitt 3.4.1 erhält man für den Differenzverstärker mit Widerständen; dabei folgen den geschweiften Klammern die Werte für den npn-Differenzverstärker (oben) und den n-Kanal-Differenzverstärker (unten):

*Differenzverstärker mit Widerständen*

$$
A_D = \left.\frac{u_{a1}}{u_D}\right|_{i_{a1}=i_{a2}=0}
=
\begin{cases}
-\frac{S}{2}(R_C \parallel r_{CE}) \qquad r_{CE} \gg R_C \qquad \approx -\frac{1}{2}SR_C \\
-\frac{S}{2}(R_D \parallel r_{DS}) \qquad r_{DS} \gg R_D \qquad \approx -\frac{1}{2}SR_D
\end{cases}
\qquad (4.79)
$$

$$
r_{a,D} = \left.\frac{u_{a1}}{i_{a1}}\right|_{u_{a1}=-u_{a2}}
=
\begin{cases}
R_C \parallel r_{CE} \qquad r_{CE} \gg R_C \qquad \approx R_C \\
R_D \parallel r_{DS} \qquad r_{DS} \gg R_D \qquad \approx R_D
\end{cases}
\qquad (4.80)
$$

$$
r_{e,D} = \frac{u_D}{i_{e1}}
=
\begin{cases}
2r_{BE} \\
\infty
\end{cases}
\qquad (4.81)
$$

$$
A_{Gl} = \left.\frac{u_{a1}}{u_{Gl}}\right|_{i_a=0}
\approx
\begin{cases}
-\frac{R_C}{2r_0} \\
-\frac{SR_D}{2(S + S_B)r_0} \qquad S \gg S_B \qquad \approx -\frac{R_D}{2r_0}
\end{cases}
\qquad (4.82)
$$

$$
r_{a,Gl} = \left.\frac{u_{a1}}{i_{a1}}\right|_{u_{a1}=u_{a2}}
=
\begin{cases}
R_C \parallel \beta\, r_{CE} \approx R_C \\
R_D \parallel 2S\, r_{DS}r_0 \approx R_D
\end{cases}
\qquad (4.83)
$$

$$
r_{e,Gl} = \frac{u_{Gl}}{i_{e1}}
=
\begin{cases}
2\beta\, r_0 + r_{BE} \approx 2\beta\, r_0 \\
\infty
\end{cases}
\qquad (4.84)
$$

$$
G = \frac{A_D}{A_{Gl}}
\approx
\begin{cases}
Sr_0 \\
(S + S_B)r_0 \qquad S \gg S_B \qquad \approx Sr_0
\end{cases}
\qquad (4.85)
$$
<!-- page-import:0399:end -->

<!-- page-import:0537:start -->
500 4. Verstärker

a Basisschaltung

b Gateschaltung

**Abb. 4.176.**  
Basis- und Gateschaltung

des Ruhestroms wird ein wechselspannungsmäßig kurzgeschlossener Basis- bzw. Gate-Spannungsteiler oder, wie in Abb. 4.176, eine negative Versorgungsspannung verwendet. Für die Basisschaltung erhält man:

$$
u_{r,0}=u_{r,T}+\frac{i_{r,RC}}{S}
$$

$$
i_{r,0}=\frac{u_{r,T}}{R_E}+i_{r,T}+i_{r,RE}+\frac{SR_E+1}{SR_E}\,i_{r,RC}
$$

Daraus folgt mit $SR_C \gg 2$ und $SR_E \gg 1$:

$$
|u_{r,0}|^2 \approx |u_{r,T}|^2=\frac{2kT}{S}+4kTR_B
$$

(4.232)

$$
|i_{r,0}|^2 \approx |i_{r,T}|^2+\frac{4kT}{R_E}+\frac{4kT}{R_C}
=4kT\left(\frac{1}{2r_{BE}}+\frac{1}{R_E}+\frac{1}{R_C}\right)
$$

(4.233)

Hier macht sich im Gegensatz zur Emitterschaltung auch der Kollektorwiderstand $R_C$ bemerkbar, da bei der Umrechnung von $i_{r,RC}$ auf den Emitter keine Abschwächung um den Faktor $\beta$ erfolgt. Bei Verwendung eines Spannungsteilers an der Basis wirkt sich dessen Innenwiderstand $R_b$ wie ein zusätzlicher Basisbahnwiderstand aus, d.h. die äquivalente Rauschspannungsdichte nimmt entsprechend zu; gleiches gilt auch für den Widerstand $R_{BV}$ im Abschnitt 2.4.3.

Für die Gateschaltung gilt:

$$
|u_{r,0}|^2 \approx |u_{r,F}|^2=\frac{8kT}{3S}
$$

(4.234)

$$
|i_{r,0}|^2 \approx |i_{r,F}(f)|^2+\frac{4kT}{R_S}+\frac{4kT}{R_D}
\approx 4kT\left(\frac{1}{R_S}+\frac{1}{R_D}\right)
$$

(4.235)

Hier kann die Rauschstromdichte des Mosfets vernachlässigt werden.

#### 4.2.4.8 Stromquelle

Bei einer Stromquelle ist die Rauschstromdichte am Ausgang von Interesse; sie soll so klein sein, dass die Rauschzahl der Schaltung, in der die Stromquelle eingesetzt wird, nicht oder nur wenig zunimmt. Eine Stromquelle wird im allgemeinen anstelle eines hochohmigen
<!-- page-import:0537:end -->

<!-- page-import:0565:start -->
528 5. Operationsverstärker

**Abb. 5.26.** Modell eines Operationsverstärkers mit 741-Struktur zur Berechnung der Differenzverstärkung. *HIP* = Hochimpedanzpunkt

den hohen Innenwiderstand am Hochimpedanzpunkt *HIP* nicht beeinträchtigt, setzt man für $T_5$ eine Darlingtonschaltung gemäß Abschnitt 2.4.4 auf S. 166 ein.

Auf dem in Abb. 5.24 gezeigten Prinzip beruhen die meisten klassischen integrierten Universalverstärker. Bei ihnen wird jedoch der Eingangs-Differenzverstärker meist mit pnp-Transistoren und die zweite Stufe mit npn-Transistoren realisiert. Dadurch ergibt sich die komplementär aufgebaute Schaltung in in Abb. 5.25. Die Kollektorströme des Differenzverstärkers betragen hier nur $10\ \mu\text{A}$. Die Endstufe wird bei den klassischen Operationsverstärkern als komplementärer Emitterfolger ausgeführt, um positive und negative Ausgangsströme zu ermöglichen, die groß gegenüber dem Ruhestrom sind. Wegen technologischen Einschränkungen bestehen die handelsüblichen Schaltungen am Eingang und Ausgang aus einem Verbund mehrerer Transistoren. Die hier dargestellten Schaltungen geben lediglich die Funktionsweise wieder.

Operationsverstärker mit zweistufiger Spannungsverstärkung sind bei Gegenkopplung potentiell instabil und neigen zum Schwingen. Deshalb ist hier der Kondensator $C_k$ vorgesehen, der die Verstärkung bei hohen Frequenzen so weit reduziert, dass die Schaltung selbst bei voller Gegenkopplung (auf $A = 1$) stabil bleibt. Die Dimensionierung der Frequenzgangkorrektur wird im Abschnitt 5.4 beschrieben.

Die Differenzverstärkung des Operationsverstärker lässt sich mit dem Modell in Abb. 5.26 berechnen. Die Transistoren $T_1$ und $T_2$ des Differenzverstärkers am Eingang werden durch die Spannungsfolger repräsentiert. Die Verbindung der Emitter erfolgt über die Steilheitswiderstände $r_S = 1/S$. Der Strom $I_q$ gibt an, wie stark sich der Strom durch den einen Transistor bei Aussteuerung erhöht bzw. durch den anderen verringert: $I_q = U_D/2r_S$. Dieser Strom gelangt über den Stromspiegel an den Ausgang des Differenzverstärkers und bewirkt am dort vorhandenen Innenwiderstand $r_{HIP} = 500\ \text{k}\Omega$ die Spannung:

$$
U_1 = -2\,I_q\,r_{HIP} = -2\,r_{HIP}\frac{U_D}{2r_S} = -\frac{500\,\text{k}\Omega}{2{,}5\,\text{k}\Omega}\cdot U_D = -200\cdot U_D
$$

Der Differenzverstärker besitzt mit den in dem Modell eingetragenen Parametern also eine Spannungsverstärkung von $A_1 = U_1/U_D = -200$ und die Steilheit:

$$
S_1 = \frac{2\,I_q}{U_D} = 2\,\frac{U_D}{2r_S}\,\frac{1}{U_D} = \frac{1}{r_S} = 0{,}4\ \frac{\text{mA}}{\text{V}}
$$

Die Darlingtonschaltung $T_5$ verstärkt die Spannung $U_1$ und liefert den Ausgangsstrom $S_2U_1$, der am Widerstand $r_{HIP2}$ die Spannung

$$
U_2 = -S_2\,r_{HIP2}\,U_1 = -5\ \frac{\text{mA}}{\text{V}}\cdot 100\,\text{k}\Omega \cdot U_1 = -500\cdot U_1
$$
<!-- page-import:0565:end -->
