# Amplitude Control

<!-- page-import:1637:start -->
1600 26. Oszillatoren

*demultiplex,* um mehrere Sender und die zugehörigen Empfänger auf derselben Frequenz betreiben zu können; dabei verwendet jedes Sender-/Empfänger-Paar einen individuellen Code, der eine Trennung des eigenen Signals vom Signal anderer Sender-/Empfänger-Paare erlaubt.

## 26.5 Amplitudenregelung

Es gibt verschiedene Gründe für den Einsatz einer Amplitudenregelung in einem Oszillator; die wichtigsten sind:

- **Minimierung von Oberwellen:** Es gibt Anwendungen, in denen ein Oszillator ein möglichst sinusförmiges Signal liefern muss. Ein Beispiel dafür sind einfache ASK- oder FSK-modulierte Sender, bei denen die Modulation durch Ein-/Ausschalten oder FM-Modulation des Oszillators erfolgt und das Oszillatorsignal direkt auf den Sendeverstärker gegeben wird. In diesen Anwendungen kann man den Oszillator durch eine Amplitudenregelung im linearen Bereich halten und dadurch die Oberwellen minimieren. Wenn man die Amplitude nicht am Oszillator, sondern am Ausgang des Sendeverstärkers misst, werden zusätzlich alle toleranz- und temperaturbedingten Schwankungen im Oszillator und im Sendeverstärker ausgeregelt und man erhält eine sehr stabile Sendeleistung.
- **Ausgleich von Bauteile-Toleranzen:** Integrierte Oszillatorschaltungen, die mit einem externen Resonator arbeiten, müssen auch bei starken Schwankungen der Resonatorgüte zuverlässig arbeiten. So kann z.B. der Serienwiderstand eines 10 MHz-Quarz-Resonators – je nach Qualität – im Bereich $5 \ldots 25\,\Omega$ liegen. Bei Referenzoszillatoren, die so ausgelegt sind, dass die Güte nahezu vollständig erhalten bleibt, wirkt sich diese Schwankung voll auf den Betrag der Schleifenverstärkung aus. Legt man die Schleifenverstärkung für die minimale Güte aus, wird sie bei maximaler Güte viel zu hoch; dadurch kann die Aussteuerung so stark zunehmen, dass mechanische Resonatoren thermisch oder mechanisch überlastet und ggf. sogar zerstört werden. Eine Amplitudenregelung verhindert dies durch eine von der Güte unabhängige Begrenzung der Aussteuerung.
- **Ausgleich von Schwankungen der Schleifenverstärkung bei Breitband-VCOs:** Mit zunehmendem Abstimmbereich wird es immer schwieriger, eine einigermaßen konstante Schleifenverstärkung zu gewährleisten. Wenn die Schwankungen keinen zufriedenstellenden Betrieb über den gesamten Abstimmbereich zulassen, muss man auch hier eine Amplitudenregelung einsetzen.

Der wesentliche Nachteil einer Amplitudenregelung liegt darin, dass die zusätzlich benötigten Schaltungsteile das Rauschverhalten ungünstig beeinflussen können.

### 26.5.1 Regelung und Begrenzung

Abbildung 26.105 zeigt den Unterschied zwischen einer Amplitudenbegrenzung und einer Amplitudenregelung am Beispiel des Quarz-Oszillators aus Abb. 26.85 auf Seite 1582. Bei der Amplitudenbegrenzung in Abb. 26.105a werden die Amplituden der Spannungen $U_2$ und $U_3$ begrenzt. Der Begrenzer stabilisiert also die Amplitude am *Eingang* der Emitterschaltung mit dem Transistor $T_1$; dadurch hängen die Amplituden des Kollektorstroms $I_{C1}$ und der Spannung $U_1$ von der Güte des Quarz-Resonators ab. Dagegen wird bei der Amplitudenregelung in Abb. 26.105b die Amplitude am *Ausgang* der Emitterschaltung
<!-- page-import:1637:end -->

<!-- page-import:1638:start -->
26.5 Amplitudenregelung 1601

a Amplitudenbegrenzung

b Amplitudenregelung

**Abb. 26.105.** Unterschied zwischen Begrenzung und Regelung  
(const./var. = konstante/variable Amplitude)

stabilisiert, indem die Verstärkung des regelbaren Verstärkers (VGA) angepasst wird; dadurch bleibt die Amplitude des Kollektorstroms $I_{C1}$ konstant.

## 26.5.2 Regelmechanismen

Die Regelung erfolgt durch eine Reduktion der Schleifenverstärkung auf Eins, sobald die gewünschte Amplitude erreicht wird. Zur Reduktion der Schleifenverstärkung werden zwei Mechanismen verwendet:

- Im einfachsten Fall werden die Ruheströme des Verstärkers reduziert. Diese Methode wird vor allem bei einstufigen Oszillatoren mit Parallelschwingkreis verwendet, bei denen die effektive Steilheit $S_V$ des Verstärkers häufig direkt proportional zur Steilheit des Transistors und damit zum Ruhestrom ist. Der Regelbereich ist begrenzt, da sich bei einer größeren Änderung der Ruheströme wichtige Parameter des Transistors zu stark ändern, z.B. die Basis-Emitter-Kapazität und die Transitfrequenz.
- Einen größeren Regelbereich erzielt man, wenn man einen Differenzverstärker als Stromteiler einsetzt. Diese Methode entspricht weitgehend der Verstärkungsregelung mit einem regelbaren Verstärker (VGA) in Empfängern, die wir bereits im Abschnitt 22.2.3 beschrieben haben.

Die Regelung erfolgt in den meisten Fällen über eine Regelspannung $U_R$. Wir wählen die Zählrichtung im folgenden immer so, dass die Schleifenverstärkung $LG$ mit zunehmender Spannung $U_R$ zunimmt, d.h. die Steigung der Kennlinie $LG(U_R)$ ist positiv:

