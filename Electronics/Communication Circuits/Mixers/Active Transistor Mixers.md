# Active Transistor Mixers

<!-- page-import:0801:start -->
764  10. Analogrechenschaltungen

$$
\Delta I = -\frac{2U_y}{R_y}\tanh \frac{U_1}{2U_T}
= -\frac{2U_y}{R_y}\cdot \frac{e^{\frac{U_1}{U_T}}-1}{e^{\frac{U_1}{U_T}}+1}
$$
(10.38)

Die beiden als Dioden geschalteten Transistoren $D_1$ und $D_2$ in Abb. 10.33 sollen diesen nur für kleine Werte von $U_1$ linearen Zusammenhang auch für große Eingangssignale von $U_x$ linearisieren. Sie dienen zur Logarithmierung des Eingangssignals:

$$
U_1 = U_{D2} - U_{D1} = U_T \ln \frac{I_4}{I_{CS}} - U_T \ln \frac{I_3}{I_{CS}}
$$

Daraus folgt: $^1$

$$
U_1 = U_T \ln \frac{I_4}{I_3}
= U_T \ln \frac{I_7 - \frac{U_x}{R_x}}{I_7 + \frac{U_x}{R_x}}
= -2U_T\,\operatorname{atanh}\frac{U_x}{I_7R_x}
$$
(10.39)

Einsetzen in Gl. (10.38) liefert die Stromdifferenz:

$$
\Delta I = \frac{2U_xU_y}{R_xR_yI_7}
$$
(10.40)

Der als Stromsubtrahierer beschaltete Operationsverstärker bildet daraus die Ausgangsspannung:

$$
U_a = \Delta I\,R_z = \frac{2R_z}{R_xR_yI_7}\cdot U_xU_y = \frac{U_xU_y}{E}
$$
(10.41)

Darin ist $E = R_xR_yI_7/2R_z$ die Recheneinheit. Sie wird meist gleich 10 V gewählt. Da $U_T$ herausfällt, ergibt sich eine gute Temperaturkompensation. Die Gl. (10.40) bzw. (10.41) ergibt sich hier ohne Reihenentwicklung. Deshalb ist ein wesentlich größerer Eingangsspannungsbereich für $U_x$ zulässig. Die Aussteuerungsgrenze ist dann erreicht, wenn einer der gesteuerten Stromquellentransistoren sperrt. Daraus folgt die Bedingung:

$|U_x| < R_x\,I_7$ und $|U_y| < R_y\,I_8$

Steilheitsmultiplizierer eignen sich nicht nur für Aufgaben im Niederfrequenzbereich, sondern auch als Mischer in der Nachrichtentechnik. Diese Anwendung wird im Abschnitt 25.5.2 auf S. 1479 noch genauer beschrieben.

Der Eingang für die Spannung $U_y$ ist von Natur aus linear wegen der Stromgegenkopplung durch $R_y$. Die Transdioden $D_1$ und $D_2$ bewirken eine Vorverzerrung der Spannung $U_x$ mit einer arctanh-Kennlinie, die die tanh-Kennlinie des Differenzverstärkers linearisiert. In Abb. 10.34 ist die vorverzerrte Spannung $U_1$ zusammen mit der resultierenden Ausgangsspannung gegenübergestellt zusammen mit der Übertragungskennlinie ohne Vorverzerrung. Man erkennt auf welche Weise die Vorverzerrung der Verrundung der Kennlinie des Differenzverstärkers entgegenwirkt. Diese Methode zur Linearisierung eines Differenzverstärkers lässt sich nicht nur bei Analogmultiplizierern vorteilhaft einsetzen, sondern immer dann, wenn man einen Differenzverstärker bei geringen Verzerrungen weit aussteuern möchte.

---

$^1\ \tanh(x)=\frac{e^x-e^{-x}}{e^x+e^{-x}}=\frac{e^{2x}-1}{e^{2x}+1}\qquad \operatorname{atanh}(x)=-\frac{1}{2}\ln\frac{1-x}{1+x}$
<!-- page-import:0801:end -->

<!-- page-import:1503:start -->
1466 25. Mischer

$$F_{DSB}=\frac{1}{G_A},\quad F_{SSB}=1+2\left(\frac{1}{G_A}-1\right)=\frac{2}{G_A}-1$$

Wie beim Diodenmischer wird auch hier angenommen, dass bei der Einseitenband-Rauschzahl $F_{SSB}$ gleiche Verhältnisse bei der HF- und der Spiegelfrequenz vorliegen, siehe Abschnitt 25.3.6.2.

## 25.5 Aktive Mischer mit Transistoren

In integrierten Schaltungen werden fast ausschließlich multiplikative Mischer mit Transistoren eingesetzt. Bei diesen Mischern wird das Eingangssignal mit einem Spannungs-Strom-Wandler in einen Strom umgewandelt und mit einem oder zwei als Umschalter betriebenen Differenzverstärkern auf den Ausgang geschaltet. Diese Mischer werden auch als aktive Mischer bezeichnet.

Wir beschreiben im folgenden die beiden gängigen Schaltungen: den Gegentaktmischer (single balanced mixer) und den Doppel-Gegentaktmischer (double balanced mixer); letzterer wird nach seinem Erfinder B. Gilbert auch als Gilbert-Mischer (Gilbert mixer) bezeichnet. Beide Schaltungen können mit Bipolartransistoren oder Mosfets realisiert werden; wir beschränken uns im folgenden auf die Ausführungen mit Bipolartransistoren.

### 25.5.1 Gegentaktmischer

Abbildung 25.66 zeigt das Schaltbild eines Gegentaktmischers (single balanced mixer), der als Aufwärtsmischer betrieben wird. Er besteht aus einer Emitterschaltung mit Stromgegenkopplung $(T_3, R_E)$, die als Spannungs-Strom-Wandler (U/I-Wandler) arbeitet, und einem Differenzverstärker $(T_1, T_2)$, mit dem der Ausgangsstrom der Emitterschaltung abwechselnd auf den HF-Ausgang oder auf die Versorgungsspannung geschaltet wird. Am Eingang wird die ZF-Kleinsignalspannung $u_{ZF}$ zusammen mit einer Gleichspannung $U_0$ zur Einstellung des Arbeitspunkts zugeführt. Die Umschaltung des Differenzverstärkers erfolgt durch eine LO-Spannung $U_{LO}$, die im Idealfall rechteckförmig ist. Aus den Mischprodukten im Strom $I_{C2}$ wird der HF-Kleinsignalstrom $i_{HF}$ mit einem HF-Filter abgetrennt und über eine Koppelkapazität $C_k$ dem HF-Lastwiderstand $R_{L,HF}$ zugeführt.

**Abb. 25.66.**  
Gegentaktmischer mit Transistoren
<!-- page-import:1503:end -->

<!-- page-import:1504:start -->
25.5 Aktive Mischer mit Transistoren 1467

Abb. 25.67. Funktionsprinzip (= Kleinsignalersatzschaltbild) eines Gegentaktmischers mit Transistoren

Das Funktionsprinzip des Gegentaktmischers ist in Abb. 25.67 dargestellt. Man erkennt, dass der Umschalter bezüglich des Übertragungsverhaltens nur als Ein-/Ausschalter wirkt; deshalb arbeitet der Gegentaktmischer in dieser Form als multiplikativer Mischer mit unipolarem Rechtecksignal, wie ein Vergleich mit Abb. 25.15 auf Seite 1403 zeigt.

#### 25.5.1.1 Berechnung des Übertragungsverhaltens

Der Strom $I_{C3}$ am Ausgang der Emitterschaltung setzt sich aus dem Ruhestrom $I_{C3,A}$ und dem Kleinsignalstrom $i_{C3}$ zusammen:

$$
I_{C3} = I_{C3,A} + i_{C3}
$$

(25.60)

Der Ruhestrom $I_{C3,A}$ wird durch die Gleichspannung $U_0$ am Eingang eingestellt. Für den Kleinsignalstrom $i_{C3}$ gilt:

$$
i_{C3} = S u_{ZF}
$$

(25.61)

Dabei ist

$$
S = \frac{S_3}{1 + S_3 R_E} \qquad s_3 = I_{C3,A}/U_T \qquad = \frac{I_{C3,A}}{U_T + I_{C3,A} R_E}
$$

(25.62)

die Steilheit des Spannungs-Strom-Wandlers.

Aus dem Strom $I_{C3}$ erhält man mit Hilfe der Stromkennlinien des Differenzverstärkers die Kollektorströme der Transistoren $T_1$ und $T_2$; aus (4.61) auf Seite 344 folgt mit den Zusammenhängen $2I_0 = I_{C3}$ und $U_D = U_{LO}$:

$$
I_{C1} = \frac{I_{C3}}{2} \left(1 + \tanh \frac{U_{LO}}{2U_T}\right), \quad
I_{C2} = \frac{I_{C3}}{2} \left(1 - \tanh \frac{U_{LO}}{2U_T}\right)
$$

(25.63)

Dabei ist $U_T = 26\,\mathrm{mV}$ die Temperaturspannung. Abbildung 25.68 zeigt die Ströme in Abhängigkeit von der LO-Spannung. Für $U_{LO} < -5U_T = -130\,\mathrm{mV}$ und $U_{LO} > 5U_T = 130\,\mathrm{mV}$ ist der Differenzverstärker praktisch vollständig ausgesteuert und arbeitet wie gewünscht als Schalter. Dazwischen liegt der Umschaltbereich, in dem beide Transistoren leiten.

Für den Zeitverlauf des Stroms $I_{C2}$ erhält man durch Einsetzen von (25.60) und (25.61) in (25.63):

