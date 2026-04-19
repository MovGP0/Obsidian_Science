# Basic Circuits

<!-- page-import:0276:start -->
3.4 Grundschaltungen 239

Sourceschaltung  Drainschaltung  Gateschaltung

**Abb. 3.55.** Grundschaltungen eines Feldeffekttransistors

quelle (= Kleinsignal-Masse) verbunden; bei der Sourceschaltung sind beide Varianten identisch, weil der Source-Anschluss in diesem Fall mit der (Kleinsignal-) Masse verbunden ist.

Es gibt mehrere Schaltungen mit zwei und mehr Fets, die so häufig auftreten, dass sie ebenfalls als Grundschaltungen anzusehen sind, z.B. Differenzverstärker und Stromspiegel; diese Schaltungen werden im Kapitel 4.1 beschrieben.

In allen Schaltungen werden bevorzugt n-Kanal-Mosfets eingesetzt, da sie aufgrund der höheren Ladungsträgerbeweglichkeit bei gleicher Kanalgröße einen größeren Steilheitskoeffizienten besitzen als p-Kanal-Mosfets. Darüber hinaus werden selbstsperrende Mosfets häufiger verwendet als selbstleitende; letzteres gilt besonders für integrierte Schaltungen. Bezüglich des Kleinsignalverhaltens besteht kein prinzipieller Unterschied zwischen selbstleitenden Mosfets und Jfets auf der einen und selbstsperrenden Mosfets auf der anderen Seite, lediglich die Arbeitspunkteinstellung ist unterschiedlich. Alle Schaltungen können auch mit den entsprechenden p-Kanal-Fets aufgebaut werden; dazu muss man die Versorgungsspannungen, gepolte Elektrolytkondensatoren und Dioden umpolen.

## 3.4.1 Sourceschaltung

Abbildung 3.56a zeigt die Sourceschaltung bestehend aus dem Mosfet, dem Drainwiderstand $R_D$, der Versorgungsspannungsquelle $U_b$ und der Signalspannungsquelle $U_g$ mit dem Innenwiderstand $R_g$. Für die folgende Untersuchung wird $U_b = 5\,\mathrm{V}$ und $R_D = 1\,\mathrm{k}\Omega$ und für den Mosfet $K = 4\,\mathrm{mA}/\mathrm{V}^2$ und $U_{th} = 1\,\mathrm{V}$ angenommen.

a Schaltung  b Ersatzschaltbild

**Abb. 3.56.** Sourceschaltung
<!-- page-import:0276:end -->

<!-- page-import:0277:start -->
240  3. Feldeffekttransistor

Abb. 3.57. Übertragungskennlinie der Sourceschaltung

#### 3.4.1.1 Übertragungskennlinie der Sourceschaltung

Misst man die Ausgangsspannung $U_a$ als Funktion der Signalspannung $U_g$, erhält man die in Abb. 3.57 gezeigte Übertragungskennlinie. Für $U_g < U_{th} = 1\ \mathrm{V}$ fließt kein Drainstrom und man erhält $U_a = U_b = 5\ \mathrm{V}$. Für $U_g \geq 1\ \mathrm{V}$ fließt ein mit $U_g$ zunehmender Drainstrom $I_D$ und die Ausgangsspannung nimmt entsprechend ab; dabei arbeitet der Mosfet für $1\ \mathrm{V} \leq U_g \leq 2{,}4\ \mathrm{V}$ im Abschnürbereich und für $U_g > 2{,}4\ \mathrm{V}$ im ohmschen Bereich. Der bei integrierten Mosfets auftretende Substrat-Effekt wirkt sich bei der Sourceschaltung nicht aus, weil der Substrat- bzw. Bulk-Anschluss und der Source-Anschluss mit Masse verbunden sind, d.h. es gilt immer $U_{BS} = 0$.

##### 3.4.1.1.1 Betrieb im Abschnürbereich

Abbildung 3.56b zeigt das Ersatzschaltbild; bei Vernachlässigung des Early-Effekts gilt:

$$
I_D = \frac{K}{2}(U_{GS} - U_{th})^2
$$

Für die Ausgangsspannung erhält man mit $U_g = U_e = U_{GS}$:

$$
U_a = U_{DS}\ \overset{I_{aus}=0}{=} \ U_b - I_D R_D = U_b - \frac{R_D K}{2}(U_e - U_{th})^2
\qquad (3.58)
$$

Der Innenwiderstand $R_g$ der Quelle hat bei Mosfets wegen $I_G = 0$ keinen Einfluss auf die Kennlinie; er wirkt sich nur auf das dynamische Verhalten aus. Bei Jfets treten dagegen Gate-Leckströme im pA- bzw. nA-Bereich auf, die bei sehr hohen Innenwiderständen einen nicht mehr vernachlässigbaren Spannungsabfall zur Folge haben; deshalb setzen man bei Quellen mit $R_g > 10\ \mathrm{M}\Omega$ bevorzugt Mosfets ein.

Als Arbeitspunkt wird ein Punkt etwa in der Mitte des abfallenden Bereichs der Übertragungskennlinie gewählt; dadurch wird die Aussteuerbarkeit maximal. Für den in Abb. 3.57 beispielhaft eingezeichneten Arbeitspunkt erhält man mit $U_b = 5\ \mathrm{V}$, $R_D = 1\ \mathrm{k}\Omega$, $K = 4\ \mathrm{mA}/\mathrm{V}^2$ und $U_{th} = 1\ \mathrm{V}$:

$$
U_a = 3\ \mathrm{V}
\Rightarrow
I_D = \frac{U_b - U_a}{R_D} = 2\ \mathrm{mA}
\Rightarrow
U_e = U_{GS} = U_{th} + \sqrt{\frac{2I_D}{K}} = 2\ \mathrm{V}
$$
<!-- page-import:0277:end -->

<!-- page-import:0278:start -->
3.4 Grundschaltungen 241

**Abb. 3.58.** Kleinsignalersatzschaltbild der Sourceschaltung

#### 3.4.1.1.2 Grenze zum ohmschen Bereich

Für $U_a = U_{a,ab} = U_{DS,ab}$ erreicht der Mosfet die Grenze zum ohmschen Bereich. Mit $U_{DS,ab} = U_{GS} - U_{th}$ und $U_e = U_{GS}$ erhält man die Bedingung $U_a = U_e - U_{th}$; Einsetzen in (3.58) liefert

$$
U_{a,ab}=\frac{1}{R_DK}\left(\sqrt{1+2U_bR_DK}-1\right)\qquad \overset{2U_bR_DK\gg 1}{\approx}\qquad \sqrt{\frac{2U_b}{R_DK}}-\frac{1}{R_DK}
$$

und $U_{e,ab}=U_{a,ab}+U_{th}$. Für das Zahlenbeispiel erhält man $U_{a,ab}=1{,}35\ \mathrm{V}$ und $U_{e,ab}=2{,}35\ \mathrm{V}$.

Bei vorgegebener Versorgungsspannung muss man das Produkt $R_DK$ vergrößern, wenn man $U_{a,ab}$ vermindern und damit den Aussteuerbereich vergrößern will. In der Praxis ist die Aussteuerbarkeit jedoch immer geringer als bei der Emitterschaltung, weil ein Bipolartransistor weitgehend unabhängig von der äußeren Beschaltung bis auf $U_{CE,sat}\approx 0{,}1\ \mathrm{V}$ ausgesteuert werden kann.

#### 3.4.1.2 Kleinsignalverhalten der Sourceschaltung

Das Verhalten bei Aussteuerung um einen Arbeitspunkt A wird als *Kleinsignalverhalten* bezeichnet. Der Arbeitspunkt ist durch die Arbeitspunktgrößen $U_{e,A}=U_{GS,A}$, $U_{a,A}=U_{DS,A}$ und $I_{D,A}$ gegeben und muss im Abschnürbereich liegen, damit eine nennenswerte Verstärkung erreicht wird; als Beispiel wird der oben ermittelte Arbeitspunkt mit $U_{GS,A}=2\ \mathrm{V}$, $U_{DS,A}=3\ \mathrm{V}$ und $I_{D,A}=2\ \mathrm{mA}$ verwendet.

##### 3.4.1.2.1 Kleinsignalparameter

Abbildung 3.58 zeigt das Kleinsignalersatzschaltbild der Sourceschaltung, das man durch Einsetzen des Kleinsignalersatzschaltbilds des Fets nach Abb. 3.17 bzw. Abb. 3.46 und Übergang zu den Kleinsignalgrößen erhält. Die in Abb. 3.46 enthaltene Quelle mit der Substrat-Steilheit $S_B$ entfällt wegen $U_{BS}=u_{BS}=0$.

Ohne Lastwiderstand $R_L$ folgt aus Abb. 3.58 für die Sourceschaltung:

*Sourceschaltung*

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}=-S\,(R_D\parallel r_{DS})\qquad \overset{r_{DS}\gg R_D}{\approx}\qquad -SR_D
\tag{3.59}
$$

$$
r_e=\frac{u_e}{i_e}=\infty
\tag{3.60}
$$

$$
r_a=\frac{u_a}{i_a}=R_D\parallel r_{DS}\qquad \overset{r_{DS}\gg R_D}{\approx}\qquad R_D
\tag{3.61}
$$
<!-- page-import:0278:end -->

<!-- page-import:0279:start -->
242  3. Feldeffekttransistor

**Abb. 3.59.** Ersatzschaltbild mit den Ersatzgrößen $A$, $r_e$ und $r_a$

Mit $K = 4\,\mathrm{mA}/\mathrm{V}^2$ und $U_A = 50\,\mathrm{V}$ erhält man $S = \sqrt{2K\,I_{D,A}} = 4\,\mathrm{mS}, r_{DS} = U_A/I_{D,A} = 25\,\mathrm{k}\Omega, A = -3{,}85$ und $r_a = 960\,\Omega$. Zum Vergleich: die im Abschnitt 2.4.1 beschriebene Emitterschaltung erreicht bei gleichem Arbeitspunkt, d.h. $I_{C,A} = I_{D,A} = 2\,\mathrm{mA}$ und $R_C = R_D = 1\,\mathrm{k}\Omega$, eine Verstärkung von $A = -75$. Ursache für die geringere Verstärkung des Mosfets ist die geringere Steilheit bei gleichem Strom: $S = 4\,\mathrm{mA}/\mathrm{V}$ beim Mosfet und $S = 77\,\mathrm{mA}/\mathrm{V}$ beim Bipolartransistor.

Die Größen $A, r_e$ und $r_a$ beschreiben die Sourceschaltung vollständig; Abb. 3.59 zeigt das zugehörige Ersatzschaltbild. Der Lastwiderstand $R_L$ kann ein ohmscher Widerstand oder ein Ersatzelement für den Eingangswiderstand einer am Ausgang angeschlossenen Schaltung sein. Wichtig ist dabei, dass der Arbeitspunkt durch $R_L$ nicht verschoben wird, d.h. es darf kein oder nur ein vernachlässigbar kleiner Gleichstrom durch $R_L$ fließen.

Mit Hilfe von Abb. 3.59 kann man die Betriebsverstärkung berechnen:

$$
A_B = \frac{u_a}{u_g} = \frac{r_e}{r_e + R_g}\, A\, \frac{R_L}{R_L + r_a} \overset{r_e \to \infty}{=} A\, \frac{R_L}{R_L + r_a}
\qquad (3.62)
$$

Sie setzt sich aus der Verstärkung $A$ der Schaltung und dem Spannungsteilerfaktor am Ausgang zusammen.

#### 3.4.1.2.2 Maximale Verstärkung

Aus (3.59) folgt mit $R_D \to \infty$ die maximale Verstärkung:

$$
\mu = \lim_{R_D \to \infty} |A| = S\,r_{DS} \approx \sqrt{\frac{2K}{I_{D,A}}}\, U_A = \frac{2U_A}{U_{GS} - U_{th}}
$$

Dieser Grenzfall kann mit einem ohmschen Drainwiderstand $R_D$ nur schwer erreicht werden, da aus $R_D \to \infty$ auch $R_D \gg r_{DS}$ folgt und demnach der Spannungsabfall an $R_D$ wegen $I_{D,A}R_D \gg I_{D,A}r_{DS} = U_A$ viel größer als die Early-Spannung $U_A \approx 50\,\mathrm{V}$ sein müsste. Man erreicht den Grenzfall, wenn man anstelle von $R_D$ eine Konstantstromquelle mit $I_K = I_{D,A}$ einsetzt.

Die maximale Verstärkung hängt vom Arbeitspunkt ab; sie nimmt mit zunehmendem Strom bzw. zunehmender Spannung $U_{GS} - U_{th}$ ab. Will man eine hohe maximale Verstärkung erreichen, muss man einen Mosfet mit möglichst großem Steilheitskoeffizient $K$ mit möglichst kleinem Strom $I_{D,A}$ betreiben. Der Maximalwert $\mu_{max}$ wird im Unterschwellenbereich, d.h. für $U_{GS} - U_{th} < 100\,\mathrm{mV}$ erreicht; in diesem Bereich ist die Übertragungskennlinie exponentiell, siehe (3.25), und man erhält $\mu_{max} \approx U_A/(2U_T) \approx 400 \dots 2000$. In der Praxis werden Mosfets oft in der Nähe des Temperaturkompensationspunkts $U_{GS,TK} \approx U_{th} + 1\,\mathrm{V}$ betrieben, siehe Abschnitt 3.1.7.1; dann gilt $\mu \approx 40 \dots 200$.

#### 3.4.1.3 Nichtlinearität

Im Abschnitt 3.1.4.5 wird der Klirrfaktor $k$ des Drainstroms für eine sinusförmige Kleinsignalaussteuerung mit $\hat{u}_e = \hat{u}_{GS}$ berechnet, siehe (3.13) auf Seite 193; er ist bei
<!-- page-import:0279:end -->

<!-- page-import:0280:start -->
3.4 Grundschaltungen 243

der Sourceschaltung gleich dem Klirrfaktor der Ausgangsspannung $u_a$. Es gilt $\hat{u}_e < 4k\,(U_{GS,A} - U_{th})$, d.h. für $k < 1\%$ muss $\hat{u}_e < (U_{GS,A} - U_{th})/25$ gelten; für das Zahlenbeispiel mit $U_{GS,A} - U_{th} = 1\ \mathrm{V}$ erhält man $\hat{u}_e < 40\,\mathrm{mV}$. Die zugehörige Ausgangsamplitude ist wegen $\hat{u}_a = |A|\,\hat{u}_e$ von der Verstärkung $A$ abhängig; für das Zahlenbeispiel mit $A = -3{,}85$ gilt demnach $\hat{u}_a < 4k|A|\,(U_{GS,A} - U_{th}) = k \cdot 15{,}4\,\mathrm{V}$. Zum Vergleich: für die Emitterschaltung im Abschnitt 2.4.1 gilt $\hat{u}_a < k \cdot 7{,}5\,\mathrm{V}$, d.h. die Sourceschaltung erreicht bei gleichem Klirrfaktor eine größere Ausgangsamplitude.

Die Sourceschaltung eignet sich besonders zum Einsatz in Verstärkern mit Bandpass-Verhalten, z.B. Sende-, Empfangs- und Zwischenfrequenzverstärker in der drahtlosen Übertragungstechnik. Bei diesen Verstärkern sind die quadratischen Verzerrungen unbedeutend, weil die dabei entstehenden Summen- und Differenzfrequenzen außerhalb des Durchlassbereichs der Bandpässe liegen: $f_1$, $f_2$ im Durchlassbereich $\Rightarrow$ $f_1 - f_2$, $f_1 + f_2$ außerhalb des Durchlassbereichs. Im Gegensatz dazu entstehen durch kubische Verzerrungen unter anderem Anteile bei $2f_1 - f_2$ und $2f_2 - f_1$, die im Durchlassbereich liegen können. Die kubischen Verzerrungen sind jedoch bei Fets aufgrund der nahezu quadratischen Kennlinie sehr klein. Deshalb werden in modernen Sendeendstufen bevorzugt Hochfrequenz-Mosfets und GaAs-Mesfets in Sourceschaltung ohne Gegenkopplung eingesetzt. Eine Gegenkopplung führt zwar auch bei Fets zu einer Verringerung des Klirrfaktors, weil die vergleichsweise starken quadratischen Verzerrungen abnehmen, die kubischen Verzerrungen nehmen jedoch zu.