$$
K_{LG} = \frac{d\,LG}{dU_R} > 0
$$

Daraus folgt, dass $U_R$ am Beginn des Schwingungsaufbaus den Maximalwert $U_{R,\max}$ mit $LG(U_{R,\max}) > 0$ annimmt und beim Erreichen der Soll-Amplitude auf den Wert $U_{R,0}$ mit $LG(U_{R,0}) = 1$ reduziert wird.

### 26.5.2.1 Regelung über den Ruhestrom

Abbildung 26.106 zeigt die Regelung über den Ruhestrom bei einem integrierten und einem diskreten Colpitts-Oszillator in Basisschaltung. Bei der integrierten Ausführung in Abb. 26.106a setzt sich der Ruhestrom aus dem Konstantstrom $I_0$ und dem variablen Strom [unclear]
<!-- page-import:1638:end -->

<!-- page-import:1639:start -->
1602  26. Oszillatoren

a integrierte Ausführung

b diskrete Ausführung

**Abb. 26.106.** Regelung über den Ruhestrom bei einem Colpitts-Oszillator in Basisschaltung

$I_1$ zusammen; dabei kann der variable Strom von einer Stromquelle geliefert werden oder mit einem Widerstand $R$ gemäß

$$
I_1 = \frac{U_R - U_1}{R} \approx \frac{U_R - 0{,}7\,\mathrm{V}}{R}
$$

aus der Regelspannung $U_R$ abgeleitet werden.

Bei der diskreten Ausführung in Abb. 26.106b wird der Ruhestrom

$$
I_E = \frac{U_E}{R_E} \approx \frac{U_B - 0{,}7\,\mathrm{V}}{R_E}
$$

durch einen Eingriff in den Basisspannungsteiler variiert. Wenn die Ströme im Spannungsteiler deutlich größer sind als der Basisstrom des Transistors, kann man die Basisspannung $U_B$ aus der Knotengleichung am Basisanschluss berechnen:

$$
\frac{U_B}{R_{B2}} = \frac{U_b - U_B}{R_{B1}} + \frac{U_R - U_B}{R}
\Rightarrow
U_B = (R_{B1} \parallel R_{B2} \parallel R)\left(\frac{U_b}{R_{B1}} + \frac{U_R}{R}\right)
$$

Die Kapazität $C_B$ stellt einen näherungsweisen Kleinsignal-Kurzschluss der Basis bei der Resonanzfrequenz sicher.

## 26.5.2.2 Regelung mit Stromteiler

Abbildung 26.107 zeigt die Regelung mit Stromteiler bei einem Colpitts-Oszillator in Basisschaltung. Bei der einfachen Ausführung in Abb. 26.107a werden der Ruhestrom $I_0$ und der Eingangsstrom $I_e$ über den Differenzverstärker $T_1, T_2$ aufgeteilt. Die Aufteilung erfolgt entsprechend den Kennlinien des Differenzverstärkers, siehe (4.61) auf Seite 344. Für $U_R > 5U_T \approx 125\,\mathrm{mV}$ sperrt $T_2$ und es gilt $I_{C1} = I_0 - I_e$. Mit abnehmender Regelspannung $U_R$ verlagern sich die Ströme immer stärker auf $T_2$; dadurch nimmt die Schleifenverstärkung ab. Damit $T_1$ und $T_2$ bezüglich der Oszillatorschleife in Basisschaltung arbeiten, müssen die Impedanzen in den Basiskreisen bei der Resonanzfrequenz $f_R$ möglichst gering sein; dazu dienen die Kapazitäten $C_{B1}$ und $C_{B2}$. Bei geringen Resonanzfrequenzen werden die erforderlichen Werte für $C_{B1}$ und $C_{B2}$ für eine Integration zu groß; in diesem Fall muss die Regelspannung niederohmig bereitgestellt werden, z.B. über Kollektorschaltungen. Ein besseres Rauschverhalten erzielt man mit der in Abb. 26.107b gezeigten Ausführung, bei der der Stromteiler $T_2, T_3$ als Kaskode-Stufe für $T_1$ ausgeführt.

Abbildung 26.108 zeigt die Regelung mit Stromteiler bei einem Colpitts-Oszillator mit Differenzverstärker. Die Transistoren $T_1 \ldots T_6$ bilden hier dieselbe Anordnung wie bei dem
<!-- page-import:1639:end -->

<!-- page-import:1640:start -->
26.5 Amplitudenregelung 1603

a einfache Ausführung für Oszillatoren  
in Basisschaltung

b Ausführung mit Kaskode-Stufe

**Abb. 26.107.** Regelung mit Stromteiler bei einem Colpitts-Oszillator in Basisschaltung

regelbaren Verstärker in Abb. 22.17 auf Seite 1251 oder dem Doppel-Gegentaktmischer in Abb. 25.80 auf Seite 1480.

### 26.5.3 Amplitudenmessung

Die Amplitudenmessung kann mit einem einfachen Spitzenwert-Gleichrichter erfolgen; eine lineare Kennlinie ist dabei nicht erforderlich. Die Messung erfolgt in der Regel nicht am Oszillator selbst, sondern am Ausgang des nachfolgenden Verstärkers. Damit die Messung nicht von toleranz- oder temperaturbedingten Schwankungen des Gleichanteils der Ausgangsspannung abhängt, kann man zusätzlich den Mittelwert (= Gleichanteil) messen

**Abb. 26.108.**  
Regelung mit Stromteiler bei  
einem Colpitts-Oszillator mit  
Differenzverstärker
<!-- page-import:1640:end -->