$$
I_{C2}(t) = \underbrace{\left[I_{C3,A} + S u_{ZF}(t)\right]}_{s_{ZF}(t)}
\underbrace{\left[\frac{1}{2}\left(1 - \tanh \frac{U_{LO}(t)}{2U_T}\right)\right]}_{s'_{LO}(t)}
$$

(25.64)

Man erkennt, dass der Gegentaktmischer als multiplikativer Mischer arbeitet: das ZF-Signal $s_{ZF}(t)$ wird mit dem LO-Signal $s'_{LO}(t)$ multipliziert. Zusätzlich tritt ein Gleichanteil
<!-- page-import:1504:end -->

<!-- page-import:1505:start -->
1468  25. Mischer

**Abb. 25.68.** Stromkennlinien des Differenzverstärkers

entsprechend dem Ruhestrom $I_{C3,A}$ auf, der ebenfalls mit $s'_{LO}(t)$ multipliziert wird. Das LO-Signal $s'_{LO}(t)$ folgt aus der LO-Spannung $U_{LO}(t)$ unter Berücksichtigung des Schaltverhaltens des Differenzverstärkers. Abbildung 25.69 verdeutlicht die Zusammenhänge.

#### 25.5.1.2 Rechteckförmige LO-Spannung

Wir betrachten zunächst den Betrieb mit einer bipolaren, rechteckförmigen LO-Spannung mit der Amplitude $\hat{u}_{LO}$; dann ist auch das LO-Signal $s'_{LO}(t)$ rechteckförmig mit den Werten:

$$
s'_{LO}=\frac{1}{2}\left(1-\tanh\frac{U_{LO}}{2U_T}\right)\quad\overset{U_{LO}=\pm\hat{u}_{LO}}{\underset{\tanh(-x)=-\tanh x}{=}}\quad\frac{1}{2}\left(1\mp\tanh\frac{\hat{u}_{LO}}{2U_T}\right)
$$

Abbildung 25.70a zeigt den Verlauf von $U_{LO}(t)$ und $s'_{LO}(t)$ für verschiedene Amplituden. Für $\hat{u}_{LO}>5U_T=130\,\mathrm{mV}$ erhält man für $s'_{LO}(t)$ näherungsweise ein unipolares Rechtecksignal mit den Werten 0 und 1. In diesem Fall kann man den Mischer als idealen Schalter betrachten.

Zur weiteren Berechnung wird das Signal $s'_{LO}(t)$ in eine Fourier-Reihe entwickelt:

$$
s'_{LO}(t)=c_0+c_1\cos\omega_{LO}t+c_3\cos3\omega_{LO}t+c_5\cos5\omega_{LO}t+\cdots
$$

$$
=c_0+\sum_{n=0}^{\infty}c_{(2n+1)}\cos(2n+1)\omega_{LO}t
\qquad\qquad (25.65)
$$

a  Modell des Gegentaktmischers

b  Kennlinie für das Schaltverhalten

**Abb. 25.69.** Darstellung des Gegentaktmischers als multiplikativen Mischer unter Berücksichtigung des Schaltverhaltens des Differenzverstärkers
<!-- page-import:1505:end -->

<!-- page-import:1506:start -->
25.5 Aktive Mischer mit Transistoren 1469

a rechteckförmige LO-Spannung

b sinusförmige LO-Spannung

**Abb. 25.70.** LO-Spannung $U_{LO}(t)$ und LO-Signal $s'_{LO}(t)$ für die Amplituden $\hat{u}_{LO} =$ 50 mV / 100 mV / 200 mV

Die Reihe enthält neben dem Gleichanteil $c_0$ nur Cosinus-Anteile bei der LO-Frequenz $f_{LO}$ und ungeradzahligen Vielfachen davon, da $s'_{LO}(t)$ gemäß Abb. 25.70 eine gerade Funktion der Zeit ist $(s'_{LO}(t) = s'_{LO}(-t))$ und ein Tastverhältnis von 50% aufweist. Man kann $s'_{LO}(t)$ als Summe eines Gleichanteils $c_0 = 1/2$ und eines bipolaren Rechtecksignals mit der Amplitude

$$
\frac{1}{2}\tanh \frac{\hat{u}_{LO}}{2U_T}
$$

auffassen; dann erhält man unter Verwendung der Reihenentwicklung für ein bipolares Rechtecksignal in (25.1) die Koeffizienten:

$$
c_0 = \frac{1}{2}\;,\quad c_1 = \frac{2}{\pi}\tanh \frac{\hat{u}_{LO}}{2U_T}\;,\quad c_3 = -\frac{2}{3\pi}\tanh \frac{\hat{u}_{LO}}{2U_T}\;,\quad \ldots \qquad (25.66)
$$

Abbildung 25.71 zeigt die Koeffizienten $c_1$ und $|c_3|$ in Abhängigkeit von der Amplitude $\hat{u}_{LO}$. Sie gehen für $\hat{u}_{LO} \to \infty$ in die Koeffizienten für ein unipolares Rechtecksignal über; praktisch ist dies für $\hat{u}_{LO} > 5U_T$ der Fall.

### 25.5.1.3 Sinusförmige LO-Spannung

Die Erzeugung einer rechteckförmigen LO-Spannung wird mit zunehmender LO-Frequenz immer schwieriger; deshalb wird bei hohen Frequenzen die näherungsweise sinusförmige Ausgangsspannung eines Hochfrequenz-Oszillators verwendet. Abbildung 25.70b zeigt
<!-- page-import:1506:end -->

<!-- page-import:1507:start -->
1470  25. Mischer

Abb. 25.71.  
Koeffizienten $c_1$ und $|c_3|$ der Fourier-Reihe des LO-Signals $s'_{LO}(t)$ für eine rechteckförmige und eine sinusförmige LO-Spannung

den Verlauf von $U_{LO}(t)$ und $s'_{LO}(t)$ für diesen Fall. Auch hier geht das LO-Signal $s'_{LO}(t)$ mit zunehmender Amplitude in ein unipolares Rechtecksignal über. Die Koeffizienten der Fourier-Reihe sind mit Ausnahme des Gleichanteils $c_0$ kleiner als bei einer rechteckförmigen LO-Spannung mit gleicher Amplitude; Abb. 25.71 zeigt einen Vergleich der Koeffizienten $c_1$ und $|c_3|$.

#### 25.5.1.4 Kleinsignalverhalten

Wir können nun das Kleinsignal-Übertragungsverhalten berechnen, indem wir eine sinusförmige ZF-Spannung

$$
u_{ZF}(t) = \hat{u}_{ZF}\cos \omega_{ZF} t
$$

und die Fourier-Reihe für $s'_{LO}(t)$ aus (25.65) in (25.64) einsetzen:

$$
I_{C2}(t) = \bigl[I_{C3,A} + S u_{ZF}(t)\bigr]\, s'_{LO}(t)
$$

$$
= \bigl[I_{C3,A} + S\hat{u}_{ZF}\cos \omega_{ZF} t\bigr]\,[c_0 + c_1 \cos \omega_{LO} t + c_3 \cos 3\omega_{LO} t + \cdots]
$$

$$
= I_{C3,A}\,[c_0 + c_1 \cos \omega_{LO} t + c_3 \cos 3\omega_{LO} t + \cdots]
$$

$$
\qquad + c_0 S\hat{u}_{ZF}\cos \omega_{ZF} t
$$

$$
\qquad + \frac{c_1 S\hat{u}_{ZF}}{2}\,\bigl[\cos(\omega_{LO} + \omega_{ZF})t + \cos(\omega_{LO} - \omega_{ZF})t\bigr]
$$

$$
\qquad + \frac{c_3 S\hat{u}_{ZF}}{2}\,\bigl[\cos(3\omega_{LO} + \omega_{ZF})t + \cos(3\omega_{LO} - \omega_{ZF})t\bigr]
$$

$$
\qquad + \cdots
$$

Abbildung 25.72 zeigt das Betragsspektrum des Stroms $I_{C2}$. Wir nehmen an, dass der Mischer in Gleichlage arbeitet; dann gilt $f_{HF} = f_{LO} + f_{ZF}$. Das HF-Filter schließt alle Anteile mit Ausnahme des HF-Anteils kurz; daraus folgt für den HF-Strom

$$
i_{HF}(t) = \left.I_{C2}(t)\right|_{f=f_{HF}=f_{LO}+f_{ZF}} = \frac{c_1}{2}\,S\hat{u}_{ZF}\cos \omega_{HF} t
$$

und für die HF-Spannung:
<!-- page-import:1507:end -->

<!-- page-import:1508:start -->
25.5 Aktive Mischer mit Transistoren 1471

Abb. 25.72. Betragspektrum des Stroms $I_{C2}(t)$ für eine sinusförmige ZF-Spannung

$$
u_{HF}(t)=-R_{L,HF}\,i_{HF}(t)=-\frac{c_1}{2}\,S R_{L,HF}\,\hat{u}_{ZF}\cos\omega_{HF}t
$$

Wir nehmen dabei an, dass der Ausgangswiderstand des Transistors $T_2$ vernachlässigt werden kann. Für die Spannungszeiger gilt:

$$
\underline{u}_{HF}=-\frac{c_1}{2}\,S R_{L,HF}\,\underline{u}_{ZF}
\qquad (25.67)
$$

## 25.5.1.5 Mischverstärkung

Aus (25.67) folgt, dass der Gegentaktmischer wie ein Verstärker mit der *Mischverstärkung*

$$
A_M=\frac{\underline{u}_{HF}}{\underline{u}_{ZF}}
=-\frac{c_1}{2}\,S R_{L,HF}
\overset{(25.62)}{=}
-\frac{c_1}{2}\,\frac{S_3 R_{L,HF}}{1+S_3 R_E}
\qquad (25.68)
$$

arbeitet. Die Frequenzumsetzung tritt dabei nicht mehr explizit in Erscheinung.

Die Mischverstärkung ist um den Faktor $c_1/2$ geringer als die Verstärkung $A$ einer äquivalenten Emitterschaltung mit Stromgegenkopplung:

$$
A \overset{(2.82)}{=}-\frac{S R_C}{1+S R_E}
\overset{\substack{S=S_3\\R_C=R_{L,HF}}}{=}
-\frac{S_3 R_{L,HF}}{1+S_3 R_E}
\Rightarrow
A_M=\frac{c_1}{2}\,A
$$

Der Koeffizient $c_1$ resultiert aus der Funktionsweise eines multiplikativen Mischers und nimmt maximal den Wert $2/\pi \approx 0{,}64$ an, siehe Abb. 25.71. Der Faktor $1/2$ wird dadurch verursacht, dass bei der Mischung neben dem HF-Nutzband bei $f_{LO}+f_{ZF}$ ein Spiegelfrequenzband mit gleicher Amplitude bei $f_{LO}-f_{ZF}$ entsteht, das durch das HF-Filter unterdrückt wird, siehe Abb. 25.72. Demnach ist die Mischverstärkung mindestens um den Faktor $1/\pi$ $(\approx 10\,\mathrm{dB})$ geringer als die Verstärkung einer äquivalenten Emitterschaltung mit Stromgegenkopplung; typische Werte liegen im Bereich $|A_M|\approx 2\dots10\,(6\dots20\,\mathrm{dB})$.

## 25.5.1.6 Bandbreite

Wir haben die Mischverstärkung $A_M$ nur für den statischen Fall, d.h. ohne Berücksichtigung der Kapazitäten der Transistoren, berechnet; sie gilt deshalb streng genommen nur für niedrige Frequenzen. Die Bandbreite des Gegentaktmischers ist jedoch im allgemeinen sehr hoch; dies hat drei Ursachen:
<!-- page-import:1508:end -->

<!-- page-import:1509:start -->
1472  25. Mischer

– Die Emitterschaltung mit Stromgegenkopplung bildet zusammen mit den Transistoren des Differenzverstärkers eine Kaskodeschaltung und erreicht deshalb eine Grenzfrequenz, die zwischen der Steilheitsgrenzfrequenz $f_{Y21e}$ und der Transitfrequenz $f_T$ des Transistors $T_3$ liegt.  
– Der Transistor $T_2$ arbeitet bezüglich des Kleinsignalstroms in Basisschaltung mit der $\alpha$-Grenzfrequenz $f_\alpha \approx f_T$.  
– Die Ausgangskapazität des Transistors $T_2$ kann als Bestandteil der Kapazität des HF-Filters aufgefasst werden und wirkt sich deshalb nicht störend aus.

Deshalb kann man die Mischverstärkung auch bei höheren Frequenzen mit Hilfe der statischen Mischverstärkung abschätzen.

### 25.5.1.7 Anpassung

Bei hohen Frequenzen muss der Gegentaktmischer allseitig an den Wellenwiderstand $Z_W$ der externen Leitungen angepasst werden, um unerwünschte Reflexionen und Impedanztransformationen zu vermeiden. Dazu kann man dieselben Verfahren einsetzen wie bei Verstärkern:

– die Schaltungen zur Impedanztransformation aus Abschnitt 23.3.1;  
– die Verfahren zur Anpassung integrierter Verstärker aus Abschnitt 24.1.1, siehe Abb. 24.2 auf Seite 1324.

Abbildung 25.73 zeigt ein typisches Beispiel:

– Die Emitterschaltung am Eingang wird durch eine Basisschaltung mit dem Ruhestrom $I_0$ und dem Eingangswiderstand

$$
\frac{1}{S_3} = \frac{U_T}{I_0}
$$

ersetzt; für $I_0 \approx 520\,\mu\text{A}$ erhält man eine Anpassung an $Z_W = 50\,\Omega$. Wird eine Stromgegenkopplung zur Verbesserung der Linearität benötigt, kann man einen höheren Ruhestrom wählen und einen zusätzlichen Längswiderstand

$$
R_E = Z_W - \frac{1}{S_3} = Z_W - \frac{U_T}{I_0}
$$

einsetzen; dadurch bleibt die Anpassung erhalten. Die Basisschaltung hat allerdings den Nachteil, dass die Steilheit $S$ der Spannungs-Strom-Wandlung fest an den Wellenwiderstand $Z_W$ gekoppelt ist; durch Einsetzen von (25.69) und (25.70) in (25.62) erhält man mit und ohne $R_E$:

$$
S = \frac{1}{Z_W}
$$

(25.69)

(25.70)

(25.71)

Deshalb kann man die Mischverstärkung nicht über $S$ beeinflussen.  
– Am LO-Eingang wird ein Abschlusswiderstand $R_{LO}$ verwendet. Wenn die LO-Spannung symmetrisch zugeführt wird, muss $R_{LO} = 2Z_W$ gelten, damit beide Eingänge mit $Z_W$ abgeschlossen sind. Dabei wird unterstellt, dass die Eingangsimpedanzen der Transistoren $T_1$ und $T_2$ wesentlich größer sind als $Z_W$ und vernachlässigt werden können.
<!-- page-import:1509:end -->

<!-- page-import:1510:start -->
25.5 Aktive Mischer mit Transistoren 1473

Abb. 25.73. Beispiel zur Anpassung eines Gegentaktmischers

– Der Lastwiderstand $R_{L,HF} = Z_W$ am Ausgang wird mit einem kapazitiven Spannungsteiler $(C_1, C_2)$ angekoppelt; damit erhält man nach (23.38) und (23.39) einen transformierten Lastwiderstand:

$$
R_P = Z_W \left(1 + \frac{C_2}{C_1}\right)^2
$$

(25.72)

Die Koppelkapazität $C_k$ aus Abb. 25.66 wird nicht mehr benötigt, da der Lastwiderstand bereits durch den kapazitiven Spannungsteiler gleichspannungsmäßig entkoppelt ist. Abbildung 25.74 zeigt die Transformation. Wir nehmen im folgenden an, dass der Verlustwiderstand $R_V$ alle Verlustwiderstände des Parallelschwingkreises einschließlich des Ausgangswiderstands des Transistors $T_2$ repräsentiert 6. Dann lautet die Anpassungsbedingung $R_V = R_P$.

Die eingangsseitige Anpassung ist vor allem bei einem Betrieb als Abwärtsmischer wichtig, da in diesem Fall das HF-Signal am Eingang anliegt und die dem Mischer vorausgehenden HF-Komponenten häufig sehr empfindlich auf eine Fehlanpassung reagieren.

### 25.5.1.8 Mischgewinn

Wir können nun den Mischgewinn $G_M$ des Gegentaktmischers ermitteln. Er entspricht dem Übertragungsgewinn $G_T$ eines Verstärkers und wird mit (24.33) berechnet:

$$
G_M = G_T = \left(\frac{r_e}{R_g + r_e}\right)^2 A^2 \frac{4 R_g R_L}{(r_a + R_L)^2}
$$

Dabei ist $r_e$ der Eingangswiderstand, $A$ die Leerlaufverstärkung und $r_a$ der Ausgangswiderstand des Gegentaktmischers; $R_g$ ist der Innenwiderstand der Signalquelle und $R_L$ der

---

6 Unter dem Ausgangswiderstand des Transistors verstehen wir hier den Kehrwert des Realteils der Ausgangsadmittanz: $r_a = 1/\operatorname{Re}\{Y_a\}$. Bei niedrigen Frequenzen gilt $r_a = r_{CE} = U_A/I_{C,A}$, siehe (2.13); bei hohen Frequenzen ist der Ausgangswiderstand deutlich geringer.
<!-- page-import:1510:end -->

<!-- page-import:1511:start -->
1474  25. Mischer

a Schaltung  
b transformierte Darstellung

**Abb. 25.74.** Transformation des Lastwiderstands durch kapazitive Ankopplung

Lastwiderstand. Wir betrachten hier nur den beidseitig angepassten Fall mit $r_e = R_g = Z_W$ und $r_a = R_L$; dann gilt:

$$
G_M = \frac{A^2 Z_W}{4\,r_a}
$$

(25.73)

Die Leerlaufverstärkung und den Ausgangswiderstand kann man mit Hilfe der transformierten Darstellung in Abb. 25.74b ermitteln, da die Transformation verlustlos ist: an $R_P$ wird dieselbe Leistung abgegeben wie an $R_{L,HF}$. Da $R_V$ voraussetzungsgemäß alle Verlustwiderstände repräsentiert, folgt aus Abb. 25.74b:

$$
r_a = R_V
$$

(25.74)

Bei Leerlauf, d.h. ohne $R_P$, wirkt $R_V$ als Lastwiderstand; deshalb erhält man die Leerlaufverstärkung $A$ aus (25.68), indem man $R_V$ anstelle von $R_{L,HF}$ einsetzt:

$$
A = -\frac{1}{2}\,c_1 S R_V
$$

(25.75)

Dabei ist $S$ die Steilheit des Spannungs-Strom-Wandlers:

$$
S =
\begin{cases}
S_3 & \text{ohne Stromgegenkopplung} \\
S_3/(1 + S_3 R_E) & \text{mit Stromgegenkopplung}
\end{cases}
$$

(25.76)

Durch Einsetzen von (25.74) und (25.75) in (25.73) erhält man den *Mischgewinn eines Gegentaktmischers bei beidseitiger Anpassung*:

$$
G_M = \frac{1}{16}\,c_1^2 S^2 Z_W R_V
$$

(25.77)

Er ist proportional zum Verlustwiderstand $R_V$. Bei niedrigen Frequenzen ist $R_V$ sehr groß und muss ggf. durch einen zusätzlichen Parallelwiderstand verringert werden, damit die Spannung am Parallelschwingkreis nicht zu groß wird. Mit zunehmender Frequenz nimmt $R_V$ ab. Vorteilhaft ist in diesem Zusammenhang, dass $R_V$ nur *linear* in den Mischgewinn (= Leistungsverstärkung) eingeht; deshalb nimmt die Spannungsverstärkung im angepassten Fall bei abnehmendem Verlustwiderstand nur proportional zu $\sqrt{R_V}$ und nicht, wie z.B. die Leerlaufverstärkung in (25.75), proportional zu $R_V$ ab.
<!-- page-import:1511:end -->

<!-- page-import:1512:start -->
25.5 Aktive Mischer mit Transistoren 1475

Ausgangsseitig gilt im angepassten Fall $R_V = R_P$; daraus folgt mit (25.72) das benötigte Kapazitätsverhältnis des kapazitiven Spannungsteilers:

$$
R_V = Z_W \left(1 + \frac{C_2}{C_1}\right)^2 \Rightarrow \frac{C_2}{C_1} = \sqrt{\frac{R_V}{Z_W}} - 1
\qquad (25.78)
$$

*Beispiel:* Wir betrachten den angepassten Gegentaktmischer mit Basisschaltung aus Abb. 25.73; hier gilt nach (25.71) der Zusammenhang $S = 1/Z_W$. Durch Einsetzen in (25.77) erhält man bei voll ausgesteuertem Differenzverstärker ($c_1 = 2/\pi$) und $Z_W = 50\,\Omega$:

$$
G_M \overset{S=1/Z_W}{=} \frac{1}{16} c_1^2 \frac{R_V}{Z_W}
= \frac{1}{16} \left(\frac{2}{\pi}\right)^2 \frac{R_V}{50\,\Omega}
= \frac{R_V}{1974\,\Omega}
$$

Für einen Mischgewinn $G_M = 4$ (6 dB) wird demnach ein Verlustwiderstand $R_V \approx 7{,}9\,\mathrm{k}\Omega$ benötigt. Daraus folgt mit (25.78) das Kapazitätsverhältnis des kapazitiven Spannungsteilers: $C_2/C_1 \approx 11{,}6$. Damit ist die Grenze des praktisch machbaren bereits erreicht; ein größerer Mischgewinn ist auf diese Weise nicht zu erzielen. Ursache dafür ist der für angepasste Gegentaktmischer mit Basisschaltung fundamentale Zusammenhang $S = 1/Z_W$; dadurch wird die Steilheit $S$, die quadratisch in den Mischgewinn eingeht, auf einen vergleichsweise kleinen Wert begrenzt.

Bessere Ergebnisse kann man mit einem Gegentaktmischer mit Emitterschaltung nach Abb. 25.75 erzielen; in diesem Fall kann man die Steilheit $S$ frei wählen und den vergleichsweise hochohmigen Eingang unabhängig davon mit einem Abschlußwiderstand $R_1 \approx Z_W$ anpassen. Wir verzichten hier auf eine Stromgegenkopplung und wählen $I_0 = 2\,\mathrm{mA}$; dann gilt $S = S_3 = I_0/U_T \approx 77\,\mathrm{mS}$. Mit $\beta_3 = 100$ folgt für den Eingangswiderstand des Transistors $T_3$: $r_{BE3} = \beta_3/S_3 \approx 1{,}3\,\mathrm{k}\Omega$; mit $R_1 = 52\,\Omega$ folgt $r_e = (R_1 \parallel r_{BE}) = 50\,\Omega$. Durch Einsetzen in (25.77) erhält man mit $c_1 = 2/\pi$:

$$
G_M = \frac{1}{16} \left(\frac{2}{\pi}\right)^2 (77\,\mathrm{mS})^2 \cdot 50\,\Omega \cdot R_V
= \frac{R_V}{133\,\Omega}
$$

Wir nehmen an, dass der Verlustwiderstand $R_V$ durch den Ausgangswiderstand des Transistors $T_2$ verursacht wird. Da der Ruhestrom größer ist als beim Gegentaktmischer mit Basisschaltung, gehen wir von einem entsprechend reduzierten Wert aus: $R_V = 7{,}9\,\mathrm{k}\Omega \cdot (520\,\mu\mathrm{A}/2\,\mathrm{mA}) \approx 2050\,\Omega$. Damit wird ein Mischgewinn $G_M \approx 15$ (12 dB) erzielt. Für den kapazitiven Spannungsteiler folgt aus (25.78): $C_2/C_1 \approx 5{,}4$.

Der Mischgewinn des Gegentaktmischers mit Emitterschaltung ist in diesem Beispiel etwa um den Faktor 4 (6 dB) höher als beim Gegentaktmischer mit Basisschaltung. Nachteilig ist die Zunahme der Rauschzahl durch den Abschlußwiderstand $R_1$; deshalb wird diese Ausführung nicht als Abwärtsmischer in Empfängern eingesetzt.

## 25.5.1.9 Praktische Ausführung

Abbildung 25.76 zeigt eine praktische Ausführung eines Gegentaktmischers mit allen zur Arbeitspunkteinstellung und Anpassung an $Z_W = 50\,\Omega$ benötigten Bauteilen. Mit den Widerständen $R_1$, $R_2$ und $R_3$ werden die Spannungen $U_0$ und $U_1$ zur Arbeitspunkteinstellung erzeugt; $C_3$ und $C_6$ dienen als Abblock-Kapazitäten. Die Widerstände $R_4$ und $R_5$ führen die Spannung $U_1$ an die Eingänge des Differenzverstärkers und dienen gleichzeitig als LO-Abschlußwiderstände: $R_4 = R_5 = 50\,\Omega$. Die Reihenschaltung von $R_4$ und $R_5$ entspricht dem Widerstand $R_{LO} = 2 Z_W$ in Abb. 25.73 und Abb. 25.75. Die LO-Spannung
<!-- page-import:1512:end -->

<!-- page-import:1513:start -->
1476  25. Mischer

**Abb. 25.75.** Gegentaktmischer mit Emitterschaltung und Anpassung

wird über die Koppelkapazitäten $C_4$ und $C_5$ zugeführt. Mit dem Widerstand $R_6$ wird der für eine Anpassung an $50\,\Omega$ erforderliche Ruhestrom $I_{C3,A}\approx 520\,\mu\text{A}$ eingestellt. Auf eine Stromgegenkopplung wird verzichtet. Die ZF-Spannung wird über die Koppelkapazität $C_7$ zugeführt. Die ausgangsseitige Beschaltung mit dem kapazitiven Spannungsteiler $C_1, C_2$ und dem Resonanzwiderstand $R_V$ wird aus Abb. 25.73 übernommen. Die Kapazität $C_2$ wird hier jedoch nicht mit der Versorgungsspannung $U_b$ (Kleinsignalmasse), sondern

**Abb. 25.76.** Praktische Ausführung eines Gegentaktmischers mit Anpassung an $Z_W=50\,\Omega$
<!-- page-import:1513:end -->

<!-- page-import:1514:start -->
25.5 Aktive Mischer mit Transistoren 1477

a unsymmetrische Zuführung

b symmetrische Zuführung mit einem Symmetrier-Übertrager

**Abb. 25.77.** Verwendung einer unsymmetrischen LO-Spannung

mit Masse verbunden; dadurch gelangt der HF-Ausgangsstrom, der bei hohen Spannungs-
teilerfaktoren fast vollständig über $C_2$ fließt, nicht auf die Versorgungsspannungsleitung.

Die symmetrische LO-Spannung kann mit einem Oszillator mit Differenzausgang er-
zeugt werden. Häufig steht jedoch nur eine unsymmetrische LO-Spannung zur Verfügung;
dann kann man die in Abb. 25.77 gezeigten Zuführungen verwenden. In Abb. 25.77a wird
die LO-Spannung an einem der beiden LO-Eingänge unsymmetrisch zugeführt; der andere
Eingang wird kleinsignalmäßig kurzgeschlossen ($C_5$ nach Masse). Die Unsymmetrie wirkt
sich jedoch nachteilig auf das Verzerrungsverhalten des Mischers aus; deshalb wird in der
Praxis häufig die in Abb. 25.77b gezeigte symmetrische Zuführung mit einem Symmetrier-
Übertrager verwendet. Der Symmetrier-Übertrager erzwingt die Bedingung $I_1 = I_2$ und
damit eine reine Differenzaussteuerung der LO-Eingänge.

In integrierten Schaltungen wird die Symmetrierung einer unsymmetrischen LO-
Spannung mit einem Differenzverstärker mit unsymmetrischem Eingang und symmetri-
schem Ausgang vorgenommen. Dieser Differenzverstärker dient gleichzeitig als Verstär-
ker für das LO-Signal und wird galvanisch mit dem Differenzverstärker des Gegentakt-
mischers gekoppelt. Abbildung 25.78 zeigt eine typische Ausführung. Die Induktivität
$L$ und die Kapazitäten $C_1,\ldots,C_4$ sind im allgemeinen nicht integriert; sie werden ex-
tern angeschlossen. Die LO-seitige Anpassung erfolgt mit dem Widerstand $R_B \approx Z_W$.
Der Differenzverstärker $T_4,T_5$ wird übersteuert betrieben und erzeugt aus einer sinusför-
migen Spannung $U'_{LO}$ eine näherungsweise rechteckförmige LO-Spannung $U_{LO}$ mit der
Amplitude $I_1 R_C > 5U_T$. Über den Widerstand $R_1$ wird die maximale Spannung $U_1$ an
den LO-Eingängen eingestellt; dadurch nehmen die Spannungen an den LO-Eingängen
abwechselnd die Werte $U_1$ und $U_1 - I_1 R_C$ an.

## 25.5.1.10 Gegentaktmischer mit Übertragern

Gegentaktmischer werden häufig mit Übertragern ausgeführt. Abbildung 25.79 zeigt eine
typische Ausführung mit zwei Übertragern. Der LO-Übertrager $\ddot{U}_1$ dient zur symmetri-
schen Zuführung einer unsymmetrischen LO-Spannung und kann gleichzeitig zur Anpas-
sung verwendet werden, indem das Übersetzungsverhältnis geeignet gewählt wird.

Der Ausgangsübertrager $\ddot{U}_2$ wird ebenfalls symmetrisch ausgeführt; dadurch kann man
auch den Strom $I_{C1}$ des Transistors $T_1$ nutzen. Wir gehen im folgenden von einem 1:1:1-
Übertrager aus; dann entspricht der Sekundärstrom $I_1$ der Differenz der Primärströme:
<!-- page-import:1514:end -->

<!-- page-import:1515:start -->
1478  25. Mischer

**Abb. 25.78.** Praktische Ausführung eines integrierten Gegentaktmischers

$$I_1(t)=I_{C2}(t)-I_{C1}(t)$$

Für den Strom $I_{C2}$ gilt nach (25.64):

$$I_{C2}(t)=\left[I_{C3,A}+S u_{ZF}(t)\right]\left[\frac{1}{2}\left(1-\tanh\frac{U_{LO}(t)}{2U_T}\right)\right]$$

Entsprechend gilt für den Strom $I_{C1}$:

**Abb. 25.79.** Gegentaktmischer mit Übertragern
<!-- page-import:1515:end -->

<!-- page-import:1516:start -->
25.5 Aktive Mischer mit Transistoren 1479

$$
I_{C1}(t)=\left[\,I_{C3,A}+Su_{ZF}(t)\,\right]\left[\frac{1}{2}\left(1+\tanh\frac{U_{LO}(t)}{2U_T}\right)\right]
$$

Daraus folgt für den Sekundärstrom des Übertragers:

$$
I_1(t)=\left[\,I_{C3,A}+Su_{ZF}(t)\,\right]\left[-\,\tanh\frac{U_{LO}(t)}{2U_T}\right]
$$

$$
s_{LO}'(t)
$$

(25.79)

Das LO-Signal $s_{LO}'(t)$ ist in diesem Fall mittelwertfrei und hat die doppelte Amplitude wie bei einem Gegentaktmischer ohne Ausgangsübertrager. Für die Koeffizienten der Fourier-Reihe von $s_{LO}'(t)$ bedeutet dies, dass der Koeffizient $c_0$ zu Null wird, während alle anderen Koeffizienten um den Faktor 2 größer sind. Dadurch nimmt die Mischverstärkung $A_M$, die nach (25.68) proportional zum Koeffizienten $c_1$ ist, ebenfalls um den Faktor 2 zu. Der Mischgewinn $G_M$ bei Anpassung ist nach (25.77) proportional zum Quadrat des Koeffizienten $c_1$ und müsste demnach um den Faktor 4 zunehmen. In der Praxis ist dies meist nicht der Fall, da nun auch der Ausgangswiderstand des Transistors $T_1$ wirksam wird und eine Abnahme des Verlustwiderstands $R_V$ verursacht. Im Extremfall wird der Verlustwiderstand ausschließlich durch die Transistoren verursacht; dann nimmt der Mischgewinn nur um den Faktor 2 zu.

Der Übertrager $\ddot{U}_2$ wird auch zur ausgangsseitigen Anpassung verwendet; dazu wird das Übersetzungsverhältnis $\ddot{u}$ so gewählt, dass der auf die Sekundärseite bezogene Verlustwiderstand $R_V' = R_V/\ddot{u}^{\,2}$ gleich dem Lastwiderstand $R_{L,HF}$ wird.

### 25.5.1.11 Nachteil des Gegentaktmischers mit Transistoren

Der wesentliche Nachteil des Gegentaktmischers liegt darin, dass der Differenzverstärker nicht nur den Kleinsignalstrom $i_{C3} = Su_{ZF}$, sondern auch den Ruhestrom $I_{C3,A}$ des Spannungs-Strom-Wandlers umschaltet. Dadurch enthalten die Kollektorströme der Transistoren $T_1$ und $T_2$ bei voller Aussteuerung des Differenzverstärkers einen rechteckförmigen Anteil mit der Amplitude $I_{C3,A}$ und der Frequenz $f_{LO}$, der wesentlich größer ist als der Kleinsignalanteil. Dieser Anteil verursacht im Spektrum der Kollektorströme Anteile bei der LO-Frequenz und ungeradzahligen Vielfachen davon, die proportional zu $I_{C3,A}$ sind, siehe Abb. 25.72 auf Seite 1471. Besonders störend ist der Anteil bei der LO-Frequenz, der dicht bei der HF-Frequenz liegt und durch das HF-Filter unterdrückt werden muss; deshalb sind die Anforderungen an das Filter hoch.

Dieser Nachteil verhindert auch eine effiziente integrierte Ausführung des Gegentaktmischers. Dazu wäre es wünschenswert, das HF-Filter durch einen ohmschen Lastwiderstand zu ersetzen, das resultierende Ausgangssignal mit einem integrierten Impedanzwandler (eine oder mehrere Kollektorschaltungen) an den Wellenwiderstand $Z_W$ anzupassen und erst anschließend zu filtern. Auch hier stört der rechteckförmige Anteil im Kollektorstrom von $T_2$. Um eine Übersteuerung durch diesen Anteil zu verhindern, muss der ohmsche Lastwiderstand so klein gewählt werden, dass keine Mischverstärkung mehr erzielt werden kann.

## 25.5.2 Doppel-Gegentaktmischer (Gilbert-Mischer)

Abbildung 25.80 zeigt das Schaltbild eines Doppel-Gegentaktmischers (double balanced mixer), der nach seinem Erfinder B. Gilbert auch als Gilbert-Mischer (Gilbert mixer) bezeichnet wird. Er ist der bevorzugte Mischer in integrierten Schaltungen, da er ohne direkt
<!-- page-import:1516:end -->

<!-- page-import:1517:start -->
1480  25. Mischer

Abb. 25.80. Doppel-Gegentaktmischer mit Transistoren (Gilbert-Mischer)

am Mischer angeordnete Filter betrieben werden kann; die Unterdrückung unerwünschter Anteile in den Ausgangsspannungen erfolgt dann erst in den nachfolgenden Komponenten. Wir gehen im folgenden von einem Aufwärtsmischer aus.

Ein Vergleich des Doppel-Gegentaktmischers in Abb. 25.80 mit dem Gegentaktmischer aus Abb. 25.66 auf Seite 1466 zeigt, dass der Doppel-Gegentaktmischer aus zwei Gegentaktmischern besteht, deren Ausgänge verbunden sind: $T_1$, $T_2$ und $T_5$ sowie $T_3$, $T_4$ und $T_6$. Die als Spannungs-Strom-Wandler (U/I-Wandler) arbeitenden Emitterschaltungen mit Stromgegenkopplung ($T_5$ und $T_6$) sind zu einem Differenzverstärker mit Stromgegenkopplung zusammengefasst und werden durch die ZF-Spannung $u_{ZF}$ gegensinnig ausgesteuert; dadurch ist der Verbindungspunkt der beiden Gegenkopplungswiderstände $R_E$ ein virtueller Massepunkt (Kleinsignalmasse). Die Ruheströme werden mit einer Stromquelle $2I_0$ eingestellt: $I_{C5,A} = I_{C6,A} = I_0$. Die LO-Spannung $U_{LO}$ ist im Idealfall rechteckförmig und wird den als Umschalter betriebenen Differenzverstärkern ($T_1$, $T_2$ und $T_3$, $T_4$) gegensinnig zugeführt. Dieser Teil der Schaltung wird als Gilbert-Zelle (Gilbert cell) bezeichnet. Anstelle der HF-Filter werden zwei Kollektorwiderstände $R_C$ eingesetzt; dadurch findet an dieser Stelle noch keine Filterung statt und die Ausgangsspannungen enthalten neben dem gewünschten HF-Anteil auch alle weiteren, bei der Umsetzung erzeugten Anteile. An den Ausgängen werden üblicherweise Kollektorschaltungen als Impedanzwandler eingesetzt. Erst danach folgt das HF-Filter; dabei werden in den meisten Fällen dielektrische oder SAW-Filter eingesetzt.

Der Doppel-Gegentaktmischer in Abb. 25.80 entspricht einem Differenzverstärker mit Stromgegenkopplung und Kollektorwiderständen, bei dem die Polarität zwischen den ZF-Eingängen und den Ausgängen umgeschaltet werden kann. Wie einen Differenzverstärker
<!-- page-import:1517:end -->

<!-- page-import:1518:start -->
25.5 Aktive Mischer mit Transistoren 1481

Gegentaktmischer 1

U/I-Wandler  
$(T_5, R_E)$

Umschalter  
$(T_1, T_2)$

$i_{C5} = S u_{ZF}/2$

$f_{LO}$

$i_{C1}$

$i_{C2}$

$i_1$

$R_C$

$u_{a1}$

$R_C$

$u_{a2}$

$i_2$

$u_{ZF}$

$u_{ZF}/2$

$-u_{ZF}/2$

U/I-Wandler  
$(T_6, R_E)$

$i_{C6} = -S u_{ZF}/2$

Umschalter  
$(T_3, T_4)$

$i_{C4}$

$i_{C3}$

Gegentaktmischer 2

**Abb. 25.81.** Funktionsprinzip (= Kleinsignalersatzschaltbild) eines Doppel-Gegentaktmischers mit Transistoren

kann man auch einen Doppel-Gegentaktmischer unsymmetrisch betreiben, indem man einen der beiden ZF-Eingänge auf ein konstantes Potential legt, nur einen Ausgang verwendet oder beides kombiniert. Auch der LO-Eingang kann unsymmetrisch betrieben werden. Ein unsymmetrischer Betrieb hat jedoch negative Auswirkungen auf das Verzerrungsverhalten; deshalb wird eine unsymmetrische ZF- oder LO-Spannung bereits vor dem Mischer mit einem Symmetrier-Übertrager oder einem unsymmetrischen Differenzverstärker in eine symmetrische Spannung umgewandelt. Diese Verfahren sind in Abb. 25.77b und Abb. 25.78 am Beispiel eines Gegentaktmischers mit unsymmetrischer LO-Spannung dargestellt. Entsprechend wird bei einem unsymmetrischen Ausgang der Kollektorwiderstand am ungenutzten Ausgang meist beibehalten.

Das Funktionsprinzip des Doppel-Gegentaktmischers ist in Abb. 25.81 dargestellt. Man erkennt, dass die beiden Gegentaktmischer jeweils mit der halben ZF-Spannung gegensinnig angesteuert werden. Der Doppel-Gegentaktmischer arbeitet als multiplikativer Mischer mit bipolarem Rechtecksignal, wie ein Vergleich mit Abb. 25.15 auf Seite 1403 zeigt.

### 25.5.2.1 Berechnung des Übertragungsverhaltens

Die Berechnung erfolgt wie beim Gegentaktmischer. Für die Kollektorströme des Differenzverstärkers $T_5, T_6$ gilt:

$$
I_{C5} = I_0 + \frac{1}{2} S u_{ZF}
,\qquad
I_{C6} = I_0 - \frac{1}{2} S u_{ZF}
\qquad (25.80)
$$

Dabei ist

$$
S = \frac{S_5}{1 + S_5 R_E} = \frac{S_6}{1 + S_6 R_E}
\qquad
\frac{S_5=S_6=I_0/U_T}{}
= \frac{I_0}{U_T + I_0 R_E}
\qquad (25.81)
$$

die Steilheit der Spannungs-Strom-Wandler. Für die Kollektorströme der Transistoren $T_1,\ldots,T_4$ gilt in Analogie zu (25.63):
<!-- page-import:1518:end -->

<!-- page-import:1519:start -->
1482  25. Mischer

a Modell des Doppel-
Gegentaktmischers

b Kennlinie für das Schaltverhalten

**Abb. 25.82.** Darstellung des Doppel-Gegentaktmischers als multiplikativen Mischer unter Berücksichtigung des Schaltverhaltens

$$
I_{C1}=\frac{I_{C5}}{2}\left(1+\tanh\frac{U_{LO}}{2U_T}\right),\qquad
I_{C2}=\frac{I_{C5}}{2}\left(1-\tanh\frac{U_{LO}}{2U_T}\right)
$$

$$
I_{C3}=\frac{I_{C6}}{2}\left(1-\tanh\frac{U_{LO}}{2U_T}\right),\qquad
I_{C4}=\frac{I_{C6}}{2}\left(1+\tanh\frac{U_{LO}}{2U_T}\right)
\qquad (25.82)
$$

Am Ausgang der Gilbert-Zelle werden die Ströme addiert:

$$
I_1=I_{C1}+I_{C3},\qquad I_2=I_{C2}+I_{C4}
\qquad (25.83)
$$

Durch Einsetzen von (25.80) und (25.82) in (25.83) erhält man die Zeitverläufe:

$$
I_1(t)=I_0+\frac{1}{2}\,s_{uZF}(t)\tanh\frac{U_{LO}(t)}{2U_T}
$$

$$
I_2(t)=I_0-\frac{1}{2}\,s_{uZF}(t)\tanh\frac{U_{LO}(t)}{2U_T}
\qquad (25.84)
$$

Man erkennt, dass beim Doppel-Gegentaktmischer nur die Kleinsignalanteile umgeschaltet werden; die Ruheströme $I_0$ bleiben konstant. Darin liegt ein wesentlicher Vorteil im Vergleich zum Gegentaktmischer, bei dem auch der Ruhestrom umgeschaltet wird, siehe (25.64) auf Seite 1467. Wir können uns deshalb im folgenden auf die Betrachtung der Kleinsignalströme

$$
i_1(t)=\frac{s_{uZF}(t)}{s_{ZF}(t)}\underbrace{\left[\frac{1}{2}\tanh\frac{U_{LO}(t)}{2U_T}\right]}_{s'_{LO}(t)},\qquad
i_2(t)=-i_1(t)
\qquad (25.85)
$$

beschränken. Man erkennt, dass der Doppel-Gegentaktmischer als multiplikativer Mischer arbeitet: das ZF-Signal $s_{ZF}(t)$ wird mit dem LO-Signal $s'_{LO}(t)$ multipliziert. Das LO-Signal $s'_{LO}(t)$ folgt aus der Spannung $U_{LO}(t)$ unter Berücksichtigung des Schaltverhaltens. Abbildung 25.82 verdeutlicht die Zusammenhänge.

Den Zusammenhang zwischen einer rechteck- oder sinusförmigen LO-Spannung $U_{LO}(t)$ und dem LO-Signal $s'_{LO}(t)$ haben wir bereits beim Gegentaktmischer gezeigt. Beim Doppel-Gegentaktmischer entfällt der Gleichanteil in $s'_{LO}(t)$, da die Kennlinie für
<!-- page-import:1519:end -->

<!-- page-import:1520:start -->
25.5 Aktive Mischer mit Transistoren 1483

das Schaltverhalten symmetrisch zum Ursprung ist $^7$; dadurch wird der Koeffizient $c_0$ der Fourier-Reihenentwicklung von $s_{LO}'(t)$ zu Null. Damit folgt aus (25.65):

$$
s_{LO}'(t) = c_1 \cos \omega_{LO} t + c_3 \cos 3\omega_{LO} t + c_5 \cos 5\omega_{LO} t + \ldots
\qquad (25.86)
$$

Die Koeffizienten $c_1, c_3, \ldots$ haben dieselben Werte wie bei einem Gegentaktmischer $^8$. Für eine rechteckförmige LO-Spannung mit der Amplitude $\hat{u}_{LO}$ gilt nach (25.66):

$$
c_1 = \frac{2}{\pi}\tanh \frac{\hat{u}_{LO}}{2U_T}, \quad
c_3 = -\frac{2}{3\pi}\tanh \frac{\hat{u}_{LO}}{2U_T}, \quad \ldots
$$

In Abb. 25.71 auf Seite 1470 sind die Koeffizienten $c_1$ und $|c_3|$ für eine rechteckförmige und eine sinusförmige LO-Spannung dargestellt.

## 25.5.2.2 Kleinsignalverhalten

Wir können nun die Kleinsignal-Ausgangsspannungen

$$
u_{a1}(t) = -R_C\, i_1(t), \quad
u_{a2}(t) = -R_C\, i_2(t) = -u_{a1}(t)
$$

für eine sinusförmige ZF-Spannung

$$
u_{ZF}(t) = \hat{u}_{ZF} \cos \omega_{ZF} t
$$

berechnen. Durch Einsetzen der Kleinsignalströme aus (25.85) und der Fourier-Reihenentwicklung aus (25.86) erhält man:

$$
u_{a1}(t) = -S R_C\, \hat{u}_{ZF} \cos \omega_{ZF} t\ [\,c_1 \cos \omega_{LO} t + c_3 \cos 3\omega_{LO} t + \ldots\,]
$$

$$
= -\frac{c_1}{2}\, S R_C\, \hat{u}_{ZF}\,[\,\cos(\omega_{LO} + \omega_{ZF})t + \cos(\omega_{LO} - \omega_{ZF})t\,]
$$

$$
\quad - \frac{c_3}{2}\, S R_C\, \hat{u}_{ZF}\,[\,\cos(3\omega_{LO} + \omega_{ZF})t + \cos(3\omega_{LO} - \omega_{ZF})t\,]
$$

$$
- \ldots
$$

mit dem HF-Anteil:

$$
u_{HF}(t) = u_{a1}(t)\big|_{f=f_{HF}=f_{LO}+f_{ZF}}
= -\frac{c_1}{2}\, S R_C\, \hat{u}_{ZF} \cos \omega_{HF} t
\qquad (25.87)
$$

Abbildung 25.83 zeigt das zugehörige Betragsspektrum; es entspricht dem Betragsspektrum eines multiplikativen Mischers mit bipolarem Rechtecksignal in Abb. 25.16c auf Seite 1404. Störende Anteile bei der LO-Frequenz $f_{LO}$ und Vielfachen davon, die beim Gegentaktmischer durch die Umschaltung des Ruhestroms verursacht werden, treten hier nicht auf, wie ein Vergleich mit Abb. 25.72 auf Seite 1471 zeigt.

7 Um die Kennlinie des Gegentaktmischers aus Abb. 25.69b in die Kennlinie des Doppel-Gegentaktmischers in Abb. 25.82b zu überführen, muss neben der vertikalen Verschiebung um $1/2$ auch die $U_{LO}$-Achse gespiegelt werden. Die Ursache dafür liegt darin, dass beim Doppel-Gegentaktmischer der Strom $I_1$ auf der Seite des Transistors $T_1$ betrachtet wird, beim Gegentaktmischer dagegen der Strom $I_{C2}$ des Transistors $T_2$.

8 In der Literatur findet man häufig die Aussage, dass die Koeffizienten $c_1, c_3, \ldots$ beim Doppel-Gegentaktmischer um den Faktor 2 größer sind als beim Gegentaktmischer. In diesem Fall wird der Faktor $1/2$ in (25.85) nicht als Bestandteil von $s_{LO}'(t)$ aufgefasst, sondern getrennt behandelt. Die Koeffizienten sind dann zwar um den Faktor 2 größer, dies wird jedoch durch den getrennt zu behandelnden Faktor $1/2$ im Verlauf der weiteren Rechnung wieder aufgehoben. In diesem Zusammenhang muss man auch genau prüfen, wie die Steilheit $S$ definiert ist und ob das Ausgangssignal unsymmetrisch oder symmetrisch entnommen wird.
<!-- page-import:1520:end -->

<!-- page-import:1521:start -->
1484  25. Mischer

Abb. 25.83. Betragsspektrum der Ausgangsspannung $u_{a1}(t)$ für eine sinusförmige ZF-Spannung

Der Maximalwert der Ausgangsspannung $u_{a1}(t)$ beträgt

$$
u_{a1,max} = \max |u_{a1}(t)| = \frac{1}{2}\, S\, R_C\, \hat{u}_{ZF}
$$

und ist bei einer idealen Umschaltung $(c_1 = 2/\pi)$ nur um den Faktor $1/c_1 = \pi/2 \approx 1{,}57$ (4 dB) größer als die Amplitude des HF-Anteils in (25.87); deshalb kann man ohne größere Einschränkung des Dynamikbereichs zunächst die ganze Ausgangsspannung weiterverarbeiten und den HF-Anteil erst später ausfiltern. Die Anforderungen an das HF-Filter sind geringer als bei einem Gegentaktmischer, da kein Anteil bei der LO-Frequenz auftritt; man vergleiche dazu Abb. 25.83 mit Abb. 25.72 auf Seite 1471.

### 25.5.2.3 Mischverstärkung

Für die Spannungszeiger erhält man aus (25.87):

$$
\underline{u}_{HF} = -\frac{c_1}{2}\, S\, R_C\, \underline{u}_{ZF}
$$

(25.88)

Daraus folgt für die Mischverstärkung:

$$
A_M = \frac{\underline{u}_{HF}}{\underline{u}_{ZF}} = -\frac{c_1}{2}\, S\, R_C \qquad \overset{(25.81)}{=} \qquad -\frac{c_1}{2}\,\frac{S_5 R_C}{1 + S_5 R_E}
$$

(25.89)

Bei der Mischverstärkung wird nur der HF-Anteil in der Ausgangsspannung $u_{a1}(t)$ berücksichtigt; damit entspricht sie formal der Differenzverstärkung $A_D$ eines Differenzverstärkers. In den meisten Fällen wird jedoch die Differenz-Ausgangsspannung $u_a(t) = u_{a1}(t) - u_{a2}(t)$ verwendet; dann ist die Mischverstärkung um den Faktor 2 größer:

$$
A_{M,diff} = 2 A_M = -c_1 S R_C
$$

(25.90)

Wir bezeichnen im folgenden $A_M$ als einseitige Mischverstärkung und $A_{M,diff}$ als Differenz-Mischverstärkung.

Die einseitige Mischverstärkung $A_M$ des Doppel-Gegentaktmischers entspricht der Mischverstärkung des Gegentaktmischers in (25.68) auf Seite 1471, wenn man $R_C = R_{L,HF}$, d.h. gleiche Lastwiderstände für den HF-Anteil, annimmt. Typische Werte liegen im Bereich $|A_M| \approx 2 \dots 10$ (6 $\dots$ 20 dB).
<!-- page-import:1521:end -->

<!-- page-import:1522:start -->
25.5 Aktive Mischer mit Transistoren 1485

a mit zwei Induktivitäten nach $U_b$

b mit einer Quer-Induktivität

**Abb. 25.84.** Kompensation der Ausgangskapazitäten der Transistoren $T_1, \ldots, T_4$ durch Resonanz-
abstimmung mit Induktivitäten

#### 25.5.2.4 Bandbreite

Bezüglich der Bandbreite gelten prinzipiell dieselben Überlegungen wie beim Gegentaktmischer. Allerdings fehlt beim Doppel-Gegentaktmischer mit Kollektorwiderständen und nachfolgenden Impedanzwandlern die Möglichkeit, die Ausgangskapazitäten der Transistoren $T_1, \ldots, T_4$ zu kompensieren; sie bilden zusammen mit den Kollektorwiderständen Tiefpässe und begrenzen dadurch die ausgangsseitige Bandbreite. Dies macht sich vor allem bei Aufwärtsmischern bemerkbar, bei denen das Ausgangssignal die hohe Frequenz $f_{HF}$ besitzt. Bei Abwärtsmischern mit der wesentlich geringeren Ausgangsfrequenz $f_{ZF}$ ist dies weniger störend. Als Abhilfe kann man die Steilheit $S$ erhöhen und die Widerstände $R_C$ entsprechend reduzieren; dies geht jedoch zu Lasten der Stromaufnahme.

Alternativ kann man Induktivitäten zur Kompensation der Kapazitäten einsetzen; Abb. 25.84 zeigt zwei Möglichkeiten. In beiden Fällen enthält man Parallelschwingkreise an den Ausgängen, die bei einem Aufwärtsmischer auf die HF-Frequenz abgestimmt werden und ihrer Funktion nach dem HF-Filter eines Gegentaktmischers entsprechen. In integrierten Schaltungen ist dieses Verfahren vor allem dann interessant, wenn die benötigten Induktivitäten so klein sind, dass sie integriert oder mit Hilfe von Bonddrähten realisiert werden können; andernfalls müssen externe Induktivitäten verwendet werden.

#### 25.5.2.5 Doppel-Gegentaktmischer in integrierten Schaltungen

In integrierten Schaltungen wird der Doppel-Gegentaktmischer zusammen mit zusätzlichen Verstärkern realisiert; Abb. 25.85 zeigt eine typische Ausführung. Eine Anpassung an den Wellenwiderstand externer Leitungen ist in diesem Fall nur an den Ein- und Ausgängen der integrierten Schaltung erforderlich. Der Mischer selbst wird ohne Anpassung betrieben. Die Umsetzung unsymmetrischer externer Spannungen in die symmetrischen Spannungen für den Mischer erfolgt mit Hilfe unsymmetrisch betriebener Differenzverstärker-Stufen in den drei Verstärkern. Da der Eingangs- und der Ausgangsverstärker für einen bestimmten Frequenzbereich ausgelegt werden müssen, sind integrierte Schaltungen dieser Art meist nur in einem engen Frequenzbereich einsetzbar. Beim LO-Verstärker
<!-- page-import:1522:end -->

<!-- page-import:1523:start -->
1486 25. Mischer

Integrierte Schaltung

Eingangs-
verstärker

Doppel-Gegen-
taktmischer

Ausgangs-
verstärker

Filter

Filter

$Z_W$

$Z_W$

LO-
Verstärker

$f_{LO}$

**Abb. 25.85.** Doppel-Gegentaktmischer mit Verstärkern in einer integrierten Schaltung

ist dies nicht der Fall; er kann als breitbandiger Begrenzer-Verstärker ausgeführt werden. Abbildung 25.86 zeigt ein Beispiel mit Basisschaltungen zur Anpassung an den Eingängen.

Ein Mischer in einer integrierten Schaltung wird durch die Mischverstärkung und die Ein- und Ausgangsimpedanzen an den drei Anschlusspaaren beschrieben. Die Angabe eines Mischgewinns (Leistungsverstärkung) ist aufgrund des nicht angepassten Betriebs nicht sinnvoll.

## 25.5.2.6 Anpassung

Für den universellen Einsatz werden integrierte Doppel-Gegentaktmischer ohne Eingangs- und Ausgangsverstärker verwendet. In diesem Fall müssen der Eingang und der Ausgang des Mischers an den Wellenwiderstand angepasst werden. Man verwendet dazu dieselben Verfahren wie beim Gegentaktmischer. Abbildung 25.87 zeigt einige Beispiele zur eingangsseitigen Anpassung. Wie beim Gegentaktmischer werden auch hier häufig Basisschaltungen anstelle der Emitterschaltungen eingesetzt. Wird ein unsymmetrischer Eingang benötigt, kann man einen Symmetrier-Übertrager ergänzen. Alternativ zu diesen Verfahren kann man die Anpassnetzwerke aus Abschnitt 23.3.1 verwenden. Bei einem symmetrischen Eingang kann man entweder zwei unsymmetrische oder ein symmetrisches Anpassnetzwerk einsetzen; Abb. 25.88 zeigt dies am Beispiel einer Aufwärtstransformation von $r_e < Z_W$ auf $Z_W$ mit Hilfe des Anpassnetzwerks aus Abb. 23.22b auf Seite 1303.

Am Ausgang werden ebenfalls die Anpassnetzwerke aus Abschnitt 23.3.1 eingesetzt; Abb. 25.89 zeigt dies am Beispiel einer Abwärtstransformation mit Hilfe des Anpassnetzwerks aus Abb. 23.23b auf Seite 1304. Bei Abwärtsmischern oder Aufwärtsmischern mit niedriger HF-Frequenz ist die Ausgangsimpedanz der Transistoren $T_1, \ldots, T_4$ bei der Ausgangsfrequenz sehr hoch. In diesem Fall werden die Kollektorwiderstände zur Begrenzung der Spannungsamplituden an den Kollektoren der Transistoren benötigt; gleichzeitig ermöglichen sie ein praktikables Transformationsverhältnis $R_C/Z_W$. Dieser Fall ist in Abb. 25.89a in Verbindung mit einem symmetrischen Anpassnetzwerk dargestellt. Bei Aufwärtsmischern mit hoher HF-Frequenz ist die Ausgangsimpedanz der Transistoren häufig so gering, dass man auf die Kollektorwiderstände verzichten kann; dann erfolgt die Anpassung gemäß Abb. 25.89b mit zwei unsymmetrischen Anpassnetzwerken, da man in diesem Fall die Induktivitäten der Anpassnetzwerke gleichzeitig zur Zuführung der Versorgungsspannung nutzen kann.
<!-- page-import:1523:end -->

<!-- page-import:1524:start -->
25.5 Aktive Mischer mit Transistoren 1487

Ausgangsverstärker

Doppel-Gegentaktmischer

LO-Verstärker (Begrenzer)

Eingangsverstärker

$R_C$

$R_C$

$T_1,\ T_2$

$T_3,\ T_4$

$T_5$

$T_6$

$R_E$

$R_E$

**Abb. 25.86.** Beispiel für einen Doppel-Gegentaktmischer mit Verstärkern in einer integrierten Schaltung

Zum Übergang von unsymmetrischen Signalquellen und Lasten auf die symmetri-
schen Ein- und Ausgänge des Doppel-Gegentaktmischers werden neben Symmetrier-
Übertragern auch 1:1:n- und n:n:1-Übertrager eingesetzt; dann kann die Anpassung
ganz oder teilweise durch geeignete Wahl des Übersetzungsverhältnisses erfolgen. Ab-
<!-- page-import:1524:end -->

<!-- page-import:1525:start -->
1488  25. Mischer

a Emitterschaltungen und Abschlusswiderstand

b Basisschaltungen

c Basisschaltungen und Symmetrier-Übertrager

**Abb. 25.87.** Beispiele zur eingangsseitigen Anpassung eines Doppel-Gegentaktmischers

a zwei unsymmetrische Anpassnetzwerke

b symmetrisches Anpassnetzwerk

**Abb. 25.88.** Eingangsseitige Anpassung eines Doppel-Gegentaktmischers mit Anpassnetzwerken

bildung 25.90 zeigt ein Beispiel mit drei Übertragern. Da die Eingangsadmittanz der Transistoren ohmsch-kapazitiv ist, erhält man auch auf der Primärseite der Übertrager $\ddot{U}_1$ und $\ddot{U}_2$ ohmsch-kapazitive Admittanzen; deshalb ist zur Anpassung an den Wellenwiderstand zusätzlich eine Kompensation des kapazitiven Anteils erforderlich. Dies kann im einfachsten Fall durch eine Resonanzabstimmung mit den Induktivitäten $L_1$ und $L_2$ erfolgen. Die Ausgangsadmittanz auf der Sekundärseite des Übertragers $\ddot{U}_3$ hat ebenfalls einen kapazitiven Anteil, der hier jedoch als Bestandteil des HF-Filters aufgefasst werden kann.

## 25.5.2.7 Mischgewinn

Zur Berechnung des Mischgewinns im beidseitig angepassten Fall fassen wir die Kollektorwiderstände $R_C$ und die Ausgangswiderstände der Transistoren $T_1, \ldots, T_4$ zu zwei Verlustwiderständen $R_V$ zusammen. Die Lastwiderstände $R_{L1} = R_{L2} = Z_W$ werden durch die Anpassnetzwerke in zwei Widerstände $R_P$ transformiert, die parallel zu den Verlustwiderständen liegen. Im angepassten Fall gilt $R_V = R_P$. Abbildung 25.91 zeigt die Transformation an einem der beiden Ausgänge. Damit haben wir an jedem der beiden Aus- [unclear]
<!-- page-import:1525:end -->

<!-- page-import:1526:start -->
25.5 Aktive Mischer mit Transistoren 1489

a mit Kollektorwiderständen

b ohne Kollektorwiderstände

**Abb. 25.89.** Ausgangsseitige Anpassung eines Doppel-Gegentaktmischers mit Anpassnetzwerken

**Abb. 25.90.** Doppel-Gegentaktmischer mit Übertragern
<!-- page-import:1526:end -->

<!-- page-import:1527:start -->
1490  25. Mischer

Abb. 25.91. Kleinsignalersatzschaltbild für die Transformation des Lastwiderstands an einem der beiden Ausgänge

gänge dieselben Verhältnisse wie am Ausgang eines Gegentaktmischers, siehe Abb. 25.74 auf Seite 1474. Für den Mischgewinn gilt nach (25.73):

$$
G_M \;=\; \frac{A^2 Z_W}{r_a}\Big|_{r_a=R_V} \;=\; \frac{A^2 Z_W}{R_V}
$$

(25.91)

Dabei ist $Z_W$ der Eingangswiderstand an einem Eingang und $R_V$ der transformierte Lastwiderstand an einem Ausgang. Deshalb muss man für die Leerlaufverstärkung $A$ die Leerlaufverstärkung von einem Eingang zu einem Ausgang oder, alternativ, die Differenz-Leerlaufverstärkung einsetzen. Letztere folgt aus der Differenz-Mischverstärkung $A_{M,diff}$ durch Einsetzen von $R_V$ anstelle von $R_C$:

$$
A \;=\; A_{M,diff}\Big|_{R_C=R_V}^{(25.90)} \;=\; -c_1 S R_V
$$

Durch Einsetzen in (25.91) erhält man den Mischgewinn eines Doppel-Gegentaktmischers bei beidseitiger Anpassung:

$$
G_M \;=\; \frac{1}{4}\, c_1^2 S^2 Z_W R_V
$$

(25.92)

Ein Vergleich mit dem Mischgewinn eines Gegentaktmischers in (25.77) zeigt, dass der Mischgewinn des Doppel-Gegentaktmischers bei gleichen Verlustwiderständen $R_V$ um den Faktor 4 größer ist. Der Fall gleicher Verlustwiderstände liegt jedoch nur bei niedrigen Frequenzen vor; dann sind die Ausgangswiderstände der Transistoren vernachlässigbar und die Verlustwiderstände entsprechen den Kollektorwiderständen. In diesem Fall erzielt der Doppel-Gegentaktmischer aufgrund seines Differenzausgangs die doppelte Ausgangsspannung und die vierfache Ausgangsleistung. Dagegen dominieren bei hohen Frequenzen die Ausgangswiderstände der Transistoren. Da beim Doppel-Gegentaktmischer an jedem Ausgang zwei Transistoren parallelgeschaltet sind, sind die Verlustwiderstände in diesem Fall um den Faktor 2 kleiner als beim Gegentaktmischer in Abb. 25.74; in diesem Fall ist der Mischgewinn des Doppel-Gegentaktmischers nur noch doppelt so groß wie der des Gegentaktmischers.

## 25.5.2.8 I/Q-Mischer mit Doppel-Gegentaktmischern

Der Doppel-Gegentaktmischer eignet sich besonders gut zur Realisierung der I/Q-Mischer in digitalen Modulatoren und Demodulatoren; dabei werden jeweils zwei Mischer benötigt. Abbildung 25.92 zeigt die Anordnung der Mischer für die beiden Fälle; wir haben sie aus Abb. 21.69 auf Seite 1207 und Abb. 21.70 auf Seite 1208 entnommen.
<!-- page-import:1527:end -->

<!-- page-import:1528:start -->
25.5 Aktive Mischer mit Transistoren 1491

I/Q-Mischer

$f_{ZF}=0$

$i(t)$

$\cos \omega_T t$

$f_{LO}=f_T$

$q(t)$

$f_{ZF}=0$

$-\sin \omega_T t$

$f_{LO}=f_T$

$s_M(t)$

Bandpass

$f_{HF}=f_T$

$s_T(t)$

a in einem digitalen Modulator  
(I/Q-Aufwärtsmischer)

I/Q-Mischer

$f_{LO}=f_T$

$\cos \omega_T t$

$i_M(t)$

Tiefpass

$f_{ZF}=0$

$i(t)$

$f_{LO}=f_T$

$-\sin \omega_T t$

$q_M(t)$

Tiefpass

$f_{ZF}=0$

$q(t)$

b in einem digitalen Demodulator  
(I/Q-Abwärtsmischer)

**Abb. 25.92.** I/Q-Mischer

Beim I/Q-Mischer sind die HF- und die LO-Frequenzen der beiden Mischer gleich der Trägerfrequenz $f_T$ des Trägersignals $s_T(t)$: $f_{HF}=f_{LO}=f_T$. Die Quadratur-Komponenten $i(t)$ und $q(t)$ sind Basisbandsignale mit der Trägerfrequenz Null: $f_{ZF}=0$. In diesem Fall existiert keine Spiegelfrequenz, da die HF-Frequenz und die Spiegelfrequenz wegen $f_{ZF}=0$ zusammenfallen: $f_{HF}=f_{LO}\pm f_{ZF}=f_{LO}\mp f_{ZF}=f_{HF,Sp}$. Ein I/Q-Mischer arbeitet nur dann korrekt, wenn die Mischverstärkungen der beiden Mischer gleich sind und die Phasenverschiebung zwischen den beiden LO-Signalen $90^\circ$ beträgt. Die Anforderungen sind ohne Abgleich nur dadurch zu erfüllen, dass beide Mischer einschließlich der Komponenten zur Erzeugung der LO-Signale in einer integrierten Schaltung realisiert werden. Dabei wird ausschließlich der Doppel-Gegentaktmischer aus Abb. 25.80 auf Seite 1480 verwendet, da er keine Filter direkt am Mischer benötigt und deshalb ohne externe Komponenten auskommt.

Beim I/Q-Abwärtsmischer nach Abb. 25.92b werden zwei Doppel-Gegentaktmischer eingesetzt, die an den Eingängen verbunden sind; die Ausgangssignale werden getrennt weiterverarbeitet. Beim I/Q-Aufwärtsmischer nach Abb. 25.92a müssen die Ausgangssignale der beiden Doppel-Gegentaktmischer addiert werden. Diese Addition kann ohne zusätzlichen Schaltungsaufwand erfolgen, indem man anstelle der Ausgangsspannungen die Ausgangsströme addiert und gemeinsame Kollektorwiderstände gemäß Abb. 25.93 verwendet; dabei kann man jede der beiden Ausgangsspannungen oder die Ausgangs-Differenzspannung als Ausgangssignal $s_M(t)$ des I/Q-Aufwärtsmischers auffassen.

### 25.5.3 Kenngrößen

Aktive Mischer mit Transistoren können als Verstärker mit zusätzlicher Frequenzumsetzung betrachtet werden; deshalb gelten die Aussagen zu HF-Verstärkern im Abschnitt 24.4 auch für aktive Mischer, wenn man berücksichtigt, dass sich die Frequenzen der Ein- und Ausgangssignale bei Mischern unterscheiden.

### 25.5.4 Rauschen

Wir beschränken uns bei der Betrachtung des Rauschens auf Abwärtsmischer in Empfängern, da das Rauschen in diesem Fall von besonderem Interesse ist. Beim Gegentaktmischer besteht die Eingangsstufe aus einer Emitter- oder Basisschaltung, beim Doppel-Gegentaktmischer aus einem Differenzverstärker; wir können deshalb die prinzipiellen
<!-- page-import:1528:end -->

<!-- page-import:1529:start -->
1492  25. Mischer

**Abb. 25.93.** I/Q-Aufwärtsmischer mit zwei Doppel-Gegentaktmischern und Stromaddition

Ergebnisse zum Rauschverhalten der Grundschaltungen aus den Abschnitten 4.2.4.8 und 24.1 auf aktive Mischer übertragen:

– Beim Differenzverstärker werden die Rauschquellen von zwei Transistoren wirksam; deshalb ist die Rauschzahl eines Doppel-Gegentaktmischers grundsätzlich höher als die eines Gegentaktmischers.  
– Die Basisschaltung weist eine höhere Rauschzahl auf als die Emitterschaltung.  
– In Anwendungen mit hohen Anforderungen an den Dynamikbereich ist eine Stromgegenkopplung erforderlich. Da eine Stromgegenkopplung mit Widerständen zu einer Erhöhung der Rauschzahl führt, wird nach Möglichkeit eine Stromgegenkopplung mit Induktivitäten verwendet; dadurch wird der Mischer jedoch schmalbandig.

Man muss zwei Betriebsfälle unterscheiden:

– Wenn sich der Mischer wie in Abb. 25.86 auf Seite 1487 im inneren Teil einer integrierten Schaltung befindet, ist keine Leistungsanpassung erforderlich und man kann die Rauschzahl und den Intercept-Punkt $IIP3$ ohne Rücksicht auf die Eingangsimpedanz optimieren. In diesem Fall wird meist der Doppel-Gegentaktmischer mit einem Differenzverstärker in Emitterschaltung am Eingang verwendet.  
– Wenn der Eingang des Mischers direkt mit externen Leitungen verbunden ist, ist ein Kompromiss zwischen Leistungsanpassung und Rauschanpassung erforderlich, um die Rauschzahl *und* den Eingangsreflexionsfaktor gering zu halten und gleichzeitig einen ausreichend hohen Intercept-Punkt zu erzielen. Es gelten dann dieselben Überlegungen
<!-- page-import:1529:end -->

<!-- page-import:1530:start -->
25.5 Aktive Mischer mit Transistoren 1493

$f=f_{LO}+f_{ZF}$

$u_{g,HF}$

$u_{r,g(1,+1)}$

$Z_{(1,+1)}$

$u_{(1,+1)}$

$i_{(1,+1)}$

$u_{r,0}$

$i_{r,0}$

$f=f_{LO}-f_{ZF}$

$u_{r,g(1,-1)}$

$Z_{(1,-1)}$

$u_{(1,-1)}$

$i_{(1,-1)}$

$u_{r,0}$

$i_{r,0}$

$f=2f_{LO}+f_{ZF}$

$u_{r,g(2,+1)}$

$Z_{(2,+1)}$

$u_{(2,+1)}$

$i_{(2,+1)}$

$u_{r,0}$

$i_{r,0}$

$f=2f_{LO}-f_{ZF}$

$u_{r,g(2,-1)}$

$Z_{(2,-1)}$

$u_{(2,-1)}$

$i_{(2,-1)}$

$u_{r,0}$

$i_{r,0}$

⋮

**Abb. 25.94.**  
Kleinsignalersatzschaltbild zur Berechnung der Rauschzahl eines aktiven Mischers. Der ZF-Kreis ist hier nicht dargestellt.

wie bei rauscharmen integrierten HF-Verstärkern, siehe Abschnitt 24.1.3. Die Eingangsstufen werden in Emitterschaltung oder in Basisschaltung betrieben.

Im zweiten Fall erzielt man mit einem Gegentaktmischer in Emitterschaltung die geringste Rauschzahl; dabei kann man den Dynamikbereich durch eine induktive Stromgegenkopplung optimieren, ohne dass die Rauschzahl nennenswert zunimmt. Beim Gegentaktmischer muss aber unmittelbar am Ausgang ein ZF-Filter folgen, das den starken Anteil bei der LO-Frequenz $f_{LO}$ unterdrückt, bevor weitere Verstärker folgen. Ist dies nicht möglich, muss der Doppel-Gegentaktmischer verwendet werden; dadurch nimmt die Rauschzahl deutlich zu.

Durch die Frequenzumsetzung wird neben dem Rauschen im Bereich der HF-Frequenz $f_{HF}$ auch das Rauschen im Bereich der Spiegelfrequenz $f_{HF,Sp}$ und der Oberwellen $nf_{LO}\pm f_{ZF}$ auf die ZF-Frequenz umgesetzt. Bei der Berechnung geht man genauso vor, wie wir es im Abschnitt 25.3.6 für einen Diodenmischer beschrieben haben. Man erhält auch für einen aktiven Mischer ein Kleinsignalersatzschaltbild mit einem Kreis für jede Frequenz, siehe Abb. 25.94; dabei treten die äquivalenten Rauschquellen $u_{r,0}$ und $i_{r,0}$ der Transistoren in der Eingangsstufe an die Stelle der Rauschstromquelle $i_{r,D}$ der Dioden in Abb. 25.45. Daraus resultiert ein wichtiger Unterschied: während man die Rauschstromquelle der Dioden bei der Spiegelfrequenz und den Oberwellen unwirksam machen kann, indem man diese Frequenzbereiche kleinsignalmäßig kurzschließt, wird bei aktiven Mischern die Rauschspannungsquelle $u_{r,0}$ auch bei einem Kurzschluss wirksam. Bei einem aktiven Mischer kann man demnach nicht verhindern, dass das Rauschen aus diesen Bereichen in den ZF-Bereich umgesetzt wird. Aus diesem Grund ist die Rauschzahl eines
<!-- page-import:1530:end -->