#### 3.4.1.4 Temperaturabhängigkeit

Aus (3.58) und (3.14) folgt:

$$
\left.\frac{dU_a}{dT}\right|_A = -R_D \left.\frac{dI_D}{dT}\right|_A = -I_{D,A}R_D\left(\frac{1}{K}\frac{dK}{dT} - \frac{2}{U_{GS,A} - U_{th}}\frac{dU_{th}}{dT}\right)
$$

$$
\approx I_{D,A}R_D \cdot 10^{-3}\,\mathrm{K}^{-1}\left(5 - \frac{4\ldots 7\,\mathrm{V}}{U_{GS,A} - U_{th}}\right)
$$

Für das Zahlenbeispiel erhält man $(dU_a/dT)|_A \approx -4\dots +2\,\mathrm{mV/K}$. Die Temperaturdrift ist gering, weil der Mosfet hier in der Nähe des Temperaturkompensationspunkts betrieben wird, siehe Abschnitt 3.1.7.1.

Ein Vergleich der Temperaturdrift der Source- und der Emitterschaltung ist nur mit Bezug auf die Verstärkung sinnvoll; man erhält für die Sourceschaltung $(dU_a/dT)|_A \approx -1\dots +0{,}5\,\mathrm{mV/K}\cdot |A|$ und für die Emitterschaltung $(dU_a/dT)|_A \approx -1{,}7\,\mathrm{mV/K}\cdot |A|$. Die Drift der Sourceschaltung ist demnach bei gleicher Verstärkung geringer, vor allem dann, wenn der Arbeitspunkt nahe am Kompensationspunkt liegt.

#### 3.4.1.5 Sourceschaltung mit Stromgegenkopplung

Die Nichtlinearität und die Temperaturabhängigkeit der Sourceschaltung kann durch eine Stromgegenkopplung verringert werden; dazu wird ein Sourcewiderstand $R_S$ eingefügt, siehe Abb. 3.60a. Die Übertragungskennlinie und das Kleinsignalverhalten hängen in diesem Fall von der Beschaltung des Bulk-Anschlusses ab. Er ist bei Einzel-Mosfets mit der Source und in integrierten Schaltungen mit der negativsten Versorgungsspannung, hier Masse, verbunden; in Abb. 3.60a ist deshalb ein Umschalter für den Bulk-Anschluss enthalten.

Abbildung 3.61 zeigt die Übertragungskennlinie für einen Einzel-Mosfet ($U_{BS} = 0$) und für einen integrierten Mosfet ($U_B = 0$) für $R_D = 1\,\mathrm{k}\Omega$ und $R_S = 200\,\Omega$. Die
<!-- page-import:0280:end -->

<!-- page-import:0281:start -->
244  3. Feldeffekttransistor

a Schaltung  b Ersatzschaltbild

**Abb. 3.60.** Sourceschaltung mit Stromgegenkopplung

eingezeichnete Grenze zwischen dem Abschnür- und dem ohmschen Bereich gilt für den Einzel-Mosfet.

##### 3.4.1.5.1 Betrieb im Abschnürbereich

Abbildung 3.60b zeigt das Ersatzschaltbild; für den Abschnürbereich erhält man mit $I_a = 0$:

$$
U_a = U_b - I_D R_D = U_b - \frac{R_D K}{2}(U_{GS} - U_{th})^2
$$

(3.63)

$$
U_e = U_{GS} + U_S = U_{GS} + I_D R_S
$$

(3.64)

Für den in Abb. 3.61 beispielhaft eingezeichneten Arbeitspunkt erhält man mit $U_b = 5\ \mathrm{V}$, $K = 4\ \mathrm{mA}/\mathrm{V}^2$, $R_D = 1\ \mathrm{k}\Omega$ und $R_S = 200\ \Omega$ beim Einzel-Mosfet:

Sperrbereich

Abschnürbereich

ohmscher Bereich

$U_B = 0$

$U_{BS} = 0$

$U_{th}$

**Abb. 3.61.** Übertragungskennlinie der Sourceschaltung mit Stromgegenkopplung bei einem Einzel-Mosfet ($U_{BS} = 0$) und einem integrierten Mosfet ($U_B = 0$). Die Grenze zwischen dem Abschnür- und dem ohmschen Bereich gilt für den Einzel-Mosfet.
<!-- page-import:0281:end -->

<!-- page-import:0282:start -->
3.4 Grundschaltungen 245

**Abb. 3.62.** Kleinsignalersatzschaltbild der Sourceschaltung mit Stromgegenkopplung

$$
U_a = 3{,}5\,\mathrm{V} \;\Rightarrow\; I_D = \frac{U_b-U_a}{R_D} = 1{,}5\,\mathrm{mA} \;\Rightarrow\; U_S = I_D R_S = 0{,}3\,\mathrm{V}
$$

$$
\Rightarrow\; U_{GS} = U_{th} + \sqrt{\frac{2I_D}{K}} = 1{,}866\,\mathrm{V} \;\Rightarrow\; U_e = U_{GS} + U_S = 2{,}166\,\mathrm{V}
$$

Beim integrierten Mosfet muss die Abhängigkeit der Schwellenspannung von $U_{BS}$ nach (3.18) auf Seite 207 berücksichtigt werden. Für den Mosfet wird $U_{th,0} = 1\,\mathrm{V}$, $\gamma = 0{,}5\,\sqrt{\mathrm{V}}$ und $U_{inv} = 0{,}6\,\mathrm{V}$ angenommen; damit folgt:

$$
U_{BS} = -U_S = -0{,}3\,\mathrm{V}
$$

$$
\Rightarrow\; U_{th} = U_{th,0} + \gamma\left(\sqrt{U_{inv}-U_{BS}} - \sqrt{U_{inv}}\right) \approx 1{,}087\,\mathrm{V}
$$

$$
\Rightarrow\; U_{GS} = U_{th} + \sqrt{\frac{2I_D}{K}} = 1{,}953\,\mathrm{V} \;\Rightarrow\; U_e = U_{GS} + U_S = 2{,}253\,\mathrm{V}
$$

#### 3.4.1.5.2 Kleinsignalverhalten

Die Berechnung erfolgt mit Hilfe des in Abb. 3.62 gezeigten Kleinsignalersatzschaltbilds. Aus der Knotengleichung

$$
Su_{GS} + S_Bu_{BS} + \frac{u_{DS}}{r_{DS}} + \frac{u_a}{R_D} = 0
$$

erhält man mit $u_{GS} = u_e-u_S$ und $u_{DS} = u_a-u_S$ die Verstärkung:

$$
A = \left.\frac{u_a}{u_e}\right|_{i_a=0}
= -\frac{SR_D}{1+\frac{R_D}{r_{DS}}+\left(S+S_B+\frac{1}{r_{DS}}\right)R_S}
$$

$$
\overset{r_{DS}\gg R_D,\,1/S}{\approx}
-\frac{SR_D}{1+(S+S_B)R_S}
$$

$$
\overset{u_{BS}=0}{=}
-\frac{SR_D}{1+SR_S}
\overset{SR_S\gg 1}{\approx}
-\frac{R_D}{R_S}
$$

Bei Einzel-Mosfets, d.h. ohne Substrat-Effekt ($u_{BS}=0$), und starker Gegenkopplung ($SR_S \gg 1$) hängt die Verstärkung nur noch von $R_D$ und $R_S$ ab. Allerdings kann man aufgrund der geringen Maximalverstärkung eines Mosfets im allgemeinen keine starke Gegenkopplung vornehmen, weil sonst die Verstärkung zu klein wird; deshalb ist die Bedingung $SR_S \gg 1$ in der Praxis nur selten erfüllt. Bei Betrieb mit einem Lastwiderstand
<!-- page-import:0282:end -->

<!-- page-import:0283:start -->
246  3. Feldeffekttransistor

$R_L$ kann man die zugehörige Betriebsverstärkung $A_B$ berechnen, indem man für $R_D$ die Parallelschaltung von $R_D$ und $R_L$ einsetzt, siehe Abb. 3.62. In dem beispielhaft gewählten Arbeitspunkt erhält man für den Einzel-Mosfet mit $S = 3{,}46\,\mathrm{mS},\ r_{DS} = 33\,\mathrm{k}\Omega,\ R_D = 1\,\mathrm{k}\Omega$ und $R_S = 200\,\Omega$ exakt $A = -2{,}002$; die ersten beiden Näherungen liefern $A = -2{,}045$, die dritte ist wegen $SR_S < 1$ nicht anwendbar. Für den integrierten Mosfet wird $\gamma = 0{,}5\,\sqrt{\mathrm{V}}$ und $U_{inv} = 0{,}6\,\mathrm{V}$ angenommen; aus (3.42) folgt $S_B = 0{,}91\,\mathrm{mS}$ und damit exakt $A = -1{,}812$ und in erster Näherung $A = -1{,}846$.

Für den Eingangswiderstand gilt $r_e = \infty$ und für den Ausgangswiderstand:

$$
r_a = R_D \parallel r_{DS}\left(1 + \left(S + S_B + \frac{1}{r_{DS}}\right)R_S\right)\ \overset{r_{DS}\gg R_D}{\approx}\ R_D
$$

Mit $r_{DS} \gg R_D, 1/S$ und ohne Lastwiderstand $R_L$ erhält man für die Sourceschaltung mit Stromgegenkopplung:

*Sourceschaltung mit Stromgegenkopplung*

$$
A = \left.\frac{u_a}{u_e}\right|_{i_a=0} \approx -\frac{SR_D}{1 + (S + S_B)R_S} \overset{u_{BS}=0}{=} -\frac{SR_D}{1 + SR_S}
\tag{3.65}
$$

$$
r_e = \infty
\tag{3.66}
$$

$$
r_a = \frac{u_a}{i_a} \approx R_D
\tag{3.67}
$$

### 3.4.1.5.3 Vergleich mit der Sourceschaltung ohne Gegenkopplung

Ein Vergleich von (3.65) mit (3.59) zeigt, dass die Verstärkung durch die Gegenkopplung näherungsweise um den *Gegenkopplungsfaktor* $(1 + (S + S_B)R_S)$ bzw. $(1 + SR_S)$ reduziert wird.

Die Wirkung der Stromgegenkopplung lässt sich besonders einfach mit Hilfe der *reduzierten Steilheit*

$$
S_{red} = \frac{S}{1 + (S + S_B)R_S} \overset{u_{BS}=0}{=} \frac{S}{1 + SR_S}
\tag{3.68}
$$

beschreiben. Durch den Sourcewiderstand $R_S$ wird die effektive Steilheit auf den Wert $S_{red}$ reduziert: für die Sourceschaltung ohne Gegenkopplung gilt $A \approx -SR_D$ und für die Sourceschaltung mit Stromgegenkopplung $A \approx -S_{red}R_D$.

### 3.4.1.5.4 Nichtlinearität

Die Nichtlinearität der Übertragungskennlinie wird durch die Stromgegenkopplung reduziert. Der Klirrfaktor der Schaltung kann durch eine Reihenentwicklung der Kennlinie im Arbeitspunkt näherungsweise bestimmt werden. Aus (3.64) folgt:

$$
U_e = U_{GS} + I_D R_S = U_{th} + \sqrt{\frac{2I_D}{K}} + I_D R_S
$$

Durch Einsetzen des Arbeitspunkts, Übergang zu den Kleinsignalgrößen und Reihenentwicklung erhält man mit (3.18) und $U_{BS} = -U_S = -I_D R_S$
<!-- page-import:0283:end -->

<!-- page-import:0284:start -->
3.4 Grundschaltungen

247

$$
u_e=\gamma \sqrt{U_{inv}+I_{D,A}R_S}\left(\sqrt{1+\frac{R_S i_D}{U_{inv}+I_{D,A}R_S}}-1\right)
$$

$$
\qquad +\sqrt{\frac{2I_{D,A}}{K}}\left(\sqrt{1+\frac{i_D}{I_{D,A}}}-1\right)+R_S i_D
$$

$$
=\frac{1}{S}\left((1+(S+S_B)\,R_S)\,i_D+\frac{1}{4}\left(\frac{S_B R_S^2}{U_{inv}+I_{D,A}R_S}+\frac{1}{I_{D,A}}\right)i_D^2+\cdots\right)
$$

und daraus die Umkehrfunktion $^{20}$:

$$
i_D=\frac{S}{1+(S+S_B)\,R_S}\left(u_e+\frac{u_e^2}{4}\,\frac{\frac{S}{I_{D,A}}+\frac{SS_B R_S^2}{U_{inv}+I_{D,A}R_S}}{(1+(S+S_B)\,R_S)^2}+\cdots\right)
$$

Bei Aussteuerung mit $u_e=\hat{u}_e\cos\omega_0 t$ erhält man aus dem Verhältnis der ersten Oberwelle mit $2\omega_0$ zur Grundwelle mit $\omega_0$ bei kleiner Aussteuerung, d.h. bei Vernachlässigung höherer Potenzen, näherungsweise den Klirrfaktor $k$:

$$
k\approx \frac{u_{a,2\omega_0}}{u_{a,\omega_0}}\approx \frac{i_{D,2\omega_0}}{i_{D,\omega_0}}\approx \frac{\hat{u}_e}{8}\,\frac{\frac{S}{I_{D,A}}+\frac{SS_B R_S^2}{U_{inv}+I_{D,A}R_S}}{(1+(S+S_B)\,R_S)^2}
$$

$$
\overset{u_{BS}=0}{=}\frac{\hat{u}_e}{4\,(U_{GS,A}-U_{th})\,(1+SR_S)^2}
\tag{3.69}
$$

Bei der letzten Näherung wird $S/I_{D,A}=2/(U_{GS,A}-U_{th})$ verwendet. Für das Zahlenbeispiel gilt $\hat{u}_e<k\cdot 11.5\,\mathrm{V}$ und, mit $A\approx -2$, $\hat{u}_a<k\cdot 23\,\mathrm{V}$.

Ein Vergleich mit (3.13) zeigt, dass die zulässige Eingangsamplitude $\hat{u}_e$ durch die Gegenkopplung um das Quadrat des Gegenkopplungsfaktors $(1+SR_S)$ größer wird. Da gleichzeitig die Verstärkung um den Gegenkopplungsfaktor geringer ist, ist die zulässige Ausgangsamplitude bei gleichem Klirrfaktor um den Gegenkopplungsfaktor größer. Bei gleicher Ausgangsamplitude ist der Klirrfaktor um den Gegenkopplungsfaktor geringer.

Ein Vergleich mit der stromgegengekoppelten Emitterschaltung im Abschnitt 2.4.1 zeigt, dass die stromgegengekoppelte Sourceschaltung bei gleicher Verstärkung $(A\approx -2)$ und gleichem Arbeitspunktstrom $(I_{D,A}=I_{C,A}=1{,}5\,\mathrm{mA})$ einen höheren Klirrfaktor aufweist: $k\approx \hat{u}_a/(23\,\mathrm{V})$ bei der Sourceschaltung und $k\approx \hat{u}_a/(179\,\mathrm{V})$ bei der Emitterschaltung. Ursache hierfür ist die geringe Maximalverstärkung eines Mosfets, die bei gleicher Verstärkung der Schaltung einen geringeren Gegenkopplungsfaktor und damit einen höheren Klirrfaktor zur Folge hat. Bei sehr kleinen Arbeitspunktströmen nimmt die Maximalverstärkung des Mosfets zu und der Klirrfaktor entsprechend ab; man erreicht in diesem Fall dieselben Werte wie bei der Emitterschaltung.

Eine Sonderstellung nehmen die kubischen Verzerrungen ein. Sie sind bei der Sourceschaltung aufgrund der nahezu quadratischen Kennlinie eines Mosfets ohne Gegenkopplung sehr gering und nehmen mit zunehmender Gegenkopplung zu, während die dominierenden quadratischen Verzerrungen und damit auch der Klirrfaktor $k$ mit zunehmender

---

$^{20}$ Siehe Fußnote auf Seite 113.
<!-- page-import:0284:end -->

<!-- page-import:0285:start -->
248  3. Feldeffekttransistor

**Abb. 3.63.** Klirrfaktor $k$ und kubischer Klirrfaktor $k_3$ in Abhängigkeit vom Gegenkopplungswiderstand $R_S$ bei konstanter Amplitude am Ausgang für die Schaltung in Abb. 3.60a

Gegenkopplung abnehmen. Abbildung 3.63 zeigt die Abhängigkeit des Klirrfaktors $k$ und des kubischen Klirrfaktors $k_3$ vom Gegenkopplungswiderstand $R_S$ bei konstanter Amplitude am Ausgang. Die Daten für diese Darstellung wurden durch Simulation mit *PSpice* ermittelt.

#### 3.4.1.5.5 Temperaturabhängigkeit

Durch die Gegenkopplung wird die Temperaturdrift der Ausgangsspannung im Vergleich zur Sourceschaltung ohne Gegenkopplung um den Gegenkopplungsfaktor verringert:

$$
\left.\frac{dU_a}{dT}\right|_A \approx \frac{I_{D,A}R_D}{1+(S+S_B)\,R_S}\cdot 10^{-3}\,\mathrm{K}^{-1}\left(5-\frac{4\dots 7\,\mathrm{V}}{U_{GS,A}-U_{th}}\right)
$$

Für das Zahlenbeispiel erhält man $(dU_a/dT)|_A \approx -3\dots +0,4\ \mathrm{mV/K}$.

#### 3.4.1.6 Sourceschaltung mit Spannungsgegenkopplung

Bei der Sourceschaltung mit Spannungsgegenkopplung nach Abb. 3.64a wird ein Teil der Ausgangsspannung über die Widerstände $R_1$ und $R_2$ auf das Gate des Fets zurückgeführt; Abb. 3.64b zeigt die zugehörige Übertragungskennlinie für $U_b = 5\ \mathrm{V}$, $R_D = R_1 = 1\ \mathrm{k}\Omega$, $R_2 = 6,3\ \mathrm{k}\Omega$ und $K = 4\ \mathrm{mA/V}^2$.

##### 3.4.1.6.1 Betrieb im Abschnürbereich

Aus den Knotengleichungen

$$
\frac{U_b-U_a}{R_D}+I_a=I_D+\frac{U_a-U_{GS}}{R_2}
$$

$$
\frac{U_{GS}-U_e}{R_1}=\frac{U_a-U_{GS}}{R_2}
$$

folgt für den Betrieb ohne Last, d.h. $I_a = 0$:

$$
U_a=\frac{U_bR_2-I_DR_DR_2+U_{GS}R_D}{R_2+R_D}\qquad \overset{R_2\gg R_D}{\approx}\qquad U_b-I_DR_D
\qquad\qquad (3.70)
$$
<!-- page-import:0285:end -->

<!-- page-import:0286:start -->
249

## 3.4 Grundschaltungen

a Schaltung

b Kennlinie

Abb. 3.64. Sourceschaltung mit Spannungsgegenkopplung

$$
U_e=\frac{U_{GS}(R_1+R_2)-U_aR_1}{R_2}
\qquad (3.71)
$$

Bei der Berechnung des Arbeitspunkts geht man von (3.70) aus. Wenn man für $I_D$ die Gleichung für den Abschnürbereich einsetzt, erhält man eine quadratische Gleichung in $U_{GS}$, mit der man nach Auflösen die Arbeitspunktspannung $U_{GS,A}$ bei vorgegebener Ausgangsspannung $U_{a,A}$ berechnen kann. Alternativ kann man die Näherung verwenden, bei der der Strom durch den Gegenkopplungswiderstand $R_2$ vernachlässigt wird; bei Vorgabe von $U_{a,A}=2{,}5\ \mathrm{V}$ erhält man:

$$
U_{a,A}=2{,}5\ \mathrm{V}\ \Rightarrow\ I_{D,A}\approx\frac{U_b-U_{a,A}}{R_D}\approx2{,}5\ \mathrm{mA}
$$

$$
\Rightarrow\ U_{GS,A}=U_{th}+\sqrt{\frac{2I_{D,A}}{K}}\approx2{,}12\ \mathrm{V}\ \Rightarrow\ U_{e,A}\approx2{,}06\ \mathrm{V}
\qquad (3.71)
$$

#### 3.4.1.6.2 Kleinsignalverhalten

Die Berechnung erfolgt mit Hilfe des in Abb. 3.65 gezeigten Kleinsignalersatzschaltbilds. Aus den Knotengleichungen

$$
\frac{u_e-u_{GS}}{R_1}+\frac{u_a-u_{GS}}{R_2}=0
$$

$$
Su_{GS}+\frac{u_a-u_{GS}}{R_2}+\frac{u_a}{r_{DS}}+\frac{u_a}{R_D}=i_a
$$

erhält man mit $R_D'=R_D\parallel r_{DS}$ die Verstärkung:

Abb. 3.65. Kleinsignalersatzschaltbild der Sourceschaltung mit Spannungsgegenkopplung
<!-- page-import:0286:end -->

<!-- page-import:0287:start -->
250  3. Feldeffekttransistor

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
=\frac{-SR_2+1}{1+SR_1+\dfrac{R_1+R_2}{R_D'}}
\qquad \overset{\substack{r_{DS}\gg R_D\\ R_1,R_2\gg 1/S}}{\approx} \qquad
-\frac{R_2}{R_1+\dfrac{R_1+R_2}{SR_D}}
$$

Ist die Verstärkung ohne Gegenkopplung viel größer als der Gegenkopplungsfaktor, d.h. $SR_D \gg 1 + R_2/R_1$, erhält man $A \approx -R_2/R_1$; diese Bedingung ist jedoch wegen der geringen Maximalverstärkung eines Fets nur sehr selten erfüllt. Wird die Schaltung mit einem Lastwiderstand $R_L$ betrieben, kann man die zugehörige Betriebsverstärkung $A_B$ berechnen, indem man für $R_D$ die Parallelschaltung von $R_D$ und $R_L$ einsetzt, siehe Abb. 3.65. In dem beispielhaft gewählten Arbeitspunkt erhält man mit $S = 4{,}47\,\mathrm{mS}$, $r_{DS} = 20\,\mathrm{k}\Omega$, $R_D = R_1 = 1\,\mathrm{k}\Omega$ und $R_2 = 6{,}3\,\mathrm{k}\Omega$ exakt $A = -2{,}067$; die Näherung liefert $A = -2{,}39$.

Für den Leerlaufeingangswiderstand erhält man mit $R_D' = R_D \parallel r_{DS}$:

$$
r_{e,L}=\left.\frac{u_e}{i_e}\right|_{i_a=0}
=R_1+\frac{R_2+R_D'}{1+SR_D'}
\qquad \overset{r_{DS}\gg R_D\gg 1/S}{\approx} \qquad
R_1+\frac{1}{S}\left(1+\frac{R_2}{R_D}\right)
$$

Er gilt für $i_a = 0$, d.h. $R_L \to \infty$. Der Eingangswiderstand für andere Werte von $R_L$ wird berechnet, indem man für $R_D$ die Parallelschaltung von $R_D$ und $R_L$ einsetzt. In dem beispielhaft gewählten Arbeitspunkt erhält man exakt $r_{e,L} = 2{,}38\,\mathrm{k}\Omega$ und mit Hilfe der Näherung $r_{e,L} = 2{,}63\,\mathrm{k}\Omega$.

Für den Kurzschlussausgangswiderstand erhält man mit $R_D' = R_D \parallel r_{DS}$:

$$
r_{a,K}=\left.\frac{u_a}{i_a}\right|_{u_e=0}
=R_D' \parallel \frac{R_1+R_2}{1+SR_1}
\qquad \overset{\substack{r_{DS}\gg R_D\\ R_1\gg 1/S}}{\approx} \qquad
R_D \parallel \frac{1}{S}\left(1+\frac{R_2}{R_1}\right)
$$

Daraus folgt mit $R_1 \to \infty$ der Leerlaufausgangswiderstand:

$$
r_{a,L}=\left.\frac{u_a}{i_a}\right|_{i_e=0}
=R_D' \parallel \frac{1}{S}
\qquad \overset{r_{DS}\gg R_D\gg 1/S}{\approx} \qquad
\frac{1}{S}
$$

In dem beispielhaft gewählten Arbeitspunkt erhält man exakt $r_{a,K} = 556\,\Omega$ und $r_{a,L} = 181\,\Omega$ und mit Hilfe der Näherungen $r_{a,K} = 602\,\Omega$ und $r_{a,L} = 223\,\Omega$.

Zusammengefasst gilt für die Sourceschaltung mit Spannungsgegenkopplung:

*Sourceschaltung mit Spannungsgegenkopplung*

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
\approx
-\frac{R_2}{R_1+\dfrac{R_1+R_2}{SR_D}}
\qquad\qquad (3.72)
$$

$$
r_e=\left.\frac{u_e}{i_e}\right|_{i_a=0}
\approx
R_1+\frac{1}{S}\left(1+\frac{R_2}{R_D}\right)
\qquad\qquad (3.73)
$$

$$
r_a=\left.\frac{u_a}{i_a}\right|_{u_e=0}
\approx
R_D \parallel \frac{1}{S}\left(1+\frac{R_2}{R_1}\right)
\qquad\qquad (3.74)
$$
<!-- page-import:0287:end -->

<!-- page-import:0288:start -->
3.4 Grundschaltungen 251

a Schaltung  b Kennlinie

**Abb. 3.66.** Strom-Spannungs-Wandler

### 3.4.1.6.3 Betrieb als Strom-Spannungs-Wandler

Entfernt man den Widerstand $R_1$ und steuert die Schaltung mit einer Stromquelle $I_e$ an, erhält man die Schaltung nach Abb. 3.66a, die als *Strom-Spannungs-Wandler* arbeitet; sie wird auch *Transimpedanzverstärker* $^{21}$ genannt. Abbildung 3.66b zeigt die Kennlinien für $U_b = 5\,\mathrm{V}$, $R_D = 1\,\mathrm{k}\Omega$ und $R_2 = 6{,}3\,\mathrm{k}\Omega$.

Aus Abb. 3.66a erhält man:

$$
U_a = U_b + (I_e + I_a - I_D)\,R_D \overset{I_a=0}{=} U_b + I_eR_D - \frac{K\,R_D}{2}(U_{GS} - U_{th})^2
\qquad (3.75)
$$

$$
I_e = \frac{U_{GS} - U_a}{R_2}
\qquad (3.76)
$$

Setzt man die Gleichungen ineinander ein, erhält man eine in $U_a$ und $I_e$ quadratische Gleichung, deren allgemeine Lösung umfangreich ist. Nimmt man zunächst $|I_eR_D| \ll U_b - U_a$ an und gibt $U_a$ vor, kann man aus (3.75) $U_{GS}$ und damit aus (3.76) $I_e$ berechnen; mit $U_{th} = 1\,\mathrm{V}$, $K = 4\,\mathrm{mA}/\mathrm{V}^2$, $R_D = 1\,\mathrm{k}\Omega$ und $R_2 = 6{,}3\,\mathrm{k}\Omega$ erhält man:

$$
U_a = 2{,}5\,\mathrm{V}
\;\Rightarrow\;
U_{GS} \approx U_{th} + \sqrt{\frac{2\,(U_b + I_eR_D - U_a)}{K\,R_D}}
\Big|_{|I_eR_D|\ll U_b-U_a}
\approx 2{,}12\,\mathrm{V}
$$

$$
\Rightarrow\;
I_e = \frac{U_{GS} - U_a}{R_2} \approx -60\,\mu\mathrm{A}
\text{ und }
I_D = \frac{K}{2}(U_{GS} - U_{th})^2 \approx 2{,}509\,\mathrm{mA}
$$

Man kann nun iterativ vorgehen, indem man den letzten Wert für $I_e$ in (3.75) einsetzt und neue Werte für $U_{GS}$ und $I_e$ berechnet; die nächste Iteration liefert mit $U_{GS} \approx 2{,}105\,\mathrm{V}$, $I_e \approx -63\,\mu\mathrm{A}$ und $I_D \approx 2{,}44\,\mathrm{mA}$ praktisch das exakte Ergebnis.

Das Kleinsignalverhalten des Strom-Spannungs-Wandlers kann aus den Gleichungen für die Sourceschaltung mit Spannungsgegenkopplung abgeleitet werden. Dabei tritt der *Übertragungswiderstand* (*Transimpedanz*) $R_T$ an die Stelle der Verstärkung; mit $R_D' = R_D \parallel r_{DS}$ erhält man:

---

$^{21}$ Die Bezeichnung *Transimpedanzverstärker* wird auch für Operationsverstärker mit Stromeingang und Spannungsausgang verwendet (CV-OPV).
<!-- page-import:0288:end -->

<!-- page-import:0289:start -->
252  3. Feldeffekttransistor

$$
R_T=\left.\frac{u_a}{i_e}\right|_{i_a=0}
=\lim_{R_1\to\infty} R_1\left.\frac{u_a}{u_e}\right|_{i_a=0}
=\lim_{R_1\to\infty} R_1A
$$

$$
=R_D'\,\frac{1-SR_2}{1+SR_D'}
\overset{\substack{SR_2\gg1\\ r_{DS}\gg R_D}}{\approx}
-\,R_2\,\frac{SR_D}{1+SR_D}
$$

Der *Eingangswiderstand* kann aus den Gleichungen für die Sourceschaltung mit Spannungsgegenkopplung durch Einsetzen von $R_1=0$ berechnet werden und der *Ausgangswiderstand* entspricht dem Leerlaufausgangswiderstand.

Zusammengefasst erhält man für den Strom-Spannungs-Wandler in Sourceschaltung:

*Strom-Spannungs-Wandler in Sourceschaltung*

$$
R_T=\left.\frac{u_a}{i_e}\right|_{i_a=0}\approx -\,R_2\,\frac{SR_D}{1+SR_D}
\qquad\qquad (3.77)
$$

$$
r_e=\left.\frac{u_e}{i_e}\right|_{i_a=0}\approx \frac{1}{S}\left(1+\frac{R_2}{R_D}\right)
\qquad\qquad (3.78)
$$

$$
r_a=\frac{u_a}{i_a}\approx R_D\parallel\frac{1}{S}
\qquad\qquad (3.79)
$$

In dem beispielhaft gewählten Arbeitspunkt erhält man mit $I_{D,A}=2{,}44\,\mathrm{mA}$, $K=4\,\mathrm{mA/V^2}$, $R_D=1\,\mathrm{k\Omega}$ und $R_2=6{,}3\,\mathrm{k\Omega}$ die Werte $R_T\approx -5{,}14\,\mathrm{k\Omega}$, $r_e\approx 1{,}65\,\mathrm{k\Omega}$ und $r_a\approx 185\,\Omega$.

Der Strom-Spannungs-Wandler wird vor allem in Fotodioden-Empfängern eingesetzt; dabei wird die Empfangsdiode im Sperrbereich betrieben und wirkt deshalb wie eine Stromquelle mit sehr hohem Innenwiderstand, deren Strom $i_e$ mit dem Strom-Spannungs-Wandler in eine Spannung $u_a=R_Ti_e$ umgesetzt wird. Aufgrund des hohen Innenwiderstands der Diode wird das Rauschen der Schaltung vor allem durch den Eingangsrauschstrom des Fets und das thermische Rauschen des Gegenkopplungswiderstands $R_2$ verursacht; der im Vergleich zum Bipolartransistor besonders niedrige Eingangsrauschstrom eines Fets führt in diesem Fall zu einer besonders niedrigen Rauschzahl.

## 3.4.1.7 Arbeitspunkteinstellung

Der Betrieb als Kleinsignalverstärker erfordert eine stabile Einstellung des Arbeitspunkts. Der Arbeitspunkt sollte möglichst wenig von den Parametern des Fets abhängen, da diese temperaturabhängig und fertigungsbedingten Streuungen unterworfen sind. Zwar kann man beim Fet die Temperaturabhängigkeit durch eine Arbeitspunkteinstellung in der Nähe des Temperatur-Kompensationspunkts sehr klein halten, die fertigungsbedingten Streuungen der Schwellenspannung sind jedoch vor allem bei Einzel-Fets erheblich; Schwankungen von $\pm 0{,}5\,\mathrm{V}\dots \pm 1\,\mathrm{V}$ sind üblich.

Kleinsignalverstärker in Sourceschaltung mit Einzel-Fets werden aufgrund ihrer im Vergleich zur Emitterschaltung geringen Verstärkung nur in Ausnahmefällen eingesetzt; dazu gehören Verstärker für sehr hochohmige Signalquellen und der im vorhergehenden Abschnitt beschriebene Strom-Spannungs-Wandler.
<!-- page-import:0289:end -->

<!-- page-import:0290:start -->
3.4 Grundschaltungen 253

a Gleichstromgegenkopplung

b Bootstrap-Schaltung

**Abb. 3.67.** Arbeitspunkteinstellung mit Stromgegenkopplung

#### 3.4.1.7.1 Arbeitspunkteinstellung bei Wechselspannungskopplung

Bei Wechselspannungskopplung wird der Verstärker über Koppelkondensatoren mit der Signalquelle und der Last verbunden. Bei Spannungsverstärkern wird in der Regel die in Abb. 3.67a gezeigte Spannungseinstellung mit Gleichstromgegenkopplung verwendet; sie entspricht der in Abb. 2.77a gezeigten Arbeitspunkteinstellung bei der Emitterschaltung. Auch die in Abb. 2.77b und Abb. 2.80 gezeigten Varianten können beim Fet verwendet werden; dabei kommt der extrem hohe Eingangswiderstands des Fets nur bei direkter Kopplung am Eingang voll zum Tragen, weil sonst der Spannungsteiler am Eingang für den Eingangswiderstand der Schaltung maßgebend ist.

Eine Sonderstellung nimmt die in Abb. 3.67b gezeigte Stromgegenkopplung mit Bootstrap ein, bei der der Spannungsabfall an $R_3$ durch eine Rückkopplung des Signals auf den Spannungsteiler vermindert und damit der Eingangswiderstand entsprechend erhöht wird: $r_e \approx R_3 (1 + S\,R_S)$. Diese Schaltung arbeitet jedoch nur bei starker Gegenkopplung $(S\,R_S \gg 1)$ effektiv und wird deshalb vor allem bei der Drainschaltung eingesetzt, siehe Abschnitt 3.4.2.

Darüber hinaus gibt es spezielle Schaltungen zur Arbeitspunkteinstellung, die nur bei selbstleitenden Fets angewendet werden können. Da diese mit $U_G = 0$ betrieben werden können, kann man in Abb. 3.67a den Widerstand $R_1$ entfernen und erhält damit die Schaltung in Abb. 3.68a; dasselbe gilt auch für die Bootstrap-Schaltung. Aus der Bedingung $U_{GS} = -I_D R_S$ und der Gleichung für den Abschnürbereich erhält man die Dimensionierung:

$$
R_S = \frac{|U_{th}|}{I_{D,A}} \left(1 - \sqrt{\frac{2 I_{D,A}}{K\,U_{th}^2}}\right)
= \frac{|U_{th}|}{I_{D,A}} \left(1 - \sqrt{\frac{I_{D,A}}{I_{D,A(max)}}}\right)
$$

Dabei ist $I_{D,A(max)} = K\,U_{th}^2/2$ der maximal mögliche Arbeitspunktstrom. Will man den Fet im Temperatur-Kompensationspunkt mit $U_{GS,TK} \approx U_{th} + 1\,\mathrm{V}$ betreiben, erhält man $I_{D,A} \approx K \cdot 0{,}5\,\mathrm{V}^2$ und damit:

$$
R_S = \frac{2 |U_{GS,TK}|}{K\,(U_{GS,TK} - U_{th})^2} \approx \frac{|U_{GS,TK}|}{K \cdot 0{,}5\,\mathrm{V}^2}
\qquad \text{für } U_{GS,TK} \leq 0
$$
<!-- page-import:0290:end -->

<!-- page-import:0291:start -->
254  3. Feldeffekttransistor

*a* für selbstleitende Fets  *b* für selbstsperrende Fets

**Abb. 3.68.** Spezielle Schaltungen zur Arbeitspunkteinstellung

Selbstsperrende Mosfets kann man mit $U_{GS} = U_{DS}$ im Abschnürbereich betreiben, siehe Abb. 3.68b; da kein oder nur ein sehr geringer Gatestrom fließt, kann man den Widerstand $R_2$ so groß machen, dass die durch $R_2$ verursachte Spannungsgegenkopplung vernachlässigbar gering ist; den Eingangswiderstand erhält man in diesem Fall aus (3.78) auf Seite 252.

Die Eigenschaften, Vor- und Nachteile der Wechselspannungskopplung werden auf Seite 127 im Zusammenhang mit der Arbeitspunkteinstellung der Emitterschaltung ausführlich beschrieben.

#### 3.4.1.7.2 Arbeitspunkteinstellung bei Gleichspannungskopplung

Bei Gleichspannungskopplung, auch als *direkte* oder *galvanische* Kopplung bezeichnet, wird der Verstärker direkt mit der Signalquelle und der Last verbunden. Dabei müssen die Gleichspannungen am Eingang und am Ausgang des Verstärkers an die Gleichspannungen der Signalquelle und der Last angefasst werden; deshalb kann man bei mehrstufigen Verstärkern die Arbeitspunkte der einzelnen Stufen nicht getrennt einstellen.

Bei Gleichspannungsverstärkern ist die Gleichspannungskopplung zwingend. Dasselbe gilt für integrierte Verstärker, weil in integrierten Schaltungen die für Koppelkapazitäten erforderlichen Werte im allgemeinen nicht hergestellt werden können und externe Koppelkapazitäten unerwünscht sind. Bei mehrstufigen Verstärkern wird die Gleichspannungskopplung fast immer in Verbindung mit einer Gegenkopplung über alle Stufen eingesetzt, damit sich ein definierter und temperaturstabiler Arbeitspunkt einstellt.

### 3.4.1.8 Frequenzgang und Grenzfrequenz

Die Kleinsignalverstärkung $A$ gilt in der bisher berechneten Form nur für niedrige Signalfrequenzen; bei höheren Frequenzen nimmt der Betrag der Verstärkung aufgrund der Kapazitäten des Fets ab. Zur Berechnung des Frequenzgangs und der Grenzfrequenz muss man streng genommen das dynamische Kleinsignalmodell des Fets nach Abb. 3.48 verwenden; dabei wird neben den Kapazitäten $C_{GS}$, $C_{GD}$, $C_{BS}$ und $C_{BD}$ der Gate-Bahnwiderstand $R_G$ berücksichtigt.

Für Einzel-Fets ohne Bulk-Anschluss kann man das einfache Kleinsignalmodell nach Abb. 3.49a verwenden, das weitgehend dem Kleinsignalmodell des Bipolartransistors entspricht. Da die Grenzfrequenz ohnehin nur näherungsweise berechnet wird, begeht man
<!-- page-import:0291:end -->

<!-- page-import:0292:start -->
3.4 Grundschaltungen 255

Abb. 3.69. Dynamisches Kleinsignalersatzschaltbild der Sourceschaltung ohne Gegenkopplung

keinen großen Fehler, wenn man auch für integrierte Fets das einfache Kleinsignalmodell verwendet. Damit kann man die Ergebnisse für den Bipolartransistor auf den Fet übertragen, wenn man die folgenden Ersetzungen vornimmt:

$$R_B \rightarrow R_G \ ,\ r_{BE} \rightarrow \infty \ ,\ r_{CE} \rightarrow r_{DS} \ ,\ C_E \rightarrow C_{GS} \ ,\ C_C \rightarrow C_{GD}$$

#### 3.4.1.8.1 Sourceschaltung ohne Gegenkopplung

Abbildung 3.69 zeigt das dynamische Kleinsignalersatzschaltbild der Sourceschaltung ohne Gegenkopplung. Für die Betriebsverstärkung $A_B(s)=u_a(s)/u_g(s)$ erhält man mit $R'_g = R_g + R_G$ und $R'_D = R_L \parallel R_D \parallel r_{DS}$:

$$A_B(s)=-\frac{(S-sC_{GD})\,R'_D}{1+s\,c_1+s^2\,c_2}$$

(3.80)

$$c_1=C_{GS}R'_g+C_{GD}\left(R'_g+R'_D+SR'_D R'_g\right)+C_{DS}R'_D$$

$$c_2=(C_{GS}C_{GD}+C_{GS}C_{DS}+C_{GD}C_{DS})\,R'_g R'_D$$

Wie bei der Emitterschaltung kann man den Frequenzgang auch hier näherungsweise durch einen Tiefpass 1.Grades beschreiben, indem man die Nullstelle vernachlässigt und den $s^2$-Term im Nenner streicht. Mit der Niederfrequenzverstärkung

$$A_0=A_B(0)=-SR'_D$$

(3.81)

folgt:

$$A_B(s)\approx \frac{A_0}{1+s\left(C_{GS}R'_g+C_{GD}\left(R'_g+R'_D+SR'_D R'_g\right)+C_{DS}R'_D\right)}$$

(3.82)

Damit erhält man eine Näherung für die -3dB-Grenzfrequenz $f_{-3dB}$, bei der der Betrag der Verstärkung um 3 dB abgenommen hat:

$$\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{C_{GS}R'_g+C_{GD}\left(R'_g+R'_D+SR'_D R'_g\right)+C_{DS}R'_D}$$

(3.83)

In den meisten Fällen gilt $R'_D, R'_g \gg 1/S$; damit erhält man:

$$\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{C_{GS}R'_g+C_{GD}SR'_D R'_g+C_{DS}R'_D}$$

(3.84)
<!-- page-import:0292:end -->

<!-- page-import:0293:start -->
256  3. Feldeffekttransistor

**Abb. 3.70.** Ersatzschaltbild mit den Ersatzgrößen $A$, $r_a$, $C_e$ und $C_a$

Wie bei der Emitterschaltung kann man die Grenzfrequenz auch hier mit Hilfe der Niederfrequenzverstärkung $A_0$ und zwei von $A_0$ unabhängigen Zeitkonstanten darstellen; aus (3.83) folgt:

$$
\omega_{-3dB}(A_0)\ \approx\ \frac{1}{T_1 + T_2|A_0|}
$$

(3.85)

$$
T_1 \;=\; (C_{GS}+C_{GD})\,R_g'
$$

(3.86)

$$
T_2 \;=\; C_{GD}R_g' + \frac{C_{GD}+C_{DS}}{S}
$$

(3.87)

Zwei Bereiche lassen sich unterscheiden:

- Für $|A_0| \ll T_1/T_2$ gilt $\omega_{-3dB} \approx T_1^{-1}$, d.h. die Grenzfrequenz ist nicht von der Verstärkung abhängig. Die maximale Grenzfrequenz erhält man für den Grenzfall $A_0 \to 0$ und $R_g = 0$:

$$
\omega_{-3dB,max} \;=\; \frac{1}{(C_{GS}+C_{GD})\,R_G}
$$

Sie entspricht der *Steilheitsgrenzfrequenz* $\omega_{Y21s}$, siehe (3.48).

- Für $|A_0| \gg T_1/T_2$ gilt $\omega_{-3dB} \approx (T_2|A_0|)^{-1}$, d.h. die Grenzfrequenz ist proportional zum Kehrwert der Verstärkung und man erhält ein konstantes *Verstärkungs-Bandbreite-Produkt* (*gain-bandwidth-product*, GBW):

$$
GBW \;=\; f_{-3dB}\,|A_0| \;\approx\; \frac{1}{2\pi\ T_2}
$$

(3.88)

Das Verstärkungs-Bandbreite-Produkt $GBW$ ist eine wichtige Kenngröße, da es eine absolute Obergrenze für das Produkt aus dem Betrag der Niederfrequenzverstärkung und der Grenzfrequenz darstellt, d.h. für alle Werte von $|A_0|$ gilt $GBW \geq f_{-3dB}|A_0|$.

Wird die Schaltung am Ausgang mit einer Lastkapazität $C_L$ belastet, kann man die zugehörigen Werte für $f_{-3dB}$, $T_1$, $T_2$ und $GBW$ aus (3.83)–(3.88) berechnen, indem man $C_{DS}+C_L$ anstelle von $C_{DS}$ einsetzt; für $T_2$ folgt damit:

$$
T_2 \;=\; C_{GD}\,R_g' + \frac{C_{GD}+C_{DS}+C_L}{S}
$$

(3.89)

### 3.4.1.8.2 Ersatzschaltbild

Man kann die Sourceschaltung näherungsweise durch das Ersatzschaltbild nach Abb. 3.70 beschreiben. Es folgt aus Abb. 3.59 durch Ergänzen der *Eingangskapazität* $C_e$ und der *Ausgangskapazität* $C_a$ und eignet sich nur zur näherungsweisen Berechnung der Verstärkung $\underline{A}_B(s)$ und der Grenzfrequenz $f_{-3dB}$. Man erhält $C_e$ und $C_a$ aus der Bedingung, dass
<!-- page-import:0293:end -->

<!-- page-import:0294:start -->
3.4 Grundschaltungen 257

eine Berechnung von $A_B(s)$ nach Streichen des $s^2$-Terms im Nenner auf (3.82) führen muss:

$$
C_e \approx C_{GS} + C_{GD}\,(1 + |A_0|)
$$

(3.90)

$$
C_a \approx C_{GD} + C_{DS}
$$

(3.91)

Die Eingangskapazität $C_e$ hängt von der Beschaltung am Ausgang ab, weil $A_0$ von $R_L$ abhängt. Die Tatsache, dass $C_{GD}$ mit dem Faktor $(1 + |A_0|)$ in $C_e$ eingeht, wird *Miller-Effekt* und $C_{GD}$ demzufolge *Miller-Kapazität* genannt. $A$ und $r_a$ sind durch (3.59) und (3.61) gegeben und hängen nicht von der Beschaltung ab. Der Gate-Bahnwiderstand $R_G$ wird als Bestandteil des Innenwiderstands der Signalquelle aufgefasst: $R'_g = R_g + R_G$.

*Beispiel:* Für das Zahlenbeispiel zur Sourceschaltung ohne Gegenkopplung nach Abb. 3.56a wurde $I_{D,A} = 2\,\mathrm{mA}$ gewählt. Mit $K = 4\,\mathrm{mA}/\mathrm{V}^2$, $U_A = 50\,\mathrm{V}$, $C_{oss} = 5\,\mathrm{pF}$, $C_{rss} = 2\,\mathrm{pF}$, $f_{y21s} = 1\,\mathrm{GHz}$ und $f_T = 100\,\mathrm{MHz}$ erhält man aus Abb. 3.51 auf Seite 229 die Kleinsignalparameter $S = 4\,\mathrm{mS}$, $r_{DS} = 25\,\mathrm{k}\Omega$, $R_G = 25\,\Omega$, $C_{GD} = 2\,\mathrm{pF}$, $C_{GS} = 4{,}4\,\mathrm{pF}$ und $C_{DS} = 3\,\mathrm{pF}$. Mit $R_g = R_D = 1\,\mathrm{k}\Omega$, $R_L \to \infty$ und $R'_g \approx R_g$ folgt aus (3.81) $A_0 \approx -3{,}85$, aus (3.83) $f_{-3dB} \approx 8{,}43\,\mathrm{MHz}$ und aus (3.84) $f_{-3dB} \approx 10{,}6\,\mathrm{MHz}$. Aus (3.86) folgt $T_1 \approx 6{,}4\,\mathrm{ns}$, aus (3.87) $T_2 \approx 3{,}25\,\mathrm{ns}$ und aus (3.88) $GBW \approx 49\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L = 1\,\mathrm{nF}$ erhält man aus (3.89) $T_2 \approx 253\,\mathrm{ns}$, aus (3.85) $f_{-3dB} \approx 162\,\mathrm{kHz}$ und aus (3.88) $GBW \approx 630\,\mathrm{kHz}$.

Ein Vergleich mit den Werten der Emitterschaltung auf Seite 133 ist nur beim Verstärkungs-Bandbreite-Produkt sinnvoll, weil die Niederfrequenzverstärkungen stark unterschiedlich sind. Es zeigt sich, dass die Sourceschaltung ohne kapazitive Last praktisch dasselbe $GBW$ erreicht wie die Emitterschaltung. Mit einer kapazitiven Last ist das $GBW$ der Sourceschaltung allerdings deutlich geringer, und zwar im Grenzfall großer Lastkapazitäten genau um das Verhältnis der Steilheiten, wie ein Vergleich von (3.89) und (2.109) auf Seite 132 zeigt. Daraus folgt für die Praxis:

*Die Sourceschaltung ist aufgrund der geringen Steilheit der Fets nur schlecht zur Ansteuerung kapazitiver Lasten geeignet.*

#### 3.4.1.8.3 Sourceschaltung mit Stromgegenkopplung

Der Frequenzgang und die Grenzfrequenz der Sourceschaltung mit Stromgegenkopplung nach Abb. 3.60a lassen sich aus den entsprechenden Größen der Sourceschaltung ohne Gegenkopplung ableiten. Dazu wird die bereits bei der Emitterschaltung mit Stromgegenkopplung durchgeführte Umwandlung des Kleinsignalersatzschaltbilds verwendet, siehe Abb. 2.88 auf Seite 134. Abbildung 3.71 zeigt das Kleinsignalersatzschaltbild der Sourceschaltung mit Stromgegenkopplung vor und nach der Umwandlung; dabei werden die Kleinsignalparameter in die äquivalenten Werte eines Fets ohne Stromgegenkopplung umgerechnet:

$$
\begin{bmatrix}
S' \\
C'_{GS} \\
C'_{DS} \\
\frac{1}{r'_{DS}}
\end{bmatrix}
=
\frac{1}{1 + (S + S_B)\,R_S}
\cdot
\begin{bmatrix}
S \\
C_{GS} \\
C_{DS} \\
\frac{1}{r_{DS}}
\end{bmatrix}
\overset{u_{BS}=0}{=}
\frac{1}{1 + S\,R_S}
\cdot
\begin{bmatrix}
S \\
C_{GS} \\
C_{DS} \\
\frac{1}{r_{DS}}
\end{bmatrix}
$$

(3.92)

Die Steilheit $S'$ entspricht der bereits in (3.68) eingeführten reduzierten Steilheit $S_{red}$. Die Gate-Drain-Kapazität $C_{GD}$ bleibt unverändert.
<!-- page-import:0294:end -->

<!-- page-import:0295:start -->
258  3. Feldeffekttransistor

**Abb. 3.71.** Dynamisches Kleinsignalersatzschaltbild der Sourceschaltung mit Stromgegenkopplung vor der Umwandlung (oben) und nach der Umwandlung (unten)

Man kann nun die äquivalenten Werte in die Gleichungen (3.81) und (3.85)–(3.87) bzw. (3.89) für die Sourceschaltung ohne Gegenkopplung einsetzen; mit $R'_g = R_g + R_G$ und $R'_D = r'_{DS} \parallel R_D \parallel R_L$ folgt:

$$
\omega_{-3dB}(A_0) \approx \frac{1}{T_1 + T_2 |A_0|}
\tag{3.93}
$$

$$
T_1 = (C'_{GS} + C_{GD})\,R'_g
\tag{3.94}
$$

$$
T_2 = C_{GD}R'_g + \frac{C_{GD} + C'_{DS} + C_L}{S'}
\tag{3.95}
$$

$$
A_0 = -S'R'_D
\tag{3.96}
$$

Aus (3.95) folgt, dass sich bei starker Stromgegenkopplung bereits eine kleine Lastkapazität $C_L$ vergleichsweise stark auswirkt, da $T_2$ wegen $S' < S$ vergleichsweise stark zunimmt; das Verstärkungs-Bandbreite-Produkt $GBW$ nimmt entsprechend stark ab.

*Beispiel:* Für das Zahlenbeispiel zur Sourceschaltung mit Stromgegenkopplung nach Abb. 3.60a wurde $I_{D,A} = 1{,}5\,\mathrm{mA}$ gewählt. Mit $K = 4\,\mathrm{mA}/\mathrm{V}^2$ und $U_A = 50\,\mathrm{V}$ folgen aus Abb. 3.51 auf Seite 229 die Parameter $S = 3{,}46\,\mathrm{mS}$ und $r_{DS} = 33{,}3\,\mathrm{k}\Omega$. Die Parameter $R_G = 25\,\Omega$, $C_{GD} = 2\,\mathrm{pF}$, $C_{GS} = 4{,}4\,\mathrm{pF}$ und $C_{DS} = 3\,\mathrm{pF}$ werden aus dem Beispiel auf Seite 257 übernommen${}^{22}$ und $r_{DS}$ wird vernachlässigt. Die Umwandlung nach (3.92) liefert mit $R_S = 200\,\Omega$ die äquivalenten Werte $S' = 2{,}04\,\mathrm{mS}$, $C'_{GS} = 2{,}6\,\mathrm{pF}$, $C'_{DS} = 1{,}77\,\mathrm{pF}$ und $r'_{DS} = 56{,}3\,\mathrm{k}\Omega$. Mit $R_g = R_D = 1\,\mathrm{k}\Omega$ und $R_L \to \infty$ erhält man $R'_D = R_D \parallel r_{DS} = 983\,\Omega$ und $R'_g = R_g + R_G = 1025\,\Omega$ und damit aus (3.96) $A_0 \approx -2$, aus (3.94)

${}^{22}$ Streng genommen müsste man diese Parameter mit Hilfe von Abb. 3.51 aus $C_{rss}$, $f_T$ und $f_{Y21s}$ berechnen. Da man jedoch die Abhängigkeit dieser Größen vom Arbeitspunkt im allgemeinen nicht kennt, macht man sich die Tatsache zu Nutze, dass die Kapazitäten und der Gate-Bahnwiderstand im wesentlichen geometrisch skaliert werden, d.h. nur von den geometrischen Größen des Fets und nicht vom Arbeitspunkt abhängen.
<!-- page-import:0295:end -->

<!-- page-import:0296:start -->
3.4 Grundschaltungen 259

**Abb. 3.72.** Kleinsignalersatzschaltbild der Sourceschaltung mit Spannungsgegenkopplung

$T_1 \approx 4{,}7\,\mathrm{ns}$, aus (3.95) $T_2 \approx 4{,}9\,\mathrm{ns}$ $(C_L = 0)$, aus (3.85) $f_{-3dB} \approx 11\,\mathrm{MHz}$ und aus (3.88) $GBW \approx 32{,}5\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L = 1\,\mathrm{nF}$ folgt aus (3.95) $T_2 \approx 494\,\mathrm{ns}$, aus (3.85) $f_{-3dB} \approx 160\,\mathrm{kHz}$ und aus (3.88) $GBW \approx 322\,\mathrm{kHz}$.

#### 3.4.1.8.4 Sourceschaltung mit Spannungsgegenkopplung

Abbildung 3.72 zeigt das Kleinsignalersatzschaltbild; dabei wird der Gatewiderstand $R_G$ des Fets vernachlässigt. Man kann die Ergebnisse für die Emitterschaltung mit Spannungsgegenkopplung auf die Sourceschaltung mit Spannungsgegenkopplung übertragen, wenn man berücksichtigt, dass die Kapazität $C_{DS}$ wie eine Lastkapazität wirkt; mit $R_1' = R_1 + R_g$ und $R_D' = r_{DS} \parallel R_D \parallel R_L$ folgt aus (2.115)

$$
A_0 \approx - \frac{R_2}{R_1' + \dfrac{R_1' + R_2}{S R_D'}}
\qquad
\overset{S R_D' \gg 1 + R_2/R_1'}{\approx}
\qquad
- \frac{R_2}{R_1'}
$$

(3.97)

und aus (2.118)–(2.120):

$$
\omega_{-3dB}(A_0) \approx \frac{1}{T_1 + T_2 |A_0|}
$$

(3.98)

$$
T_1 = \frac{C_{GS} + C_{DS} + C_L}{S}
$$

(3.99)

$$
T_2 = \left(\frac{C_{GS}}{S R_D'} + C_{GD}\right) R_1' + \frac{C_{DS} + C_L}{S}
$$

(3.100)

Bei starker Spannungsgegenkopplung können konjugiert komplexe Pole auftreten; in diesem Fall kann die Grenzfrequenz durch (3.98)–(3.100) nur sehr grob abgeschätzt werden.

Die Sourceschaltung mit Spannungsgegenkopplung kann ebenfalls näherungsweise durch das Ersatzschaltbild nach Abb. 3.70 beschrieben werden; dabei erhält man in Analogie zur Emitterschaltung mit Spannungsgegenkopplung unter Berücksichtigung der zusätzlich am Ausgang auftretenden Kapazität $C_{DS}$:

$$
C_e = 0
$$

$$
C_a \approx \left(C_{GS}\left(\frac{1}{R_2} + \frac{1}{R_D'}\right) + C_{GD} S\right) (R_1' \parallel R_2) + C_{DS}
$$

Die Eingangsimpedanz ist demnach rein ohmsch. $A$, $r_e$ und $r_a$ sind durch (3.72)–(3.74) gegeben.

*Beispiel:* Für das Zahlenbeispiel zur Sourceschaltung mit Spannungsgegenkopplung nach Abb. 3.64a wurde $I_{D,A} = 2{,}5\,\mathrm{mA}$ gewählt; mit $K = 4\,\mathrm{mA}/\mathrm{V}^2$ und $U_A = 50\,\mathrm{V}$ folgt
<!-- page-import:0296:end -->

<!-- page-import:0297:start -->
260  3. Feldeffekttransistor

**Abb. 3.73.** Kleinsignalersatzschaltbild des Strom-Spannungs-Wandlers

aus Abb. 3.51 auf Seite 229 $S = 4{,}47\,\mathrm{mS}$ und $r_{DS} = 20\,\mathrm{k}\Omega$. Die Parameter $R_G = 25\,\Omega$, $C_{GD} = 2\,\mathrm{pF}$, $C_{GS} = 4{,}4\,\mathrm{pF}$ und $C_{DS} = 3\,\mathrm{pF}$ werden aus dem Beispiel auf Seite 257 übernommen. Mit $R_D = R_1 = 1\,\mathrm{k}\Omega$, $R_2 = 6{,}3\,\mathrm{k}\Omega$, $R_L \to \infty$, $r_{DS} \gg R_D$ und $R_g = 0$ erhält man $R_D' \approx R_D = 1\,\mathrm{k}\Omega$ und $R_I' = R_1 = 1\,\mathrm{k}\Omega$; damit folgt aus (3.97) $A_0 \approx -2{,}6$, aus (3.99) $T_1 \approx 1{,}66\,\mathrm{ns}$, aus (3.100) $T_2 \approx 3{,}66\,\mathrm{ns}$, aus (3.98) $f_{-3dB} \approx 14\,\mathrm{MHz}$ und aus (3.88) $GBW \approx 43\,\mathrm{MHz}$. Mit einer Lastkapazität $C_L = 1\,\mathrm{nF}$ folgt aus (3.99) $T_1 \approx 225\,\mathrm{ns}$, aus (3.100) $T_2 \approx 227\,\mathrm{ns}$, aus (3.98) $f_{-3dB} \approx 195\,\mathrm{kHz}$ und aus (3.88) $GBW \approx 700\,\mathrm{kHz}$.

## 3.4.1.8.5 Strom-Spannungs-Wandler

Abbildung 3.73 zeigt das Kleinsignalersatzschaltbild für den Strom-Spannungs-Wandler aus Abb. 3.66a; mit $R_D' = R_D \parallel R_L \parallel r_{DS}$ und nach Vernachlässigung des $s^2$-Terms im Nenner erhält man

$$
Z_T(s)=\frac{u_a(s)}{i_e(s)} \approx -\frac{SR_D'R_2}{1+SR_D'} \cdot \frac{1}{1+s\left(\frac{C_{GS}(R_2+R_D')+C_{DS}R_D'}{1+SR_D'}+C_{GD}R_2\right)}
$$

und damit:

$$
\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{\frac{C_{GS}(R_2+R_D')+C_{DS}R_D'}{1+SR_D'}+C_{GD}R_2}
$$

Mit $r_{DS} \gg R_D \gg 1/S$ und $R_L \to \infty$ gilt:

$$
\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{\frac{C_{GS}}{S}\left(1+\frac{R_2}{R_D}\right)+\frac{C_{DS}}{S}+C_{GD}R_2}
\qquad (3.101)
$$

Eine Lastkapazität $C_L$ wird berücksichtigt, indem man $C_L + C_{DS}$ anstelle von $C_{DS}$ einsetzt.

*Beispiel:* Für den Strom-Spannungs-Wandler nach Abb. 3.66a wurde $I_{D,A} = 2{,}44\,\mathrm{mA}$ gewählt; mit $K = 4\,\mathrm{mA/V^2}$ und $U_A = 50\,\mathrm{V}$ folgt daraus $S = 4{,}42\,\mathrm{mS}$ und $r_{DS} = 20{,}5\,\mathrm{k}\Omega$. Die Parameter $R_G = 25\,\Omega$, $C_{GD} = 2\,\mathrm{pF}$, $C_{GS} = 4{,}4\,\mathrm{pF}$ und $C_{DS} = 3\,\mathrm{pF}$ werden aus dem Beispiel auf Seite 257 übernommen. Mit $R_D = 1\,\mathrm{k}\Omega$, $R_2 = 6{,}3\,\mathrm{k}\Omega$, $R_L \to \infty$ und $r_{DS} \gg R_D$ erhält man aus (3.101) $f_{-3dB} \approx 7{,}75\,\mathrm{MHz}$.

## 3.4.1.9 Zusammenfassung

Die Sourceschaltung kann ohne Gegenkopplung, mit Stromgegenkopplung oder mit Spannungsgegenkopplung betrieben werden. Abbildung 3.74 zeigt die drei Varianten und
<!-- page-import:0297:end -->

<!-- page-import:0298:start -->
## 3.4 Grundschaltungen

261

a ohne Gegenkopplung  b mit Stromgegenkopplung  c mit Spannungsgegenkopplung

**Abb. 3.74.** Varianten der Sourceschaltung

Abb. 3.75 fasst die wichtigsten Kenngrößen zusammen. Die Sourceschaltung mit Spannungsgegenkopplung wird nur selten eingesetzt, weil bei ihr der hohe Eingangswiderstand eines Fets nicht genutzt werden kann.

Die Sourceschaltung ohne Gegenkopplung und die Sourceschaltung mit Stromgegenkopplung werden in der Praxis nur eingesetzt, wenn ein hoher Eingangswiderstand oder eine niedrige Rauschzahl bei hochohmigen Quellen benötigt wird. In allen anderen Fällen ist die Emitterschaltung aufgrund der höheren Maximalverstärkung, der bei gleichem Strom wesentlich größeren Steilheit des Bipolartransistors und der geringeren Rauschzahl bei niederohmigen Quellen überlegen.

Eine wichtige Rolle spielt die Sourceschaltung in integrierten CMOS-Schaltungen, da hier keine Bipolartransistoren zur Verfügung stehen. Dies gilt vor allem für hochintegrierte *gemischt analog/digitale Schaltungen (mixed mode ICs)*, die neben umfangreichen digitalen nur wenige analoge Komponenten enthalten und deshalb mit einem vergleichsweise einfachen und billigen CMOS-Digital-Prozess hergestellt werden. Der Trend geht jedoch immer mehr zu BICMOS-Prozessen, mit denen Mosfets *und* Bipolartransistoren hergestellt werden können.

|  | ohne Gegenkopplung Abb. 3.74a | mit Stromgegenkopplung Abb. 3.74b | mit Spannungsgegenkopplung Abb. 3.74c |
|---|---|---|---|
| $A$ | $-SR_D$ | $-\dfrac{SR_D}{1+SR_S}$ | $-\dfrac{R_2}{R_1+\dfrac{R_1+R_2}{SR_D}}$ |
| $r_e$ | $\infty$ | $\infty$ | $R_1$ |
| $r_a$ | $R_D$ | $R_D$ | $R_D \parallel \dfrac{1}{S}\left(1+\dfrac{R_2}{R_1}\right)$ |

$A$ : Kleinsignal-Spannungsverstärkung im Leerlauf  
$r_e$ : Kleinsignal-Eingangswiderstand  
$r_a$ : Kleinsignal-Ausgangswiderstand

**Abb. 3.75.** Kenngrößen der Sourceschaltung
<!-- page-import:0298:end -->

<!-- page-import:0299:start -->
262  3. Feldeffekttransistor

a Schaltung  
b Ersatzschaltbild

**Abb. 3.76. Drainschaltung**

## 3.4.2 Drainschaltung

Abbildung 3.76a zeigt die Drainschaltung bestehend aus dem Mosfet, dem Sourcewiderstand $R_S$, der Versorgungsspannungsquelle $U_b$ und der Signalspannungsquelle $U_g$ mit dem Innenwiderstand $R_g$. Die Übertragungskennlinie und das Kleinsignalverhalten hängen von der Beschaltung des Bulk-Anschlusses ab. Er ist bei Einzel-Mosfets mit der Source und bei integrierten Mosfets mit der negativsten Versorgungsspannung, hier Masse, verbunden. Für die folgende Untersuchung wird $U_b = 5\ \mathrm{V}$ und $R_S = R_g = 1\ \mathrm{k}\Omega$, für den Einzel-Mosfet $K = 4\ \mathrm{mA}/\mathrm{V}^2$ und $U_{th} = 1\ \mathrm{V}$ und für den integrierten Mosfet $K = 4\ \mathrm{mA}/\mathrm{V}^2$, $U_{th,0} = 1\ \mathrm{V}$, $\gamma = 0{,}5\ \sqrt{\mathrm{V}}$ und $U_{inv} = 0{,}6\ \mathrm{V}$ angenommen.

### 3.4.2.1 Übertragungskennlinie der Drainschaltung

Misst man die Ausgangsspannung $U_a$ als Funktion der Signalspannung $U_g$, erhält man die in Abb. 3.77 gezeigten Übertragungskennlinien. Für $U_g < U_{th} = 1\ \mathrm{V}$ fließt kein Drainstrom und man erhält $U_a = 0$. Für $U_g \geq 1\ \mathrm{V}$ fließt ein mit $U_g$ zunehmender Drainstrom $I_D$, und die Ausgangsspannung folgt der Eingangsspannung im Abstand $U_{GS}$; deshalb wird die Drainschaltung auch als Sourcefolger bezeichnet. Der Fet arbeitet dabei immer im Abschnürbereich, solange die Signalspannung unterhalb der Versorgungsspannung bleibt oder diese um maximal $U_{th}$ übersteigt.

Abbildung 3.76b zeigt das Ersatzschaltbild der Drainschaltung; für $U_g \geq U_{th}$ und $I_a = 0$ gilt:

$$
U_a = I_D R_S
$$

(3.102)

$$
U_e = U_a + U_{GS} = U_a + \sqrt{\frac{2I_D}{K}} + U_{th}
$$

(3.103)

Dabei wird in (3.103) die nach $U_{GS}$ aufgelöste Gleichung (3.3) für den Strom im Abschnürbereich verwendet und der Early-Effekt vernachlässigt. Durch Einsetzen von (3.102) in (3.103) erhält man:

$$
U_e = U_a + \sqrt{\frac{2U_a}{K\,R_S}} + U_{th}
$$

(3.104)
<!-- page-import:0299:end -->

<!-- page-import:0300:start -->
3.4 Grundschaltungen 263

**Abb. 3.77.** Kennlinie der Drainschaltung bei einem Einzel-Mosfet $(U_{BS} = 0)$ und einem integrierten Mosfet $(U_B = 0)$

Diese Gleichung gilt für den Einzel- *und* den integrierten Mosfet, allerdings hängt bei letzterem die Schwellenspannung $U_{th}$ aufgrund des Substrat-Effekts von der Bulk-Source-Spannung $U_{BS}$ ab; mit $U_B = 0$ erhält man $U_{BS} = -U_a$ und damit unter Verwendung von (3.18):

$$
U_e = U_a + \sqrt{\frac{2U_a}{K\,R_S}} + U_{th,0} + \gamma\left(\sqrt{U_{inv} + U_a} - \sqrt{U_{inv}}\right)
$$

(3.105)

Wegen der näherungsweise linearen Kennlinie kann der Arbeitspunkt in einem weiten Bereich gewählt werden; für den in Abb. 3.77 auf der Kennlinie für den Einzel-Mosfet eingezeichneten Arbeitspunkt erhält man:

$$
U_a = 2\,\mathrm{V} \;\Rightarrow\; I_D = \frac{U_a}{R_S} = 2\,\mathrm{mA} \;\Rightarrow\; U_{GS} = \sqrt{\frac{2I_D}{K}} + U_{th} = 2\,\mathrm{V}
$$

$$
\Rightarrow\; U_e = U_a + U_{GS} = 4\,\mathrm{V}
$$

Für den integrierten Mosfet erhält man mit $U_a = 2\,\mathrm{V}$ aus (3.105) $U_e = 4{,}42\,\mathrm{V}$.

## 3.4.2.2 Kleinsignalverhalten der Drainschaltung

Das Verhalten bei Aussteuerung um einen Arbeitspunkt A wird als *Kleinsignalverhalten* bezeichnet. Der Arbeitspunkt ist durch die Arbeitpunktgrößen $U_{e,A}$, $U_{a,A}$ und $I_{D,A}$ gegeben; als Beispiel wird der oben ermittelte Arbeitspunkt mit $U_{e,A} = 4\,\mathrm{V}$, $U_{a,A} = 2\,\mathrm{V}$ und $I_{D,A} = 2\,\mathrm{mA}$ verwendet.

Abbildung 3.78 zeigt im oberen Teil das Kleinsignalersatzschaltbild der Drainschaltung in seiner unmittelbaren Form. Daraus erhält man durch Umzeichnen und Zusammenfassen parallel liegender Elemente das in Abb. 3.78 unten gezeigte Kleinsignalersatzschaltbild mit:
<!-- page-import:0300:end -->

<!-- page-import:0301:start -->
264 3. Feldeffekttransistor

**Abb. 3.78.** Kleinsignalersatzschaltbild der Drainschaltung

$$
R_S'=
\begin{cases}
R_S \parallel r_{DS} & \text{beim Einzel-Mosfet } (u_{BS}=0)\\[4pt]
R_S \parallel r_{DS} \parallel \dfrac{1}{S_B} & \text{beim integrierten Mosfet } (u_{BS}=-u_a)
\end{cases}
$$

Beim integrierten Mosfet wirkt die Stromquelle mit der Substrat-Steilheit $S_B$ wie ein Widerstand, weil die Steuerspannung $u_{BS}$ gleich der an der Quelle anliegenden Spannung ist. Der Übergang vom integrierten zum Einzel-Mosfet erfolgt mit der Einschränkung $u_{BS}=0$; in den Gleichungen wird dann $S_B=0$ gesetzt$^{23}$.

#### 3.4.2.2.1 Kleinsignalparameter

Aus der Knotengleichung $S\,u_{GS}=u_a/R_S'$ erhält man mit $u_{GS}=u_e-u_a$ die Verstärkung:

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
=\frac{S R_S'}{1+S R_S'}
\overset{r_{DS}\gg 1/S}{\approx}
\frac{S R_S}{1+(S+S_B)R_S}
\overset{u_{BS}=0}{=}
\frac{S R_S}{1+S R_S}
$$

Mit $K=4\ \mathrm{mA/V^2}$, $\gamma=0{,}5\ \sqrt{\mathrm{V}}$, $U_{inv}=0{,}6\ \mathrm{V}$ und $I_{D,A}=2\ \mathrm{mA}$ folgt aus Abb. 3.51 bzw. Abb. 3.52 $S=4\ \mathrm{mS}$ und $S_B=0{,}62\ \mathrm{mS}$; damit erhält man mit $R_S=1\ \mathrm{k\Omega}$ bei Verwendung eines Einzel-Mosfets $A\approx 0{,}8$ und bei Verwendung eines integrierten Mosfets $A\approx 0{,}71$. Aufgrund der relativ geringen Steilheit ist die Verstärkung deutlich kleiner als 1.

Für den Eingangswiderstand gilt $r_e=\infty$ und für den Ausgangswiderstand erhält man:

$$
r_a=\frac{u_a}{i_a}
=\frac{1}{S}\parallel R_S'
\overset{r_{DS}\gg 1/S}{\approx}
\frac{1}{S}\parallel \frac{1}{S_B}\parallel R_S
\overset{u_{BS}=0}{=}
\frac{1}{S}\parallel R_S
$$

Für das Zahlenbeispiel erhält man $r_a\approx 200\ \Omega$ bei Verwendung eines Einzel-Mosfets und $r_a\approx 178\ \Omega$ bei Verwendung eines integrierten Mosfets.

Mit $r_{DS}\gg 1/S$ und ohne Lastwiderstand $R_L$ erhält man für die Drainschaltung:

---

$^{23}$ $S_B=0$ wäre als einschränkende Bedingung nicht korrekt, da auch ein Einzel-Mosfet eine Substrat-Steilheit ungleich Null besitzt, die sich aber wegen $u_{BS}=0$ nicht auswirkt; deshalb ist $u_{BS}=0$ die korrekte Einschränkung und $S_B=0$ die Auswirkung in den Gleichungen.
<!-- page-import:0301:end -->

<!-- page-import:0302:start -->
3.4 Grundschaltungen

265

*Drainschaltung*

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}\approx \frac{SR_S}{1+(S+S_B)R_S}\overset{u_{BS}=0}{=} \frac{SR_S}{1+SR_S}
$$

(3.106)

$$
r_e=\left.\frac{u_e}{i_e}\right|_{i_a=0}=\infty
$$

(3.107)

$$
r_a=\frac{u_a}{i_a}\approx \frac{1}{S}\parallel \frac{1}{S_B}\parallel R_S \overset{u_{BS}=0}{=} \frac{1}{S}\parallel R_S
$$

(3.108)

Um den Einfluss eines Lastwiderstands $R_L$ zu berücksichtigen, muss man in (3.106) anstelle von $R_S$ die Parallelschaltung von $R_S$ und $R_L$ einsetzen.

#### 3.4.2.2 Maximale Verstärkung in integrierten Schaltungen

Die *maximale Verstärkung* $A_{max}$ wird erreicht, wenn man anstelle des Sourcewiderstands $R_S$ eine ideale Stromquelle einsetzt. In integrierten Schaltungen gilt:

$$
A_{max}=\lim_{R_S\to\infty} A \approx \frac{S}{S+S_B}\overset{\substack{r_{DS}\gg 1/S\\U_{BS}^{(3.42)}=-U_a}}{=} \frac{1}{1+\frac{\gamma}{2\sqrt{U_{inv}+U_a}}}
$$

Für das Zahlenbeispiel mit $\gamma=0{,}5\ \sqrt{\mathrm{V}}$, $U_{inv}=0{,}6\,\mathrm{V}$ und $U_{a,A}=2\,\mathrm{V}$ erhält man $A_{max}=0{,}87$. Bei Einzel-Fets ist $A_{max}=1$.

#### 3.4.2.3 Nichtlinearität

Der Klirrfaktor der Drainschaltung kann durch eine Reihenentwicklung der Kennlinie im Arbeitspunkt näherungsweise bestimmt werden. Da die für die Kennlinie maßgebende Gleichung (3.103) auch für die Sourceschaltung mit Stromgegenkopplung gilt, kann man (3.69) übernehmen:

$$
k\approx \frac{\hat{u}_e}{8}\frac{\dfrac{S}{I_{D,A}}+\dfrac{SS_B R_S^2}{U_{inv}+I_{D,A}R_S}}{(1+(S+S_B)R_S)^2}\overset{u_{BS}=0}{=} \frac{\hat{u}_e}{4\,(U_{GS,A}-U_{th})\,(1+SR_S)^2}
$$

(3.109)

Für das Zahlenbeispiel erhält man $\hat{u}_e<k\cdot 100\,\mathrm{V}$ bei Verwendung eines Einzel-Mosfets und $\hat{u}_e<k\cdot 85{,}5\,\mathrm{V}$ bei Verwendung eines integrierten Mosfets.

#### 3.4.2.4 Temperaturabhängigkeit

Es gilt:

$$
\left.\frac{dU_a}{dT}\right|_A
=
\left.\frac{dU_a}{dU_{GS}}\right|_A
\left.\frac{dU_{GS}}{dT}\right|_A
\overset{dU_{GS}=dU_e}{=}
A\left.\frac{dU_{GS}}{dT}\right|_A
\overset{dU_{GS}=dI_D/S}{=}
\frac{A}{S}\left.\frac{dI_D}{dT}\right|_A
$$

Daraus folgt durch Einsetzen von $A$ nach (3.106) und $dI_D/dT$ nach (3.14) auf Seite 197 unter Berücksichtigung der typischen Werte:

$$
\left.\frac{dU_a}{dT}\right|_A
\approx
\frac{I_{D,A}R_S}{1+(S+S_B)R_S}\cdot 10^{-3}\,\mathrm{K}^{-1}
\left(\frac{4\ldots 7\,\mathrm{V}}{U_{GS,A}-U_{th}}-5\right)
$$
<!-- page-import:0302:end -->

<!-- page-import:0303:start -->
266  3. Feldeffekttransistor

a mit $U_{GS,A} = 0$

b mit $U_{GS,A} < 0$

**Abb. 3.79.** Arbeitspunkteinstellung mit $U_{e,A} = U_{a,A}$

Bei Einzel-Mosfets wird $s_B = 0$ gesetzt. Für das Zahlenbeispiel erhält man bei Verwendung eines Einzel-Mosfets $(dU_a/dT)_A \approx -0{,}4 \dots +0{,}8\,\mathrm{mV/K}$; bei Verwendung eines integrierten Mosfets ist die Temperaturdrift etwas geringer.

#### 3.4.2.5 Arbeitspunkteinstellung

Die Arbeitspunkteinstellung erfolgt wie bei der Kollektorschaltung; Abb. 2.99 auf Seite 145 zeigt einige Beispiele. Während die Ausgangsspannung $U_{a,A}$ bei selbstsperrenden n-Kanal-Mosfets wegen $U_{GS,A} > U_{th} > 0$ und $U_{a,A} = U_{e,A} - U_{GS,A}$ immer kleiner als die Eingangsspannung $U_{e,A}$ ist, kann sie bei selbstleitenden n-Kanal-Mosfets auch größer sein. Bei n-Kanal-Sperrschicht-Fets gilt wegen $U_{GS,A} \leq 0$ immer $U_{e,A} \leq U_{a,A}$.

Eine Sonderstellung nehmen die in Abb. 3.79 gezeigten Varianten mit selbstleitenden n-Kanal-Mosfets und einer Stromquelle anstelle des Sourcewiderstands $R_S$ ein; dabei gilt unabhängig von der Schwellenspannung $U_{e,A} = U_{a,A}$, solange beide Mosfets denselben Steilheitskoeffizienten und dieselbe Schwellenspannung besitzen. Diese Eigenschaft kann man in diskret aufgebauten Schaltungen bei Verwendung von gepaarten Mosfets nutzen; dabei sind die Schwellenspannungen zwar toleranzbehaftet, aber näherungsweise gleich. In integrierten Schaltungen ist dieses Prinzip nicht anwendbar, weil die Schwellenspannungen aufgrund des Substrat-Effekts von den Source-Spannungen der Mosfets abhängen.

Die Schaltung nach Abb. 3.79a eignet sich nur bedingt für Sperrschicht-Fets, weil im Arbeitspunkt $U_{GS,A} = 0$ gilt und deshalb die Gate-Kanal-Diode des Sperrschicht-Fets bei einem sprunghaften Anstieg der Eingangsspannung leitend werden kann; hier muss man die Schaltung nach Abb. 3.79b verwenden, bei der $U_{GS,A} = -I_{D,A}R$ gilt. Der Widerstand $R$ hat eine entsprechende Zunahme des Ausgangswiderstands zu Folge und sollte deshalb nicht zu groß gewählt werden.

#### 3.4.2.6 Frequenzgang und Grenzfrequenz

Die Kleinsignalverstärkung $A$ und die Betriebsverstärkung $A_B$ der Drainschaltung nehmen bei höheren Frequenzen aufgrund der Kapazitäten des Fets ab. Um eine Aussage über den Frequenzgang und die Grenzfrequenz zu bekommen, muss man bei der Berechnung das dynamische Kleinsignalmodell des Fets verwenden; Abb. 3.80 zeigt das resultierende dynamische Kleinsignalersatzschaltbild der Drainschaltung. Für die Betriebsverstärkung
<!-- page-import:0303:end -->

<!-- page-import:0304:start -->
3.4 Grundschaltungen 267

**Abb. 3.80.** Dynamisches Kleinsignalersatzschaltbild der Drainschaltung

$A_B(s)=u_a(s)/u_g(s)$ erhält man mit $R'_g = R_g + R_G$ und $R'_L = R_L \parallel R_S \parallel r_{DS} \parallel 1/S_B$:

$$
A_B(s) = \frac{1 + s\,\dfrac{C_{GS}}{S}}{1 + \dfrac{1}{S R'_L} + s\,c'_1 + s^2 c'_2}
$$

$$
c'_1 = \frac{C_{GS}+C_{DS}}{S} + (C_{GS}+C_{GD})\,\frac{R'_g}{S R'_L} + C_{GD}R'_g
$$

$$
c'_2 = (C_{GS}C_{GD} + C_{GS}C_{DS} + C_{GD}C_{DS})\,\frac{R'_g}{S}
$$

Die Nullstelle kann vernachlässigt werden, weil die Grenzfrequenz

$$
f_N = \frac{S}{2\pi\,C_{GS}} > f_T
$$

oberhalb der Transitfrequenz $f_T$ des Fets liegt, wie ein Vergleich mit (3.49) zeigt. Mit der Niederfrequenzverstärkung

$$
A_0 = A_B(0) = \frac{S R'_L}{1 + S R'_L}
\qquad\qquad (3.110)
$$

gilt:

$$
A_B(s) \approx \frac{A_0}{1 + s\,c_1 + s^2 c_2}
\qquad\qquad (3.111)
$$

$$
c_1 = \frac{(C_{GS}+C_{DS})\,R'_L + C_{GS}R'_g}{1 + S R'_L} + C_{GD}R'_g
\qquad\qquad (3.112)
$$

$$
c_2 = \frac{(C_{GS}C_{GD} + C_{GS}C_{DS} + C_{GD}C_{DS})\,R'_L R'_g}{1 + S R'_L}
\qquad\qquad (3.113)
$$

Damit kann man die Güte der Pole angeben:

$$
Q = \frac{\sqrt{c_2}}{c_1}
\qquad\qquad (3.114)
$$

Für $Q \le 0{,}5$ sind die Pole reell, für $Q > 0{,}5$ konjugiert komplex.

#### 3.4.2.6.1 Grenzfrequenz

Bei reellen Polen kann man den Frequenzgang näherungsweise durch einen Tiefpass 1. Grades beschreiben, indem man den $s^2$-Term im Nenner streicht:
<!-- page-import:0304:end -->

<!-- page-import:0305:start -->
268 3. Feldeffekttransistor

![Abb. 3.81](image)

**Abb. 3.81.** Kleinsignalersatzschaltbild zur Berechnung des Bereichs konjugiert komplexer Pole: vollständig (oben) und nach Vereinfachung (unten)

$$
A_B(s)\;\approx\;\frac{A_0}{1+s\,c_1}\qquad \overset{sR'_L\gg1}{\approx}\qquad
\frac{A_0}{1+s\left(\frac{C_{GS}+C_{DS}}{S}+\left(\frac{C_{GS}}{SR'_L}+C_{GD}\right)R'_g\right)}
$$

Damit erhält man eine Näherung für die -3dB-Grenzfrequenz $f_{-3dB}$, bei der der Betrag der Verstärkung um 3 dB abgenommen hat:

$$
\omega_{-3dB} \;=\; 2\pi\,f_{-3dB}\;\approx\;\frac{1}{c_1}\qquad \overset{sR'_L\gg1}{\approx}\qquad
\frac{1}{\frac{C_{GS}+C_{DS}}{S}+\left(\frac{C_{GS}}{SR'_L}+C_{GD}\right)R'_g}
\tag{3.115}
$$

Bei konjugiert komplexen Polen, d.h. $Q>0{,}5$, kann man die Abschätzung

$$
\omega_{-3dB} \;=\; 2\pi\,f_{-3dB}\;\approx\;\frac{1}{\sqrt{c_2}}
\tag{3.116}
$$

verwenden. Sie liefert für $Q = 1/\sqrt{2}$ den exakten, für $0{,}5 < Q < 1/\sqrt{2}$ zu große und für $Q > 1/\sqrt{2}$ zu kleine Werte.

Eine eventuell vorliegende Lastkapazität $C_L$ liegt parallel zu $C_{DS}$ und wird deshalb durch Einsetzen von $C_L + C_{DS}$ anstelle von $C_{DS}$ berücksichtigt.

## 3.4.2.6.2 Bereich konjugiert komplexer Pole

Für die praktische Anwendung der Drainschaltung möchte man wissen, für welche Lastkapazitäten konjugiert komplexe Pole auftreten und durch welche schaltungstechnischen Maßnahmen dies verhindert werden kann. Betrachtet wird dazu das Kleinsignalersatzschaltbild nach Abb. 3.81, das aus Abb. 3.78 durch Ergänzen der Kapazität $C_g$ des Signalgenerators und der Lastkapazität $C_L$ hervorgeht. Die RC-Glieder $R_g$-$C_g$ und $R_G$-$C_{GD}$ kann man wegen $R_g \gg R_G$ zu einem Glied mit $R'_g = R_g + R_G$ und $C'_g = C_g + C_{GD}$ zusammenfassen; ausgangsseitig gilt $C'_L = C_L + C_{DS}$. Führt man die Zeitkonstanten

$$
T_g = C'_g\,R'_g\;,\qquad T_L = C'_L\,R'_L\;,\qquad T_{GS} = \frac{C_{GS}}{S}\;\approx\;\frac{1}{\omega_T}
\tag{3.117}
$$

und die Widerstandsverhältnisse
<!-- page-import:0305:end -->

<!-- page-import:0306:start -->
3.4 Grundschaltungen

269

Abb. 3.82. Bereich konjugiert komplexer Pole für $k_S = 0{,}2$

$$
k_g \;=\; \frac{R_g'}{R_L'} \;,\quad k_S \;=\; \frac{1}{S\,R_L'}
\qquad\qquad (3.118)
$$

ein, folgt aus (3.112) und (3.113):

$$
c_1 \;=\; \frac{T_{GS}(1+k_g)+T_Lk_S}{1+k_S} + T_g
\qquad\qquad (3.119)
$$

$$
c_2 \;=\; \frac{T_gT_{GS}+T_gT_Lk_S+T_LT_{GS}k_g}{1+k_S}
$$

Über die Bedingung

$$
Q \;=\; \frac{\sqrt{c_2}}{c_1} \;>\; 0{,}5
$$

kann man den Bereich konjugiert komplexer Pole bestimmen. Dieser Bereich ist in Abb. 3.82 als Funktion der normierten Signalquellen-Zeitkonstante $T_g/T_{GS}$ und der normierten Last-Zeitkonstante $T_L/T_{GS}$ für verschiedene Werte von $k_g$ dargestellt; dabei wird als typischer Wert $k_S = 0{,}2$ verwendet. Man erkennt, dass bei sehr kleinen und sehr großen Lastkapazitäten $C_L$ ($T_L/T_{GS}$ klein bzw. groß) und bei ausreichend großer Ausgangskapazität $C_g$ des Signalgenerators ($T_g/T_{GS}$ groß) keine konjugiert komplexen Pole auftreten. Der Bereich konjugiert komplexer Pole hängt außerdem stark von $k_g$ ab.

Vernachlässigt man den Einfluss der Fet-Parameter auf die Zeitkonstanten $T_g$ und $T_L$ und auf die Faktoren $k_g$ und $k_S$ und fasst zusätzlich die Widerstände $R_S$ und $R_L$ zu einem Widerstand zusammen, erhält man die Schaltung in Abb. 3.83; für die Zeitkonstanten und Widerstandsverhältnisse gilt dann:

$$
T_g \approx R_gC_g \;,\qquad
T_L \approx R_LC_L \;,\qquad
T_{GS} \approx \frac{1}{\omega_T}
$$
<!-- page-import:0306:end -->

<!-- page-import:0307:start -->
270  3. Feldeffekttransistor

![Abb. 3.83. Schaltung zur näherungsweisen Berechnung der Zeitkonstanten]( [unclear] )

$k_g \approx \dfrac{R_g}{R_L}, \quad k_S \approx \dfrac{1}{SR_L}$

Sind $R_g$, $C_g$, $R_L$ und $C_L$ vorgegeben und liegen konjugiert komplexe Pole vor, gibt es vier verschiedene Möglichkeiten, aus diesem Bereich herauszukommen:

1. Man kann $T_g$ vergrößern und damit den Bereich konjugiert komplexer Pole *nach oben* verlassen. Dazu muss man einen zusätzlichen Kondensator vom Eingang der Kollektorschaltung nach Masse oder zu einer Versorgungsspannung einfügen; dieser liegt im Kleinsignalersatzschaltbild parallel zu $C_g$ und führt zu einer Zunahme von $T_g$. Von dieser Möglichkeit kann immer Gebrauch gemacht werden; sie wird deshalb in der Praxis häufig angewendet.
2. Liegt man in der Nähe des linken Rands des Bereichs, kann man $T_{GS}$ vergrößern und damit den Bereich *nach links unten* verlassen. Dazu muss man einen *langsameren* Fet mit größerer Zeitkonstante $T_{GS}$, d.h. kleinerer Transitfrequenz $f_T$, einsetzen.
3. Liegt man in der Nähe des rechten Rands des Bereichs, kann man $T_{GS}$ verkleinern und damit den Bereich *nach rechts oben* verlassen. Dazu muss man einen *schnelleren* Fet mit kleinerer Zeitkonstante $T_{GS}$, d.h. größerer Transitfrequenz $f_T$, einsetzen.
4. Liegt man in der Nähe des rechten Rands des Bereichs, kann man $T_L$ vergrößern und damit den Bereich *nach rechts* verlassen. Dazu muss man die Lastkapazität $C_L$ durch Parallelschalten eines zusätzlichen Kondensators vergrößern.

Abbildung 3.84 deutet die vier Möglichkeiten an. Die fünfte Möglichkeit, das Verkleinern von $T_L$, wird in der Praxis nur selten angewendet, da dies bei vorgegebenen Werten für $R_L$ und $C_L$ nur durch Parallelschalten eines Widerstands erreicht werden kann, der den Ausgang zusätzlich belastet. Alle Möglichkeiten haben eine Abnahme der Grenzfrequenz zur Folge. Um diese Abnahme gering zu halten, muss man den Bereich konjugiert komplexer Pole *auf dem kürzesten Weg* verlassen.

*Beispiel:* Für das Zahlenbeispiel nach Abb. 3.76a wurde $I_{D,A} = 2\,\text{mA}$ gewählt. Mit $K = 4\,\text{mA}/\text{V}^2$, $U_A = 50\,\text{V}$, $C_{oss} = 5\,\text{pF}$, $C_{rss} = 2\,\text{pF}$, $fy_{21s} = 1\,\text{GHz}$ und $f_T = 100\,\text{MHz}$ erhält man aus Abb. 3.51 auf Seite 229 $S = 4\,\text{mS}$, $r_{DS} = 25\,\text{k}\Omega$, $R_G = 25\,\Omega$, $C_{GD} = 2\,\text{pF}$, $C_{GS} = 4{,}4\,\text{pF}$ und $C_{DS} = 3\,\text{pF}$. Mit $R_g = R_S = 1\,\text{k}\Omega$ und $R_L \to \infty$ erhält man $R'_g = R_g + R_G = 1025\,\Omega$, $R'_L = R_L || R_S || r_{DS} = 960\,\Omega$ und damit aus (3.110) $A_0 = 0{,}793 \approx 1$ und aus (3.115) die Näherung $f_{-3dB} \approx 31{,}4\,\text{MHz}$. Eine genauere Berechnung mit Hilfe von (3.112)–(3.114) liefert $c_1 = 4{,}45\,\text{ns}$, $c_2 = 5{,}69\,\text{ns}^2$ und $Q \approx 0{,}54$; es liegen demnach konjugiert komplexe Pole vor und (3.116) liefert die Näherung $f_{-3dB} \approx 67\,\text{MHz}$, die wegen $0{,}5 < Q < 1/\sqrt{2}$ als zu hoch angesehen werden muss. Mit einer Lastkapazität
<!-- page-import:0307:end -->

<!-- page-import:0308:start -->
3.4 Grundschaltungen 271

Abb. 3.84. Möglichkeiten zum Verlassen des Bereichs konjugiert komplexer Pole

$C_L = 1\,\mathrm{nF}$ erhält man aus (3.117) und (3.118) $T_g = 2{,}05\,\mathrm{ns}$, $T_L = 960\,\mathrm{ns}$, $T_{GS} = 1{,}1\,\mathrm{ns}$, $k_g = 1{,}07$ und $k_S = 0{,}26$ und damit aus (3.119) $c_1 = 202\,\mathrm{ns}$ und $c_2 = 1305\,(\mathrm{ns})^2$; aus (3.114) folgt $Q = 0{,}179$, d.h. die Pole sind reell, und aus (3.115) $f_{-3dB} \approx 788\,\mathrm{kHz}$. Den Hinweis auf reelle Pole erhält man auch ohne Berechnung von $c_1$, $c_2$ und $Q$ mit Hilfe von Abb. 3.82, da der Punkt $T_L/T_{GS} \approx 1000$, $T_g/T_{GS} \approx 2$, $k_g \approx 1$ nicht im Bereich konjugiert komplexer Pole liegt.

## 3.4.3 Gateschaltung

Abbildung 3.85 zeigt die Gateschaltung bestehend aus dem Mosfet, dem Drainwiderstand $R_D$, der Versorgungsspannungsquelle $U_b$, der Signalspannungsquelle $U_e$ ^24 und dem Gate-Vorwiderstand $R_{GV}$; letzterer hat keinen Einfluss auf die Übertragungskennlinie, wirkt sich aber auf den Frequenzgang und die Bandbreite aus. Die Übertragungskennlinie und das Kleinsignalverhalten hängen von der Beschaltung des Bulk-Anschlusses ab. Er ist bei Einzel-Mosfets mit der Source und bei integrierten Mosfets mit der negativsten Versorgungsspannung verbunden. Da die Gateschaltung nach Abb. 3.85 mit negativen Eingangsspannungen betrieben wird, muss der Bulk-Anschluss des integrierten Mosfets mit einer zusätzlichen, negativen Versorgungsspannung $U_B$ verbunden werden, die unterhalb der minimalen Eingangsspannung liegt; dadurch wird sichergestellt, dass die Bulk-Source-Diode sperrt. Für die folgende Untersuchung wird $U_b = 5\,\mathrm{V}$, $U_B = -5\,\mathrm{V}$, $R_D = R_{GV} = 1\,\mathrm{k}\Omega$, für den Einzel-Mosfet $K = 4\,\mathrm{mA}/\mathrm{V}^2$ und $U_{th} = 1\,\mathrm{V}$ und für den integrierten Mosfet $K = 4\,\mathrm{mA}/\mathrm{V}^2$, $U_{th,0} = 1\,\mathrm{V}$, $\gamma = 0{,}5\,\sqrt{\mathrm{V}}$ und $U_{inv} = 0{,}6\,\mathrm{V}$ angenommen.

### 3.4.3.1 Übertragungskennlinie der Gateschaltung

Misst man die Ausgangsspannung $U_a$ als Funktion der Signalspannung $U_e$, erhält man die in Abb. 3.86 gezeigten Übertragungskennlinien für einen Einzel-Mosfet ($U_{BS} = 0$) und für einen integrierten Mosfet ($U_B = -5\,\mathrm{V}$).

Für $-2{,}7\,\mathrm{V} < U_e < -U_{th} = -1\,\mathrm{V}$ arbeitet der Einzel-Mosfet im Abschnürbereich; hier gilt mit $U_{GS} = -U_e$ und bei Vernachlässigung des Early-Effekts:

24 Hier wird eine Spannungsquelle ohne Innenwiderstand $R_g$ zur Ansteuerung verwendet, damit die Kennlinien nicht von $R_g$ abhängen.
<!-- page-import:0308:end -->

<!-- page-import:0309:start -->
272 3. Feldeffekttransistor

a mit Einzel-Mosfet  b mit integriertem Mosfet

**Abb. 3.85.** Gateschaltung

$$
U_a = U_b - I_D R_D = U_b - \frac{K\,R_D}{2}(U_{GS} - U_{th})^2
\qquad\qquad (3.120)
$$

$$
U_e = -U_{GS} - I_G R_{GV} \overset{I_G=0}{=} -U_{GS}
\qquad\qquad (3.121)
$$

Durch Einsetzen von (3.121) in (3.120) erhält man die Übertragungskennlinie:

$$
U_a = U_b - \frac{K\,R_D}{2}(-U_e - U_{th})^2
= U_b - \frac{K\,R_D}{2}(U_e + U_{th})^2
\qquad\qquad (3.122)
$$

Für den in Abb. 3.86 beispielhaft eingezeichneten Arbeitspunkt erhält man:

$$
U_a = 2{,}5\,\mathrm{V}
\;\Rightarrow\;
I_D = \frac{U_b - U_a}{R_C} = 2{,}5\,\mathrm{mA}
$$

**Abb. 3.86.** Kennlinie der Gateschaltung bei einem Einzel-Mosfet $(U_{BS}=0)$ und einem integrierten Mosfet $(U_B=-5\,\mathrm{V})$
<!-- page-import:0309:end -->

<!-- page-import:0310:start -->
3.4 Grundschaltungen 273

**Abb. 3.87.** Schaltung und Kennlinie der Gateschaltung bei Ansteuerung mit einer Stromquelle

$$\Rightarrow\ U_{GS}=U_{th}+\sqrt{\frac{2I_D}{K}}=2{,}12\ \mathrm{V}\ \Rightarrow\ U_e=-U_{GS}=-2{,}12\ \mathrm{V}$$

Man kann zur Ansteuerung auch eine Stromquelle $I_e$ verwenden, siehe Abb. 3.87; die Schaltung arbeitet dann für $I_e<0$ als Strom-Spannungs-Wandler bzw. Transimpedanzverstärker:

$$U_a=U_b-I_D\,R_D \qquad \overset{I_D=-I_e}{=} \qquad U_b+I_e\,R_D \eqno(3.123)$$

$$U_e=-U_{GS}=-U_{th}-\sqrt{\frac{2I_D}{K}} \qquad \overset{I_D=-I_e}{=} \qquad -U_{th}-\sqrt{\frac{-2I_e}{K}} \eqno(3.124)$$

In der Praxis wird zur Stromansteuerung in den meisten Fällen eine Sourceschaltung mit offenem Drain oder ein Stromspiegel verwendet; darauf wird im Zusammenhang mit der Arbeitspunkteinstellung näher eingegangen.

### 3.4.3.2 Kleinsignalverhalten der Gateschaltung

Das Verhalten bei Aussteuerung um einen Arbeitspunkt A wird als Kleinsignalverhalten bezeichnet; als Beispiel wird der oben ermittelte Arbeitspunkt mit $U_{e,A}=-2{,}12\ \mathrm{V}$, $U_{a,A}=2{,}5\ \mathrm{V}$ und $I_{D,A}=2{,}5\ \mathrm{mA}$ verwendet.

Abbildung 3.88 zeigt das Kleinsignalersatzschaltbild der Gateschaltung. Der Übergang vom integrierten zum Einzel-Mosfet erfolgt mit der Einschränkung $u_{BS}=0$; in den Gleichungen wird dann $S_B=0$ gesetzt $^{25}$. Aus der Knotengleichung

$$\frac{u_a}{R_D}+\frac{u_a-u_e}{r_{DS}}+S\,u_{GS}+S_Bu_{BS}=0$$

folgt mit $u_e=-u_{GS}=-u_{BS}$ die Verstärkung:

$$A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
=
\left(S+S_B+\frac{1}{r_{DS}}\right)(R_D\parallel r_{DS})$$

$$\underset{r_{DS}\gg R_D,\,1/S}{\approx}(S+S_B)\,R_D \qquad \overset{u_{BS}=0}{=} \qquad S\,R_D$$

---

25 $S_B=0$ wäre als einschränkende Bedingung nicht korrekt, da auch ein Einzel-Mosfet eine Substrat-Steilleitheit ungleich Null besitzt, die sich aber wegen $u_{BS}=0$ nicht auswirkt; deshalb ist $u_{BS}=0$ die korrekte Einschränkung und $S_B=0$ die Auswirkung in den Gleichungen.
<!-- page-import:0310:end -->

<!-- page-import:0311:start -->
274  3. Feldeffekttransistor

**Abb. 3.88.**  
Kleinsignalersatzschaltbild der Gateschaltung

Mit $I_{D,A} = 2{,}5\,\mathrm{mA}$, $K = 4\,\mathrm{mA}/\mathrm{V}^2$ und $U_A = 50\,\mathrm{V}$ erhält man aus Abb. 3.51 auf Seite 229 die Werte $S = 4{,}47\,\mathrm{mS}$ und $r_{DS} = 20\,\mathrm{k}\Omega$; damit folgt bei Verwendung eines Einzel-Mosfets durch Einsetzen von $S_B = 0$ und $R_D = 1\,\mathrm{k}\Omega$ exakt $A = 4{,}3$ und in erster Näherung $A = 4{,}47$. Bei Verwendung eines integrierten Mosfets ist die Verstärkung wegen $S_B > 0$ bei sonst gleichen Daten etwas größer.

Für den Eingangswiderstand erhält man:

$$
r_e = \left.\frac{u_e}{i_e}\right|_{i_a=0}
= \frac{R_D + r_{DS}}{1 + (S + S_B)\,r_{DS}}
\mathop{\approx}^{r_{DS}\gg R_D,\,1/S}
\frac{1}{S + S_B}
\mathop{=}^{u_{BS}=0}
\frac{1}{S}
$$

Er hängt vom Lastwiderstand ab, wobei hier wegen $i_a = 0$ ($R_L \rightarrow \infty$) der Leerlaufeingangswiderstand gegeben ist. Der Eingangswiderstand für andere Werte von $R_L$ wird berechnet, indem man für $R_D$ die Parallelschaltung von $R_D$ und $R_L$ einsetzt; durch Einsetzen von $R_L = R_D = 0$ erhält man den Kurzschlusseingangswiderstand. Die Abhängigkeit von $R_L$ ist jedoch so gering, dass sie durch die Näherungen aufgehoben wird. Für den beispielhaft gewählten Arbeitspunkt erhält man für den Einzel-Mosfet exakt $r_e = 232\,\Omega$; die Näherung liefert $r_e = 224\,\Omega$.

Für den Ausgangswiderstand erhält man:

$$
r_a = \frac{u_a}{i_a}
= R_D \parallel \left(((1 + (S + S_B)\,R_g)\,r_{DS} + R_g)\right)
\mathop{\approx}^{r_{DS}\gg R_D}
R_D
$$

Er hängt vom Innenwiderstand $R_g$ des Signalgenerators ab; mit $R_g = 0$ erhält man den Kurzschlussausgangswiderstand

$$
r_{a,K} = R_D \parallel r_{DS}
$$

und mit $R_g \rightarrow \infty$ den Leerlaufausgangswiderstand:

$$
r_{a,L} = R_D
$$

In der Praxis gilt in den meisten Fällen $r_{DS} \gg R_D$ und man kann die Abhängigkeit von $R_g$ vernachlässigen. Für das Beispiel erhält man $r_{a,K} = 952\,\Omega$ und $r_{a,L} = 1\,\mathrm{k}\Omega$.
<!-- page-import:0311:end -->

<!-- page-import:0312:start -->
3.4 Grundschaltungen 275

Mit $r_{DS} \gg R_D, 1/S$ und ohne Lastwiderstand $R_L$ erhält man für die Gateschaltung:

*Gateschaltung*

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}\approx (S+S_B)\,R_D \overset{u_{BS}=0}{=} S\,R_D
$$

(3.125)

$$
r_e=\left.\frac{u_e}{i_e}\right|_{i_a=0}\approx \frac{1}{S+S_B}\overset{u_{BS}=0}{=}\frac{1}{S}
$$

(3.126)

$$
r_a=\frac{u_a}{i_a}\approx R_D
$$

(3.127)

Bei Betrieb mit einer Signalquelle mit Innenwiderstand $R_g$ und einem Lastwiderstand $R_L$ erhält man die *Betriebsverstärkung*:

$$
A_B=\frac{r_e}{r_e+R_g}\,A\,\frac{R_L}{r_a+R_L}\approx \frac{S\,(R_D\parallel R_L)}{1+(S+S_B)\,R_g}\overset{u_{BS}=0}{=}\frac{S\,(R_D\parallel R_L)}{1+S\,R_g}
$$

(3.128)

Bei Ansteuerung mit einer Stromquelle tritt der *Übertragungswiderstand* $R_T$ (*Transimpedanz*) an die Stelle der Verstärkung; man erhält für den Strom-Spannungs-Wandler in Gateschaltung:

*Strom-Spannungs-Wandler in Gateschaltung*

$$
R_T=\left.\frac{u_a}{i_e}\right|_{i_a=0}
=\left.\frac{u_a}{u_e}\right|_{i_a=0}\cdot \left.\frac{u_e}{i_e}\right|_{i_a=0}
= A\,r_e = R_D
$$

(3.129)

Ein- und Ausgangswiderstand sind durch (3.126) und (3.127) gegeben.

## 3.4.3.3 Nichtlinearität

Bei Ansteuerung mit einer Spannungsquelle gilt $\hat{u}_{GS}=\hat{u}_e$ und man kann Gl. (3.13) auf Seite 193 verwenden, die einen Zusammenhang zwischen der Amplitude $\hat{u}_{GS}$ einer sinusförmigen Kleinsignalaussteuerung und dem Klirrfaktor $k$ des Drainstroms, der bei der Gateschaltung gleich dem Klirrfaktor der Ausgangsspannung ist, herstellt. Es gilt also $\hat{u}_e < 4k\,(U_{GS,A}-U_{th})$. Bei Aussteuerung mit einer Stromquelle arbeitet die Schaltung linear, d.h. der Klirrfaktor ist Null.

## 3.4.3.4 Temperaturabhängigkeit

Die Gateschaltung hat dieselbe Temperaturdrift wie die Sourceschaltung ohne Gegenkopplung, weil bei beiden Schaltungen eine konstante Eingangsspannung zwischen Gate und Source liegt und die Ausgangsspannung durch $U_a=U_b-I_D\,R_D$ gegeben ist; man erhält:

$$
\left.\frac{dU_a}{dT}\right|_A
=
-R_D\,\left.\frac{dI_D}{dT}\right|_A
\approx
I_{D,A}\,R_D\cdot 10^{-3}\,\mathrm{K}^{-1}
\left(5-\frac{4\ldots 7\,\mathrm{V}}{U_{GS,A}-U_{th}}\right)
$$

## 3.4.3.5 Arbeitspunkteinstellung

Die Arbeitspunkteinstellung erfolgt wie bei der Basisschaltung; Abb. 3.89 zeigt die Varianten mit Spannungs- und Stromansteuerung, die den Schaltungen in Abb. 2.114 entsprechen.
<!-- page-import:0312:end -->

<!-- page-import:0313:start -->
276  3. Feldeffekttransistor

a mit Spannungsansteuerung

b mit Stromansteuerung

**Abb. 3.89.** Arbeitspunkteinstellung bei der Gateschaltung

Bei der Spannungsansteuerung nach Abb. 3.89a wird eine Drainschaltung $(T_1)$ zur Ansteuerung der Gateschaltung $(T_2)$ verwendet; dadurch erhält man einen Differenzverstärker mit unsymmetrischem Ein- und Ausgang. Bei der Stromansteuerung nach Abb. 3.89b wird eine Sourceschaltung $(T_1)$ zur Ansteuerung verwendet; diese Variante wird auch Kaskodeschaltung genannt. Dabei wirkt der Spannungsteiler aus $R_1$ und $R_2$ als Gate-Vorwiderstand mit $R_{GV} = R_1 \parallel R_2$.

#### 3.4.3.6 Frequenzgang und Grenzfrequenz

Die Kleinsignalverstärkung $A$ und die Betriebsverstärkung $A_B$ der Gateschaltung nehmen bei höheren Frequenzen aufgrund der Kapazitäten des Fets ab. Um eine Aussage über den Frequenzgang und die Grenzfrequenz zu bekommen, muss man bei der Berechnung das dynamische Kleinsignalmodell des Fets verwenden.

##### 3.4.3.6.1 Ansteuerung mit einer Spannungsquelle

Die exakte Berechnung der Betriebsverstärkung $A_B(s) = u_a(s)/u_g(s)$ ist aufwendig und führt auf umfangreiche Ausdrücke. Eine ausreichend genaue Näherung erhält man, wenn man den Widerstand $r_{DS}$ und die Kapazität $C_{DS}$ vernachlässigt; letzterer tritt ohnehin nur bei Einzel-Mosfets auf. Bei integrierten Mosfets treten als zusätzliche Parameter die Substrat-Steilheit $S_B$ und die Bulk-Kapazitäten $C_{BS}$ und $C_{BD}$ auf; sie werden hier vernachlässigt. Damit erhält man für den Einzel- und den integrierten Mosfet das vereinfachte Kleinsignalersatzschaltbild nach Abb. 3.90, das weitgehend mit dem Kleinsignalersatzschaltbild der Basisschaltung nach Abb. 2.115 übereinstimmt. Man kann deshalb die Ergebnisse der Basisschaltung auf die Gateschaltung übertragen, indem man die korrespondierenden Kleinsignalparameter in (2.152) und (2.153) einsetzt und den Grenzübergang $\beta \to \infty$ durchführt; mit $R'_{GV} = R_{GV} + R_G$ und $R'_D = R_D \parallel R_L$ erhält man die Niederfrequenzverstärkung

$$
A_0 = A_B(0) \approx \frac{S R'_D}{1 + S R_g}
$$

(3.130)

und eine Näherung für den Frequenzgang durch einen Tiefpass 1.Grades:
<!-- page-import:0313:end -->

<!-- page-import:0314:start -->
3.4 Grundschaltungen 277

**Abb. 3.90.** Vereinfachtes dynamisches Kleinsignalersatzschaltbild der Gateschaltung

$$
\underline{A_B}(s)\ \approx\ \frac{A_0}{1+s\ \frac{C_{GS}\left(R_g+R_{GV}'\right)+C_{GD}R_D'\left(1+S\left(R_g+R_{GV}'\right)\right)}{1+SR_g}}
\qquad (3.131)
$$

Damit erhält man eine Näherung für die -3dB-Grenzfrequenz $f_{-3dB}$:

$$
\omega_{-3dB}\ \approx\ \frac{1+SR_g}{C_{GS}\left(R_g+R_{GV}'\right)+C_{GD}R_D'\left(1+S\left(R_g+R_{GV}'\right)\right)}
\qquad (3.132)
$$

Aus (3.130) und (3.132) erhält man eine Darstellung mit zwei von der Niederfrequenzverstärkung $A_0$ unabhängigen Zeitkonstanten 26:

$$
\omega_{-3dB}(A_0)\ \approx\ \frac{1}{T_1+T_2A_0}
\qquad (3.133)
$$

$$
T_1 = C_{GS}\ \frac{R_g+R_{GV}'}{1+SR_g}
\qquad (3.134)
$$

$$
T_2 = C_{GD}\left(R_g+R_{GV}'+\frac{1}{S}\right)
\qquad (3.135)
$$

Die Ausführungen zum Verstärkungs-Bandbreite-Produkt $GBW$ einschließlich Gl. (3.88) auf Seite 256 gelten auch für die Gateschaltung.

Tritt parallel zum Lastwiderstand $R_L$ eine Lastkapazität $C_L$ auf, erhält man

$$
T_2 = C_{GD}\left(R_g+R_{GV}'+\frac{1}{S}\right)+C_L\left(R_g+\frac{1}{S}\right)
\qquad (3.136)
$$

Die Zeitkonstante $T_1$ hängt nicht von $C_L$ ab.

### 3.4.3.6.2 Ansteuerung mit einer Stromquelle

Bei Ansteuerung mit einer Stromquelle interessiert der Frequenzgang der *Transimpedanz* $\underline{Z_T}(s)$; ausgehend von (3.131) kann man eine Näherung durch einen Tiefpass 1.Grades angeben:

26 Es wird davon ausgegangen, dass eine Änderung von $A_0$ durch Variation von $R_D'$ erfolgt; deshalb sind die Zeitkonstanten genau dann von $A_0$ unabhängig, wenn sie nicht von $R_D'$ abhängen.
<!-- page-import:0314:end -->
